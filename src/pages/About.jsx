import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { skillsLevel1, skillsLevel2 } from "../data/skills";

const About = () => {
  const aboutRef = useRef(null);
  const timelineRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    }

    if (skillsRef.current) {
      gsap.fromTo(
        skillsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <main className="bg-[#0f172a] text-white min-h-screen px-6 md:px-20 py-16">
      <section ref={aboutRef} className="max-w-5xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
          About Me
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am Md. Nayem Khan, a Frontend Engineer (React | TypeScript) and a
          full-stack MERN developer with 2+ years of experience. I build
          scalable SaaS and e-commerce products with clean architecture,
          reusable components, and high-performance UI.
        </p>
      </section>

      <section
        ref={timelineRef}
        className="max-w-6xl mx-auto mb-16 grid md:grid-cols-2 gap-10"
      >
        <div className="bg-[#111827] rounded-xl border border-gray-700 p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Professional Experience
          </h2>
          <div className="space-y-6 text-gray-300 text-sm">
            <div>
              <p className="font-medium text-white">
                Frontend Developer - FinoBytes
              </p>
              <p className="text-gray-400">Dhaka, Bangladesh | 09/2025 - Present</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Built multi-role dashboard (Member, Merchant, Admin).</li>
                <li>Implemented QR-based registration and transaction flows.</li>
                <li>Developed 30-level referral tree and voucher/point UI.</li>
                <li>Integrated REST APIs with role-based route protection.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-white">
                Junior Web Developer - Mojaru
              </p>
              <p className="text-gray-400">Dhaka, Bangladesh | 08/2023 - 01/2025</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Developed live class and course management UI in React.</li>
                <li>Implemented authentication and role-based access control.</li>
                <li>Collaborated with backend team through Redux and REST APIs.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#111827] rounded-xl border border-gray-700 p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">Education</h2>
          <div className="text-gray-300 space-y-4 text-sm">
            <div>
              <p className="font-medium text-white">
                Bachelor&apos;s in Computer Science and Engineering (Ongoing)
              </p>
              <p>Bangladesh University of Business and Technology (BUBT)</p>
              <p className="text-gray-400">Dhaka, Bangladesh | Present</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
            Contact
          </h2>
          <div className="text-sm text-gray-300 space-y-1">
            <p>Email: nayemkhan4496@gmail.com</p>
            <p>Phone: +8801954496221</p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>
        </div>
      </section>

      <section ref={skillsRef} className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-gray-300 text-sm">
          <div className="bg-[#111827] rounded-xl border border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Frontend and UI
            </h3>
            <ul className="space-y-2">
              {skillsLevel1.map((skill, idx) => (
                <li
                  key={idx}
                  className="bg-[#1e293b] px-4 py-2 rounded-lg border border-gray-700"
                >
                  <span className="text-primary font-medium">{skill.name}</span>
                  {" - "}
                  {skill.level}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#111827] rounded-xl border border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Backend, Auth, and Tools
            </h3>
            <ul className="space-y-2">
              {skillsLevel2.map((skill, idx) => (
                <li
                  key={idx}
                  className="bg-[#1e293b] px-4 py-2 rounded-lg border border-gray-700"
                >
                  <span className="text-primary font-medium">{skill.name}</span>
                  {" - "}
                  {skill.level}
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
