import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Star,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Md Sinikdho | Full-Stack Developer & Founder of DevApiHub",
  description:
    "Discover Md Sinikdho, a passionate Full-Stack Developer and the founder of DevApiHub. Learn about his projects, skills, vision, and journey in building scalable APIs and developer tools.",
  keywords: [
    "Md Sinikdho",
    "Sinikdho Developer",
    "DevApiHub",
    "Full Stack Developer Bangladesh",
    "API Platform",
    "Web Developer",
    "JavaScript Developer",
    "React Developer",
    "Backend Developer",
    "Developer Portfolio",
    "Md sinikdho mahmud ",
    "md sinikdho mahmud",
    "Md Ferdoush Mahmud",
  ],
  authors: [{ name: "Md Sinikdho" }],
  creator: "Md Sinikdho",
  openGraph: {
    title: "Md Sinikdho – Developer & Founder of DevApiHub",
    description:
      "Explore the story of Md Sinikdho, the developer behind DevApiHub, building modern API solutions and tools for developers worldwide.",
    siteName: "DevApiHub",
    type: "profile",
  },
};

function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

          <div className="relative w-40 h-40 md:w-56 md:h-56 overflow-hidden rounded-full border-2 border-white/10 ">
            <Image
              src="/image/Mdsinikdho.png"
              alt="Md Sinikdho"
              width={3000}
              height={3000}
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
              title="Md Sinikdho Photo"
            />
          </div>
        </div>

        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Md Sinikdho
          </h1>
          <p className="text-xl md:text-2xl text-[#7B61FF] font-medium mb-6">
            MERN Stack Developer | React & Next.js Enthusiast
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              href="https://github.com/mdsinikdho12"
              target="_blank"
              className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
              <Github size={24} />
            </Link>
            <Link
              href="https://github.com/mdsinikdho12/DevApiHub"
              target="_blank"
              className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
              <Linkedin size={24} />
            </Link>
            <Link
              href="mdsinikdho94@gmail.com"
              className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
              <Mail size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-[#7B61FF]/40 transition-colors duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#7B61FF]/20 rounded-lg">
              <Code className="text-[#7B61FF]" size={24} />
            </div>
            <h2 className="text-2xl font-bold">About Me</h2>
          </div>
          <p className="text-gray-400 leading-relaxed mb-4">
            I am a Computer Science and Engineering student with a strong
            passion for programming and web development. Over the past few
            years, I have gained experience in building projects using HTML,
            CSS, JavaScript, React, Python, and Node.js. My work includes
            developing portfolio websites, e-commerce platforms, and video
            streaming applications, which not only enhanced my technical
            expertise but also improved my problem-solving and teamwork skills.
            Currently, I am focusing on Data Structures and Algorithms to
            strengthen my logical thinking and prepare for future opportunities.
            My long-term goal is to grow as a software engineer and contribute
            to innovative projects while continuously learning and improving my
            skills.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I specialize in the{" "}
            <span className="text-white font-semibold">MERN stack </span> and{" "}
            <span className="text-white font-semibold">Next.js,</span> always
            aiming for high performance and clean architecture in every line of
            code I write.
          </p>
        </div>

        <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-[#7B61FF]/40 transition-colors duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Star className="text-blue-500" size={24} />
            </div>
            <h2 className="text-2xl font-bold">The Mission</h2>
          </div>
          <p className="text-gray-400 leading-relaxed mb-4">
            <span className="text-white font-semibold">DevApiHub</span> was
            created to solve one core problem: the difficulty of finding
            reliable, free, and well-documented APIs. Many developers waste
            valuable time searching through scattered sources, outdated links,
            or poorly maintained endpoints. DevApiHub is a carefully curated API
            directory built to eliminate that friction. Each API is reviewed,
            categorized, and organized to ensure developers can quickly discover
            trustworthy APIs for learning, prototyping, and production use. The
            mission of DevApiHub is simple—help developers focus on building
            great products instead of searching for resources. Whether you're a
            beginner exploring APIs for the first time or an experienced
            developer building scalable applications, DevApiHub provides a
            centralized platform to accelerate your development workflow. By
            continuously adding new APIs and maintaining existing ones,
            DevApiHub aims to become a go-to hub for developers looking for
            high-quality, free, and developer- friendly API solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Next.js", "Tailwind", "Open Source", "Directory"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 bg-gradient-to-br from-[#7B61FF]/10 to-transparent border border-[#7B61FF]/20 p-8 rounded-3xl mt-4">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            What I Do
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-300">
            <div className="space-y-2">
              <h4 className="text-white font-bold">Frontend</h4>
              <p>
                React, Next.js, Tailwind CSS, Framer (without motion!),
                Responsive Design
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-bold">Backend</h4>
              <p> MongoDB, RESTful API Development</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-bold">Others</h4>
              <p>
                Git, UI/UX Principles, Technical Writing, Community Building
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center bg-white/5 py-12 rounded-3xl border border-white/10">
        <h2 className="text-3xl font-bold mb-4">Want to collaborate?</h2>
        <p className="text-gray-400 mb-8">
          Let's build something amazing together.
        </p>
        <Link
          href="https://github.com/mdsinikdho12/DevApiHub"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#7B61FF] rounded-full font-bold hover:bg-[#6A52D5] transition-all transform hover:scale-105">
          View DevApiHub Repo <ExternalLink size={18} />
        </Link>
      </div>
    </div>
  );
}

export default AboutPage;
