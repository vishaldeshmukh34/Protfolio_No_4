import React from "react";
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram 
} from "react-icons/fa";

function About() {
  return (
    <section 
      id="about"
      className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Profile Image */}
        <div className="relative group flex justify-center">
          <div className="absolute w-72 h-72 bg-indigo-400 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
          
          <img
            src="/about.png"
            alt="about"
            className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-2xl relative z-10 transform group-hover:scale-105 transition duration-500 cursor-pointer"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-indigo-600">Me</span>
          </h2>

          <h3 className="text-2xl font-semibold mb-4">
            Hello! I'm Vishal Deshmukh 👋
          </h3>

          <p className="text-indigo-600 font-medium mb-4">
            Java Full Stack Developer passionate about UI/UX
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            I build clean, scalable and interactive digital experiences
            using modern technologies like React.js, Node.js, and Java.
            I love creating responsive and user-friendly web applications.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <a 
              href="#" 
              className="p-3 rounded-full bg-white shadow-lg hover:bg-indigo-600 hover:text-white transform hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <FaEnvelope />
            </a>

            <a 
              href="#" 
              className="p-3 rounded-full bg-white shadow-lg hover:bg-indigo-600 hover:text-white transform hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <FaLinkedin />
            </a>

            <a 
              href="#" 
              className="p-3 rounded-full bg-white shadow-lg hover:bg-indigo-600 hover:text-white transform hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <FaGithub />
            </a>

            <a 
              href="#" 
              className="p-3 rounded-full bg-white shadow-lg hover:bg-indigo-600 hover:text-white transform hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;