import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-4 lg:px-10 2xl:px-0">
        <ProjectCard
          src="/image/projects/project-1.png"
          title="Personal Portfolio Website"
          description="A modern and responsive portfolio built with React, Tailwind CSS, Framer Motion, and GSAP. It showcases my projects, skills, blog, and contact form with elegant UI animations."
          github="https://github.com/Nayem-khan1/portfolio.git"
          live="https://portfolio-blond-eight-77.vercel.app/"
        />
        <ProjectCard
          src="/image/projects/project-2.png"
          title="E-commerce Store"
          description="A full-featured e-commerce website using React, Node.js, Express, and MongoDB. Includes product browsing, cart, checkout, cash-on-delivery, Stripe payment, and responsive UI."
          github="https://github.com/Nayem-khan1/rong-bd-frontend.git"
          live="https://rong-bd-frontend.vercel.app/"
        />
        <ProjectCard
          src="/image/projects/project-3.png"
          title="Admin Dashboard"
          description="An intuitive admin panel to manage products, orders, and customers. Built using React, Chart.js, Tailwind CSS, and secure Express APIs for real-time store insights."
          github="https://github.com/Nayem-khan1/rong-bd-admin.git"
          live="https://rong-bd-admin.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
