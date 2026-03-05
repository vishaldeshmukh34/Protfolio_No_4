import React from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { FaExternalLinkAlt, FaBolt, FaMicrochip, FaTerminal, FaDatabase, FaCode } from "react-icons/fa";

const projects = [
  { 
    id: 1, 
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000", 
    title: "Crop Pilot AI", 
    category: "Machine Learning", 
    size: "large", 
    stats: { perf: "98%", loc: "12k+", build: "Success" }, 
    tech: ["React", "Flask", "PyTorch"],
    github: "#" 
  },
  { 
    id: 2, 
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1000", 
    title: "V-Auth Logic", 
    category: "Cybersecurity", 
    size: "small", 
    stats: { perf: "99%", loc: "4k+", build: "Stable" }, 
    tech: ["Node.js", "Redis"],
    github: "#"
  },
  { 
    id: 3, 
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000", 
    title: "Finance Data", 
    category: "Data Viz", 
    size: "small", 
    stats: { perf: "95%", loc: "2k+", build: "V2.1" }, 
    tech: ["D3.js", "Tailwind"],
    github: "#"
  },
  { 
    id: 4, 
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000", 
    title: "EduLearn OS", 
    category: "FullStack", 
    size: "medium", 
    stats: { perf: "97%", loc: "8k+", build: "Live" }, 
    tech: ["Java", "Spring", "AWS"],
    github: "#"
  },
  { 
    id: 5, 
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000", 
    title: "Neural Analytics", 
    category: "AI Architecture", 
    size: "medium", 
    stats: { perf: "92%", loc: "15k+", build: "Beta" }, 
    tech: ["Python", "TensorFlow"],
    github: "#"
  },
];

const ProjectCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(useSpring(y, { stiffness: 100, damping: 30 }), [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(useSpring(x, { stiffness: 100, damping: 30 }), [-0.5, 0.5], ["-8deg", "8deg"]);

  return (
    <motion.div
      layout
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group bg-slate-900 border border-white/5 shadow-2xl transition-all duration-500 hover:border-indigo-500/50
        ${project.size === "large" ? "lg:col-span-8 lg:row-span-2" : "lg:col-span-4 lg:row-span-1"}
        ${project.size === "medium" ? "lg:row-span-2" : ""}`}
    >
      <div className="absolute inset-0 bg-slate-800 animate-pulse" />

      <motion.img 
        src={project.img} 
        alt={project.title} 
        className="w-full h-full object-cover opacity-40 lg:opacity-30 lg:group-hover:opacity-60 transition-all duration-1000 scale-105 lg:scale-110 lg:group-hover:scale-100 relative z-0" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
      
      {/* --- MOBILE FRIENDLY HUD --- */}
      <div style={{ transform: "translateZ(60px)" }} className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between pointer-events-none z-10">
        
        {/* Top Section: Always visible on mobile, hover on desktop */}
        <div className="flex justify-between items-start opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 lg:translate-y-4 lg:group-hover:translate-y-0">
          <div className="flex gap-2 md:gap-3">
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-2 md:p-3 rounded-xl md:rounded-2xl shadow-2xl">
              <p className="text-[6px] md:text-[7px] text-indigo-400 font-black uppercase mb-1 flex items-center gap-1"><FaBolt /> PERF</p>
              <p className="text-white text-[9px] md:text-[10px] font-mono">{project.stats.perf}</p>
            </div>
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-2 md:p-3 rounded-xl md:rounded-2xl shadow-2xl">
              <p className="text-[6px] md:text-[7px] text-cyan-400 font-black uppercase mb-1 flex items-center gap-1"><FaDatabase /> CODE</p>
              <p className="text-white text-[9px] md:text-[10px] font-mono">{project.stats.loc}</p>
            </div>
          </div>
          
          <div className="flex gap-2 pointer-events-auto">
             <a href={project.github} className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                <FaCode size={12} />
             </a>
             <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:scale-110 transition-transform">
                <FaExternalLinkAlt size={10} />
             </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative">
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "60px" }} 
            className="h-1 bg-indigo-500 mb-4 rounded-full" 
          />
          <p className="text-indigo-400 font-mono text-[8px] md:text-[9px] tracking-[0.5em] uppercase mb-1 md:mb-2">{project.category}</p>
          <h3 className="text-white text-2xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-4 md:mb-6 uppercase italic drop-shadow-2xl">
            {project.title}
          </h3>
          
          {/* Tech tags: Always visible on mobile */}
          <div className="flex flex-wrap gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all delay-300">
             {project.tech.map(t => (
               <span key={t} className="text-[7px] md:text-[8px] font-bold text-slate-300 bg-white/5 border border-white/10 px-3 md:px-4 py-1 rounded-full uppercase tracking-widest backdrop-blur-md">
                 {t}
               </span>
             ))}
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent shadow-[0_0_15px_#6366f1] opacity-0 group-hover:opacity-100 group-hover:animate-scan pointer-events-none z-20" />
    </motion.div>
  );
};

const Works = () => {
  return (
    <section id="works" className="py-20 md:py-48 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-40 gap-8 md:gap-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-indigo-500 font-mono text-[10px] mb-4 md:mb-8 uppercase tracking-[0.4em] md:tracking-[0.6em]">
              <FaTerminal className="animate-pulse" /> Protocol: Assets_Manifest
            </div>
            <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-black text-white tracking-tighter leading-[0.85] uppercase">
              Core <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 italic">Deployments.</span>
            </h2>
          </div>
          <div className="max-w-xs md:pb-4">
            <p className="text-slate-500 text-xs md:text-sm font-medium border-l-2 border-indigo-600 pl-6 md:pl-8 leading-relaxed">
              Proprietary architectural patterns and scalable machine learning pipelines engineered for high availability.
            </p>
          </div>
        </div>

        {/* BENTO GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-12 auto-rows-[320px] md:auto-rows-[450px]">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>

      <style jsx="true">{`
        @keyframes scan {
          0% { transform: translateY(-100px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(600px); opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Works;