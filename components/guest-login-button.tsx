"use client";

import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GuestLoginButtonProps {
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  children?: React.ReactNode;
}

export const GuestLoginButton = ({
  className,
  variant = "primary",
  size = "default",
  children,
}: GuestLoginButtonProps) => {
  const { signIn, setActive, isLoaded: isSignInLoaded } = useSignIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGuestLogin = async () => {
    if (!isSignInLoaded) return;
    setIsLoading(true);

    try {
      // 1. Call API to verify or create guest user & organization
      const response = await fetch("/api/guest", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to set up guest credentials");
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to set up guest credentials");
      }

      // 2. Perform sign-in programmatically using Clerk frontend API with ticket strategy
      const signInAttempt = await signIn.create({
        strategy: "ticket",
        ticket: data.token,
      });

      if (signInAttempt.status === "complete") {
        // Set the active session and pre-select the guest organization
        await setActive({
          session: signInAttempt.createdSessionId,
          organization: data.organizationId,
        });

        toast.success("Chào mừng! Đăng nhập dưới tư cách Khách.");
        
        // Redirect directly to the organization page
        router.push(`/organization/${data.organizationId}`);
      } else {
        console.error("Sign-in status: ", signInAttempt.status);
        toast.error("Không thể hoàn tất đăng nhập khách. Trạng thái: " + signInAttempt.status);
      }
    } catch (error: any) {
      console.error("GUEST_LOGIN_ERROR", error);
      toast.error(error?.message || "Đã xảy ra lỗi khi đăng nhập khách");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleGuestLogin}
      disabled={isLoading}
      variant={variant}
      size={size}
      className={cn("flex items-center justify-center gap-x-2 font-semibold shadow-sm transition-all", className)}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Sparkles className="h-4 w-4" />
      )}
      {children || (isLoading ? "Đang đăng nhập..." : "Đăng nhập với vai trò Khách")}
    </Button>
  );
};
