// src/pages/ProjectDetails.jsx

import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router";
import { projectData } from "../data/projects";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectData.find((p) => p.slug === slug);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, []);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          404 – Project Not Found
        </h1>
        <button
          onClick={() => navigate("/projects")}
          className="bg-primary text-black px-6 py-2 rounded-full hover:bg-white hover:text-primary transition"
        >
          ← Back to All Projects
        </button>
      </main>
    );
  }

  return (
    <main className="bg-[#0f172a] text-white min-h-screen px-6 md:px-20 py-20">
      <section ref={sectionRef} className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 text-center"
        >
          {project.title}
        </motion.h1>

        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-[450px] object-cover rounded-xl border border-gray-700 shadow-lg mb-10"
        />

        <div className="text-gray-300 text-lg leading-relaxed space-y-6">
          <p>{project.description}</p>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              🛠 Technologies Used:
            </h3>
            <ul className="flex flex-wrap gap-3">
              {project.tech.map((tech, idx) => (
                <li
                  key={idx}
                  className="bg-[#1e293b] text-primary px-3 py-1 rounded-full text-sm border border-gray-600"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-6 mt-8">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-black font-medium px-5 py-2 rounded-full hover:bg-white hover:text-primary transition"
              >
                🔗 Live Preview
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary px-5 py-2 rounded-full hover:bg-primary hover:text-black transition"
              >
                💻 GitHub Repo
              </a>
            )}
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/projects")}
            className="mt-4 bg-primary text-black px-6 py-2 rounded-full hover:bg-white hover:text-primary transition"
          >
            ← Back to Projects
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;
