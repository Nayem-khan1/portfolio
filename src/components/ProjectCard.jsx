import React from "react";

const ProjectCard = ({ src, title, description, live, github }) => {
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
      <div className="flex gap-4 px-4 pb-4">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 button-primary text-white font-semibold rounded-2xl shadow-lg hover:bg-white hover:text-primary transition duration-300"
        >
          Live
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 border border-white text-white rounded-2xl hover:bg-white hover:text-[#0f172a] transition duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
