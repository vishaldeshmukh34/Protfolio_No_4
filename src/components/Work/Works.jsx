import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal, FaCode, FaExternalLinkAlt, FaGithub, FaBolt, FaMicrochip, FaRocket, FaEye, FaHotel } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Portfolio 0.1",
    category: "Development",
    colSpan: "lg:col-span-4 md:col-span-6",
    desc: "The initial blueprint. A clean, HTML/CSS focused foundation exploring core layout principles.",
    tags: ["HTML", "CSS", "JS"],
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069",
    link: "#",
    github: "https://github.com/vishaldeshmukh34/My-Porfolio.1",
    metric: "Legacy v0.1"
  },
  {
    id: 2,
    title: "Portfolio 0.2",
    category: "Development",
    colSpan: "lg:col-span-4 md:col-span-6",
    desc: "Evolution into React. Implementing component-based architecture and basic state management.",
    tags: ["React", "Tailwind"],
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055",
    link: "#",
    github: "https://github.com/vishaldeshmukh34/My-Porfolio.2",
    metric: "Stable v0.2"
  },
  {
    id: 3,
    title: "Portfolio 0.3",
    category: "Development",
    colSpan: "lg:col-span-4 md:col-span-12",
    desc: "The Framer Motion era. High-fidelity animations and advanced UI/UX patterns.",
    tags: ["Framer", "Next.js"],
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964",
    link: "#",
    github: "https://github.com/vishaldeshmukh34/My-Profolio.3",
    metric: "Current v0.3"
  },
  {
    id: 4,
    title: "Luxury Hotel",
    category: "UI / UX",
    colSpan: "lg:col-span-7 md:col-span-12",
    desc: "A premium hospitality interface featuring elegant parallax sections and a booking engine prototype.",
    tags: ["React", "Motion", "Luxury"],
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
    link: "https://vishaldeshmukh34.github.io/luxury-hotel/",
    github: "https://github.com/vishaldeshmukh34/luxury-hotel",
    metric: "Premium Design"
  },
  {
    id: 5,
    title: "Landing Page",
    category: "Marketing",
    colSpan: "lg:col-span-5 md:col-span-12",
    desc: "High-conversion landing page optimized for performance and visual storytelling.",
    tags: ["MERN", "GSAP"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    link: "https://vishaldeshmukh34.github.io/Landing-page/",
    github: "https://github.com/vishaldeshmukh34/Landing-page",
    metric: "Conversion+"
  }
];

const Works = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Development", "UI / UX", "Marketing"];

  return (
    <section id="works" className="py-20 md:py-40 bg-[#020205] relative overflow-hidden font-sans">
      {/* AMBIENT BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <header className="flex flex-col gap-8 mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
            <span className="text-indigo-400 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em]">Project_Vault_2026</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8] italic">
              CRAFTED <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-cyan-400 not-italic">WORKS.</span>
            </h2>

            {/* NEOMORPHIC FILTER */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar scroll-smooth">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`whitespace-nowrap px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border ${
                    filter === cat ? "bg-indigo-600 border-indigo-400 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]" : "bg-white/5 border-white/10 text-zinc-500 hover:text-white hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* BENTO GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {projects.filter(p => filter === "All" || p.category === filter).map((p, idx) => (
              <ProjectCard key={p.id} project={p} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-[2rem] bg-[#0a0a0f] border border-white/10 overflow-hidden ${project.colSpan} h-[450px] md:h-[550px] transition-all duration-700 hover:border-indigo-500/40`}
    >
      {/* INTERACTIVE RADIAL GLOW */}
      <div 
        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden md:block"
        style={{ background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99,102,241,0.08), transparent 40%)` }}
      />

      {/* PROJECT MEDIA */}
      <div className="absolute inset-0 z-0">
        <img src={project.img} className="w-full h-full object-cover opacity-30 grayscale group-hover:opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out" alt={project.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/70 to-transparent" />
      </div>

      {/* HUD ELEMENTS */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-30">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xl">
            {project.category === "UI / UX" ? <FaHotel className="text-indigo-400 text-[10px]" /> : <FaBolt className="text-indigo-400 text-[10px]" />}
            <span className="text-white font-mono text-[9px] uppercase tracking-widest">{project.category}</span>
          </div>
          <span className="text-zinc-600 font-mono text-[8px] tracking-[0.3em] uppercase ml-1">{project.metric}</span>
        </div>

        {/* COMPACT ACTIONS (Universal) */}
        <div className="flex gap-2">
          <a href={project.github} className="w-9 h-9 md:w-11 md:h-11 bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/10 text-white transition-all active:scale-90">
            <FaGithub size={18}/>
          </a>
          <a href={project.link} className="w-9 h-9 md:w-11 md:h-11 bg-indigo-600 hover:bg-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-600/30 transition-all active:scale-90">
            <FaExternalLinkAlt size={14}/>
          </a>
        </div>
      </div>

      {/* CONTENT BLOCK */}
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20">
        <div className="space-y-4">
          <h3 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none transition-transform duration-500 group-hover:translate-x-2">
            {project.title}
          </h3>
          
          <p className="text-zinc-400 text-sm md:text-base max-w-lg line-clamp-2 md:line-clamp-none group-hover:text-zinc-200 transition-colors">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map(tag => (
              <span key={tag} className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-md border border-white/5 text-[9px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-indigo-300 transition-colors">
                <div className="w-1 h-1 bg-indigo-500/50 rounded-full" /> {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SCANNER LINE */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent absolute top-0 animate-scan" />
      </div>

      <style jsx="true">{`
        @keyframes scan {
          0% { top: -5%; }
          100% { top: 105%; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.div>
  );
};

export default Works;