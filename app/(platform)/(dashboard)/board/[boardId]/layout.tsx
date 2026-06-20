import { auth } from "@clerk/nextjs";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import { cache } from "react";

import { db } from "@/lib/db";
import { BoardNavbar } from "./_components/board-navbar";

const getBoard = cache(async (boardId: string, orgId: string) => {
  return db.board.findUnique({
    where: {
      id: boardId,
      orgId,
    },
  });
});

export async function generateMetadata({ 
  params
 }: {
  params: { boardId: string; };
 }) {
  const { orgId } = auth();

  if (!orgId) {
    return {
      title: "Board",
    };
  }

  const board = await getBoard(params.boardId, orgId);

  return {
    title: board?.title || "Board",
  };
}

const BoardIdLayout = async ({
  children,
  params,
  }: {
  children: React.ReactNode;
  params: { boardId: string; };
}) => {
  const { orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }

  const board = await getBoard(params.boardId, orgId);

  if (!board) {
    notFound();
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={board.imageFullUrl}
        alt="Board Background"
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10"
      />
      <BoardNavbar data={board} />
      <div className="absolute inset-0 bg-black/10 -z-10" />
      <main className="relative pt-28 h-full">
        {children}
      </main>
    </div>
  );
};

export default BoardIdLayout;
