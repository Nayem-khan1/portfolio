import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

// Dummy data (later fetch dynamically or from context)
import { projectData } from "../data/projects"; // assume you export all project objects from here
import { Link, useParams } from "react-router";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projectData.find((p) => p.slug === slug);
  const detailRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      detailRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  if (!project) {
    return (
      <div className="text-center py-20 text-white text-xl">
        Project not found!
      </div>
    );
  }

  return (
    <motion.section
      ref={detailRef}
      className="min-h-screen bg-[#0f172a] text-white px-6 md:px-20 py-16"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-primary font-serif">
          {project.title}
        </h1>

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-[400px] object-cover rounded-xl shadow-2xl border border-gray-700"
        />

        {/* Description */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Project Overview
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6 flex-wrap">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-primary text-black font-semibold hover:bg-white hover:text-primary transition"
            >
              Live Demo
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition"
            >
              View Code
            </a>
          )}
          <Link
            to="/projects"
            className="px-5 py-2 rounded-full border border-white text-white hover:bg-white hover:text-[#0f172a] transition"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetails;
