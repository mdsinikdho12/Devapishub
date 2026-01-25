import Link from "next/link";
import { Home, ChevronLeft, Search, Globe } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-6 overflow-hidden relative">
      <div className="max-w-2xl w-full text-center relative z-10">
        <div className="relative inline-block mb-4">
          <span className="text-[12rem] md:text-[15rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-400 to-slate-800 opacity-10">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center"></div>
        </div>

        <div className="mt-[-2rem] space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Lost in the <span className="text-blue-500">Void?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-md mx-auto leading-relaxed">
            The page you're looking for has been moved to another dimension or
            never existed in this galaxy.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center font-semibold">
          <Link
            href="/"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-black hover:bg-blue-50 transition-all duration-300 shadow-xl shadow-white/5">
            <Home
              size={18}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
            Back to Dashboard
          </Link>

          <Link
            href="/support"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-white hover:border-slate-600 transition-all duration-300">
            Contact Support
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-500 hover:text-slate-300 cursor-pointer transition-colors">
              Documentation
            </span>
            <span className="text-xs text-slate-500 hover:text-slate-300 cursor-pointer transition-colors">
              API Status
            </span>
            <span className="text-xs text-slate-500 hover:text-slate-300 cursor-pointer transition-colors">
              Twitter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
