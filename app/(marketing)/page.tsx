import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
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

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
});

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
            Best choice for task management
          </div>
          <h1 className="text-4xl md:text-6xl text-center text-neutral-800 mb-6 font-bold leading-tight">
            Taskify helps teams move
          </h1>
          <div className="text-4xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-6 p-3 rounded-xl pb-4 w-fit shadow-md">
            work forward.
          </div>
        </div>
        <div className={cn(
          "text-sm md:text-xl text-neutral-500 mt-6 max-w-md md:max-w-2xl text-center mx-auto leading-relaxed",
          textFont.className,
        )}>
          Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with Taskify.
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Button size="lg" asChild>
            <Link href="/sign-up" className="flex items-center gap-x-2">
              Get Taskify for free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#features">
              Explore features
            </Link>
          </Button>
        </div>
      </div>

      {/* Visual Mockup Container */}
      <div className="w-full max-w-5xl mt-16 px-6">
        <div className="bg-white border rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
          {/* Mock Board Header */}
          <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-x-2.5">
              <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider shadow">Pro</span>
              <h3 className="font-bold text-sm md:text-base tracking-wide">📍 Product Launch Project</h3>
            </div>
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
              <span className="font-bold text-xs text-slate-700 px-1 mb-1 tracking-wider uppercase">📋 Backlog</span>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/80 hover:shadow transition duration-200">
                <p className="text-xs font-semibold text-slate-800">Design landing page mockup</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[10px] bg-rose-100 text-rose-700 px-2 py-0.5 rounded font-bold uppercase">Design</span>
                  <span className="text-[10px] text-slate-400">📅 June 22</span>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/80 hover:shadow transition duration-200">
                <p className="text-xs font-semibold text-slate-800">Write terms & privacy documents</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-bold uppercase">Legal</span>
                  <span className="text-[10px] text-slate-400">📅 June 20</span>
                </div>
              </div>
            </div>
            {/* Column 2 */}
            <div className="bg-slate-200/60 p-4 rounded-xl flex flex-col gap-y-3 h-fit border border-slate-200">
              <span className="font-bold text-xs text-slate-700 px-1 mb-1 tracking-wider uppercase">⚡ In Progress</span>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/80 hover:shadow transition duration-200">
                <p className="text-xs font-semibold text-slate-800">Implement Stripe billing integrations</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[10px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded font-bold uppercase">Billing</span>
                  <span className="text-[10px] text-slate-400">💬 3 logs</span>
                </div>
              </div>
            </div>
            {/* Column 3 */}
            <div className="bg-slate-200/60 p-4 rounded-xl flex flex-col gap-y-3 h-fit border border-slate-200">
              <span className="font-bold text-xs text-slate-700 px-1 mb-1 tracking-wider uppercase">✅ Completed</span>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/80 hover:shadow transition duration-200 opacity-75">
                <p className="text-xs font-semibold text-slate-750 line-through">Integrate Clerk authentications</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold uppercase">Auth</span>
                  <span className="text-[10px] text-slate-400">✔️ Done</span>
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
            Core Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-800 mb-4">
            Everything you need to manage projects
          </h2>
          <p className="text-neutral-500 text-sm md:text-base">
            Taskify brings all your tasks, teammates, and files together. Keep everything in one clean, lightning-fast workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:-translate-y-1 hover:shadow-md transition duration-300 flex flex-col">
            <div className="p-3 bg-fuchsia-100 text-fuchsia-700 rounded-xl w-fit mb-4">
              <Kanban className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-neutral-800 mb-2">Visual Kanban Boards</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Create dedicated boards for projects, organize tasks into custom lists, and drag cards to update progress instantly.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:-translate-y-1 hover:shadow-md transition duration-300 flex flex-col">
            <div className="p-3 bg-blue-100 text-blue-700 rounded-xl w-fit mb-4">
              <Activity className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-neutral-800 mb-2">Detailed Activity Logs</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Track every action on boards, lists, and cards. Always know who created, moved, renamed, or completed a task.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:-translate-y-1 hover:shadow-md transition duration-300 flex flex-col">
            <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl w-fit mb-4">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-neutral-800 mb-2">Organization Workspace</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Manage organization workspaces with secure Clerk authentication. Invite members to collaborate on shared boards.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:-translate-y-1 hover:shadow-md transition duration-300 flex flex-col">
            <div className="p-3 bg-amber-100 text-amber-700 rounded-xl w-fit mb-4">
              <CreditCard className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-neutral-800 mb-2">Stripe Pro Subscriptions</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Upgrade to the Pro tier seamlessly using Stripe billing to unlock unlimited boards and premium project capacities.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:-translate-y-1 hover:shadow-md transition duration-300 flex flex-col">
            <div className="p-3 bg-indigo-100 text-indigo-700 rounded-xl w-fit mb-4">
              <ListTodo className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-neutral-800 mb-2">Advanced Card Details</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Add rich descriptions, set priorities, and see logs specific to individual tasks right inside the card details.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:-translate-y-1 hover:shadow-md transition duration-300 flex flex-col">
            <div className="p-3 bg-rose-100 text-rose-700 rounded-xl w-fit mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-neutral-800 mb-2">Optimistic UI Performance</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Experience instant interactions with state syncing in the background, minimizing loaders and delays.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing / Plan Comparison Section */}
      <div className="w-full max-w-5xl py-12 px-6 border-t border-slate-200/80">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border rounded-3xl p-8 md:p-12 shadow-sm">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
              Free plan vs. Taskify Pro
            </h3>
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-6">
              Create up to 5 boards for free, or lift all limits by upgrading to Taskify Pro. Subscriptions are billed securely using Stripe, and can be cancelled at any time.
            </p>
            <div className="space-y-3.5">
              <div className="flex items-center gap-x-2.5 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-sm font-medium">Unlimited workspaces & boards for Pro</span>
              </div>
              <div className="flex items-center gap-x-2.5 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-sm font-medium">Full organization activity logs</span>
              </div>
              <div className="flex items-center gap-x-2.5 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-sm font-medium">Drag-and-drop card & list reordering</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg h-full min-h-[220px]">
            <div>
              <span className="text-xs bg-white/20 text-white px-2.5 py-1 rounded-full font-bold uppercase tracking-wider w-fit">
                Unlimited Boards
              </span>
              <h4 className="text-2xl font-bold mt-4 mb-2">Taskify Pro</h4>
              <p className="text-slate-300 text-xs md:text-sm">
                For power users who need advanced organization scaling and unlimited boards.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between gap-x-4">
              <div className="flex items-baseline gap-x-1">
                <span className="text-3xl font-extrabold">$5</span>
                <span className="text-xs text-slate-400">/ month</span>
              </div>
              <Button variant="outline" className="bg-white text-slate-900 border-none hover:bg-slate-100" asChild>
                <Link href="/sign-up">
                  Try Pro Now
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
            Start organizing your tasks with Taskify today
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-lg mb-8 leading-relaxed">
            Join thousands of teams already using Taskify to collaborate, visualize workloads, and accelerate project delivery.
          </p>
          <Button size="lg" className="bg-white text-fuchsia-700 hover:bg-slate-100 border-none shadow-md font-semibold" asChild>
            <Link href="/sign-up">
              Get Taskify for free
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
