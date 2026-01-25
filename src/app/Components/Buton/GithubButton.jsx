"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Github } from "lucide-react";

function GithubButton() {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/mdsinikdho12/DevApiHub", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => setStars(0));
  }, []);

  return (
    <Link
      href="https://github.com/mdsinikdho12/DevApiHub"
      target="_blank"
      className="group relative inline-flex items-center justify-center p-[1px] rounded-full transition-all duration-300 active:scale-95">
      <div className="flex items-center ">
        <button className="flex items-center gap-1 px-3 py-2 text-yellow-400 hover:text-yellow-300 transition text-sm font-medium">
          <span>⭐</span> {stars}
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-600 hover:border-gray-400 transition flex items-center justify-center text-gray-300 hover:text-white">
          <Github size={20} />
        </button>
      </div>
    </Link>
  );
}

export default GithubButton;
