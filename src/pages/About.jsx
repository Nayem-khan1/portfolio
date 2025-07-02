import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { skillsLevel1, skillsLevel2 } from "../data/skills";

const About = () => {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    // GSAP reveal for all sections
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 90%",
        },
      }
    );
    gsap.fromTo(
      educationRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 90%",
        },
      }
    );
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <main className="bg-[#0f172a] text-white min-h-screen px-6 md:px-20 py-16">
      {/* Introduction */}
      <section ref={aboutRef} className="max-w-4xl mx-auto mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
        >
          About Me
        </motion.h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi! I’m <span className="text-primary font-semibold">Nayem Khan</span>
          , a passionate MERN Stack developer focused on building fast,
          user-friendly, and impactful web applications. I love solving
          real-world problems with clean code and meaningful UI/UX.
        </p>
      </section>

      {/* Education + Experience */}
      <section
        ref={educationRef}
        className="max-w-4xl mx-auto mb-16 grid md:grid-cols-2 gap-10"
      >
        <div>
          <h2 className="text-2xl font-semibold text-primary font-serif mb-4">
            🎓 Education
          </h2>
          <div className="text-gray-300 space-y-3 text-sm">
            <div>
              <p className="font-medium text-white">B.Sc. in CSE</p>
              <p>XYZ University, 2020 – 2024</p>
            </div>
            <div>
              <p className="font-medium text-white">HSC</p>
              <p>ABC College, 2018 – 2020</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary font-serif mb-4">
            💼 Experience
          </h2>
          <div className="text-gray-300 space-y-3 text-sm">
            <div>
              <p className="font-medium text-white">
                MERN Stack Developer (Intern)
              </p>
              <p>Tech Solutions Ltd. – 6 Months</p>
            </div>
            <div>
              <p className="font-medium text-white">Freelancer</p>
              <p>Fiverr & Local Projects – 2+ Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section ref={skillsRef} className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
          💻 My Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-gray-300 text-sm">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              🔰 Level 1 – Core Skills
            </h3>
            <ul className="space-y-2">
              {skillsLevel1.map((skill, idx) => (
                <li
                  key={idx}
                  className="bg-[#1e293b] px-4 py-2 rounded-lg border border-gray-700"
                >
                  <span className="text-primary font-medium">{skill.name}</span>{" "}
                  – {skill.level}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              🚀 Level 2 – Advanced Tools
            </h3>
            <ul className="space-y-2">
              {skillsLevel2.map((skill, idx) => (
                <li
                  key={idx}
                  className="bg-[#1e293b] px-4 py-2 rounded-lg border border-gray-700"
                >
                  <span className="text-primary font-medium">{skill.name}</span>{" "}
                  – {skill.level}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
