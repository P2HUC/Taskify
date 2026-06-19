import Link from "next/link";
import { Poppins } from "next/font/google";
import { ArrowLeft, Shield } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
});

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
            Back to Home
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
              Privacy Policy
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Last updated: June 19, 2026
            </p>
          </div>
        </div>

        <div className="prose prose-neutral max-w-none space-y-6 text-sm md:text-base leading-relaxed text-neutral-600">
          <p>
            At Taskify, accessible from taskify.com (and all associated applications), one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Taskify and how we use it.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            1. Information We Collect
          </h2>
          <p>
            We collect several different types of information for various purposes to provide and improve our Service to you:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you, such as your email address, name, and profile picture (facilitated by our authentication provider Clerk).</li>
            <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used. This may include information such as your computer&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.</li>
            <li><strong>Task and Board Data:</strong> As a task management platform, we store the content you create, including board titles, list titles, card titles, descriptions, comments, and activity logs.</li>
          </ul>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            2. How We Use Your Data
          </h2>
          <p>
            Taskify uses the collected data for various purposes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide and maintain our Service.</li>
            <li>To notify you about changes to our Service.</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so.</li>
            <li>To provide customer support and collect valuable feedback to improve the Service.</li>
            <li>To monitor the usage of our Service and detect, prevent, and address technical issues.</li>
          </ul>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            3. Security of Data
          </h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            4. Service Providers
          </h2>
          <p>
            We may employ third-party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Authentication:</strong> Clerk</li>
            <li><strong>Database & Hosting:</strong> Prisma, Supabase, Vercel</li>
            <li><strong>Payment Processing:</strong> Stripe</li>
          </ul>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            5. Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;last updated&quot; date at the top of this Privacy Policy.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            6. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>By email: support@taskify.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
