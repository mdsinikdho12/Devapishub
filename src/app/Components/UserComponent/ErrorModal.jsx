"use client";

import { X, OctagonAlert } from "lucide-react";
import { useEffect } from "react";

export default function ErrorModal({ message, onClose }) {
  useEffect(() => {
    if (message) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "unset");
  }, [message]);

  if (!message) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity"
      role="dialog"
      aria-modal="true">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="h-1 w-full bg-red-500/50" />

        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-red-500/10 p-2 text-red-500">
                <OctagonAlert size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-white">
                  System Error
                </h2>
                <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                  Access Restricted
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-lg p-1 text-slate-500 transition-colors hover:bg-slate-800 hover:text-white"
              aria-label="Close modal">
              <X size={20} />
            </button>
          </div>

          <div className="mt-5 rounded-lg bg-slate-950/50 p-4 border border-slate-800/50">
            <p className="text-sm leading-relaxed text-slate-300">{message}</p>
          </div>

          <div className="mt-8">
            <button
              onClick={onClose}
              className="w-full rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:bg-slate-200 active:scale-[0.98]">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
