"use client";
import React, { useState } from "react";
import {
  X,
  Send,
  CreditCard,
  CheckCircle2,
  Copy,
  Check,
  Loader2,
} from "lucide-react";
import { paymentSubmit } from "@/action/payment.action";

const PaymentModal = ({ isOpen, onClose, userEmail, userId }) => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    method: "bKash",
    number: "",
    transactionId: "",
    amount: 50,
  });

  const paymentNumbers = {
    bKash: "01903234407 (Personal)",
    Nagad: "01903234407 (Personal)",
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text.split(" ")[0]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.number || !formData.transactionId) {
      alert("Please fill all fields!");
      return;
    }

    setLoading(true);

    try {
      const result = await paymentSubmit({
        ...formData,
        userId,
        email: userEmail,
      });

      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert(result.message || "Failed to submit request.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-10">
          <X size={20} />
        </button>

        {isSubmitted ? (
          /* --- Success State --- */
          <div className="p-10 text-center space-y-4 animate-in zoom-in duration-300">
            <div className="flex justify-center">
              <div className="bg-emerald-500/10 p-4 rounded-full">
                <CheckCircle2 size={64} className="text-emerald-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white">Request Sent!</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We received your payment request for{" "}
              <span className="text-white font-bold">{formData.amount} TK</span>
              . Our team will verify the{" "}
              <span className="text-purple-400">TrxID</span> and upgrade your
              account within 1-2 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/20">
              Okay, I'll wait
            </button>
          </div>
        ) : (
          <>
            <div className="p-6 border-b border-slate-800 bg-slate-900/50">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <CreditCard className="text-[#7B61FF]" /> Manual Payment
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="bg-[#7B61FF]/10 p-4 rounded-2xl border border-[#7B61FF]/20 space-y-3">
                <p className="text-sm text-slate-300">
                  Send{" "}
                  <span className="text-white font-bold">
                    {formData.amount} TK
                  </span>{" "}
                  to our {formData.method} number:
                </p>
                <div className="flex items-center justify-between bg-slate-950 p-3 rounded-xl border border-slate-800 group">
                  <span className="text-white font-mono font-bold tracking-wider">
                    {paymentNumbers[formData.method]}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(paymentNumbers[formData.method])
                    }
                    className="text-[#7B61FF] hover:scale-110 transition-transform p-1">
                    {copied ? (
                      <Check size={18} className="text-emerald-500" />
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Payment Method Tabs */}
              <div className="grid grid-cols-3 gap-2">
                {["bKash", "Nagad"].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setFormData({ ...formData, method: m })}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                      formData.method === m
                        ? "bg-[#7B61FF] border-[#7B61FF] text-white shadow-lg shadow-[#7B61FF]/20"
                        : "bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-700"
                    }`}>
                    {m}
                  </button>
                ))}
              </div>

              {/* Input Fields */}
              <div className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">
                    Your {formData.method} Number
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="01XXXXXXXXX"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-white outline-none focus:border-[#7B61FF] focus:ring-1 focus:ring-[#7B61FF]/50 transition-all placeholder:text-slate-700"
                    onChange={(e) =>
                      setFormData({ ...formData, number: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">
                    Transaction ID (TrxID)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Example: 8N7X6..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-white outline-none focus:border-[#7B61FF] focus:ring-1 focus:ring-[#7B61FF]/50 transition-all placeholder:text-slate-700 font-mono"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        transactionId: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <button
                disabled={loading}
                className="w-full mt-2 py-4 bg-[#7B61FF] text-white rounded-xl font-bold hover:bg-[#6a4dfa] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#7B61FF]/20 disabled:opacity-50 disabled:cursor-not-allowed group">
                {loading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <>
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                    Submit Request
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
