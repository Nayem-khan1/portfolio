import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { blogData } from "../data/blogs";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((item) => item.slug === slug);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  if (!blog) {
    return (
      <main className="min-h-screen bg-[#0f172a] text-white px-6 md:px-20 py-32 text-center">
        <h1 className="text-3xl text-red-500 font-bold mb-4">
          404 – Blog Not Found
        </h1>
        <p className="text-gray-400 mb-6">
          The blog post you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/blog")}
          className="bg-primary text-black px-5 py-2 rounded-full hover:bg-white hover:text-primary transition"
        >
          Back to Blog
        </button>
      </main>
    );
  }

  return (
    <main className="bg-[#0f172a] text-white min-h-screen px-6 md:px-20 py-20">
      <section ref={sectionRef} className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-serif font-bold text-primary mb-4 text-center"
        >
          {blog.title}
        </motion.h1>

        <p className="text-sm text-gray-400 text-center mb-6">{blog.date}</p>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-h-[400px] object-cover rounded-xl shadow-lg mb-10 border border-gray-700"
        />

        <div className="prose prose-invert prose-lg text-gray-300 max-w-none leading-relaxed space-y-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <p>
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
            ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
          <ul className="list-disc pl-5">
            <li>Reusable React components</li>
            <li>Dark mode with Tailwind</li>
            <li>Scroll animations with GSAP</li>
          </ul>
          <p>
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem
            at dolor.
          </p>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/blog")}
            className="bg-primary text-black px-6 py-2 rounded-full hover:bg-white hover:text-primary transition"
          >
            ← Back to All Blogs
          </button>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
