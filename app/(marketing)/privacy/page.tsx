import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { poppins } from "@/lib/fonts";

const textFont = poppins;

const PrivacyPage = () => {
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
          <div className="p-2 bg-rose-100 text-rose-700 rounded-lg">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">
              Chính sách Bảo mật
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Cập nhật lần cuối: 19 tháng 6, 2026
            </p>
          </div>
        </div>

        <div className="prose prose-neutral max-w-none space-y-6 text-sm md:text-base leading-relaxed text-neutral-600">
          <p>
            Tại Z-up, có thể truy cập được từ z-up.com (và tất cả các ứng dụng liên kết), một trong những ưu tiên hàng đầu của chúng tôi là quyền riêng tư của khách truy cập. Tài liệu Chính sách Bảo mật này chứa các loại thông tin được Z-up thu thập, ghi lại và cách chúng tôi sử dụng thông tin đó.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            1. Thông tin Chúng tôi Thu thập
          </h2>
          <p>
            Chúng tôi thu thập nhiều loại thông tin khác nhau cho các mục đích khác nhau để cung cấp và cải thiện Dịch vụ của mình cho bạn:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Dữ liệu Cá nhân:</strong> Trong khi sử dụng Dịch vụ, chúng tôi có thể yêu cầu bạn cung cấp một số thông tin nhận dạng cá nhân có thể được sử dụng để liên hệ hoặc xác định danh tính của bạn, chẳng hạn như địa chỉ email, tên và ảnh hồ sơ (được cung cấp bởi Clerk - nhà cung cấp dịch vụ xác thực của chúng tôi).</li>
            <li><strong>Dữ liệu Sử dụng:</strong> Chúng tôi cũng có thể thu thập thông tin về cách truy cập và sử dụng Dịch vụ. Thông tin này có thể bao gồm địa chỉ Giao thức Internet của máy tính (ví dụ: địa chỉ IP), loại trình duyệt, phiên bản trình duyệt, các trang thuộc Dịch vụ của chúng tôi mà bạn truy cập, thời gian và ngày bạn truy cập, thời gian dành cho các trang đó và các dữ liệu chẩn đoán khác.</li>
            <li><strong>Dữ liệu Thẻ và Bảng công việc:</strong> Là một nền tảng quản lý công việc, chúng tôi lưu trữ nội dung bạn tạo, bao gồm tiêu đề bảng, tiêu đề danh sách, tiêu đề thẻ, mô tả, bình luận và nhật ký hoạt động.</li>
          </ul>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            2. Cách Chúng tôi Sử dụng Dữ liệu của Bạn
          </h2>
          <p>
            Z-up sử dụng dữ liệu được thu thập cho các mục đích khác nhau:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Để cung cấp và duy trì Dịch vụ của chúng tôi.</li>
            <li>Để thông báo cho bạn về những thay đổi đối với Dịch vụ.</li>
            <li>Để cho phép bạn tham gia vào các tính năng tương tác của Dịch vụ khi bạn chọn làm như vậy.</li>
            <li>Để cung cấp dịch vụ hỗ trợ khách hàng và thu thập các phản hồi giá trị nhằm cải thiện Dịch vụ.</li>
            <li>Để theo dõi việc sử dụng Dịch vụ và phát hiện, ngăn ngừa và khắc phục các sự cố kỹ thuật.</li>
          </ul>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            3. Bảo mật Dữ liệu
          </h2>
          <p>
            Bảo mật dữ liệu của bạn là điều vô cùng quan trọng đối với chúng tôi, nhưng hãy nhớ rằng không có phương thức truyền tải nào qua Internet hoặc phương thức lưu trữ điện tử nào là an toàn 100%. Mặc dù chúng tôi cố gắng sử dụng các phương tiện được chấp nhận về mặt thương mại để bảo vệ Dữ liệu Cá nhân của bạn, chúng tôi không thể đảm bảo an toàn tuyệt đối.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            4. Nhà cung cấp Dịch vụ
          </h2>
          <p>
            Chúng tôi có thể thuê các công ty và cá nhân bên thứ ba để tạo điều kiện thuận lợi cho Dịch vụ, thay mặt chúng tôi cung cấp Dịch vụ, thực hiện các dịch vụ liên quan đến Dịch vụ hoặc hỗ trợ chúng tôi phân tích cách sử dụng Dịch vụ. Các bên thứ ba này chỉ có quyền truy cập vào Dữ liệu Cá nhân của bạn để thực hiện các nhiệm vụ này thay mặt chúng tôi và có nghĩa vụ không tiết lộ hoặc sử dụng dữ liệu đó cho bất kỳ mục đích nào khác.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Xác thực tài khoản:</strong> Clerk</li>
            <li><strong>Cơ sở dữ liệu & Lưu trữ:</strong> Prisma, Supabase, Vercel</li>
            <li><strong>Xử lý Thanh toán:</strong> Stripe</li>
          </ul>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            5. Thay đổi đối với Chính sách Bảo mật này
          </h2>
          <p>
            Chúng tôi có thể cập nhật Chính sách Bảo mật của mình theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách đăng Chính sách Bảo mật mới trên trang này và cập nhật ngày &quot;cập nhật lần cuối&quot; ở đầu Chính sách Bảo mật.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            6. Liên hệ với Chúng tôi
          </h2>
          <p>
            Nếu bạn có bất kỳ câu hỏi nào về Chính sách Bảo mật này, vui lòng liên hệ với chúng tôi:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Qua email: support@z-up.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
