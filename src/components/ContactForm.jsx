import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const ContactForm = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top bottom",
        },
      }
    );
  }, []);

  return (
    <motion.section
      ref={formRef}
      id="contact"
      className="px-6 md:px-20 py-16 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-6">
          Let's Connect
        </h2>
        <p className="text-gray-400 mb-10">
          Feel free to reach out via this form or email me directly.
        </p>

        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="space-y-6 text-left"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-[#1e293b] border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-[#1e293b] border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Your Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 bg-[#1e293b] border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="bg-primary text-black font-semibold px-6 py-3 rounded-full transition hover:bg-white hover:text-primary"
          >
            Send Message
          </motion.button>
        </form>

        {/* Optional direct contact info */}
        <div className="mt-10 text-sm text-gray-400">
          Or contact me at:{" "}
          <a
            href="mailto:nayem@email.com"
            className="text-primary hover:underline"
          >
            nayem@email.com
          </a>{" "}
          | Phone: <span className="text-primary">+880 123456789</span>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
