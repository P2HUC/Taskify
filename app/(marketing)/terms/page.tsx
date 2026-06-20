import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { poppins } from "@/lib/fonts";

const textFont = poppins;

const TermsPage = () => {
  return (
    <div className={cn(
      "max-w-3xl mx-auto px-6 py-10 md:py-16 text-neutral-800",
      textFont.className
    )}>
      <div className="mb-6">
        <Button variant="link" className="p-0 text-neutral-500 hover:text-neutral-800 hover:no-underline transition gap-x-2" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Quay lại trang chủ
          </Link>
        </Button>
      </div>

      <div className="bg-white border rounded-2xl p-6 md:p-10 shadow-sm">
        <div className="flex items-center gap-x-3 mb-6">
          <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">
              Điều khoản Dịch vụ
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Cập nhật lần cuối: 19 tháng 6, 2026
            </p>
          </div>
        </div>

        <div className="prose prose-neutral max-w-none space-y-6 text-sm md:text-base leading-relaxed text-neutral-600">
          <p>
            Chào mừng bạn đến với Z-UP! Các Điều khoản Dịch vụ này (&quot;Điều khoản&quot;) điều chỉnh việc bạn truy cập và sử dụng trang web, ứng dụng và dịch vụ của chúng tôi. Vui lòng đọc kỹ trước khi sử dụng nền tảng của chúng tôi.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            1. Chấp thuận các Điều khoản
          </h2>
          <p>
            Bằng cách truy cập hoặc sử dụng Dịch vụ của chúng tôi, bạn đồng ý tuân thủ các Điều khoản này và Chính sách Bảo mật của chúng tôi. Nếu bạn không đồng ý với tất cả các điều khoản và điều kiện, bạn không được phép truy cập hoặc sử dụng Dịch vụ.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            2. Mô tả Dịch vụ
          </h2>
          <p>
            Z-UP là một phần mềm quản lý công việc trên nền tảng web được thiết kế để giúp các nhóm cộng tác, tổ chức các dự án và quản lý các bảng công việc, danh sách, thẻ và danh sách kiểm tra.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            3. Đăng ký Tài khoản & Bảo mật
          </h2>
          <p>
            Để sử dụng một số tính năng nhất định của Dịch vụ, bạn phải đăng ký tài khoản thông qua Clerk (nhà cung cấp dịch vụ xác thực bên thứ ba của chúng tôi). Bạn đồng ý:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Cung cấp thông tin chính xác, cập nhật và đầy đủ.</li>
            <li>Duy trì tính bảo mật cho mật khẩu của bạn và chấp nhận mọi rủi ro liên quan đến việc truy cập trái phép vào dữ liệu tài khoản của bạn.</li>
            <li>Thông báo ngay cho chúng tôi nếu bạn phát hiện hoặc nghi ngờ bất kỳ vi phạm bảo mật nào liên quan đến Dịch vụ.</li>
          </ul>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            4. Nội dung & Hành vi của Người dùng
          </h2>
          <p>
            Bạn hoàn toàn chịu trách nhiệm về nội dung mình tải lên, đăng tải hoặc truyền tải qua Dịch vụ (bao gồm mô tả bảng, tiêu đề thẻ, danh sách và bình luận). Bạn đồng ý không tải lên các nội dung:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Bất hợp pháp, có hại, đe dọa, lạm dụng, quấy rối, sai trái, phỉ báng hoặc xâm phạm quyền riêng tư của người khác.</li>
            <li>Xâm phạm bất kỳ bằng sáng chế, nhãn hiệu, bí mật kinh doanh, bản quyền hoặc quyền sở hữu trí tuệ nào khác của bất kỳ bên nào.</li>
            <li>Chứa virus phần mềm hoặc bất kỳ mã máy tính nào khác được thiết kế để gây gián đoạn, phá hủy hoặc hạn chế chức năng của Dịch vụ.</li>
          </ul>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            5. Gói đăng ký và Thanh toán
          </h2>
          <p>
            Một số phần của Dịch vụ được tính phí trên cơ sở đăng ký trả phí thông qua Stripe. Bạn sẽ được lập hóa đơn trước theo chu kỳ định kỳ. Chúng tôi có quyền sửa đổi phí đăng ký hoặc bổ sung các khoản phí mới bất kỳ lúc nào với thông báo trước.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            6. Giới hạn Trách nhiệm
          </h2>
          <p>
            Trong mọi trường hợp, Z-UP, cũng như các giám đốc, nhân viên, đối tác, đại lý, nhà cung cấp hoặc chi nhánh của chúng tôi, sẽ không chịu trách nhiệm cho bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt, mang tính hệ quả hoặc trừng phạt nào, bao gồm nhưng không giới hạn ở tổn thất lợi nhuận, dữ liệu, sử dụng, uy tín hoặc các tổn thất vô hình khác, phát sinh từ việc bạn truy cập, sử dụng hoặc không thể truy cập hoặc sử dụng Dịch vụ.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            7. Chấm dứt
          </h2>
          <p>
            Chúng tôi có thể chấm dứt hoặc đình chỉ tài khoản của bạn và chặn quyền truy cập vào Dịch vụ ngay lập tức, không cần thông báo trước hoặc chịu trách nhiệm pháp lý, theo quyết định riêng của chúng tôi, vì bất kỳ lý do gì, bao gồm nhưng không giới hạn ở việc bạn vi phạm Điều khoản.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            8. Luật Điều chỉnh
          </h2>
          <p>
            Các Điều khoản này sẽ được điều chỉnh và giải thích theo luật pháp của khu vực tài phán nơi Z-UP hoạt động, bất kể các quy định về xung đột pháp luật.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            9. Liên hệ với Chúng tôi
          </h2>
          <p>
            Nếu bạn có bất kỳ câu hỏi nào về các Điều khoản này, vui lòng liên hệ với chúng tôi:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Qua email: support@z-up.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
