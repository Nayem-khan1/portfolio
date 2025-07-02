import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from "../utils/motion";
import { HiSparkles } from "react-icons/hi2";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className=" max-w-screen-2xl mx-auto md:flex md:flex-row md:items-center md:justify-center mt-30 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="hidden md:block Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]"
        >
          <HiSparkles className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Fullstack Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl md:text-6xl font-bold text-white w-auto  md:max-w-[600px] h-auto"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Nayem Khan
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          A passionate MERN Stack Developer crafting clean & scalable solutions.
          Let's build something impactful together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-6 flex gap-4"
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
            href="#contact"
            className="px-6 py-3 border border-white text-white rounded-2xl hover:bg-white hover:text-[#0f172a] transition duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden w-full h-full md:flex justify-center items-center"
      >
        <img
          src="/mainIconsdark.svg"
          alt="work icons"
          className="md:max-w-[450px] xl:max-w-[600px] h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
