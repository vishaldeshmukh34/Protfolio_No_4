import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Crop Pilot",
    category: "AI / ML Agriculture",
    desc: "Intelligent crop advisory system using Flask & React.js with real-time soil analysis and yield prediction.",
    tags: ["React", "Node.js", "Flask", "Python"],
    color: "from-emerald-500/40 to-cyan-900/60",
    img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop", // Agricultural Tech
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "EduLearn",
    category: "EdTech Platform",
    desc: "Advanced LMS with glassmorphism UI, interactive modules, and real-time progress tracking via Socket.io.",
    tags: ["MERN Stack", "Tailwind", "Socket.io"],
    color: "from-blue-500/40 to-indigo-900/60",
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop", // Modern Learning
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "V-Auth",
    category: "Cybersecurity",
    desc: "Secure multi-factor authentication gateway with biometric-inspired design and encrypted handshakes.",
    tags: ["Next.js", "Firebase", "TypeScript"],
    color: "from-purple-500/40 to-fuchsia-900/60",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", // Cyber Security Tech
    link: "#",
    github: "#"
  }
];

const ProjectShowcase = () => {
  return (
    <section id="projects" className="bg-[#050505] py-20 md:py-40 overflow-hidden text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 md:mb-32 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h4 className="text-indigo-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center gap-3">
              <span className="w-12 h-[1px] bg-indigo-500"></span> Technical Portfolio
            </h4>
            <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-[1000] tracking-tighter leading-[0.85] uppercase italic">
              ENGINEERING <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500">
                SYSTEM ARCHITECTURE.
              </span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 text-sm font-medium border-l border-white/10 pl-8 max-w-sm leading-relaxed"
          >
            Building high-availability web systems with modern stacks and data-driven intelligence.
          </motion.div>
        </div>

        {/* --- PROJECT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative flex flex-col h-full"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative h-72 md:h-80 w-full overflow-hidden rounded-[2.5rem] bg-zinc-900 mb-8 border border-white/5 shadow-2xl">
                <motion.img 
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                />
                {/* Gradient Wash */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60`}></div>
                
                {/* Floating Tech Links */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 group-hover:translate-x-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <a href={project.github} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <FaGithub size={18} />
                  </a>
                  <a href={project.link} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex-1 flex flex-col px-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-indigo-400 font-black text-[10px] uppercase tracking-[0.3em]">
                    {project.category}
                  </span>
                  <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-indigo-500/30 transition-colors"></div>
                </div>

                <h3 className="text-3xl font-black mb-4 tracking-tighter group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                  {project.desc}
                </p>

                {/* TECH LIST */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-[9px] font-bold text-slate-300 uppercase tracking-widest border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* DECORATIVE BACKGROUND ICON */}
              <FaRocket className="absolute -bottom-10 -right-10 text-white/[0.01] text-[12rem] -rotate-12 group-hover:text-indigo-500/10 group-hover:rotate-0 transition-all duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* --- CTA BUTTON --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 flex justify-center"
        >
          <button className="group relative px-12 py-5 rounded-full overflow-hidden border border-white/10 bg-white/5 hover:border-indigo-500 transition-all duration-500">
            <span className="relative z-10 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-6">
              Full Repository Index 
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const FaArrowRight = ({ className }) => (
  <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default ProjectShowcase;