"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  Zap,
  Activity,
  BarChart3,
  AlertCircle,
  ArrowUpRight,
  RefreshCcw,
  Star,
  Key,
  FolderPlus,
  X,
  Crown,
  CheckCircle2,
} from "lucide-react";
import { getUserLimit } from "@/action/user.action";
import Link from "next/link";
import Userstatistics from "@/app/Components/UserComponent/Userstatistics";

import Reviewbox from "@/app/Components/UserComponent/Reviewbox";

export default function UserDashboard() {
  const { data: session, status } = useSession();
  const [limits, setLimits] = useState({ copeidToday: 0, Dailylimit: 0 });
  const [loading, setLoading] = useState(true);

  const isPremium =
    session?.user?.subscriptionPlan === "pro" ||
    session?.user?.subscriptionPlan === "premium";

  useEffect(() => {
    async function fetchLimits() {
      if (session?.user?.id) {
        const res = await getUserLimit(session.user.id);
        if (!res.error) {
          setLimits({
            copeidToday: res.copeidToday || 0,
            Dailylimit: res.Dailylimit || 0,
          });
        }
        setLoading(false);
      }
    }
    fetchLimits();
  }, [session]);

  if (status === "loading" || loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <RefreshCcw className="h-6 w-6 animate-spin text-blue-500" />
          <p className="text-sm text-slate-500 font-medium">
            Loading Statistics...
          </p>
        </div>
      </div>
    );
  }

  const usagePercentage =
    limits.Dailylimit > 0
      ? Math.min(
          Math.round((limits.copeidToday / limits.Dailylimit) * 100),
          100
        )
      : 0;

  const remaining = limits.Dailylimit - limits.copeidToday;

  return (
    <div className="relative min-h-screen p-6 lg:p-10 text-slate-200">
      <Userstatistics
        isPremium={isPremium}
        session={session}
        usagePercentage={usagePercentage}
        remaining={remaining}
        limits={limits}
      />
      {/* 
      <Reviewbox /> */}
    </div>
  );
}
