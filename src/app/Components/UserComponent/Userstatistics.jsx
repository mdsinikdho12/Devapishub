import Link from "next/link";
import {
  Zap,
  Activity,
  BarChart3,
  AlertCircle,
  ArrowUpRight,
  RefreshCcw,
  Star,
  Key,
  FolderPlus,
  X,
  Crown,
  CheckCircle2,
} from "lucide-react";

function Userstatistics({
  isPremium,
  session,
  usagePercentage,
  remaining,
  limits,
}) {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Activity
              className={isPremium ? "text-amber-400" : "text-blue-500"}
              size={24}
            />
            {isPremium ? "Premium Dashboard" : "Usage Overview"}
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Welcome back, {session?.user?.name}.
          </p>
        </div>

        {/* Plan Badge */}
        <div
          className={`flex items-center gap-3 border p-3 rounded-2xl ${
            isPremium
              ? "bg-amber-500/10 border-amber-500/20"
              : "bg-slate-900 border-slate-800"
          }`}>
          <div
            className={`p-2 rounded-md ${
              isPremium
                ? "text-amber-500 bg-amber-500/20"
                : "text-blue-500 bg-blue-500/20"
            }`}>
            {isPremium ? (
              <Crown size={18} fill="currentColor" />
            ) : (
              <Zap size={18} fill="currentColor" />
            )}
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
              Current Plan
            </p>
            <p
              className={`text-sm font-bold capitalize ${
                isPremium ? "text-amber-400" : "text-white"
              }`}>
              {session?.user?.subscriptionPlan || "Free"} Member
            </p>
          </div>
        </div>
      </div>

      {/* Main Stats Card */}
      <div className="grid gap-6 md:grid-cols-3">
        <div
          className={`md:col-span-2 rounded-3xl border p-8 relative overflow-hidden ${
            isPremium
              ? "bg-gradient-to-br from-slate-900 to-amber-900/20 border-amber-500/20"
              : "bg-slate-900 border-slate-800"
          }`}>
          <div className="relative z-10">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-slate-400 text-sm font-medium">
                  {isPremium ? "Total API Access" : "Daily Copy Usage"}
                </p>
                <h2 className="text-4xl font-black text-white mt-1">
                  {isPremium ? "Unlimited" : `${usagePercentage}%`}
                </h2>
              </div>
              {!isPremium && (
                <div className="text-right">
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter text-blue-400">
                    Remaining
                  </p>
                  <p className="text-lg font-bold text-white">
                    {remaining < 0 ? 0 : remaining}
                  </p>
                </div>
              )}
            </div>

            {/* Progress Bar */}
            {isPremium ? (
              <div className="flex items-center gap-2 text-amber-400 font-medium bg-amber-400/10 w-fit px-4 py-2 rounded-full border border-amber-400/20">
                <CheckCircle2 size={16} /> All daily limits removed
              </div>
            ) : (
              <>
                <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                    style={{ width: `${usagePercentage}%` }}
                  />
                </div>
                <div className="mt-6 flex justify-between text-sm font-medium">
                  <span className="text-slate-300">
                    {limits.copeidToday} Used
                  </span>
                  <span className="text-slate-500">
                    {limits.Dailylimit} Daily Limit
                  </span>
                </div>
              </>
            )}
          </div>
          <BarChart3 className="absolute -right-4 -bottom-4 text-white/5 w-32 h-32" />
        </div>

        {/* Side Card: Upgrade for Free, Info for Premium */}
        <div
          className={`rounded-3xl border p-6 flex flex-col justify-between ${
            isPremium
              ? "bg-slate-900 border-slate-800"
              : "bg-blue-600 border-blue-500"
          }`}>
          <div className="flex items-center justify-between">
            <div
              className={`p-2 rounded-lg ${
                isPremium
                  ? "bg-amber-500/10 text-amber-500"
                  : "bg-white/20 text-white"
              }`}>
              {isPremium ? <Crown size={20} /> : <AlertCircle size={20} />}
            </div>
            {isPremium ? null : (
              <ArrowUpRight className="text-white/60" size={18} />
            )}
          </div>
          <div>
            <p
              className={`text-sm font-medium leading-relaxed ${
                isPremium ? "text-slate-400" : "text-white"
              }`}>
              {isPremium
                ? "You have full access to all premium endpoints and features."
                : "You are currently using the free version with daily limits."}
            </p>
            {!isPremium && (
              <Link
                href="/pricing"
                className="mt-4 block w-full py-3 bg-white text-blue-600 text-center rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">
                Upgrade to Pro
              </Link>
            )}
            {isPremium && (
              <div className="mt-4 py-3 px-4 bg-slate-800 text-center rounded-xl font-bold text-xs text-amber-400 border border-amber-500/20">
                VIP SUPPORT ACTIVE
              </div>
            )}
          </div>
        </div>
      </div>

      {/*  */}

      {/* Footer info */}
      <div className="mt-8 flex items-center gap-3 text-slate-500 text-xs px-2">
        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        System Active: {session?.user?.email}
      </div>
    </div>
  );
}

export default Userstatistics;
