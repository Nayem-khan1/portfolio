// src/pages/NotFound.jsx

import React, { useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const NotFound = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <main className="bg-[#0f172a] text-white min-h-screen flex items-center justify-center px-6">
      <section ref={sectionRef} className="text-center max-w-xl">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[120px] leading-none font-extrabold text-primary"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-300 mb-8"
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>

        <Link
          to="/"
          className="inline-block bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition"
        >
          ← Back to Home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
