"use client";

import React, { useState } from "react";
import { createUser } from "@/action/user.action";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Check,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const Signin1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const router = useRouter();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await createUser({ name, email, password });
      router.push("/login");
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center font-sans min-h-screen overflow-hidden  p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3 px-1">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
              Step {step} of 3
            </span>
            <span className="text-xs font-mono text-[#7B61FF]">
              {Math.round((step / 3) * 100)}%
            </span>
          </div>
          <div className="w-full bg-slate-800/50 rounded-full h-1.5 overflow-hidden border border-slate-800">
            <div
              className="h-full bg-[#7B61FF] transition-all duration-500 ease-out shadow-[0_0_10px_#7B61FF]"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl p-8 transition-all duration-300">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#7B61FF]/10 rounded-xl border border-[#7B61FF]/20 mb-4 transition-transform hover:scale-110">
              <User className="w-6 h-6 text-[#7B61FF]" />
            </div>
            <h1 className="text-2xl font-bold text-slate-100 mb-2 tracking-tight">
              Create account
            </h1>
            <p className="text-sm text-slate-400">
              {step === 1 && "Start with your basic information"}
              {step === 2 && "Set up your secure credentials"}
              {step === 3 && "Review and confirm your details"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-slate-500 ml-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-4 py-2.5 bg-slate-950/50 border border-slate-800 rounded-lg text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#7B61FF]/50 transition-all"
                    />
                    {name && (
                      <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!name}
                  className="w-full bg-[#7B61FF] hover:bg-[#6a51e6] text-white py-2.5 rounded-lg text-sm font-bold transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-[#7B61FF]/20">
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-slate-500 ml-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-950/50 border border-slate-800 rounded-lg text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#7B61FF]/50 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-slate-500 ml-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                      className="w-full pl-10 pr-10 py-2.5 bg-slate-950/50 border border-slate-800 rounded-lg text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#7B61FF]/50 transition-all"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!email || !password}
                  className="w-full bg-[#7B61FF] hover:bg-[#6a51e6] text-white py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-[#7B61FF]/20 flex items-center justify-center gap-2">
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-4">
                <div className="bg-slate-950/50 border border-slate-800 p-4 rounded-xl space-y-3">
                  <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                    <span className="text-xs text-slate-500 uppercase">
                      Name
                    </span>
                    <span className="text-sm text-slate-200 font-medium">
                      {name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-xs text-slate-500 uppercase">
                      Email
                    </span>
                    <span className="text-sm text-slate-200 font-medium">
                      {email}
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#7B61FF] hover:bg-[#6a51e6] text-white py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-[#7B61FF]/20">
                  {isLoading ? "Creating account..." : "Complete Registration"}
                </button>
              </div>
            )}
          </form>

          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-6 w-full text-slate-500 hover:text-slate-300 transition-colors text-xs font-medium flex items-center justify-center gap-2 uppercase tracking-widest">
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
          )}

          <div className="mt-8 text-center pt-6 border-t border-slate-800/50">
            <p className="text-sm text-slate-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#7B61FF] font-semibold hover:text-[#9481ff] transition-colors underline underline-offset-4 decoration-[#7B61FF]/30">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin1;
