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
      accent: "from-blue-600/20 to-indigo-600/20",
      glow: "group-hover:shadow-blue-500/20",
      iconColor: "text-blue-500",
      items: [
        { name: "React.js", icon: <FaReact />, color: "text-blue-400", level: "92%" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-slate-200", level: "85%" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500", level: "80%" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400", level: "95%" },
        { name: "Redux", icon: <SiRedux />, color: "text-purple-500", level: "75%" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400", level: "90%" }
      ]
    },
    {
      title: "Backend",
      description: "Architecture",
      accent: "from-emerald-600/20 to-cyan-600/20",
      glow: "group-hover:shadow-emerald-500/20",
      iconColor: "text-emerald-500",
      items: [
        { name: "Java", icon: <FaJava />, color: "text-red-500", level: "88%" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-500", level: "82%" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600", level: "85%" },
        { name: "Express", icon: <SiExpress />, color: "text-slate-400", level: "80%" },
        { name: "Hibernate", icon: <SiHibernate />, color: "text-amber-600", level: "75%" },
        { name: "Docker", icon: <FaDocker />, color: "text-blue-500", level: "70%" }
      ]
    },
    {
      title: "Database",
      description: "Cloud Storage",
      accent: "from-orange-600/20 to-rose-600/20",
      glow: "group-hover:shadow-orange-500/20",
      iconColor: "text-orange-500",
      items: [
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500", level: "85%" },
        { name: "Postgres", icon: <SiPostgresql />, color: "text-blue-400", level: "80%" },
        { name: "MySQL", icon: <SiMysql />, color: "text-sky-500", level: "90%" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-orange-400", level: "75%" },
        { name: "SQL", icon: <FaDatabase />, color: "text-slate-400", level: "88%" },
        { name: "JPA", icon: <FaJava />, color: "text-red-400", level: "82%" }
      ]
    },
    {
      title: "Tools",
      description: "Dev Workflow",
      accent: "from-purple-600/20 to-fuchsia-600/20",
      glow: "group-hover:shadow-purple-500/20",
      iconColor: "text-purple-500",
      items: [
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-500", level: "95%" },
        { name: "GitHub", icon: <FaGithub />, color: "text-slate-200", level: "90%" },
        { name: "Postman", icon: <SiPostman />, color: "text-orange-500", level: "85%" },
        { name: "Vercel", icon: <SiVercel />, color: "text-slate-200", level: "80%" },
        { name: "VS Code", icon: <VscVscode />, color: "text-blue-400", level: "95%" },
        { name: "Netlify", icon: <SiNetlify />, color: "text-cyan-400", level: "80%" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 px-4 bg-[#0a0a0c] relative overflow-hidden">
      {/* Visual Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Animated Header Area */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.5em] mb-8 backdrop-blur-md"
          >
            Capabilities
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-4"
          >
            The Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Arsenal.</span>
          </motion.h2>
          <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] md:text-xs">
            Full-Stack Engineering • MERN Stack • Scalable Architecture
          </p>
        </div>

        {/* The Bento Grid - Stays 1 col on mobile, 2 on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative rounded-[3rem] p-1 md:p-1.5 bg-gradient-to-b from-white/10 to-transparent border border-white/10 transition-all duration-500 ${cat.glow} hover:shadow-2xl`}
            >
              <div className="bg-slate-950 rounded-[2.8rem] p-8 md:p-12 h-full overflow-hidden relative">
                {/* Visual Glow Layer */}
                <div className={`absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br ${cat.accent} blur-[120px] opacity-20 group-hover:opacity-60 transition-opacity duration-1000`} />
                
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-16 relative z-10">
                  <div className="space-y-4">
                    <h3 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">{cat.title}</h3>
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                      <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em]">{cat.description}</p>
                    </div>
                  </div>
                  <div className={`p-5 rounded-3xl bg-white/5 border border-white/10 ${cat.iconColor} backdrop-blur-3xl group-hover:rotate-[360deg] transition-all duration-[1.5s] ease-in-out self-end sm:self-start`}>
                    <FaTerminal size={24} />
                  </div>
                </div>

                {/* Sub-grid for individual skill cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
                  {cat.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="relative flex flex-col items-center justify-center py-8 px-2 rounded-[2.5rem] bg-gradient-to-b from-white/[0.07] to-transparent border border-white/5 hover:border-white/20 transition-all duration-500 group/skill"
                    >
                      {/* Floating Percent Tag */}
                      <div className="absolute top-4 right-6 text-[8px] font-black text-slate-600 group-hover/skill:text-indigo-400 transition-colors">
                        {skill.level}
                      </div>

                      <div className={`${skill.color} text-4xl mb-4 group-hover/skill:scale-125 transition-all duration-500 relative`}>
                        {skill.icon}
                        <div className="absolute inset-0 bg-white opacity-0 blur-xl group-hover/skill:opacity-30 transition-opacity" />
                      </div>
                      
                      <span className="text-[9px] font-black text-slate-400 group-hover/skill:text-white uppercase tracking-widest transition-colors text-center">
                        {skill.name}
                      </span>

                      {/* Hidden progress line that appears on hover */}
                      <div className="absolute bottom-4 w-10 h-[2px] bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "0%" }}
                          className="h-full bg-indigo-500"
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