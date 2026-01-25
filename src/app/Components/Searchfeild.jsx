"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { LayoutGrid, ChevronDown, Search } from "lucide-react";
import { getAllCategory } from "@/action/admin.action";

const ApiSearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(
    searchParams.get("category") || "All categories",
  );

  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategorys] = useState([]);
  const dropdownRef = useRef(null);
  const getCategory = async () => {
    try {
      const res = await getAllCategory();

      if (res?.success) {
        setCategorys(res.data);
      }
    } catch (error) {
      console.error("Failed to load categories", error);
    }
  };

  useEffect(() => {
    getCategory();
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    if (category && category !== "All categories") {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    params.set("page", "1");

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-10">
      <div className="flex items-center w-full border border-slate-800 rounded-xl bg-[#0F172A] shadow-lg">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-5 py-4 text-slate-300  transition-colors border-r border-slate-800 min-w-[180px] text-left">
            <LayoutGrid size={18} className="text-slate-400" />
            <span className="text-sm font-medium whitespace-nowrap flex-1">
              {category}
            </span>
            <ChevronDown
              size={16}
              className={`text-slate-500 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-[#1E293B] border border-slate-700 rounded-lg shadow-2xl z-[100] py-2 animate-in fade-in zoom-in duration-150">
              {categories.map((cat) => (
                <button
                  key={cat._id}
                  onClick={() => {
                    setCategory(cat.name);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2  text-sm transition-colors ${
                    category === cat
                      ? "bg-[#7B61FF] text-white"
                      : "text-slate-300 hover:bg-slate-700"
                  }`}>
                  {cat.icon}
                  {cat.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 flex items-center px-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search for APIs..."
            className="w-full bg-transparent border-none outline-none text-slate-200 placeholder:text-slate-500 text-sm py-3 focus:ring-0"
          />
        </div>

        <button
          onClick={handleSearch}
          className="flex items-center gap-2 bg-[#7B61FF] hover:bg-[#6344f5] text-white px-6 py-4 transition-all font-semibold text-sm active:scale-95 rounded-r-xl">
          <Search size={18} />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default ApiSearchBar;
