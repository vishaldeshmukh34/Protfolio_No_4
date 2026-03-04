import React from "react";
import {
  FaReact,
  FaJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaServer,
  FaDatabase,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiSpringboot,
  SiHibernate,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiRedux,
  SiExpress,
  SiTailwindcss,
  SiEclipseide
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  const categories = [
    {
      title: "Frontend",
      icon: <FaReact />,
      items: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Redux Toolkit", icon: <SiRedux /> }
      ]
    },
    {
      title: "Backend",
      icon: <FaServer />,
      items: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring", icon: <SiSpringboot /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Hibernate", icon: <SiHibernate /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST APIs", icon: <FaServer /> },
        { name: "JWT", icon: <FaServer /> }
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      items: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Workbench", icon: <SiMysql /> },
        { name: "JDBC", icon: <FaJava /> },
        { name: "JPA", icon: <FaJava /> }
      ]
    },
    {
      title: "Dev Tools",
      icon: <FaTools />,
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Netlify", icon: <SiNetlify /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "VS Code", icon: <VscVscode /> },
        { name: "Eclipse", icon: <SiEclipseide /> }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-gray-50 to-indigo-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
  {/* Skills Section Title */}
<div className="text-center mb-20 relative">

  {/* Small Badge */}
  <span className="inline-block px-4 py-1 text-sm font-medium 
                   bg-gradient-to-r from-purple-500 to-indigo-600 
                   text-white rounded-full shadow-md mb-4 animate-pulse">
    🚀 My Expertise
  </span>

  {/* Main Heading */}
  <h2 className="text-5xl font-extrabold 
                 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 
                 bg-clip-text text-transparent drop-shadow-lg 
                 animate-fadeIn">
    Skills & <span className="text-indigo-500">Tools</span>
  </h2>

  {/* Animated Gradient Line */}
  <div className="mt-6 flex justify-center">
    <div className="w-32 h-1 rounded-full 
                    bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 
                    animate-pulse">
    </div>
  </div>

  {/* Subtitle */}
  <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed animate-fadeIn delay-200">
    A snapshot of the technologies I work with, highlighted with modern design and interactive animations.
  </p>

</div>

        <div className="grid md:grid-cols-2 gap-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
            >
              <div className="absolute inset-0 rounded-2xl blur-lg opacity-20 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl p-8 h-full transform group-hover:-translate-y-2 transition duration-500 shadow-xl">
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-2xl text-indigo-600">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center p-4 rounded-xl hover:bg-indigo-50 transition duration-300 transform hover:scale-105"
                    >
                      <div className="text-3xl mb-2 text-indigo-500">
                        {item.icon}
                      </div>
                      <p className="text-sm text-gray-600 text-center">
                        {item.name}
                      </p>
                    </div>
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

export default Skills;