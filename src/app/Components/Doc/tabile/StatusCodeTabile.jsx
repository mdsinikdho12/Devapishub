import { Rocket } from "lucide-react";

function StatusCodeTabile({ statusTitle, statusDesc, language }) {
  return (
    <section className="mt-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Rocket size={20} className="text-blue-400" />
          </div>
          {statusTitle}
        </h2>
        <p className="text-gray-400 text-sm">{statusDesc}</p>
      </div>

      <div className="overflow-hidden border border-white/10 rounded bg-[#0F1720]/50 backdrop-blur-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-gray-300 font-medium uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Code</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {[
              {
                code: "200",
                status: "OK",
                desc:
                  language === "en"
                    ? "Request was successful."
                    : "অনুরোধ সফল হয়েছে।",
                color: "text-green-400",
              },
              {
                code: "201",
                status: "Created",
                desc:
                  language === "en"
                    ? "Resource created successfully."
                    : "নতুন ডাটা সফলভাবে তৈরি হয়েছে।",
                color: "text-emerald-400",
              },
              {
                code: "400",
                status: "Bad Request",
                desc:
                  language === "en"
                    ? "Invalid request parameters."
                    : "অনুরোধের প্যারামিটারগুলো সঠিক নয়।",
                color: "text-yellow-400",
              },
              {
                code: "401",
                status: "Unauthorized",
                desc:
                  language === "en"
                    ? "Invalid or missing API key."
                    : "API কী ভুল অথবা দেওয়া হয়নি।",
                color: "text-orange-400",
              },
              {
                code: "404",
                status: "Not Found",
                desc:
                  language === "en"
                    ? "Endpoint not found."
                    : "এন্ডপয়েন্টটি খুঁজে পাওয়া যায়নি।",
                color: "text-red-400",
              },
              {
                code: "500",
                status: "Server Error",
                desc:
                  language === "en"
                    ? "Something went wrong on our end."
                    : "সার্ভারের ভেতরে কোনো সমস্যা হয়েছে।",
                color: "text-red-500",
              },
            ].map((item, index) => (
              <tr
                key={index}
                className="hover:bg-white/[0.02] transition-colors group">
                <td className={`px-6 py-4 font-mono font-bold ${item.color}`}>
                  {item.code}
                </td>
                <td className="px-6 py-4 text-white font-medium">
                  {item.status}
                </td>
                <td className="px-6 py-4 text-gray-400 group-hover:text-gray-300">
                  {item.desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default StatusCodeTabile;
