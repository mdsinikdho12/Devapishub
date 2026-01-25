"use client";
import React from "react";
import { Terminal, Copy, Check, Zap, Cpu, Globe, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const CodePreview = () => {
  const [copied, setCopied] = React.useState(false);

  const codeString = `// No keys, no config. Just fetch and build.
fetch('https://api.devapihub.com/v1/data/sample')
  .then(res => res.json())
  .then(data => console.log("Project Ready:", data))
  .catch(err => console.error("Quick Fix:", err));`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    {
      icon: <Zap className="w-4 h-4 text-purple-400" />,
      label: "Instant Endpoints",
      desc: "Ready-to-use JSON data for your UI components.",
    },
    {
      icon: <Cpu className="w-4 h-4 text-blue-400" />,
      label: "Zero Configuration",
      desc: "Skip the backend setup. Focus entirely on your frontend.",
    },
    {
      icon: <Globe className="w-4 h-4 text-emerald-400" />,
      label: "Public Access",
      desc: "No API keys required for testing and small-scale projects.",
    },
    {
      icon: <Rocket className="w-4 h-4 text-orange-400" />,
      label: "Prototyping Ready",
      desc: "The perfect companion for Hackathons and MVPs.",
    },
  ];

  return (
    <section className="py-24 px-6 relative bg-[#0B0F14] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#7B61FF]/10 blur-[150px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 leading-tight mb-6">
                Rapid Prototyping with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B61FF] to-blue-400">
                  Instant APIs
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Stop wasting time setting up mock servers. DevApiHub provides a
                curated collection of public endpoints designed specifically for
                small projects, learning, and rapid development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-[#7B61FF]/50 transition-colors group">
                  <div className="mb-3 p-2 w-fit rounded-lg bg-slate-800 group-hover:bg-[#7B61FF]/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-slate-200 font-semibold mb-1">
                    {item.label}
                  </h3>
                  <p className="text-slate-500 text-sm leading-snug">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative">
            {/* Animated Glow behind terminal */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#7B61FF]/20 to-blue-500/20 rounded-3xl blur-2xl animate-pulse"></div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative bg-[#0F172A] rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 bg-slate-800/50 border-b border-slate-700/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">
                  <Terminal className="w-3 h-3" />
                  quick-start.js
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <pre className="text-slate-300">
                  <span className="text-slate-500 italic">
                    // Instant data for your small apps
                  </span>
                  <br />
                  <span className="text-pink-400">fetch</span>(
                  <span className="text-emerald-400">
                    'https://api.devapihub.com/v1/endpoint'
                  </span>
                  )<br />
                  &nbsp;&nbsp;.<span className="text-blue-400">then</span>(res
                  =&gt; res.<span className="text-blue-400">json</span>())
                  <br />
                  &nbsp;&nbsp;.<span className="text-blue-400">then</span>(data
                  =&gt; {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-slate-400">console</span>.
                  <span className="text-blue-400">log</span>(data);
                  <br />
                  &nbsp;&nbsp;{"}"})<br />
                  &nbsp;&nbsp;.<span className="text-blue-400">catch</span>(err
                  =&gt; <span className="text-pink-400">error</span>(err));
                </pre>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodePreview;
