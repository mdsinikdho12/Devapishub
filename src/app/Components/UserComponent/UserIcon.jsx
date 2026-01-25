"use client";

import { useSession } from "next-auth/react";
import { User, LogIn } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

function UserIcon() {
  const [isDropdownMenu, setDropdownmenu] = useState(false);
  const { data: session, status } = useSession();

  const getInitials = (name) => {
    if (!name) return "U";
    const names = name.split(" ");
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  };

  if (status === "loading") {
    return (
      <div className="h-9 w-9 rounded-full bg-slate-800 animate-pulse border border-slate-700" />
    );
  }

  if (session) {
    const { name } = session.user;

    return (
      <>
        <div className="group relative flex items-center gap-3 cursor-pointer">
          <div
            onClick={() => setDropdownmenu(!isDropdownMenu)}
            className="h-9 w-9 rounded-full bg-[#7B61FF] flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-[#7B61FF]/20 border border-[#7B61FF]/50 hover:scale-105 transition-transform">
            {getInitials(name)}
          </div>
        </div>
        {isDropdownMenu && (
          <>
            <DropdownMenu session={session} />
            <div
              className="fixed inset-0 z-40"
              onClick={() => setDropdownmenu(!isDropdownMenu)}
            />{" "}
          </>
        )}
      </>
    );
  }

  return (
    <Link
      href="/login"
      className="flex items-center gap-2 px-4 py-2 bg-[#7B61FF] hover:bg-[#6a51e6] text-white text-sm font-semibold rounded-lg transition-all active:scale-95 shadow-lg shadow-[#7B61FF]/20">
      <LogIn className="w-4 h-4" />
      <span>Sign In</span>
    </Link>
  );
}

export default UserIcon;
