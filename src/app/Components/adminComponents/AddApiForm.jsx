"use client";

import { useState, useEffect } from "react";
import { addApi } from "@/action/api.action";
import { getAllCategory } from "@/action/admin.action";
import {
  PlusCircle,
  Link as LinkIcon,
  Type,
  FileText,
  Layers,
  Image as ImageIcon,
  Loader2,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddApiPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [categories, setCategorys] = useState([]);

  const router = useRouter();
  const getCategory = async () => {
    try {
      const res = await getAllCategory();
      console.log("CATEGORY RES:", res);

      if (res?.success) {
        setCategorys(res.data);
      }
    } catch (error) {
      console.error("Failed to load categories", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setStatus({ type: "", message: "" });

    const rawData = {
      name: formData.get("name"),
      icon: formData.get("icon"),
      description: formData.get("description"),
      category: formData.get("category"),
      apiEndpint: formData.get("apiEndpoint"),
      documentation: formData.get("documentation"),
    };

    const res = await addApi(rawData);

    if (res.success) {
      setStatus({ type: "success", message: "API added successfully!" });
    } else {
      setStatus({
        type: "error",
        message: res.message || "Something went wrong",
      });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen text-slate-200 p-6 flex justify-center items-center">
      <div className="max-w-2xl w-full">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <PlusCircle className="text-blue-500" size={28} />
            Add New API
          </h1>
          <p className="text-slate-500 mt-2 text-sm ml-10">
            Expand your library by adding a new resource.
          </p>
        </div>

        <div className="border rounded border-slate-800  p-8 md:p-10">
          <form action={handleSubmit} className="space-y-7">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                  API Name
                </label>
                <div className="relative">
                  <Type
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                    size={18}
                  />
                  <input
                    name="name"
                    required
                    placeholder="Weather Pro"
                    className="w-full bg-transparent border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                  Icon URL
                </label>
                <div className="relative">
                  <ImageIcon
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                    size={18}
                  />
                  <input
                    name="icon"
                    required
                    placeholder="https://..."
                    className="w-full bg-transparent border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm"
                  />
                </div>
              </div>
            </div>

            {/* --- Documentation Link Field --- */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                Documentation URL
              </label>
              <div className="relative">
                <BookOpen
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                  size={18}
                />
                <input
                  name="documentation"
                  required
                  type="url"
                  placeholder="https://docs.example.com"
                  className="w-full bg-transparent border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm"
                />
              </div>
            </div>
            {/* ------------------------------ */}

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                Category
              </label>
              <div className="relative">
                <Layers
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                  size={18}
                />
                <select
                  name="category"
                  required
                  className="w-full bg-transparent border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm appearance-none cursor-pointer">
                  {categories.length > 0 ? (
                    categories.map((cate) => (
                      <option
                        key={cate._id}
                        value={cate.name}
                        className="bg-slate-950">
                        {" "}
                        {cate.icon} {cate.name}
                      </option>
                    ))
                  ) : (
                    <option>Loading...</option>
                  )}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                API Endpoint
              </label>
              <div className="relative">
                <LinkIcon
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                  size={18}
                />
                <input
                  name="apiEndpoint"
                  required
                  placeholder="https://api.example.com/v1"
                  className="w-full bg-transparent border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                Description
              </label>
              <div className="relative">
                <FileText
                  className="absolute left-4 top-4 text-slate-600"
                  size={18}
                />
                <textarea
                  name="description"
                  required
                  rows={4}
                  placeholder="What does this API do?"
                  className="w-full bg-transparent border border-slate-800 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm resize-none"
                />
              </div>
            </div>

            {status.message && (
              <div
                className={`p-4 rounded-2xl flex items-center gap-3 text-sm font-medium animate-in fade-in slide-in-from-top-2 ${
                  status.type === "success"
                    ? "bg-emerald-500/5 text-emerald-500 border border-emerald-500/20"
                    : "bg-red-500/5 text-red-500 border border-red-500/20"
                }`}>
                {status.type === "success" && <CheckCircle2 size={18} />}
                {status.message}
              </div>
            )}

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-white text-slate-950 hover:bg-slate-200 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group">
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                "Publish API"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
