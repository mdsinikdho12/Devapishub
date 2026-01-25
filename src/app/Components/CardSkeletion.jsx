export default function CardSkeleton() {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-slate-800 bg-[#0b1220] p-6 shadow-xl">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="flex items-start justify-between">
        <div className="h-12 w-12 rounded-xl bg-slate-800/80" />
        <div className="h-6 w-14 rounded-full bg-slate-800/80" />
      </div>

      <div className="mt-6 h-6 w-3/4 rounded-lg bg-slate-800/80" />

      <div className="mt-4 space-y-3">
        <div className="h-3 w-full rounded-md bg-slate-800/50" />
        <div className="h-3 w-5/6 rounded-md bg-slate-800/50" />
        <div className="h-3 w-4/6 rounded-md bg-slate-800/50" />
      </div>

      <div className="mt-6 rounded-xl bg-[#020617] p-4 ring-1 ring-slate-800">
        <div className="h-3 w-2/3 rounded bg-slate-800/80" />
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-800/50 pt-4">
        <div className="h-4 w-28 rounded-lg bg-slate-800/80" />
        <div className="h-8 w-8 rounded-full bg-slate-800/80" />
      </div>
    </div>
  );
}
