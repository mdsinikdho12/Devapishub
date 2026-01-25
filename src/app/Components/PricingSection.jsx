"use client";
import React, { useState } from "react";
import { Check, Zap, Crown, BellRing, Search, Infinity } from "lucide-react";
import { useSession } from "next-auth/react";
import PaymentModal from "./UserComponent/PaymentModal";

const Pricing = () => {
  const { data: session } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for students and hobbyists",
      features: [
        { text: "3 API Copies Per Day", icon: <Zap className="w-4 h-4" /> },
        { text: "Search All APIs", icon: <Search className="w-4 h-4" /> },
        { text: "Community Support", icon: <Check className="w-4 h-4" /> },
      ],
      notIncluded: [
        "Unlimited API Copies",
        "Email Notifications",
        "Premium 24/7 Support",
      ],
      buttonText: "Get Started",
      highlight: false,
      action: () =>
        alert(`You are on the ${session.user.subscriptionPlan}  plan.`),
    },
    {
      name: "Pro",
      price: "0.50",
      description: "Best for professional developers",
      features: [
        {
          text: "10 API Copies Per Day ",
          icon: <Infinity className="w-4 h-4" />,
        },
        {
          text: "Instant Email Notifications",
          icon: <BellRing className="w-4 h-4" />,
        },
        { text: "Exclusive Early Access", icon: <Crown className="w-4 h-4" /> },
        { text: "Premium 24/7 Support", icon: <Check className="w-4 h-4" /> },
      ],
      notIncluded: [],
      buttonText: "Upgrade to Pro",
      highlight: true,
      action: () => {
        if (!session) {
          alert("Please login first to upgrade!");
          return;
        } else if (session.user.subscriptionPlan === "premium") {
          alert("You Alredy in premium plan !");
          return;
        }
        setIsModalOpen(true);
      },
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#0B0F14] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7B61FF]/5 blur-[120px] rounded-full"></div>

      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Simple & Transparent <span className="text-[#7B61FF]">Pricing</span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto">
          Choose the plan that fits your workflow. Unlock unlimited access and
          stay updated.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-3xl border transition-all duration-300 ${
              plan.highlight
                ? "bg-slate-900/60 border-[#7B61FF] shadow-[0_0_40px_-15px_rgba(123,97,255,0.3)] scale-105 z-10"
                : "bg-slate-900/30 border-slate-800 hover:border-slate-700"
            }`}>
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7B61FF] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">
                  ${plan.price}
                </span>
                <span className="text-slate-500 text-sm">/month</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-[#7B61FF]">{feature.icon}</span>
                  {feature.text}
                </div>
              ))}
              {plan.notIncluded.map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-slate-600">
                  <Check className="w-4 h-4 opacity-20" />
                  <span className="line-through">{text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={plan.action}
              className={`w-full py-3 rounded-xl font-bold transition-all active:scale-95 ${
                plan.highlight
                  ? "bg-[#7B61FF] text-white hover:bg-[#6a4dfa] shadow-lg shadow-[#7B61FF]/20"
                  : "bg-slate-800 text-white hover:bg-slate-700"
              }`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userEmail={session?.user?.email}
        userId={session?.user?.id || session?.user?._id}
      />

      <p className="text-center text-slate-500 text-xs mt-12">
        Secure payment processing. Cancel anytime.
      </p>
    </section>
  );
};

export default Pricing;
