import Link from "next/link";
import ApiPlayground from "../Components/UserComponent/ApiPlayground";
import Image from "next/image";

export default function ApiTestingPage() {
  return (
    <div className="min-h-screen  text-slate-300 py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <nav
          className="flex mb-8 text-sm text-slate-500"
          aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>/</li>
            <li className="text-[#7B61FF]">API Playground</li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            API <span className="text-[#7B61FF]">Playground</span>
          </h2>
          <p className="mt-2 text-slate-400">
            আমাদের এন্ডপয়েন্টগুলো সরাসরি এখান থেকে টেস্ট করূন ।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className=" rounded-xl overflow-hidden">
              <div className="p-4">
                <ApiPlayground />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-5 backdrop-blur-sm">
              <h3 className="text-yellow-500 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                <span className="text-lg">⚠️</span> নির্দেশিকা
              </h3>
              <ul className="text-sm space-y-4">
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">01.</span>
                  <p>
                    শুধুমাত্র{" "}
                    <span className="text-white font-semibold">GET</span> মেথড
                    সাপোর্টেড।
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">02.</span>
                  <p>
                    সার্ভারের নিরাপত্তার স্বার্থে{" "}
                    <span className="text-red-400">Rate Limit</span> সক্রিয় আছে।
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">03.</span>
                  <p>
                    বাকি মেথডগুলোর (POST, PUT, DELETE) জন্য{" "}
                    <span className="underline decoration-blue-500">
                      Postman
                    </span>{" "}
                    ব্যবহার করুন।
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">03.</span>
                  <p>
                    এখানে কোনো এপিআই এর রেসপন্স টাইম বেশি হলে ,নিরাপত্তার
                    স্বার্থে{" "}
                    <span className="underline decoration-blue-500">
                      এপিআই কল
                    </span>{" "}
                    বাতিল করা হয়।
                  </p>
                </li>
              </ul>
            </div>

            {/* Quick Tips Card */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-3 text-sm">
                প্রয়োজনীয় লিঙ্ক
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="/Doc"
                  className="text-xs text-slate-400 hover:text-[#7B61FF] transition-colors inline-flex items-center gap-2">
                  ➜ API Documentation
                </Link>
                <Link
                  href="/apis"
                  className="text-xs text-slate-400 hover:text-[#7B61FF] transition-colors inline-flex items-center gap-2">
                  ➜ Get API Key
                </Link>
                <Link
                  href="/Doc"
                  className="text-xs text-slate-400 hover:text-[#7B61FF] transition-colors inline-flex items-center gap-2">
                  ➜ Project Ideas
                </Link>
                <Link
                  href="/about"
                  className="text-xs text-slate-400 hover:text-[#7B61FF] transition-colors inline-flex items-center gap-2">
                  ➜ About
                </Link>
              </div>
            </div>

            <div className="bg-slate-900/50 border flex border-slate-800 rounded-xl justify-center items-center text-center">
              <Image
                src="/image/card.png"
                height={200}
                width={200}
                alt="Card-image"
                className="mx-auto"
              />

              <div className="px-2">
                <p className="text-slate-400 text-sm mb-4">
                  সবগুলো এন্ডপয়েন্ট ব্যবহার করতে আপনার অ্যাকাউন্টটি আপগ্রেড
                  করুন।
                </p>

                <Link
                  href={"/"}
                  className="bg-[#7B61FF] cursor-pointer hover:bg-[#765eee] text-white px-4 py-2 rounded-lg transition">
                  আপগ্রেড করুন
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
