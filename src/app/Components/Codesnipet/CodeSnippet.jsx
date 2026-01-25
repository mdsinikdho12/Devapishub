"use client";
import { Copy, Check, Terminal, Code2 } from "lucide-react";
import { useState } from "react";

const FetchSection = ({ fetchTitle, fetchDesc }) => {
  const [copied, setCopied] = useState(false);

  const codeString = `// Using Async/Await (Modern Way)
const getExchangeRate = async () => {
  try {
    const response = await fetch('https://api.devapihub.com/v1/usd-to-bdt');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getExchangeRate();`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
          <Code2 size={24} className="text-purple-400" /> {fetchTitle}
        </h2>
        <p className="leading-relaxed text-gray-400">{fetchDesc}</p>
      </div>

      {/* --- Advanced Code Editor UI --- */}
      <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-[#0B1219]">
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
          </div>
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium">
            {copied ? (
              <Check size={14} className="text-green-400" />
            ) : (
              <Copy size={14} />
            )}
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </div>

        {/* Code Content */}
        <pre className="p-6 text-sm text-blue-300 overflow-x-auto font-mono leading-relaxed">
          <code>{codeString}</code>
        </pre>
      </div>

      {/* --- Live Response Preview --- */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
          <Terminal size={14} /> Example Response
        </h4>
        <div className="bg-black/20 border border-dashed border-white/10 rounded-xl p-4 font-mono text-xs text-green-400/80">
          <span className="text-gray-500">// Output:</span>
          {` {
  "status": "success",
  "base": "USD",
  "target": "BDT",
  "rate": 121.45,
  "last_updated": "2024-05-20"
}`}
        </div>
      </div>
    </section>
  );
};

export default FetchSection;
