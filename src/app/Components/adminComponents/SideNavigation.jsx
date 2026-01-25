import React from "react";
import {
  LayoutDashboard,
  PlusCircle,
  Tag,
  Settings,
  User,
  Key,
} from "lucide-react";
import Link from "next/link";

function SideNavigation() {
  return (
    <div className="w-16  flex flex-col gap-4 p-2  text-white">
      <Link
        href="/admin/dashboard"
        className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-900 cursor-pointer transition-colors"
        title="Dashboard">
        <LayoutDashboard size={24} />
      </Link>

      <Link
        href="/admin/addApi"
        className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-900 cursor-pointer transition-colors"
        title="Add API">
        <PlusCircle size={24} />
      </Link>
      <Link
        href="/admin/addcategory"
        className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-900 cursor-pointer transition-colors"
        title="Add category">
        <Tag size={24} />
      </Link>

      {/* <Link
        href="/"
        className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-900 cursor-pointer transition-colors"
        title="Settings">
        <Settings size={24} />
      </Link> */}

      <Link
        href="/admin/allApi"
        className="w-12 h-12  flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-900 cursor-pointer transition-colors"
        title="All api key">
        <Key size={24} />
      </Link>
    </div>
  );
}

export default SideNavigation;
