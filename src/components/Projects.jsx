import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "../data/projects";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-10 2xl:px-0 w-full">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.image}
            title={project.title}
            description={project.description}
            github={project.repo}
            live={project.demo}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
