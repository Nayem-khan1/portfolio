import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    if (!contactRef.current) {
      return;
    }

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
  }, []);

  return (
    <main className="bg-[#0f172a] text-white min-h-screen px-6 md:px-20 py-20">
      <section ref={contactRef} className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary text-center mb-8">
          Contact Me
        </h1>

        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          I am available for frontend engineering and full-stack MERN roles.
          Feel free to contact me through the form or direct channels below.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6 bg-[#111827] border border-gray-700 rounded-xl p-6">
            <div>
              <h3 className="text-xl text-white font-semibold mb-2">Email</h3>
              <a
                href="mailto:nayemkhan4496@gmail.com"
                className="text-primary hover:underline"
              >
                nayemkhan4496@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-xl text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+8801954496221</p>
            </div>
            <div>
              <h3 className="text-xl text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Dhaka, Bangladesh</p>
            </div>
            <div>
              <h3 className="text-xl text-white font-semibold mb-2">Profiles</h3>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/in/nayem-khan1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Nayem-khan1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://nayem-dev.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Portfolio Website
                </a>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
