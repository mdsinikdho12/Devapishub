"use client";

import { Languages } from "lucide-react";

function Lang({ CurrentLang }) {
  const Togglehandler = () => {
    const newLang = CurrentLang === "en" ? "bn" : "en";
    document.cookie = `lang=${newLang}; path=/`;

    window.location.reload();
  };

  return (
    <div className="flex justify-end mb-6">
      <button
        onClick={Togglehandler}
        className="flex items-center gap-2 bg-[#0F1720] border border-white/10 px-4 py-2 rounded-full hover:bg-white/5 transition-all text-sm font-medium text-blue-400">
        <Languages size={18} />

        {CurrentLang === "en" ? "বাংলা দেখুন" : "View English"}
      </button>
    </div>
  );
}

export default Lang;
