// src/components/Footer.jsx

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
        },
      }
    );
  }, []);

  return (
    <motion.footer
      ref={footerRef}
      className="text-white px-6 py-12 md:px-20 shadow-inner mt-20"
    >
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-primary font-serif mb-3">
            Nayem Khan
          </h3>
          <p className="text-gray-400">
            MERN Stack Developer focused on building elegant and scalable
            digital products.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-primary">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#home" className="hover:text-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-primary transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials & Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-primary">
            Get in Touch
          </h4>
          <div className="flex space-x-4 mb-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-primary text-xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-primary text-xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:nayem@email.com"
              className="text-gray-400 hover:text-primary text-xl transition"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-gray-400 text-sm">Email: nayem@email.com</p>
          <p className="text-gray-400 text-sm">Phone: +880 123456789</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nayem Khan. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
