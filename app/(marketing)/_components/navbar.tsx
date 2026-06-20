import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { GuestLoginButton } from "@/components/guest-login-button";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white/70 backdrop-blur-md flex items-center z-50">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-x-2">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">
              Đăng nhập
            </Link>
          </Button>
          <GuestLoginButton size="sm" variant="outline" className="hidden md:inline-flex" />
          <Button size="sm" asChild>
            <Link href="/sign-up">
              Sử dụng Z-UP miễn phí
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
