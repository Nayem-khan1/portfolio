import React from "react";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";

const Banner = () => {
  return (
    <section id="about-me" className="relative flex flex-col h-full w-full">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* Content */}
      <div className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <HiSparkles className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
              Fullstack Developer Portfolio
            </h1>
          </motion.div>

          <motion.h1
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Nayem Khan
            </span>
          </motion.h1>

          <motion.p
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            A passionate MERN Stack Developer crafting clean & scalable
            solutions. Let's build something impactful together.
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

        {/* Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center"
        >
          <img
            src="https://space-portolio.vercel.app/mainIconsdark.svg"
            alt="Developer"
            className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
