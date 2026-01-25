"use client";
import { Star, X } from "lucide-react";
import { useState } from "react";

function Reviewbox() {
  const [isReviewOpen, setIsReviewOpen] = useState(true);
  const [reviewText, setReviewText] = useState("");
  return (
    <>
      {" "}
      {isReviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-3xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Star
                  className="text-yellow-500"
                  size={20}
                  fill="currentColor"
                />
                Submit a Review
              </h3>
              <button
                onClick={() => setIsReviewOpen(false)}
                className="text-slate-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <textarea
              className="w-full h-32 bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Tell us what you think about our service..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => setIsReviewOpen(false)}
                className="flex-1 py-3 px-4 rounded-xl font-bold text-sm bg-slate-800 text-white hover:bg-slate-700 transition-colors">
                Cancel
              </button>
              <button
                className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm text-white transition-colors ${
                  isPremium
                    ? "bg-amber-600 hover:bg-amber-500"
                    : "bg-blue-600 hover:bg-blue-500"
                }`}
                onClick={() => {
                  console.log("Review:", reviewText);
                  setIsReviewOpen(false);
                }}>
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Reviewbox;
