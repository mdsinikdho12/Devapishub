"use client";
import React, { useState } from "react";
import {
  Check,
  X,
  Clock,
  Mail,
  Phone,
  Hash,
  CreditCard,
  Loader2,
} from "lucide-react";
import { approvePayment, rejectPayment } from "@/action/payment.action";
import { useRouter } from "next/navigation";

function PendingPayment({ allpayment }) {
  const [loadingId, setLoadingId] = useState(null);
  const router = useRouter();

  const handleAction = async (actionFn, paymentId, userId) => {
    if (!confirm("Are you sure you want to perform this action?")) return;

    setLoadingId(paymentId);
    try {
      const res = await actionFn(paymentId, userId);
      if (res.success) {
        router.refresh();
      } else {
        alert(res.message || "Action failed");
      }
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="w-full bg-[#0F1720]/90 backdrop-blur-md border border-slate-800 rounded overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-slate-800 bg-slate-900/30 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-white">Pending Payments</h2>
          <p className="text-sm text-slate-400">
            Review and approve manual subscription requests
          </p>
        </div>
        <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-bold rounded-full border border-amber-500/20 flex items-center gap-1">
          <Clock size={14} /> {allpayment?.length || 0} Pending
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900/50 text-slate-400 text-[11px]  tracking-widest font-black">
              <th className="px-6 py-4">User Details</th>
              <th className="px-6 py-4">Payment Method</th>
              <th className="px-6 py-4">TrxID & Number</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {allpayment && allpayment.length > 0 ? (
              allpayment.map((pay) => (
                <tr
                  key={pay._id}
                  className="hover:bg-slate-900/40 transition-colors group">
                  {/* User Email */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-[#7B61FF] font-bold border border-slate-700">
                        {pay.email[0].toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-white flex items-center gap-1">
                          <Mail size={12} className="text-slate-500" />{" "}
                          {pay.email}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          ID: {pay.userId}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Method */}
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 w-fit ${
                        pay.method === "bKash"
                          ? "bg-[#D12053]/10 text-[#D12053]"
                          : pay.method === "Nagad"
                          ? "bg-orange-500/10 text-orange-500"
                          : "bg-purple-500/10 text-purple-500"
                      }`}>
                      <CreditCard size={14} /> {pay.method}
                    </span>
                  </td>

                  {/* TrxID & Number */}
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-slate-200 font-mono flex items-center gap-1">
                        <Hash size={12} className="text-[#7B61FF]" />{" "}
                        {pay.transactionId}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Phone size={12} /> {pay.number}
                      </span>
                    </div>
                  </td>

                  {/* Amount */}
                  <td className="px-6 py-4">
                    <span className="text-white font-bold">
                      {pay.amount} TK
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        disabled={loadingId === pay._id}
                        onClick={() =>
                          handleAction(approvePayment, pay._id, pay.userId)
                        }
                        className="p-2 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white rounded-lg transition-all disabled:opacity-50"
                        title="Approve">
                        {loadingId === pay._id ? (
                          <Loader2 className="animate-spin" size={18} />
                        ) : (
                          <Check size={18} />
                        )}
                      </button>

                      <button
                        disabled={loadingId === pay._id}
                        onClick={() => handleAction(rejectPayment, pay._id)}
                        className="p-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all disabled:opacity-50"
                        title="Reject">
                        <X size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-12 text-center text-slate-500">
                  <div className="flex flex-col items-center gap-2">
                    <Clock size={48} className="opacity-10" />
                    <p>No pending payments found.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PendingPayment;
