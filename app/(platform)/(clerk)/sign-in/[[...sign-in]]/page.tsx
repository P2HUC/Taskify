import { SignIn } from "@clerk/nextjs";
import { GuestLoginButton } from "@/components/guest-login-button";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <SignIn />
      <div className="w-full max-w-[400px] px-4 md:px-0">
        <GuestLoginButton 
          variant="outline" 
          className="w-full bg-white hover:bg-neutral-50 border-neutral-200 text-neutral-800 py-6 text-base"
        />
      </div>
    </div>
  );
}
