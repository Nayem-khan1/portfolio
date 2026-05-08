import React from "react";
import { motion as Motion } from "framer-motion";
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from "../utils/motion";
import { HiSparkles } from "react-icons/hi2";

const HeroContent = () => {
  return (
    <Motion.div
      initial="hidden"
      animate="visible"
      className="max-w-screen-2xl mx-auto md:flex md:flex-row md:items-center md:justify-center mt-30 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <Motion.div
          variants={slideInFromTop}
          className="hidden md:flex Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] items-center"
        >
          <HiSparkles className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full-stack MERN Developer
          </h1>
        </Motion.div>

        <Motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 mt-6 text-3xl md:text-6xl font-bold text-white w-auto md:max-w-[760px] h-auto"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Nayem Khan
            </span>
          </span>
          <span className="text-lg md:text-2xl font-medium text-gray-300">
            Full-stack MERN Developer (frontend-focused)
          </span>
        </Motion.div>

        <Motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[800px]"
        >
          Frontend Engineer with 2+ years of experience building scalable,
          user-friendly SaaS and e-commerce platforms with React, Next.js,
          TypeScript, and Tailwind CSS. I also build full-stack MERN solutions
          with secure authentication and API-driven architecture.
        </Motion.p>

        <Motion.div
          className="mt-6 flex flex-wrap gap-4"
          variants={slideInFromLeft(1)}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 button-primary text-white font-semibold rounded-2xl shadow-lg hover:bg-white hover:text-primary transition duration-300"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/Nayem-khan1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white text-white rounded-2xl hover:bg-white hover:text-[#0f172a] transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nayem-khan1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-primary text-primary rounded-2xl hover:bg-primary hover:text-black transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white text-white rounded-2xl hover:bg-white hover:text-[#0f172a] transition duration-300"
          >
            Contact Me
          </a>
        </Motion.div>
      </div>

      <Motion.div
        variants={slideInFromRight(0.8)}
        className="hidden w-full h-full md:flex justify-center items-center"
      >
        <img
          src="/mainIconsdark.svg"
          alt="work icons"
          className="md:max-w-[450px] xl:max-w-[600px] h-auto"
        />
      </Motion.div>
    </Motion.div>
  );
};

export default HeroContent;
