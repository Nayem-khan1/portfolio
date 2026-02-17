import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router";

const BlogCard = ({ blog }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) {
      return;
    }

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
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
    <div
      ref={cardRef}
      className="bg-[#1e293b] text-white rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:border-primary transition duration-300 hover:scale-[1.02]"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6 space-y-4">
        <div className="text-sm text-gray-400">{blog.date}</div>
        <h3 className="text-xl font-bold text-primary">{blog.title}</h3>
        <p className="text-gray-300 text-sm line-clamp-3">{blog.excerpt}</p>

        <Link
          to={`/blog/${blog.slug}`}
          className="inline-block text-sm mt-4 px-4 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-black transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
