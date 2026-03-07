import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaJs, FaJava, FaGitAlt, FaGithub, FaDocker, 
  FaDatabase, FaNodeJs, FaTerminal 
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
      description: "Modern UI/UX",
      accent: "from-sky-400/20 to-indigo-400/20",
      glow: "hover:shadow-sky-200/50",
      iconColor: "text-sky-600",
      items: [
        { name: "React.js", icon: <FaReact />, color: "text-sky-500", level: "92%" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-slate-800", level: "85%" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600", level: "80%" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500", level: "95%" },
        { name: "Redux", icon: <SiRedux />, color: "text-purple-600", level: "75%" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-600", level: "90%" }
      ]
    },
    {
      title: "Backend",
      description: "Architecture",
      accent: "from-blue-400/20 to-emerald-400/20",
      glow: "hover:shadow-blue-200/50",
      iconColor: "text-blue-600",
      items: [
        { name: "Java", icon: <FaJava />, color: "text-red-600", level: "88%" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-600", level: "82%" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-700", level: "85%" },
        { name: "Express", icon: <SiExpress />, color: "text-slate-600", level: "80%" },
        { name: "Hibernate", icon: <SiHibernate />, color: "text-orange-700", level: "75%" },
        { name: "Docker", icon: <FaDocker />, color: "text-blue-600", level: "70%" }
      ]
    },
    {
      title: "Database",
      description: "Cloud Storage",
      accent: "from-indigo-400/20 to-sky-400/20",
      glow: "hover:shadow-indigo-200/50",
      iconColor: "text-indigo-600",
      items: [
        { name: "MongoDB", icon: <SiMongodb />, color: "text-emerald-600", level: "85%" },
        { name: "Postgres", icon: <SiPostgresql />, color: "text-blue-700", level: "80%" },
        { name: "MySQL", icon: <SiMysql />, color: "text-sky-600", level: "90%" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-orange-500", level: "75%" },
        { name: "SQL", icon: <FaDatabase />, color: "text-slate-500", level: "88%" },
        { name: "JPA", icon: <FaJava />, color: "text-red-500", level: "82%" }
      ]
    },
    {
      title: "Tools",
      description: "Dev Workflow",
      accent: "from-purple-400/20 to-sky-400/20",
      glow: "hover:shadow-purple-200/50",
      iconColor: "text-purple-600",
      items: [
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-600", level: "95%" },
        { name: "GitHub", icon: <FaGithub />, color: "text-slate-800", level: "90%" },
        { name: "Postman", icon: <SiPostman />, color: "text-orange-600", level: "85%" },
        { name: "Vercel", icon: <SiVercel />, color: "text-slate-800", level: "80%" },
        { name: "VS Code", icon: <VscVscode />, color: "text-blue-500", level: "95%" },
        { name: "Netlify", icon: <SiNetlify />, color: "text-cyan-500", level: "80%" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-4 bg-white relative overflow-hidden">
      {/* 1. LAYERED BACKGROUND SYSTEM */}
      <div className="absolute inset-0 bg-[#f0f9ff]/50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:80px_80px]" />
      
      {/* 2. DYNAMIC FLOATING ORBS */}
      <motion.div 
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 -left-20 w-72 md:w-[30rem] h-72 md:h-[30rem] bg-sky-200/30 blur-[100px] rounded-full" 
      />
      <motion.div 
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 -right-20 w-72 md:w-[30rem] h-72 md:h-[30rem] bg-indigo-200/30 blur-[100px] rounded-full" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER AREA */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 rounded-full bg-white border border-sky-100 text-sky-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6 shadow-sm shadow-sky-100"
          >
            Capabilities
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-6 px-2"
          >
            The Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500">Arsenal.</span>
          </motion.h2>
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
            Software Engineering • Full-Stack • Cloud
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative rounded-[2.5rem] md:rounded-[3.5rem] p-[2px] bg-gradient-to-b from-white to-sky-100/50 transition-all duration-700 ${cat.glow} hover:shadow-2xl`}
            >
              <div className="bg-white/70 backdrop-blur-3xl rounded-[2.4rem] md:rounded-[3.4rem] p-6 md:p-12 h-full overflow-hidden relative border border-white">
                {/* Internal Glow Orb */}
                <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${cat.accent} blur-[80px] opacity-40 group-hover:opacity-100 transition-opacity duration-1000`} />
                
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-10 md:mb-16 relative z-10">
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">{cat.title}</h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 rounded-full border border-sky-100/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                      <p className="text-sky-700 text-[8px] font-black uppercase tracking-widest">{cat.description}</p>
                    </div>
                  </div>
                  <div className={`hidden sm:flex p-4 rounded-2xl bg-white border border-sky-50 ${cat.iconColor} shadow-md shadow-sky-100 group-hover:rotate-[360deg] transition-all duration-[1.2s]`}>
                    <FaTerminal size={20} />
                  </div>
                </div>

                {/* SKILL TILES */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-5 relative z-10">
                  {cat.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="relative flex flex-col items-center justify-center py-6 md:py-8 px-2 rounded-[1.5rem] md:rounded-[2rem] bg-white/40 border border-sky-50 hover:bg-white hover:border-sky-200 transition-all duration-500 shadow-sm group/skill"
                    >
                      <div className="absolute top-3 right-4 text-[7px] md:text-[8px] font-black text-slate-300 group-hover/skill:text-sky-500 transition-colors">
                        {skill.level}
                      </div>

                      <div className={`${skill.color} text-3xl md:text-4xl mb-3 group-hover/skill:scale-110 transition-transform duration-500`}>
                        {skill.icon}
                      </div>
                      
                      <span className="text-[8px] md:text-[9px] font-black text-slate-500 group-hover/skill:text-slate-900 uppercase tracking-widest text-center transition-colors px-1">
                        {skill.name}
                      </span>

                      {/* Animated Skill Meter */}
                      <div className="absolute bottom-3 w-8 h-[2px] bg-slate-100 rounded-full overflow-hidden">
                         <motion.div 
                          initial={{ x: "-100%" }}
                          whileInView={{ x: "0%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-sky-400 to-blue-500"
                         />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;