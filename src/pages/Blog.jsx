import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import BlogCard from "../components/BlogCard";
import { blogData } from "../data/blogs";

const Blog = () => {
  const blogSectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      blogSectionRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: blogSectionRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <main className="bg-[#0f172a] text-white min-h-screen px-6 md:px-20 py-20">
      <section ref={blogSectionRef} className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-serif font-bold text-primary mb-10 text-center"
        >
          My Blog
        </motion.h1>

        {blogData.length === 0 ? (
          <p className="text-center text-gray-400">No blog posts found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Blog;
