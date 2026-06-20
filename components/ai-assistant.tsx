"use client";

import { useState, useRef, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { 
  Bot, 
  X, 
  Send, 
  Loader2, 
  MessageSquare, 
  Sparkles,
  HelpCircle,
  PlusCircle,
  CheckCircle2,
  Trash2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const AiAssistant = () => {
  const params = useParams();
  const router = useRouter();
  const boardId = params?.boardId as string | undefined;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Chào bạn! Tôi là Trợ lý ảo Z-UP AI 🤖. Tôi có thể giúp bạn giải đáp các câu hỏi về hệ thống và trực tiếp tương tác, sắp xếp, cập nhật bảng tiến độ công việc theo yêu cầu của bạn."
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Auto-resize textarea based on content
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 96)}px`;
    }
  }, [inputValue]);

  // Handle Enter to submit, Shift+Enter to newline
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(inputValue);
    }
  };

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage = textToSend.trim();
    setInputValue("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          boardId,
          history: messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          }))
        })
      });

      if (!response.ok) {
        throw new Error("Không thể kết nối đến máy chủ AI");
      }

      const data = await response.json();

      setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);

      // If a new board was created, navigate to it; otherwise refresh the layout if an action was executed
      if (data.newBoardId) {
        router.push(`/board/${data.newBoardId}`);
      } else if (data.actionExecuted) {
        router.refresh();
      }
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Xin lỗi, đã xảy ra lỗi kết nối với trợ lý ảo. Vui lòng kiểm tra và thử lại sau." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickPrompt = (prompt: string) => {
    handleSend(prompt);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Floating Chat Bubble Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        >
          <Bot className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
          {/* Tooltip */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow shadow-neutral-900/50 pointer-events-none">
            Trợ lý Z-up AI
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="flex flex-col h-[520px] w-[380px] rounded-2xl bg-white border border-slate-100 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-6 fade-in duration-300">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
            <div className="flex items-center gap-x-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm relative">
                <Bot className="h-5 w-5" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-indigo-600"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wide flex items-center gap-x-1.5">
                  Z-up AI Assistant
                  <Sparkles className="h-3.5 w-3.5 text-amber-300 fill-amber-300" />
                </h3>
                <p className="text-[10px] text-white/80">Trực tuyến • Hỗ trợ bảng công việc</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-x-2.5 max-w-[85%]",
                  msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                )}
              >
                {msg.role === "assistant" && (
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <Bot className="h-4 w-4" />
                  </div>
                )}
                <div
                  className={cn(
                    "rounded-2xl px-3.5 py-2.5 text-sm shadow-sm whitespace-pre-line leading-relaxed",
                    msg.role === "user" 
                      ? "bg-indigo-600 text-white rounded-tr-none" 
                      : "bg-white text-neutral-800 border border-slate-100 rounded-tl-none"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-x-2.5">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none px-3.5 py-2.5 text-sm shadow-sm text-neutral-500 flex items-center gap-x-2">
                  <Loader2 className="h-4 w-4 animate-spin text-indigo-600" />
                  Đang xử lý câu lệnh...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Actions (only shown if board is active) */}
          {boardId && (
            <div className="px-3 py-2 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
              <button
                onClick={() => handleQuickPrompt("Tạo danh sách 'Cần Làm'")}
                className="flex items-center gap-x-1 text-[11px] font-medium bg-white text-slate-700 border border-slate-200 rounded-full px-2.5 py-1 hover:bg-slate-100 hover:border-slate-300 transition"
              >
                <PlusCircle className="h-3 w-3 text-indigo-500" />
                + Tạo list Cần Làm
              </button>
              <button
                onClick={() => handleQuickPrompt("Tạo thẻ 'Nhiệm vụ 1' trong danh sách 'Cần Làm'")}
                className="flex items-center gap-x-1 text-[11px] font-medium bg-white text-slate-700 border border-slate-200 rounded-full px-2.5 py-1 hover:bg-slate-100 hover:border-slate-300 transition"
              >
                <Sparkles className="h-3 w-3 text-amber-500" />
                + Tạo card trong list
              </button>
              <button
                onClick={() => handleQuickPrompt("Hoàn thành thẻ 'Nhiệm vụ 1'")}
                className="flex items-center gap-x-1 text-[11px] font-medium bg-white text-slate-700 border border-slate-200 rounded-full px-2.5 py-1 hover:bg-slate-100 hover:border-slate-300 transition"
              >
                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                ✓ Hoàn thành card
              </button>
              <button
                onClick={() => handleQuickPrompt("Xóa thẻ 'Nhiệm vụ 1' trong danh sách 'Done'")}
                className="flex items-center gap-x-1 text-[11px] font-medium bg-white text-slate-700 border border-slate-200 rounded-full px-2.5 py-1 hover:bg-slate-100 hover:border-slate-300 transition"
              >
                <Trash2 className="h-3 w-3 text-rose-500" />
                ✗ Xóa card
              </button>
            </div>
          )}

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputValue);
            }}
            className="flex items-end p-3 border-t border-slate-100 gap-x-2 bg-white"
          >
            <style>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <textarea
              ref={textareaRef}
              rows={1}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={boardId ? "Nhập câu lệnh của bạn..." : "Hỏi trợ lý ảo Z-up..."}
              disabled={isLoading}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              className="flex-1 text-sm outline-none border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition resize-none overflow-y-auto max-h-24 min-h-[38px] leading-relaxed no-scrollbar"
            />
            <Button
              type="submit"
              size="icon"
              disabled={!inputValue.trim() || isLoading}
              className="h-9 w-9 bg-indigo-600 hover:bg-indigo-700 rounded-xl flex-shrink-0 text-white"
            >
              <Send className="h-4.5 w-4.5" />
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};
