import React from "react";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Full Stack Developer",
      content:
        "DevApiHub has completely changed my prototyping workflow. Being able to find high-quality free APIs in one place saves me hours of searching on GitHub.",
      avatar: "AR",
      rating: 5,
      color: "bg-blue-500",
    },
    {
      name: "Sarah Chen",
      role: "Frontend Engineer",
      content:
        "The Pro plan is a steal! The email notifications for new APIs help me stay ahead of the curve and integrate the latest tech into my client projects instantly.",
      avatar: "SC",
      rating: 5,
      color: "bg-[#7B61FF]",
    },
    {
      name: "James Wilson",
      role: "Mobile App Developer",
      content:
        "Clean, fast, and reliable. The code snippets are a lifesaver. I just copy, paste, and the API works exactly as described. Truly a developer-first platform.",
      avatar: "JW",
      rating: 5,
      color: "bg-emerald-500",
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#0B0F14] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#7B61FF]/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Loved by <span className="text-[#7B61FF]">Developers</span>{" "}
            Worldwide
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Join thousands of developers who use DevApiHub to power their
            next-generation applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm hover:border-[#7B61FF]/40 transition-all duration-300 group">
              <Quote className="absolute top-6 right-8 w-8 h-8 text-slate-800 group-hover:text-[#7B61FF]/20 transition-colors" />

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed italic">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <div
                  className={`h-12 w-12 rounded-full ${review.color} flex items-center justify-center text-white font-bold shadow-lg ring-2 ring-slate-800`}>
                  {review.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {review.name}
                  </h4>
                  <p className="text-[#7B61FF] text-xs font-medium uppercase tracking-wider">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 text-sm">
            <span className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-slate-900" />
              <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-slate-900" />
              <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-slate-900" />
            </span>
            <span>
              Join <strong className="text-white">2,000+</strong> builders today
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
