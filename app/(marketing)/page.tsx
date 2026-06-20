import Link from "next/link";
import localFont from "next/font/local";
import {
  Medal,
  Kanban,
  Activity,
  ShieldCheck,
  CreditCard,
  ListTodo,
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GuestLoginButton } from "@/components/guest-login-button";
import { poppins } from "@/lib/fonts";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
});

const textFont = poppins;

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full">
      {/* Hero Section */}
      <div className="flex items-center justify-center flex-col text-center px-4 max-w-4xl">
        <div className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className,
        )}>
          <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase text-xs md:text-sm font-semibold tracking-wider">
            <Medal className="h-5 w-5 mr-2" />
            Lựa chọn tối ưu cho quản lý công việc
          </div>
          <h1 className="text-4xl md:text-6xl text-center text-neutral-800 mb-6 font-bold leading-tight">
            Z-up giúp các nhóm thúc đẩy
          </h1>
          <div className="text-4xl md:text-6xl bg-gradient-to-r from-blue-600 to-orange-400 text-white px-6 p-3 rounded-xl pb-4 w-fit shadow-md">
            công việc hiệu quả.
          </div>
        </div>
        <div className={cn(
          "text-sm md:text-xl text-neutral-500 mt-6 max-w-md md:max-w-2xl text-center mx-auto leading-relaxed",
          textFont.className,
        )}>
          <p className="text-neutral-700 text-sm md:text-base">
            Z-UP là nền tảng quản lý dự án và cộng tác thông minh giúp tối ưu hóa năng suất cho mọi đội ngũ. Dù bạn đang vận hành một doanh nghiệp lớn hay triển khai dự án cá nhân tại nhà, cách thức làm việc của bạn luôn là duy nhất — và Z-UP ở đây để đồng hành, giúp bạn hiện thực hóa mọi mục tiêu.
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Button size="lg" asChild>
            <Link href="/sign-up" className="flex items-center gap-x-2">
              Sử dụng Z-up miễn phí
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <GuestLoginButton size="lg" variant="outline" className="border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-50/50 hover:text-fuchsia-700 transition" />
          <Button size="lg" variant="outline" asChild>
            <Link href="#features">
              Khám phá tính năng
            </Link>
          </Button>
        </div>
      </div>

      {/* Visual Mockup Container */}
      <div className="w-full max-w-5xl mt-16 px-6">
        <div className="bg-white border rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
          {/* Mock Board Header */}
          <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-x-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
          </div>
          {/* Mock Board Content */}
          <div className="bg-slate-100 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[340px]">
            {/* Column 1 */}
            <div className="bg-slate-200/60 p-4 rounded-xl flex flex-col gap-y-3 h-fit border border-slate-200">
              <span className="font-bold text-xs text-slate-700 px-1 mb-1 tracking-wider uppercase">📋 Chờ xử lý</span>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/80 hover:shadow transition duration-200">
                <p className="text-xs font-semibold text-slate-800">Thiết kế mockup trang đích</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[10px] bg-rose-100 text-rose-700 px-2 py-0.5 rounded font-bold uppercase">Thiết kế</span>
                  <span className="text-[10px] text-slate-400">📅 22 tháng 6</span>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/80 hover:shadow transition duration-200">
                <p className="text-xs font-semibold text-slate-800">Viết tài liệu điều khoản & bảo mật</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-bold uppercase">Pháp lý</span>
                  <span className="text-[10px] text-slate-400">📅 20 tháng 6</span>
                </div>
              </div>
            </div>
            {/* Column 2 */}
            <div className="bg-slate-200/60 p-4 rounded-xl flex flex-col gap-y-3 h-fit border border-slate-200">
              <span className="font-bold text-xs text-slate-700 px-1 mb-1 tracking-wider uppercase">⚡ Đang thực hiện</span>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/80 hover:shadow transition duration-200">
                <p className="text-xs font-semibold text-slate-800">Tích hợp thanh toán Stripe</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[10px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded font-bold uppercase">Thanh toán</span>
                  <span className="text-[10px] text-slate-400">💬 3 nhật ký</span>
                </div>
              </div>
            </div>
            {/* Column 3 */}
            <div className="bg-slate-200/60 p-4 rounded-xl flex flex-col gap-y-3 h-fit border border-slate-200">
              <span className="font-bold text-xs text-slate-700 px-1 mb-1 tracking-wider uppercase">✅ Đã hoàn thành</span>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/80 hover:shadow transition duration-200 opacity-75">
                <p className="text-xs font-semibold text-slate-750 line-through">Tích hợp xác thực Clerk</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold uppercase">Xác thực</span>
                  <span className="text-[10px] text-slate-400">✔️ Xong</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid Section */}
      <div id="features" className="w-full max-w-5xl py-20 px-6 mt-10 border-t border-slate-200/80 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-x-2 bg-fuchsia-50 text-fuchsia-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Tính năng cốt lõi
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-800 mb-4">
            Mọi thứ bạn cần để quản lý dự án
          </h2>
          <p className="text-neutral-500 text-sm md:text-base">
            Z-up đưa tất cả các công việc, đồng đội và tệp tin của bạn về một nơi. Giữ mọi thứ trong một không gian làm việc sạch sẽ, nhanh như chớp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:-translate-y-1 hover:shadow-md transition duration-300 flex flex-col">
            <div className="p-3 bg-fuchsia-100 text-fuchsia-700 rounded-xl w-fit mb-4">
              <Kanban className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-neutral-800 mb-2">Bảng Kanban trực quan</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Tạo bảng chuyên dụng cho các dự án, sắp xếp công việc vào danh sách tùy chỉnh và kéo thả thẻ để cập nhật tiến độ ngay lập tức.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:-translate-y-1 hover:shadow-md transition duration-300 flex flex-col">
            <div className="p-3 bg-blue-100 text-blue-700 rounded-xl w-fit mb-4">
              <Activity className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-neutral-800 mb-2">Nhật ký hoạt động chi tiết</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Theo dõi mọi hành động trên bảng, danh sách và thẻ. Luôn biết ai đã tạo, di chuyển, đổi tên hoặc hoàn thành công việc.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:-translate-y-1 hover:shadow-md transition duration-300 flex flex-col">
            <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl w-fit mb-4">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-neutral-800 mb-2">Không gian làm việc tổ chức</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Quản lý không gian làm việc của tổ chức với xác thực Clerk bảo mật. Mời các thành viên cùng cộng tác trên các bảng chia sẻ.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:-translate-y-1 hover:shadow-md transition duration-300 flex flex-col">
            <div className="p-3 bg-amber-100 text-amber-700 rounded-xl w-fit mb-4">
              <CreditCard className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-neutral-800 mb-2">Gói đăng ký Stripe Pro</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Nâng cấp lên gói Pro một cách liền mạch bằng cổng thanh toán Stripe để mở khóa số lượng bảng không giới hạn và dung lượng dự án cao cấp.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:-translate-y-1 hover:shadow-md transition duration-300 flex flex-col">
            <div className="p-3 bg-indigo-100 text-indigo-700 rounded-xl w-fit mb-4">
              <ListTodo className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-neutral-800 mb-2">Chi tiết thẻ nâng cao</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Thêm mô tả phong phú, thiết lập mức độ ưu tiên và xem nhật ký cụ thể cho từng công việc ngay bên trong chi tiết thẻ.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:-translate-y-1 hover:shadow-md transition duration-300 flex flex-col">
            <div className="p-3 bg-rose-100 text-rose-700 rounded-xl w-fit mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-neutral-800 mb-2">Hiệu năng giao diện Optimistic</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Trải nghiệm các tương tác tức thì với tính năng đồng bộ hóa trạng thái chạy ngầm, giảm thiểu tối đa màn hình tải và độ trễ.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing / Plan Comparison Section */}
      <div className="w-full max-w-5xl py-12 px-6 border-t border-slate-200/80">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border rounded-3xl p-8 md:p-12 shadow-sm">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
              Gói miễn phí so với Z-up Pro
            </h3>
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-6">
              Tạo tối đa 5 bảng miễn phí, hoặc gạt bỏ mọi giới hạn bằng cách nâng cấp lên Z-up Pro. Gói đăng ký được thanh toán bảo mật qua Stripe và có thể hủy bất kỳ lúc nào.
            </p>
            <div className="space-y-3.5">
              <div className="flex items-center gap-x-2.5 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-sm font-medium">Không giới hạn không gian làm việc & bảng cho Pro</span>
              </div>
              <div className="flex items-center gap-x-2.5 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-sm font-medium">Nhật ký hoạt động toàn diện của tổ chức</span>
              </div>
              <div className="flex items-center gap-x-2.5 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-sm font-medium">Hệ thống AI trợ giúp sắp xếp công việc</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg h-full min-h-[220px]">
            <div>
              <span className="text-xs bg-white/20 text-white px-2.5 py-1 rounded-full font-bold uppercase tracking-wider w-fit">
                Không giới hạn bảng
              </span>
              <h4 className="text-2xl font-bold mt-4 mb-2">Z-up Pro</h4>
              <p className="text-slate-300 text-xs md:text-sm">
                Dành cho người dùng chuyên sâu cần mở rộng tổ chức nâng cao và không giới hạn bảng.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between gap-x-4">
              <div className="flex items-baseline gap-x-1">
                <span className="text-3xl font-extrabold">$2</span>
                <span className="text-xs text-slate-400">/ tháng</span>
              </div>
              <Button variant="outline" className="bg-white text-slate-900 border-none hover:bg-slate-100" asChild>
                <Link href="/sign-up">
                  Trải nghiệm Pro ngay
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-5xl py-12 px-6">
        <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-3xl p-8 md:p-16 text-center text-white shadow-xl flex flex-col items-center justify-center relative overflow-hidden">
          {/* Background sparkles */}
          <div className="absolute top-4 left-4 text-white/10">
            <Sparkles className="h-12 w-12" />
          </div>
          <div className="absolute bottom-4 right-4 text-white/10">
            <Sparkles className="h-12 w-12" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 max-w-xl leading-tight">
            Bắt đầu sắp xếp công việc của bạn với Z-up ngay hôm nay
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-lg mb-8 leading-relaxed">
            Tham gia cùng hàng ngàn nhóm đang sử dụng Z-up để cộng tác, trực quan hóa khối lượng công việc và tăng tốc độ bàn giao dự án.
          </p>
          <Button size="lg" className="bg-white text-fuchsia-700 hover:bg-slate-100 border-none shadow-md font-semibold" asChild>
            <Link href="/sign-up">
              Sử dụng Z-up miễn phí
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
