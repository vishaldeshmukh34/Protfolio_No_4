import React, { useState, useEffect } from "react";
import profile1 from "../../assets/profile1.webp";
import cv from "../../assets/Vishal_Resume.pdf";

function Hero() {
  const roles = [
    "Full Stack Developer",
    "Java Backend Developer",
    "React Frontend Developer",
    "REST API Developer",
    "UI/UX Designer"
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-indigo-200 animate-gradient">

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-3 h-3 bg-indigo-300 rounded-full opacity-40 animate-float1"></div>
        <div className="absolute w-4 h-4 bg-indigo-400 rounded-full opacity-30 animate-float2"></div>
        <div className="absolute w-2 h-2 bg-indigo-500 rounded-full opacity-40 animate-float3"></div>
      </div>

      <div className="relative z-10 backdrop-blur-xl bg-white/70 border border-indigo-200 rounded-3xl shadow-2xl p-10 max-w-6xl w-full mx-6 grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={profile1}
            alt="profile"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-indigo-200 shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>

        {/* CONTENT */}
        <div className="text-gray-800 text-center md:text-left">
          <p className="text-lg mb-3 font-medium text-indigo-600">
            Hi, I'm Vishal Deshmukh 👋
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {text}
            <span className="animate-pulse text-indigo-600"> |</span>
          </h1>

          <p className="mb-6 leading-relaxed text-gray-600">
            Building modern, responsive and interactive web experiences
            using React, Java, Node.js and REST APIs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

           <a
  href={cv}
  download
  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300"
>
  📥 Download CV
</a>

            <a
              href="#contact"
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300"
            >
              Hire Me
            </a>

          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 text-indigo-600 text-3xl animate-bounce">
        ↓
      </div>
    </section>
  );
}

export default Hero;