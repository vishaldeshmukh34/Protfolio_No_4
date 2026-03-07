import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { 
  FaReact, FaJs, FaJava, FaGitAlt, FaGithub, FaDocker, 
  FaDatabase, FaNodeJs, FaTerminal, FaServer
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiSpringboot, SiHibernate, 
  SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiPostman, 
  SiVercel, SiNetlify, SiRedux, SiExpress, SiTailwindcss 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Individual Skill Card with internal 3D tilt effect
const SkillCard = ({ skill }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative flex flex-col items-center justify-center py-6 px-2 rounded-[1.5rem] bg-white/30 backdrop-blur-md border border-white/40 hover:border-sky-300 transition-colors duration-500 shadow-[0_4px_20px_0_rgba(14,165,233,0.08)] group/skill overflow-hidden"
    >
      <div className="absolute top-2 right-3 text-[7px] font-black text-slate-300 group-hover/skill:text-sky-500 transition-colors">
        {skill.level}
      </div>

      <div className={`${skill.color} text-3xl mb-3 relative z-10 group-hover/skill:drop-shadow-[0_0_10px_rgba(14,165,233,0.4)] transition-all duration-500`}>
        {skill.icon}
      </div>
      
      <span className="text-[8px] font-black text-slate-500 group-hover/skill:text-slate-900 uppercase tracking-[0.15em] text-center transition-colors">
        {skill.name}
      </span>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-100/50">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: skill.level }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500"
        />
      </div>
    </motion.div>
  );
};

function Skills() {
  const categories = [
    {
      title: "Frontend",
      description: "Next-Gen Interfaces",
      accent: "from-sky-300/40 via-blue-400/20 to-transparent",
      icon: <FaReact size={22} />,
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
      description: "Robust Architecture",
      accent: "from-blue-300/40 via-emerald-400/20 to-transparent",
      icon: <FaServer size={22} />,
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
      description: "Scalable Storage",
      accent: "from-emerald-300/40 via-teal-400/20 to-transparent",
      icon: <FaDatabase size={22} />,
      items: [
        { name: "MongoDB", icon: <SiMongodb />, color: "text-emerald-600", level: "85%" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-700", level: "80%" },
        { name: "MySQL", icon: <SiMysql />, color: "text-sky-600", level: "85%" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-orange-500", level: "90%" },
        { name: "Redis", icon: <FaDatabase />, color: "text-red-500", level: "70%" },
        { name: "Oracle", icon: <FaDatabase />, color: "text-slate-600", level: "75%" }
      ]
    },
    {
      title: "Tools",
      description: "Agile Ecosystem",
      accent: "from-indigo-300/40 via-purple-400/20 to-transparent",
      icon: <VscVscode size={22} />,
      items: [
        { name: "Git & GitHub", icon: <FaGithub />, color: "text-slate-900", level: "95%" },
        { name: "VS Code", icon: <VscVscode />, color: "text-blue-500", level: "98%" },
        { name: "Postman", icon: <SiPostman />, color: "text-orange-500", level: "90%" },
        { name: "Vercel", icon: <SiVercel />, color: "text-slate-800", level: "85%" },
        { name: "Netlify", icon: <SiNetlify />, color: "text-cyan-500", level: "80%" },
        { name: "Linux", icon: <FaTerminal />, color: "text-slate-700", level: "85%" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(240,249,255,1)_0%,rgba(255,255,255,1)_100%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* BRUTALIST HEADER SECTION - ULTRA STYLISH VERSION */}
<div className="relative group cursor-default mb-20 md:mb-32 flex flex-col items-center text-center py-10">
    
    {/* 1. ANIMATED BACKGROUND TEXT (Floating & Pulsing) */}
    <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.02, 1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="text-7xl sm:text-9xl md:text-[11rem] lg:text-[14rem] font-[1000] leading-none tracking-[-0.08em] text-slate-900/[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none uppercase whitespace-nowrap blur-[2px]"
    >
        THE ARSENAL
    </motion.h2>
    
    {/* 2. MAIN CONTENT WRAPPER */}
    <div className="relative group/title">
        
        {/* Main Animated Text */}
        <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-[1000] leading-none tracking-[-0.06em] text-slate-900 relative uppercase flex flex-wrap justify-center items-center gap-x-6">
            
            {/* "THE" with a Slide-up Reveal */}
            <div className="overflow-hidden">
                <motion.span 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  THE
                </motion.span>
            </div>

            {/* "ARSENAL" with Outlined Gradient & Glow */}
            <span className="inline-block text-transparent py-1 md:py-2 transition-all duration-700 group-hover/title:tracking-normal" 
                  style={{ WebkitTextStroke: "1.5px rgba(15, 23, 42, 0.4)" }}>
              ARSENAL
              <motion.span 
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-indigo-600 drop-shadow-[0_0_15px_rgba(79,70,229,0.6)]"
              >
                .
              </motion.span>
            </span>
        </h2>

        {/* 3. REFINE TAGLINE WITH GLASSMORTHISM ACCENT */}
        <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-[1px] w-8 md:w-12 bg-slate-200" />
            <p className="text-slate-400 font-bold uppercase tracking-[0.5em] text-[8px] md:text-xs relative z-10">
              Crafting <span className="text-slate-900">Digital</span> Excellence
            </p>
            <div className="h-[1px] w-8 md:w-12 bg-slate-200" />
        </div>
    </div>

    {/* 4. MOUSE GLOW EFFECT (Subtle background radial light) */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-200/20 blur-[100px] -z-10 group-hover:bg-indigo-200/30 transition-colors duration-700" />
</div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 border border-white shadow-xl h-full">
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${cat.accent} rounded-[2.5rem] -z-10`} />

                <div className="flex justify-between items-center mb-10 gap-4">
                  <div>
                    <span className="text-sky-500 text-[8px] font-black uppercase tracking-[0.2em] mb-1 block">{cat.description}</span>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 text-white shadow-lg transition-all duration-500">
                    {cat.icon}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {cat.items.map((skill, i) => (
                    <SkillCard key={i} skill={skill} />
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