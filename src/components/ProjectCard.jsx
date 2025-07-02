import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
        },
      }
    );
  }, []);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-[#1e293b] text-white rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:border-primary transition duration-300"
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-primary font-serif">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        <div>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-block mt-3 px-5 py-2 text-sm rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
