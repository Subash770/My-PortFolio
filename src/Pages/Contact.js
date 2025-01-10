import React, { useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import gsap from "gsap";

function Contact() {
  const contactRef = useRef();

  useEffect(() => {
    gsap.from(contactRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "Power3.easeOut",
    });
  }, []);

  return (
    <main
      ref={contactRef}
      className="container mx-auto max-width section flex flex-col items-center justify-center text-center space-y-8 py-20 px-6 bg-white dark:bg-dark-card rounded-lg shadow-lg"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-dark-heading dark:text-light-heading">
        Get in Touch
      </h1>
      <p className="text-lg text-dark-content dark:text-light-content max-w-2xl">
        I'm always excited to connect! Feel free to reach out to me on any of the platforms below.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* GitHub */}
        <a
          href="https://github.com/Subash770"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-2 text-dark-content dark:text-light-content hover:text-blue-500 transition"
        >
          <FaGithub className="text-5xl" />
          <span className="text-lg font-medium">GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/subash-r770"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-2 text-dark-content dark:text-light-content hover:text-blue-500 transition"
        >
          <FaLinkedin className="text-5xl" />
          <span className="text-lg font-medium">LinkedIn</span>
        </a>

        {/* Gmail */}
        <a
          href="mailto:subash2651@gmail.com"
          className="flex flex-col items-center space-y-2 text-dark-content dark:text-light-content hover:text-blue-500 transition"
        >
          <FaEnvelope className="text-5xl" />
          <span className="text-lg font-medium">Gmail</span>
        </a>

        {/* Phone */}
        <a
          href="tel:+91 7339055731"
          className="flex flex-col items-center space-y-2 text-dark-content dark:text-light-content hover:text-blue-500 transition"
        >
          <FaPhone className="text-5xl" />
          <span className="text-lg font-medium">Call Me</span>
        </a>
      </div>
    </main>
  );
}

export default Contact;
