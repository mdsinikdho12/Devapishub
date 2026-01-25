"use client";
import React from "react";
import {
  LogOut,
  BarChart3,
  LayoutDashboard,
  ShieldCheck,
  ChevronRight,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";

function DropdownMenu({ session }) {
  const userRole = session?.user?.role || "user";
  const userEmail = session?.user?.email || "No email found";
  const plan = session?.user?.subscriptionPlan || "free";

  const roleConfig = {
    user: {
      title: "User Account",
      badge: "User",
      accent: "text-blue-400",
      bg: "from-blue-600/20 to-slate-900",
      items: [
        {
          icon: LayoutDashboard,
          label: "My Dashboard",
          href: "/user/dashboard",
        },
      ],
    },
    admin: {
      title: "System Control",
      badge: "Administrator",
      accent: "text-rose-400",
      bg: "from-rose-600/20 to-slate-900",
      items: [
        { icon: ShieldCheck, label: "Admin Panel", href: "/admin/dashboard" },
        { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
        { icon: Zap, label: "Manage Users", href: "/admin/users" },
      ],
    },
  };

  const config = roleConfig[userRole] || roleConfig.user;

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  return (
    <div className="relative">
      <div className="absolute right-0 w-72 mt-3 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl animate-in fade-in zoom-in duration-200 z-50">
        <div
          className={`bg-gradient-to-br ${config.bg} p-5 border-b border-slate-800`}>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-white font-bold uppercase">
              {session?.user?.name?.charAt(0) || "U"}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-bold text-white">
                {session?.user?.name || "Hevapihub User"}
              </p>
              <p className="truncate text-[11px] text-slate-400">{userEmail}</p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <span
              className={`text-[10px] font-bold uppercase tracking-tighter ${config.accent} bg-white/5 px-2 py-0.5 rounded border border-white/10`}>
              {config.badge}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-tighter text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
              Plan: {plan}
            </span>
          </div>
        </div>

        <div className="p-2">
          {config.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="group flex items-center justify-between rounded-xl px-3 py-2.5 transition-all hover:bg-slate-800/50">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-slate-800 p-1.5 text-slate-400 group-hover:text-white transition-colors">
                    <Icon size={16} />
                  </div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white">
                    {item.label}
                  </span>
                </div>
                <ChevronRight
                  size={14}
                  className="text-slate-600 group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            );
          })}
        </div>

        <div className="mt-2 border-t border-slate-800 bg-slate-950/30 p-2">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-rose-400 transition-all hover:bg-rose-500/10 hover:text-rose-300">
            <div className="rounded-lg bg-rose-500/10 p-1.5">
              <LogOut size={16} />
            </div>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
