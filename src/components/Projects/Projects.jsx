import React from "react";


import Project1 from "../../assets/project1.png";
import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3.png";
import Project4 from "../../assets/project4.png";
import Project5 from "../../assets/project5.png";
import Project6 from "../../assets/project6.png";

const projects = [
  {
    title: "JAVA MCQ APP",
    image: Project1,
    desc: "A React-based Java MCQ quiz application featuring multiple-choice questions.",
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    live: "https://venerable-muffin-a22d02.netlify.app/",
    code: "https://github.com/vishaldeshmukh34/Quiz-app",
  },
  {
    title: "TO DO LIST",
    image: Project2,
    desc: "A responsive to-do list application built with React.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://vishaldeshmukh34.github.io/To-Do-List/",
    code: "https://github.com/vishaldeshmukh34/To-Do-List",
  },
  {
    title: "NEW ADVENTURES",
    image: Project3,
    desc: "Modern responsive website using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "React.js", "JavaScript"],
    live: "https://vishaldeshmukh34.github.io/NEW-ADVENTURES-Website/",
    code: "https://github.com/vishaldeshmukh34/NEW-ADVENTURES-Website",
  },
  {
    title: "Netflix Clone",
    image: Project4,
    desc: "Netflix UI clone with dark theme and responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://syrniki-62e66d.netlify.app/",
    code: "https://github.com/vishaldeshmukh34/Netflix-clone",
  },
  {
    title: "Amazon Clone",
    image: Project5,
    desc: "Amazon homepage clone with responsive product sections.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://amazonclonebyvishal.netlify.app/",
    code: "https://github.com/vishaldeshmukh34/Amazon-Clone",
  },
  {
    title: "Car Rental",
    image: Project6,
    desc: "Responsive car rental website with modern UI layout.",
    tech: ["HTML", "CSS", "React.js", "JavaScript"],
    live: "https://vishaldeshmukh34.github.io/Car-Rental_project/",
    code: "https://github.com/vishaldeshmukh34/Car-Rental_project",
  },
];
function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-gray-50 to-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
{/* Title */}
<div className="text-center mb-20 relative">

  {/* Small Badge */}
  <span className="inline-block px-4 py-1 text-sm font-medium 
                   bg-gradient-to-r from-purple-500 to-indigo-600 
                   text-white rounded-full shadow-md mb-4">
    🚀 Portfolio Work
  </span>

  {/* Main Heading */}
  <h2 className="text-5xl font-extrabold bg-gradient-to-r 
                 from-purple-500 via-pink-500 to-indigo-600 
                 bg-clip-text text-transparent drop-shadow-lg">
    My Projects
  </h2>

  {/* Animated Gradient Line */}
  <div className="mt-6 flex justify-center">
    <div className="w-32 h-1 rounded-full 
                    bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 
                    animate-pulse">
    </div>
  </div>

  {/* Subtitle */}
  <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
    Some of my recent work built with modern technologies and clean UI design.
  </p>

</div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3 overflow-hidden"
            >
              
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transform group-hover:scale-110 transition duration-700"
                />

               {/* Hover Overlay */}
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-6">

  {/* Live Button */}
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="relative px-6 py-2 text-white text-sm font-semibold rounded-full 
               bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 
               shadow-lg shadow-purple-500/40 
               hover:scale-110 hover:shadow-pink-500/60 
               transition duration-300 overflow-hidden"
  >
    <span className="relative z-10">🚀 Live</span>
    <span className="absolute inset-0 bg-white opacity-10 blur-xl"></span>
  </a>

  {/* Code Button */}
  <a
    href={project.code}
    target="_blank"
    rel="noopener noreferrer"
    className="relative px-6 py-2 text-white text-sm font-semibold rounded-full 
               bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 
               shadow-lg shadow-blue-500/40 
               hover:scale-110 hover:shadow-cyan-500/60 
               transition duration-300 overflow-hidden"
  >
    <span className="relative z-10">💻 Code</span>
    <span className="absolute inset-0 bg-white opacity-10 blur-xl"></span>
  </a>

</div>
              </div>

              {/* Content */}
              <div className="p-6">
               <h3 className="relative inline-block text-xl font-bold mb-4
               bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600
               bg-clip-text text-transparent
               transition duration-300 group-hover:scale-105">

  {project.title}

  {/* Animated Underline */}
  <span className="absolute left-0 -bottom-1 w-0 h-[3px] 
                   bg-gradient-to-r from-purple-500 to-pink-500
                   transition-all duration-500 
                   group-hover:w-full">
  </span>

</h3>

                <p className="text-sm text-gray-600 mb-4">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;