import { auth, currentUser } from "@clerk/nextjs";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

import { db } from "@/lib/db";

interface Props {
  entityId: string;
  entityType: ENTITY_TYPE,
  entityTitle: string;
  action: ACTION;
};

// In-memory cache to store Clerk user profile details to avoid slow external API calls on every board action
const userCache = new Map<string, { id: string; imageUrl: string; name: string }>();

export const createAuditLog = async (props: Props) => {
  try {
    const { orgId, userId } = auth();

    if (!userId || !orgId) {
      throw new Error("User not found!");
    }

    let cachedUser = userCache.get(userId);

    if (!cachedUser) {
      const user = await currentUser();
      if (!user) {
        throw new Error("User not found!");
      }
      cachedUser = {
        id: user.id,
        imageUrl: user.imageUrl,
        name: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
      };
      userCache.set(userId, cachedUser);
    }

    const { entityId, entityType, entityTitle, action } = props;

    await db.auditLog.create({
      data: {
        orgId,
        entityId,
        entityType,
        entityTitle,
        action,
        userId: cachedUser.id,
        userImage: cachedUser.imageUrl,
        userName: cachedUser.name,
      }
    });
  } catch (error) {
    console.log("[AUDIT_LOG_ERROR]", error);
  }
}