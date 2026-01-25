"use client";
import { useState } from "react";
import { MoreVertical, Trash2, Crown, UserCheck, Loader2 } from "lucide-react";
import { changeRole, userPlanChnage, deleteUser } from "@/action/admin.action";
import { useRouter } from "next/navigation";

export default function ActionButtons({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAction = async (actionFn, ...args) => {
    try {
      setLoading(true);
      const res = await actionFn(...args);

      if (res.success) {
        setIsOpen(false);
        router.refresh();
      } else {
        alert(res.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Action failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        disabled={loading}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-slate-600 hover:text-white hover:bg-slate-800 rounded-lg transition-all disabled:opacity-50">
        {loading ? (
          <Loader2 className="animate-spin" size={18} />
        ) : (
          <MoreVertical size={18} />
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}></div>

          <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-md shadow-xl z-20 overflow-hidden">
            <button
              disabled={loading}
              onClick={() =>
                handleAction(
                  changeRole,
                  user._id,
                  user.role === "admin" ? "user" : "admin"
                )
              }
              className="w-full flex items-center gap-2 px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 transition-colors disabled:opacity-50">
              <UserCheck size={16} />
              {user.role === "admin" ? "Demote to User" : "Make Admin"}
            </button>

            <button
              disabled={loading}
              onClick={() =>
                handleAction(
                  userPlanChnage,
                  user._id,
                  user.subscriptionPlan === "premium" ? "free" : "premium"
                )
              }
              className="w-full flex items-center gap-2 px-4 py-3 text-sm text-purple-400 hover:bg-slate-800 transition-colors disabled:opacity-50">
              <Crown size={16} />
              {user.subscriptionPlan === "premium"
                ? "Set Free Plan"
                : "Make Premium"}
            </button>

            <button
              disabled={loading}
              onClick={() => {
                if (confirm("Are you sure you want to delete this user?")) {
                  handleAction(deleteUser, user._id);
                }
              }}
              className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-500 hover:bg-red-500/10 transition-colors border-t border-slate-800 disabled:opacity-50">
              <Trash2 size={16} /> Delete User
            </button>
          </div>
        </>
      )}
    </div>
  );
}
