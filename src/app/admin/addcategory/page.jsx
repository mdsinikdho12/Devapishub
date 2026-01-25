"use client";
import { useState } from "react";
import { addCetegory } from "@/action/admin.action";
import { Plus, Tag, Smile, Loader2 } from "lucide-react";

function Page() {
  const [icon, setIcon] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !icon) {
      setMessage({ type: "error", text: "Please fill in all fields" });
      return;
    }

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const result = await addCetegory(icon, name);

      if (result?.success) {
        setName("");
        setIcon("");
        setMessage({ type: "success", text: "Category added successfully!" });
      } else {
        setMessage({
          type: "error",
          text: result?.message || "Something went wrong",
        });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Server connection failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[500px] p-6 text-slate-200">
      <div className="w-full max-w-md bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl shadow-black/40">
        {/* Header section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Create Category
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Configure your hub navigation items
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          {/* Icon Input Group */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">
              Icon / Emoji
            </label>
            <div className="relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors">
                <Smile size={18} />
              </span>
              <input
                placeholder="e.g. ⚡"
                className="w-full bg-slate-950/40 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-700"
                type="text"
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
              />
            </div>
          </div>

          {/* Name Input Group */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">
              Category Name
            </label>
            <div className="relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors">
                <Tag size={18} />
              </span>
              <input
                placeholder="e.g. Development"
                className="w-full bg-slate-950/40 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-700"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          {/* Status Message */}
          {message.text && (
            <div
              className={`text-sm p-3 rounded-lg border ${
                message.type === "success"
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                  : "bg-rose-500/10 border-rose-500/20 text-rose-400"
              }`}>
              {message.text}
            </div>
          )}

          {/* Submit Button */}
          <button
            disabled={loading}
            className="group relative flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-semibold py-3 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-blue-900/20 overflow-hidden"
            type="submit">
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <Plus
                  size={18}
                  className="group-hover:rotate-90 transition-transform"
                />
                <span>Add Category</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
