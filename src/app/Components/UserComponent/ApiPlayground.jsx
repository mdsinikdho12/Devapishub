"use client";
import { useState } from "react";
import {
  Play,
  Loader2,
  Globe,
  Database,
  Terminal,
  ShieldAlert,
} from "lucide-react";

export default function ApiPlayground() {
  const [endpoint, setEndpoint] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");

  const validateUrl = (url) => {
    try {
      const parsed = new URL(url);
      return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
      return false;
    }
  };

  const handleCall = async () => {
    setError("");

    if (!validateUrl(endpoint)) {
      setError("সঠিক URL প্রদান করুন (e.g., https://api.example.com)");
      return;
    }

    setLoading(true);
    setResponse(null);
    const startTime = performance.now();

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
      const res = await fetch(endpoint, {
        method: "GET",
        signal: controller.signal,
        headers: {
          Accept: "application/json",
        },
      });

      clearTimeout(timeoutId);

      const data = await res.json();
      const endTime = performance.now();

      setResponse(data);
      setStatus({
        code: res.status,
        text: res.statusText,
        time: Math.round(endTime - startTime) + "ms",
      });
    } catch (err) {
      if (err.name === "AbortError") {
        setError("Request Timeout: সার্ভার থেকে সাড়া পাওয়া যায়নি।");
      } else {
        setError("Connection Failed: ইউআরএল বা নেটওয়ার্ক চেক করুন।");
      }
      setResponse(null);
      setStatus({ code: "ERR", text: "Failed", time: "0ms" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-[#0F1720] mt-10 text-slate-200 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden transition-all duration-300">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal size={18} className="text-[#7B61FF]" />
          <h2 className="font-semibold text-sm tracking-wide uppercase">
            API Explorer
          </h2>
        </div>
        {status && (
          <div className="flex gap-4 text-xs font-medium">
            <span
              className={status.code < 300 ? "text-green-400" : "text-red-400"}>
              STATUS: {status.code} {status.text}
            </span>
            <span className="text-slate-500">TIME: {status.time}</span>
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Error Alert */}
        {error && (
          <div className="mb-4 flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            <ShieldAlert size={16} />
            {error}
          </div>
        )}

        {/* Input box */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="relative flex-1 group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
              <Globe size={16} />
            </div>
            <input
              type="text"
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              placeholder="আপনার এপিআই এন্ডপয়েন্ট এখানে দিন"
              className={`w-full bg-slate-800 border ${error ? "border-red-500/50" : "border-slate-700"} pl-10 pr-4 py-2.5 rounded-lg text-sm outline-none transition-all focus:border-[#7B61FF]`}
            />
          </div>

          <button
            onClick={handleCall}
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-[#7B61FF] hover:bg-[#6a51e6] disabled:bg-slate-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all active:scale-95 min-w-[140px]">
            {loading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Play size={18} fill="currentColor" />
            )}
            {loading ? "Testing..." : "Run Request"}
          </button>
        </div>

        {/* Response Window */}
        <div className="relative group">
          <div className="absolute right-4 top-4 text-slate-600 text-[10px] uppercase tracking-widest">
            JSON Response
          </div>
          <div className="bg-[#0a0f1a] rounded-xl p-5 h-[350px] overflow-auto border border-slate-800 custom-scrollbar shadow-inner font-mono text-sm">
            {response ? (
              <pre className="text-green-700 leading-relaxed overflow-x-auto">
                {JSON.stringify(response, null, 2)}
              </pre>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-600 space-y-2">
                <Database size={40} strokeWidth={1} />
                <p className="italic text-xs">Ready to fetch data safely.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer  */}
      <div className="px-6 py-3 bg-slate-900/30 border-t border-slate-800 text-[10px] text-slate-500 flex justify-between">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>{" "}
          SECURE GET ONLY
        </span>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
