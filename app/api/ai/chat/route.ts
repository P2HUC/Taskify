import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { createAuditLog } from "@/lib/create-audit-log";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { incrementAvailableCount, hasAvailableCount } from "@/lib/org-limit";
import { checkSubscription } from "@/lib/subscription";
import { defaultImages } from "@/constants/images";

// Helper for regex-based fallback parser (English & Vietnamese)
function parseMessageLocally(message: string) {
  const text = message.toLowerCase().trim();
  let action: string | null = null;
  let payload: any = {};
  let responseMessage = "";

  if (text.includes("xóa thẻ") || text.includes("delete card") || text.includes("xóa card")) {
    const deleteMatch = message.match(/(?:xóa thẻ|delete card|xóa card)\s+["']?(.+?)["']?\s+(?:trong danh sách|in list|trong list)\s+["']?(.+?)["']?$/i);
    if (deleteMatch) {
      action = "DELETE_CARD";
      payload = {
        cardTitle: deleteMatch[1].trim(),
        listTitle: deleteMatch[2].trim(),
      };
      responseMessage = `Tôi đang thực hiện xóa thẻ "${payload.cardTitle}" trong danh sách "${payload.listTitle}"...`;
    }
  } else if (text.includes("hoàn thành") || text.includes("mark card") || text.includes("as done") || text.includes("done card") || text.includes("xong thẻ")) {
    const doneMatch = message.match(/(?:mark card|hoàn thành thẻ|hoàn thành card|đánh dấu thẻ|đánh dấu card|xong thẻ)\s+["']?(.+?)["']?(?:\s+as done|\s+là hoàn thành|\s+xong|$)/i);
    if (doneMatch) {
      action = "MARK_CARD_DONE";
      payload = {
        cardTitle: doneMatch[1].trim(),
      };
      responseMessage = `Tôi đang đánh dấu thẻ "${payload.cardTitle}" là hoàn thành bằng cách di chuyển đến danh sách "Done"...`;
    }
  } else if (text.includes("tạo thẻ") || text.includes("create card") || text.includes("thêm thẻ")) {
    const cardMatch = message.match(/(?:tạo thẻ|create card|thêm thẻ|tạo card)\s+["']?(.+?)["']?\s+(?:trong danh sách|in list|trong list|vào danh sách|vào list)\s+["']?(.+?)["']?$/i);
    if (cardMatch) {
      action = "CREATE_CARD";
      payload = {
        cardTitle: cardMatch[1].trim(),
        listTitle: cardMatch[2].trim(),
      };
      responseMessage = `Tôi đang tạo thẻ "${payload.cardTitle}" trong danh sách "${payload.listTitle}"...`;
    }
  } else if (text.includes("tạo danh sách") || text.includes("create list") || text.includes("thêm danh sách")) {
    const listMatch = message.match(/(?:tạo danh sách|create list|thêm danh sách|tạo list)\s+["']?(.+?)["']?$/i);
    if (listMatch) {
      action = "CREATE_LIST";
      payload = {
        listTitle: listMatch[1].trim(),
      };
      responseMessage = `Tôi đang tạo danh sách mới tên là "${payload.listTitle}"...`;
    }
  } else if (text.includes("tạo bảng") || text.includes("create board") || text.includes("thêm bảng")) {
    const boardMatch = message.match(/(?:tạo bảng|create board|thêm bảng)\s+["']?(.+?)["']?$/i);
    if (boardMatch) {
      action = "CREATE_BOARD";
      payload = {
        boardTitle: boardMatch[1].trim(),
      };
      responseMessage = `Tôi đang tạo bảng mới tên là "${payload.boardTitle}"...`;
    }
  }

  if (!action) {
    responseMessage = "Chào bạn! Tôi là trợ lý ảo hỗ trợ quản lý công việc Z-UP. Tôi có thể giúp bạn trả lời câu hỏi và trực tiếp điều chỉnh bảng công việc thông qua câu nói tự nhiên. Hãy thử nói: \n- *'tạo danh sách Backlog'*\n- *'tạo thẻ Viết báo cáo trong danh sách Backlog'*\n- *'hoàn thành thẻ Viết báo cáo'*\n- *'tạo bảng Kế hoạch thuyết trình'*";
  }

  return { action, payload, message: responseMessage };
}

export async function POST(req: Request) {
  try {
    const { userId, orgId } = auth();
    const { message, boardId, history } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // 1. Fetch board data context if a board is open
    let boardData = null;
    if (boardId) {
      boardData = await db.board.findUnique({
        where: { id: boardId },
        include: {
          lists: {
            orderBy: { order: "asc" },
            include: {
              cards: {
                orderBy: { order: "asc" }
              }
            }
          }
        }
      });
    }

    // 2. Format board context as clean text
    let boardContext = "";
    if (boardData) {
      boardContext = `Current Board Name: "${boardData.title}"\n`;
      if (boardData.lists.length === 0) {
        boardContext += "This board has no lists yet.";
      } else {
        boardContext += "Lists and Cards on this board:\n";
        boardData.lists.forEach((list: any) => {
          boardContext += `- List: "${list.title}"\n`;
          if (list.cards.length === 0) {
            boardContext += "  (No cards in this list)\n";
          } else {
            list.cards.forEach((card: any) => {
              boardContext += `  * Card: "${card.title}"\n`;
            });
          }
        });
      }
    } else {
      boardContext = "No active board is currently open.";
    }

    let aiResult: any = { action: null, payload: {}, message: "" };

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        // 3. Map conversation history to Gemini roles
        const geminiHistory = (history || []).map((msg: any) => ({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content }]
        }));

        const systemInstruction = `
          You are Trợ lý ảo Z-UP AI 🤖. You act as a customer service representative and board manager for Z-UP (a Trello clone).
          Your task is to analyze the user's message and determine if they want to perform one or more actions on their board, or if they have a general question.

          You have access to the current board's context. Use this board data to:
          - Answer questions about what lists and cards exist.
          - Give recommendations, suggestions, and analyze progress/todos.
          - Brainstorm card/list creations based on their goals.

          You support the following actions:
          1. "DELETE_CARD": User wants to delete a card. Requires 'cardTitle' and 'listTitle' parameters.
          2. "MARK_CARD_DONE": User wants to mark a card as done/completed. Requires 'cardTitle' parameter.
          3. "CREATE_CARD": User wants to add/create a card. Requires 'cardTitle' and 'listTitle' parameters.
          4. "CREATE_LIST": User wants to add/create a list. Requires 'listTitle' parameter.
          5. "CREATE_BOARD": User wants to create/initialize a new board. Requires 'boardTitle' parameter.

          CRITICAL - Executing Multiple Actions & Confirmation Responses:
          - You can return multiple actions in a single response. For example, if you suggest creating lists 'Môn học', 'Tài liệu', 'Lịch ôn tập', and 'Hoàn thành' and the user says "có" (yes) or "đồng ý" (agree), you should return a list containing 4 "CREATE_LIST" actions in the "actions" array.
          - Ensure list titles match the case of the user's intent or standard board lists.

          CRITICAL - Multi-turn Parameter Gathering & Action Resolution:
          - Pay close attention to the conversation history. If in a previous turn you (the assistant/model) asked the user for a missing parameter (for example, you asked "Bạn muốn thêm nhiệm vụ 'lấy key api' vào danh sách nào ạ?"), and the user's latest message provides that parameter (for example, "to do" or "vào danh sách to do"), you MUST recognize that they are completing the previous action request.
          - In this case, do NOT ask another question or treat the parameter as a standalone query. Instead, merge the current message with the previous context, resolve the target action, and return a message stating you are executing the action.

          If the user wants a new board but has not given a clear or specific title, or if you need to ask more questions to clarify their requirements/ideas before building the board, DO NOT return actions yet. Instead:
          - Set actions=null.
          - Ask clarifying questions politely (e.g. "Bạn muốn đặt tên bảng là gì? Bạn cần bao nhiêu danh sách?", etc.).
          - Suggest potential lists and cards they might want to include.
          
          If they have provided a specific idea or a title, you should create the board directly (e.g. return action "CREATE_BOARD").
          
          For general questions, suggestions, or analysis of the board, set actions to null and answer/suggest politely in the same language they asked in (default is Vietnamese).

          Your response must be JSON matching the following schema:
          {
            "actions": [
              {
                "action": "DELETE_CARD" | "MARK_CARD_DONE" | "CREATE_CARD" | "CREATE_LIST" | "CREATE_BOARD",
                "payload": {
                  "cardTitle": string | null,
                  "listTitle": string | null,
                  "boardTitle": string | null
                }
              }
            ] | null,
            "message": string // Customer service response message explaining what you did, giving suggestions, or asking clarifying questions.
          }
        `;

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [
                ...geminiHistory,
                {
                  role: "user",
                  parts: [{ text: `Board Context:\n${boardContext}\n\nUser Message: ${message}` }]
                }
              ],
              systemInstruction: {
                parts: [{ text: systemInstruction }]
              },
              generationConfig: {
                responseMimeType: "application/json",
              }
            })
          }
        );

        if (response.ok) {
          const geminiData = await response.json();
          const jsonText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
          if (jsonText) {
            let cleanedJson = jsonText.trim();
            if (cleanedJson.startsWith("```")) {
              cleanedJson = cleanedJson.replace(/^```(?:json)?\n?/i, "");
              cleanedJson = cleanedJson.replace(/\n?```$/, "");
            }
            aiResult = JSON.parse(cleanedJson.trim());
          }
        }
      } catch (err) {
        console.error("Gemini API call failed, falling back to local parser", err);
      }
    }

    if (!aiResult.message && !aiResult.actions) {
      const local = parseMessageLocally(message) as any;
      aiResult.action = local.action;
      aiResult.payload = local.payload;
      aiResult.message = local.message;
    }

    let actionExecuted = false;
    let newBoardId: string | null = null;
    let actionsToExecute: Array<{ action: string; payload: any }> = [];

    if (aiResult.actions && Array.isArray(aiResult.actions)) {
      actionsToExecute = aiResult.actions;
    } else if (aiResult.action) {
      actionsToExecute = [{ action: aiResult.action, payload: aiResult.payload || {} }];
    }

    if (actionsToExecute.length > 0) {
      if (!userId || !orgId) {
        return NextResponse.json({
          message: "Bạn cần đăng nhập để thực hiện các hành động này.",
          action: null
        });
      }

      for (const item of actionsToExecute) {
        const action = item.action;
        const payload = item.payload || {};

        if (action !== "CREATE_BOARD" && !boardId) {
          aiResult.message = "Vui lòng mở một bảng công việc (Board) cụ thể để thực hiện các câu lệnh điều chỉnh thẻ và danh sách.";
          break;
        }

        try {
          if (action === "CREATE_BOARD" && payload.boardTitle) {
            const canCreate = await hasAvailableCount();
            const isPro = await checkSubscription();

            if (!canCreate && !isPro) {
              aiResult.message = "Bạn đã đạt tới giới hạn số bảng miễn phí. Vui lòng nâng cấp để tạo thêm.";
              break;
            } else {
              const randomImage = defaultImages[Math.floor(Math.random() * defaultImages.length)];
              const board = await db.board.create({
                data: {
                  title: payload.boardTitle,
                  orgId,
                  imageId: randomImage.id,
                  imageThumbUrl: randomImage.urls.thumb,
                  imageFullUrl: randomImage.urls.full,
                  imageLinkHTML: randomImage.links.html,
                  imageUserName: randomImage.user.name
                }
              });

              if (!isPro) {
                await incrementAvailableCount();
              }

              await createAuditLog({
                entityTitle: board.title,
                entityId: board.id,
                entityType: ENTITY_TYPE.BOARD,
                action: ACTION.CREATE,
              });

              newBoardId = board.id;
              actionExecuted = true;
            }
          }

          else if (action === "DELETE_CARD" && boardId) {
            const list = await db.list.findFirst({
              where: { boardId, title: payload.listTitle }
            });
            if (list) {
              const card = await db.card.findFirst({
                where: { listId: list.id, title: payload.cardTitle }
              });
              if (card) {
                await db.card.delete({ where: { id: card.id } });
                await createAuditLog({
                  entityId: card.id,
                  entityTitle: card.title,
                  entityType: ENTITY_TYPE.CARD,
                  action: ACTION.DELETE,
                });
                actionExecuted = true;
              } else {
                aiResult.message = `Không tìm thấy thẻ "${payload.cardTitle}" trong danh sách "${payload.listTitle}".`;
              }
            } else {
              aiResult.message = `Không tìm thấy danh sách "${payload.listTitle}" trên bảng công việc này.`;
            }
          }

          else if (action === "MARK_CARD_DONE" && boardId) {
            const card = await db.card.findFirst({
              where: {
                list: { boardId },
                title: payload.cardTitle
              }
            });

            if (card) {
              let doneList = await db.list.findFirst({
                where: { boardId, title: "Done" }
              });

              if (!doneList) {
                const lastList = await db.list.findFirst({
                  where: { boardId },
                  orderBy: { order: "desc" }
                });
                const nextOrder = lastList ? lastList.order + 1 : 1;
                doneList = await db.list.create({
                  data: { title: "Done", boardId, order: nextOrder }
                });
              }

              const lastCard = await db.card.findFirst({
                where: { listId: doneList.id },
                orderBy: { order: "desc" }
              });
              const nextCardOrder = lastCard ? lastCard.order + 1 : 1;

              await db.card.update({
                where: { id: card.id },
                data: { listId: doneList.id, order: nextCardOrder }
              });
              await createAuditLog({
                entityId: card.id,
                entityTitle: card.title,
                entityType: ENTITY_TYPE.CARD,
                action: ACTION.UPDATE,
              });
              actionExecuted = true;
            } else {
              aiResult.message = `Không tìm thấy thẻ "${payload.cardTitle}" trên bảng công việc này.`;
            }
          }

          else if (action === "CREATE_CARD" && boardId) {
            let list = await db.list.findFirst({
              where: { boardId, title: payload.listTitle }
            });

            if (!list) {
              const lastList = await db.list.findFirst({
                where: { boardId },
                orderBy: { order: "desc" }
              });
              const nextListOrder = lastList ? lastList.order + 1 : 1;
              list = await db.list.create({
                data: { title: payload.listTitle, boardId, order: nextListOrder }
              });
            }

            const lastCard = await db.card.findFirst({
              where: { listId: list.id },
              orderBy: { order: "desc" }
            });
            const nextOrder = lastCard ? lastCard.order + 1 : 1;

            const newCard = await db.card.create({
              data: { title: payload.cardTitle, listId: list.id, order: nextOrder }
            });
            await createAuditLog({
              entityId: newCard.id,
              entityTitle: newCard.title,
              entityType: ENTITY_TYPE.CARD,
              action: ACTION.CREATE,
            });
            actionExecuted = true;
          }

          else if (action === "CREATE_LIST" && boardId) {
            const existingList = await db.list.findFirst({
              where: { boardId, title: payload.listTitle }
            });

            if (!existingList) {
              const lastList = await db.list.findFirst({
                where: { boardId },
                orderBy: { order: "desc" }
              });
              const nextOrder = lastList ? lastList.order + 1 : 1;

              const newList = await db.list.create({
                data: { title: payload.listTitle, boardId, order: nextOrder }
              });
              await createAuditLog({
                entityId: newList.id,
                entityTitle: newList.title,
                entityType: ENTITY_TYPE.LIST,
                action: ACTION.CREATE,
              });
              actionExecuted = true;
            } else {
              aiResult.message = `Danh sách "${payload.listTitle}" đã tồn tại trên bảng công việc này.`;
            }
          }
        } catch (dbErr) {
          console.error("Database operation failed for AI assistant", dbErr);
          aiResult.message = "Đã xảy ra lỗi hệ thống khi cập nhật bảng công việc. Vui lòng thử lại.";
          aiResult.action = null;
        }
      }
    }

    if (actionExecuted) {
      if (boardId) {
        revalidatePath(`/board/${boardId}`);
      }
      if (newBoardId) {
        revalidatePath(`/organization/${orgId}`);
      }
    }

    return NextResponse.json({
      message: aiResult.message,
      action: aiResult.action,
      actionExecuted,
      newBoardId
    });
  } catch (error: any) {
    console.error("AI_CHAT_ERROR", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
