// Footer.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp, FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
      setShowScroll(scrollTop > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white/90 backdrop-blur-md shadow-inner mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Vishal Deshmukh</h2>
          <p className="text-gray-600 mb-4">Full Stack Developer | React & Tailwind Enthusiast</p>
          {/* Newsletter */}
          <div className="flex justify-center md:justify-start gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-full hover:bg-indigo-500 transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* Navigation & Social Icons */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-700 text-lg">
            <a href="#" className="hover:text-gray-900 transition-transform transform hover:scale-110"><FaGithub /></a>
            <a href="#" className="hover:text-gray-900 transition-transform transform hover:scale-110"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-gray-900 transition-transform transform hover:scale-110"><FaInstagram /></a>
            <a href="mailto:example@email.com" className="hover:text-gray-900 transition-transform transform hover:scale-110"><FaEnvelope /></a>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6 text-gray-700">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-gray-900 transition-colors before:absolute before:content-[''] before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:bottom-0 before:left-0 before:transition-all hover:before:w-full"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 mt-6 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Vishal Deshmukh. All rights reserved.
      </div>

      {/* Scroll To Top Circular Button with Progress Ring */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-white shadow-lg flex justify-center items-center hover:scale-110 transition-all"
        >
          <svg className="absolute w-16 h-16 -z-10" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#grad)"
              strokeWidth="5"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 45}
              strokeDashoffset={(1 - scrollProgress / 100) * 2 * Math.PI * 45}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
          <FaArrowUp className="text-gray-900 z-10" />
        </button>
      )}
    </footer>
  );
}

export default Footer;