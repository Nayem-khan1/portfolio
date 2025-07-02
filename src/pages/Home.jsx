import React, { useEffect, useRef } from "react";
import Banner from "../components/Banner";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import BlogCard from "../components/BlogCard";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { projectData } from "../data/projects";
import { blogData } from "../data/blogs";
import Hero from "../components/Hero";

const Home = () => {
  const projectsRef = useRef(null);
  const blogsRef = useRef(null);

  useEffect(() => {
    // GSAP scroll reveal for projects section
    gsap.fromTo(
      projectsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 90%",
        },
      }
    );
    // GSAP scroll reveal for blogs section
    gsap.fromTo(
      blogsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: blogsRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <main className="min-h-screen text-white">
      {/* Banner */}
      <Hero />

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className="max-w-7xl mx-auto px-6 md:px-20 py-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-serif font-bold text-primary mb-10 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projectData.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Blogs Section */}
      <section
        id="blog"
        ref={blogsRef}
        className="max-w-7xl mx-auto px-6 md:px-20 py-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-serif font-bold text-primary mb-10 text-center"
        >
          Latest Blog Posts
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogData.slice(0, 3).map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </main>
  );
};

export default Home;
