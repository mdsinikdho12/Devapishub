import { content } from "@/data/Docdata";
import FetchSection from "@/app/Components/Codesnipet/CodeSnippet";
import Lang from "./Buton/Langbtn";
import { Book, Zap } from "lucide-react";
import StatusCodeTabile from "./Doc/tabile/StatusCodeTabile";
import HTTPMethods from "./Doc/HTTPMethods";
import ProjectIdea from "./Doc/ProjectIdea";
import Link from "next/link";

const DocsPage = ({ language }) => {
  const t = content[language];

  return (
    <div className="min-h-screen text-gray-300 p-6 md:p-12 font-hind">
      <div className="max-w-7xl mx-auto">
        {" "}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 border-b border-white/5 pb-10">
          <header className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center md:justify-start gap-3">
              <Book className="text-blue-500" /> {t.title}
            </h1>
            <p className="text-lg text-gray-400">{t.subtitle}</p>
          </header>
          <div className="mt-6 md:mt-0">
            <Lang CurrentLang={language} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-20">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <Zap size={24} className="text-yellow-400" /> {t.apiTitle}
              </h2>
              <p className="leading-relaxed mb-6 text-gray-300 text-base whitespace-pre-line">
                {t.apiDesc}
              </p>
              <div className="bg-[#0F1720] border-l-4 border-blue-500 p-6 rounded-r-2xl italic text-sm text-blue-100/80 shadow-lg">
                {t.apiExample}
              </div>
            </section>

            <HTTPMethods methodsTitle={t.methodsTitle} language={language} />

            <FetchSection fetchDesc={t.fetchDesc} fetchTitle={t.fetchTitle} />

            <StatusCodeTabile
              statusDesc={t.statusDesc}
              statusTitle={t.statusTitle}
              language={language}
            />
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-10">
              <ProjectIdea t={t} language={language} />

              <div className="mt-8 p-6 bg-[#0F1720]/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all duration-300 hover:bg-[#0F1720] hover:border-blue-500/30 hover:shadow-lg">
                <h4 className="text-white font-bold mb-2">
                  Need an Free API Key?
                </h4>
                <p className="text-xs text-gray-400 mb-4">
                  Register today to get your unique key and start building.
                </p>
                <Link
                  href={"/apis"}
                  className="w-full px-4 py-2 bg-[#7B61FF] text-white   rounded-lg text-xs font-bold transition-all">
                  Get Started
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
