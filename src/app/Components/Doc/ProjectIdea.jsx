import { Github, ExternalLink, FolderCode } from "lucide-react";

function ProjectIdea({ t, language }) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-1 border-b border-white/5 pb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <FolderCode className="text-blue-500" size={20} /> {t.projectTitle}
        </h2>
        <p className="text-gray-500 text-[12px] leading-tight">
          {language === "en"
            ? "Build these projects using our APIs."
            : "আমাদের API ব্যবহার করে এই প্রোজেক্টগুলো তৈরি করতে পারেন।"}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {t.projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-[#0F1720]/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all duration-300 hover:bg-[#0F1720] hover:border-blue-500/30 hover:shadow-lg">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[9px] font-bold px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-md font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
              {project.name}
            </h3>

            <p className="text-[12px] text-gray-400 mb-4 line-clamp-2 leading-relaxed">
              {project.desc}
            </p>

            {/* <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full text-[11px] font-semibold text-gray-300 hover:text-white transition-all bg-white/5 px-3 py-2 rounded-lg border border-white/5 hover:bg-[#7B61FF] hover:hover:border-[#7B61FF]">
              <div className="flex items-center gap-2">
                <Github size={12} />
                <span>GitHub Repo</span>
              </div>
              <ExternalLink
                size={12}
                className="opacity-50 group-hover:opacity-100"
              />
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectIdea;
