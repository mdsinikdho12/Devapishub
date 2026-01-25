import Snippet from "@/app/Components/Snippet";
import Image from "next/image";
import { BookOpen, ExternalLink, Cpu } from "lucide-react";

export default function ApiCard({ api }) {
  return (
    <div className="group relative flex flex-col w-full max-w-sm h-[400px] bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
            <Image
              src={api.icon || "/image/default.png"}
              width={50}
              height={50}
              alt={api.name}
            />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
            free
          </span>
        </div>

        <h2 className="text-xl font-semibold text-slate-100 group-hover:text-white transition-colors">
          {api.name}
        </h2>
        <p className="mt-3 text-sm text-slate-400 leading-6 line-clamp-3">
          {api.description ||
            "No description provided for this endpoint. Check documentation for implementation details."}
        </p>
      </div>

      <div className="px-6 py-2 flex-1">
        <div className="relative rounded-lg    p-1 transition-colors">
          <div className="absolute top-2 right-3 flex gap-1">
            <div className="w-2 h-2 rounded-full bg-slate-700"></div>
            <div className="w-2 h-2 rounded-full bg-slate-700"></div>
          </div>
          <Snippet apiId={api._id.toString()} />
        </div>
      </div>

      <div className="mt-auto p-6 pt-4 flex items-center justify-between border-t border-slate-800/50">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-400 tracking-wide uppercase">
            {api.category}
          </span>
        </div>

        <button
          className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-slate-800"
          aria-label="View Documentation">
          Docs <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
