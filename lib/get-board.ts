import { cache } from "react";

import { db } from "@/lib/db";

export const getBoard = cache(async (id: string, orgId: string) => {
  return await db.board.findUnique({
    where: {
      id,
      orgId,
    },
  });
});
