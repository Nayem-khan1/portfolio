import React from "react";
import { Link } from "react-router";

const ProjectCard = ({ src, title, description, live, github, slug }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <img
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>

      <div className="flex flex-wrap gap-4 px-4 pb-4 items-center">
        {live ? (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 button-primary text-white font-semibold rounded-2xl shadow-lg hover:bg-white hover:text-primary transition duration-300"
          >
            Live
          </a>
        ) : null}

        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 border border-white text-white rounded-2xl hover:bg-white hover:text-[#0f172a] transition duration-300"
          >
            GitHub
          </a>
        ) : null}

        <Link
          to={`/projects/${slug}`}
          className="px-4 py-1 border border-primary text-primary rounded-2xl hover:bg-primary hover:text-black transition duration-300"
        >
          Details
        </Link>

        {!live && !github ? (
          <span className="text-xs text-gray-400">Private project links</span>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
