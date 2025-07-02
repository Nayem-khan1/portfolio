// src/pages/Contact.jsx

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <main className="bg-[#0f172a] text-white min-h-screen px-6 md:px-20 py-20">
      <section ref={contactRef} className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif font-bold text-primary text-center mb-8"
        >
          Contact Me
        </motion.h1>

        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          Have a question, idea, or just want to say hello? Fill out the form
          below or contact me directly.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl text-white font-semibold mb-2">
                📧 Email
              </h3>
              <p className="text-gray-300">nayem.dev@example.com</p>
            </div>
            <div>
              <h3 className="text-xl text-white font-semibold mb-2">
                📞 Phone
              </h3>
              <p className="text-gray-300">+880 1700 000 000</p>
            </div>
            <div>
              <h3 className="text-xl text-white font-semibold mb-2">
                📍 Location
              </h3>
              <p className="text-gray-300">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
