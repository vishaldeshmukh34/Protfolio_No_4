import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaJs, FaJava, FaGitAlt, FaGithub, FaDocker, 
  FaDatabase, FaNodeJs, FaTools, FaTerminal 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiSpringboot, SiHibernate, 
  SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiPostman, 
  SiVercel, SiNetlify, SiRedux, SiExpress, SiTailwindcss 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills() {
  const categories = [
    {
      title: "Frontend",
      description: "UI/UX & Animation",
      accent: "from-blue-500 to-indigo-600",
      bg: "bg-[#111114]", // Dark Container
      items: [
        { name: "React.js", icon: <FaReact />, color: "text-blue-400" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
        { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" }
      ]
    },
    {
      title: "Backend",
      description: "Scalable Logic",
      accent: "from-emerald-400 to-cyan-600",
      bg: "bg-[#0c0c0e]", // Darker Container
      items: [
        { name: "Java", icon: <FaJava />, color: "text-red-500" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-500" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
        { name: "Express", icon: <SiExpress />, color: "text-slate-300" },
        { name: "Hibernate", icon: <SiHibernate />, color: "text-amber-600" },
        { name: "Docker", icon: <FaDocker />, color: "text-blue-500" }
      ]
    },
    {
      title: "Database",
      description: "Cloud & Storage",
      accent: "from-orange-500 to-rose-600",
      bg: "bg-[#111114]",
      items: [
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
        { name: "MySQL", icon: <SiMysql />, color: "text-sky-500" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-orange-400" },
        { name: "SQL", icon: <FaDatabase />, color: "text-slate-400" },
        { name: "JPA", icon: <FaJava />, color: "text-red-400" }
      ]
    },
    {
      title: "Dev Tools",
      description: "Agile Workflow",
      accent: "from-purple-500 to-fuchsia-600",
      bg: "bg-[#0c0c0e]",
      items: [
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
        { name: "GitHub", icon: <FaGithub />, color: "text-white" },
        { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
        { name: "Vercel", icon: <SiVercel />, color: "text-white" },
        { name: "VS Code", icon: <VscVscode />, color: "text-blue-400" },
        { name: "Netlify", icon: <SiNetlify />, color: "text-cyan-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#f8f9fa] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.03)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1 rounded-full bg-white border border-slate-200 text-indigo-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-sm"
          >
            Stack & Tools
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            High Performance <br />
            <span className="text-2xl md:text-3xl font-bold text-slate-400 block mt-2 italic">
              Mastering the Modern Web.
            </span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`${cat.bg} rounded-[3rem] p-8 md:p-12 relative overflow-hidden border border-white/5 shadow-2xl`}
            >
              {/* Corner Glow Accent */}
              <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${cat.accent} opacity-10 blur-[80px]`} />

              <div className="flex justify-between items-center mb-10 relative z-10">
                <div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">{cat.title}</h3>
                  <p className="text-slate-500 text-sm font-medium">{cat.description}</p>
                </div>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.accent} flex items-center justify-center text-white shadow-lg`}>
                  <FaTerminal size={18} />
                </div>
              </div>

              {/* Skills Pills (Light Contrast) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
                {cat.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="flex flex-col items-center justify-center p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white transition-all duration-300 group"
                  >
                    <div className={`${skill.color} text-3xl mb-3 group-hover:scale-110 transition-transform`}>
                      {skill.icon}
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 group-hover:text-slate-900 uppercase tracking-widest text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;