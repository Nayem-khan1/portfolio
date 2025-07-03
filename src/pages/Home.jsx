import React, { useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import BlogCard from "../components/BlogCard";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { projectData } from "../data/projects";
import { blogData } from "../data/blogs";
import Hero from "../components/Hero";
import Projects from "./Projects";
import Skills from "../components/Skills";
import Encryption from "../components/Encryption";

const Home = () => {
  const projectsRef = useRef(null);
  const blogsRef = useRef(null);
  const skillsRef = useRef(null);

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
    // GSAP scroll reveal for skill section
    gsap.fromTo(
      skillsRef.current,
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
        className=" max-w-screen-2xl mx-auto px-4 md:px-10 py-16"
      >
        <Projects />
      </section>
      <section
        id="skills"
        ref={skillsRef}
        className=" max-w-screen-2xl mx-auto px-4 md:px-10 py-16"
      >
        <Skills />
      </section>

      <section id="" className=" max-w-screen-2xl mx-auto px-4 md:px-10 py-16">
        <Encryption />
      </section>

      {/* Blogs Section */}
      <section
        id="blog"
        ref={blogsRef}
        className=" max-w-screen-2xl mx-auto px-4 md:px-10 py-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-primary mb-10 text-center"
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
