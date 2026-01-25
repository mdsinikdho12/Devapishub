import Image from "next/image";
import { Search, ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { MotionH1, MotionDiv, MotionP } from "./MotionWrapper/Wrapper";

function HeroSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-7xl mx-auto w-full relative overflow-hidden rounded-2xl md:rounded-3xl mt-6">
      <Image
        src="/image/hero.png"
        width={1200}
        height={600}
        alt="Hero area"
        className="w-full h-auto object-cover"
        priority
      />

      <div className="absolute inset-0 flex flex-col items-center text-center z-10 pt-24 lg:pt-60 px-4">
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm text-blue-300">
          <span className="bg-[#7B61FF] text-white px-2 py-0.5 rounded-full text-[10px] font-bold">
            NEW
          </span>
          Over 100+ curated APIs for your next project
        </MotionDiv>

        <MotionH1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-bold text-white leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
          Discover the Best <span className="text-[#7B61FF]">Free APIs</span>{" "}
          for Developers
        </MotionH1>

        <MotionP
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
          The ultimate open-source directory to power up your next build. Stop
          searching, start building.
        </MotionP>

        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col mt-10 sm:flex-row gap-4 mb-12 justify-center">
          <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={"/apis"}
              className="px-6 md:px-8 py-3 shadow-lg shadow-indigo-500/50 bg-[#7B61FF] hover:bg-[#6A52D5] text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group  hover:shadow-xl">
              <Search size={20} />
              Explore APIs
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </MotionDiv>

          <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://github.com/mdsinikdho12/DevApiHub"
              target="_blank"
              className="px-6 md:px-8 py-3 border border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2 backdrop-blur-sm">
              <Github size={20} />
              View on GitHub
            </Link>
          </MotionDiv>
        </MotionDiv>
      </div>
    </div>
  );
}

export default HeroSection;
