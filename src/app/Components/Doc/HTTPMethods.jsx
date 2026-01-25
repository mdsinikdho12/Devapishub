import { ArrowRight } from "lucide-react";

function HTTPMethods({ methodsTitle, language }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2 text-green-400">
        <ArrowRight size={24} /> {methodsTitle}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#0F1720] border border-white/10 p-5 rounded transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.03] hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] group">
          <h3 className="text-blue-400 font-bold mb-2">GET</h3>
          <p className="text-sm text-gray-400">
            {language === "en"
              ? "Retrieve data from server."
              : "সার্ভার থেকে ডাটা গ্রহণ করা।"}
          </p>
        </div>

        <div className="bg-[#0F1720] border border-white/10 p-5 rounded  transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.03] hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] group">
          <h3 className="text-green-400 font-bold mb-2">POST</h3>
          <p className="text-sm text-gray-400">
            {language === "en"
              ? "Send/Create new data to server."
              : "সার্ভারে নতুন ডাটা পাঠানো বা তৈরি করা।"}
          </p>
        </div>

        <div className="bg-[#0F1720] border border-white/10 p-5 rounded  transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.03] hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] group">
          <h3 className="text-yellow-400 font-bold mb-2">PUT</h3>
          <p className="text-sm text-gray-400">
            {language === "en"
              ? "Update or replace existing data."
              : "বিদ্যমান ডাটা আপডেট বা পরিবর্তন করা।"}
          </p>
        </div>

        <div className="bg-[#0F1720] border border-white/10 p-5 rounded transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.03] hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] group ">
          <h3 className="text-purple-400 font-bold mb-2">PATCH</h3>
          <p className="text-sm text-gray-400">
            {language === "en"
              ? "Partially update specific data."
              : "ডাটার নির্দিষ্ট অংশ আংশিক আপডেট করা।"}
          </p>
        </div>

        <div className="bg-[#0F1720] border border-white/10 p-5 rounded  transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.03] hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] group">
          <h3 className="text-red-400 font-bold mb-2">DELETE</h3>
          <p className="text-sm text-gray-400">
            {language === "en"
              ? "Remove data from server."
              : "সার্ভার থেকে ডাটা মুছে ফেলা।"}
          </p>
        </div>

        <div className="bg-[#0F1720] border border-white/10 p-5 rounded  transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.03] hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] group">
          <h3 className="text-cyan-400 font-bold mb-2">HEAD</h3>
          <p className="text-sm text-gray-400">
            {language === "en"
              ? "Same as GET but without response body."
              : "GET এর মতো কিন্তু কোনো বডি ডাটা থাকে না।"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HTTPMethods;
