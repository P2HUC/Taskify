import { ACTION, AuditLog } from "@prisma/client";

export const generateLogMessage = (log: AuditLog) => {
  const { action, entityTitle, entityType } = log;

  let entityTypeVi = "";
  switch (entityType) {
    case "BOARD":
      entityTypeVi = "bảng";
      break;
    case "LIST":
      entityTypeVi = "danh sách";
      break;
    case "CARD":
      entityTypeVi = "thẻ";
      break;
    default:
      entityTypeVi = (entityType as string).toLowerCase();
  }

  switch (action) {
    case ACTION.CREATE:
      return `đã tạo ${entityTypeVi} "${entityTitle}"`;
    case ACTION.UPDATE:
      return `đã cập nhật ${entityTypeVi} "${entityTitle}"`;
    case ACTION.DELETE:
      return `đã xóa ${entityTypeVi} "${entityTitle}"`;
    default:
      return `hành động không xác định đối với ${entityTypeVi} "${entityTitle}"`;
  };
};
