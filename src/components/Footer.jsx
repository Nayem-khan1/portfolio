import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) {
      return;
    }

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
    <footer
      ref={footerRef}
      className="relative z-20 text-white px-6 py-12 md:px-20 shadow-inner mt-20"
    >
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-3">Md. Nayem Khan</h3>
          <p className="text-gray-400">
            Frontend Engineer (React | TypeScript) and full-stack MERN developer
            focused on scalable, user-friendly products.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 text-primary">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/#about-me" className="hover:text-primary transition">
                About
              </a>
            </li>
            <li>
              <a href="/#projects" className="hover:text-primary transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/#skills" className="hover:text-primary transition">
                Skills
              </a>
            </li>
            <li>
              <a href="/#blog" className="hover:text-primary transition">
                Blog
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-primary transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 text-primary">Get in Touch</h4>
          <div className="flex space-x-4 mb-3">
            <a
              href="https://github.com/Nayem-khan1"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-primary text-xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nayem-khan1"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-primary text-xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:nayemkhan4496@gmail.com"
              className="text-gray-400 hover:text-primary text-xl transition"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-gray-400 text-sm">Email: nayemkhan4496@gmail.com</p>
          <p className="text-gray-400 text-sm">Phone: +8801954496221</p>
          <p className="text-gray-400 text-sm">Location: Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        (c) {new Date().getFullYear()} Md. Nayem Khan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
