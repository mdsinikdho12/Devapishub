"use client";

import React, { useState } from "react";
import { User, Eye, EyeOff, Lock, Mail, Loader2 } from "lucide-react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const Result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!Result.ok) {
        setError(
          Result.error ||
            "Authentication failed. Please check your credentials."
        );
        setLoading(false);
        return;
      }

      window.location.href = "/";
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center font-sans min-h-screen overflow-hidden ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7B61FF]/10 blur-[120px] rounded-full -z-10"></div>

      <div className="relative w-full max-w-sm p-8 space-y-6 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl shadow-blue-500/5">
        <div className="text-center space-y-3">
          <div className="inline-flex p-3 bg-[#7B61FF]/10 rounded-xl border border-[#7B61FF]/20 transition-transform duration-300 hover:scale-105">
            <User className="h-6 w-6 text-[#7B61FF]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-100">
              Welcome back
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Enter your credentials to access your account
            </p>
          </div>
        </div>

        {error && (
          <div className="p-3 text-xs font-medium bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg animate-in fade-in slide-in-from-top-1">
            {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-xs font-mono uppercase tracking-widest text-slate-500 ml-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="flex h-11 w-full rounded-lg border border-slate-800 bg-slate-950/50 pl-10 pr-3 py-2 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#7B61FF]/50 transition-all shadow-inner"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label
                htmlFor="password"
                className="text-xs font-mono uppercase tracking-widest text-slate-500">
                Password
              </label>
              <a
                href="#"
                className="text-[11px] text-[#7B61FF] hover:text-[#9481ff] transition-colors">
                Forgot?
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="flex h-11 w-full rounded-lg border border-slate-800 bg-slate-950/50 pl-10 pr-10 py-2 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#7B61FF]/50 transition-all shadow-inner"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-200 transition-colors">
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="relative flex items-center justify-center w-full h-11 rounded-lg text-sm font-bold tracking-wide text-white bg-[#7B61FF] hover:bg-[#6a4dfa] shadow-lg shadow-[#7B61FF]/20 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden">
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <span className="relative z-10">Sign In</span>
            )}
          </button>
        </form>

        <div className="pt-4 border-t border-slate-800/50 text-center">
          <p className="text-sm text-slate-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-[#7B61FF] hover:text-[#9481ff] underline underline-offset-4 decoration-[#7B61FF]/30 transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
