import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { gsap } from "gsap";
import { blogData } from "../data/blogs";

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const blog = blogData.find((item) => item.slug === slug);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  if (!blog) {
    return (
      <main className="relative z-20 min-h-screen text-white px-6 md:px-20 py-32 text-center">
        <h1 className="text-3xl text-red-500 font-bold mb-4">
          404 - Blog Not Found
        </h1>
        <p className="text-gray-400 mb-6">
          The blog post you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/#blog")}
          className="bg-primary text-black px-5 py-2 rounded-full hover:bg-white hover:text-primary transition"
        >
          Back to Blog
        </button>
      </main>
    );
  }

  const paragraphs = blog.content?.paragraphs ?? [];
  const highlights = blog.content?.highlights ?? [];

  return (
    <main className="relative z-20 text-white min-h-screen px-6 md:px-20 py-20">
      <section ref={sectionRef} className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-4 text-center">
          {blog.title}
        </h1>

        <p className="text-sm text-gray-400 text-center mb-6">{blog.date}</p>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-h-[400px] object-cover rounded-xl shadow-lg mb-10 border border-gray-700"
        />

        <div className="prose prose-invert prose-lg text-gray-300 max-w-none leading-relaxed space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {highlights.length > 0 ? (
            <ul className="list-disc pl-5">
              {highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/#blog")}
            className="bg-primary text-black px-6 py-2 rounded-full hover:bg-white hover:text-primary transition"
          >
            {"<- Back to Blog"}
          </button>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
