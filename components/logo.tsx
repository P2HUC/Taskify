import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
  display: "swap",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/logo.svg"
          alt="Logo"
          height={46}
          width={46}
          priority
        />
        <p className={cn(
          "text-2xl text-neutral-700",
          headingFont.className,
        )}>
          Z-UP
        </p>
      </div>
    </Link>
  );
};
