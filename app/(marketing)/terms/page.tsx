import Link from "next/link";
import { Poppins } from "next/font/google";
import { ArrowLeft, FileText } from "lucide-react";

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
            Back to Home
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
              Terms of Service
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Last updated: June 19, 2026
            </p>
          </div>
        </div>

        <div className="prose prose-neutral max-w-none space-y-6 text-sm md:text-base leading-relaxed text-neutral-600">
          <p>
            Welcome to Taskify! These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, apps, and services. Please read them carefully before using our platform.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to all the terms and conditions, then you may not access or use the Service.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            2. Description of Service
          </h2>
          <p>
            Taskify is a web-based task management software designed to help teams collaborate, organize projects, and manage workflow boards, lists, cards, and checklists.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            3. Account Registration & Security
          </h2>
          <p>
            To use certain features of the Service, you must register for an account using Clerk (our third-party authentication provider). You agree to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide accurate, current, and complete information.</li>
            <li>Maintain the security of your password and accept all risks of unauthorized access to your account data.</li>
            <li>Promptly notify us if you discover or suspect any security breaches related to the Service.</li>
          </ul>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            4. User Content & Conduct
          </h2>
          <p>
            You are entirely responsible for the content you upload, post, or otherwise transmit via the Service (including board descriptions, card titles, lists, and comments). You agree not to upload content that:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, or invasive of another&apos;s privacy.</li>
            <li>Infringes any patent, trademark, trade secret, copyright, or other proprietary rights of any party.</li>
            <li>Contains software viruses or any other computer code designed to interrupt, destroy, or limit the functionality of the Service.</li>
          </ul>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            5. Subscriptions and Payments
          </h2>
          <p>
            Certain parts of the Service are billed on a subscription basis using Stripe. You will be billed in advance on a recurring and periodic basis. We reserve the right to modify subscription fees or add new charges at any time, with prior notice.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            6. Limitation of Liability
          </h2>
          <p>
            In no event shall Taskify, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            7. Termination
          </h2>
          <p>
            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            8. Governing Law
          </h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Taskify operates, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pt-4 border-t">
            9. Contact Us
          </h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>By email: support@taskify.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
