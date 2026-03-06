import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { 
  FaGithub, FaExternalLinkAlt, FaGlobe, FaTrophy, 
  FaGamepad, FaTimes, FaArrowRight, FaCode, FaCircle 
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "New Adventures",
    category: "Travel",
    longDesc: "Exploration redefined. This platform uses Framer Motion for buttery-smooth page transitions and integrates MapBox for interactive travel paths.",
    tags: ["React", "Framer", "Tailwind"],
    img: "https://images.unsplash.com/photo-1503221043305-f7498f8b7888?q=80&w=2070&auto=format&fit=crop",
    icon: <FaGlobe />,
    color: "#10b981",
    link: "#",
    github: "#",
    snippet: `const TravelPath = () => {
  return <motion.path 
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2 }} 
  />
};`
  },
  {
    id: 2,
    title: "Quiz-App",
    category: "EdTech",
    longDesc: "Test your knowledge with a real-time engine. Features include a global leaderboard and instant feedback loops powered by Firebase.",
    tags: ["JS", "React", "Firebase"],
    img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
    icon: <FaGamepad />,
    color: "#a855f7",
    link: "#",
    github: "#",
    snippet: `const submitScore = async (val) => {
  await db.collection('leaderboard').add({
    score: val,
    ts: Date.now()
  });
};`
  },
  {
    id: 3,
    title: "Cricket Newz",
    category: "Sports",
    longDesc: "Stay updated with the gentlemen's game. This aggregator pulls live data from RapidAPI to provide ball-by-ball updates and player rankings.",
    tags: ["React", "API", "Node.js"],
    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop",
    icon: <FaTrophy />,
    color: "#eab308",
    link: "#",
    github: "#",
    snippet: `async function fetchScores() {
  const data = await axios.get(URL);
  return data.matches.map(m => m.score);
}`
  }
];

const categories = ["All", "Travel", "EdTech", "Sports"];

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("All");
  const [showCode, setShowCode] = useState(false);
  const containerRef = useRef(null);

  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const filteredProjects = projects.filter(p => activeTab === "All" || p.category === activeTab);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
  }, [selectedProject]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="bg-[#020202] py-12 md:py-32 px-4 sm:px-8 md:px-16 relative overflow-hidden text-white min-h-screen font-sans selection:bg-indigo-500"
    >
      {/* Dynamic Ambient Background */}
      <motion.div 
        style={{ x: mouseX, y: mouseY }}
        className="fixed top-0 left-0 w-[50vw] h-[50vw] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      />

      <div className="max-w-[1500px] mx-auto relative z-10">
        <header className="flex flex-col gap-10 mb-12 md:mb-24">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="h-[1px] w-8 md:w-12 bg-indigo-500" />
              <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">Selected Works</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[clamp(3rem,15vw,12rem)] font-black tracking-tighter leading-[0.85] uppercase italic"
            >
              WORK <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-rose-400">ARCHIVE.</span>
            </motion.h2>
          </div>

          {/* Optimized Filter Bar */}
          <div className="relative">
            <div className="flex overflow-x-auto pb-4 scrollbar-hide mask-fade-right">
              <div className="flex gap-2 p-1.5 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-full shrink-0">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                      activeTab === cat ? "bg-white text-black scale-105" : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Responsive Staggered Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer relative bg-[#0a0a0c] rounded-[2rem] md:rounded-[3rem] border border-white/5 overflow-hidden flex flex-col h-[500px] md:h-[650px] transition-all hover:border-indigo-500/40 shadow-2xl"
              >
                {/* Image Container */}
                <div className="h-3/5 md:h-2/3 relative overflow-hidden">
                  <motion.img 
                    layoutId={`img-${project.id}`}
                    src={project.img} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-8 md:p-12 flex flex-col justify-between flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl md:text-2xl" style={{ color: project.color }}>{project.icon}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{project.category}</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black uppercase italic leading-none group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500">View Archive</span>
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-indigo-600 transition-all">
                      <FaArrowRight className="group-hover:-rotate-45 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Fluid Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6 lg:p-12">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/98 backdrop-blur-3xl"
            />
            
            <motion.div 
              layoutId={`card-${selectedProject.id}`}
              className="relative w-full max-w-[1600px] bg-[#080809] md:rounded-[4rem] border-t md:border border-white/10 overflow-hidden flex flex-col lg:flex-row h-[92vh] md:h-[85vh] shadow-2xl"
            >
              {/* Media Section */}
              <div className="w-full lg:w-3/5 h-1/3 md:h-1/2 lg:h-full relative bg-[#050505] border-b lg:border-b-0 lg:border-r border-white/5">
                <AnimatePresence mode="wait">
                  {!showCode ? (
                    <motion.div key="v" className="h-full w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <motion.img layoutId={`img-${selectedProject.id}`} src={selectedProject.img} className="w-full h-full object-cover opacity-60" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-r" />
                    </motion.div>
                  ) : (
                    <motion.div key="c" className="p-6 md:p-16 font-mono text-xs md:text-sm h-full overflow-y-auto custom-scrollbar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <pre className="text-emerald-400"><code>{selectedProject.snippet}</code></pre>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  onClick={() => setShowCode(!showCode)}
                  className="absolute bottom-6 left-6 md:bottom-12 md:left-12 px-6 py-3 md:px-10 md:py-5 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all z-30 shadow-xl"
                >
                  {showCode ? "Show Visuals" : "Deep Logic"}
                </button>
              </div>

              {/* Text Section */}
              <div className="p-8 md:p-16 lg:p-20 w-full lg:w-2/5 flex flex-col justify-between overflow-y-auto custom-scrollbar">
                <div>
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-indigo-500 font-black text-[10px] uppercase tracking-widest">{selectedProject.category}</span>
                    <button onClick={() => setSelectedProject(null)} className="p-3 bg-white/5 hover:bg-rose-500/20 rounded-full transition-all text-white"><FaTimes /></button>
                  </div>

                  <h3 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter mb-8">{selectedProject.title}</h3>
                  <p className="text-zinc-400 text-sm md:text-lg leading-relaxed mb-10">{selectedProject.longDesc}</p>

                  <div className="flex flex-wrap gap-2 mb-12">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[9px] font-bold uppercase tracking-widest text-zinc-300">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <a href={selectedProject.link} className="h-16 md:h-20 rounded-2xl bg-indigo-600 text-white flex items-center justify-center gap-3 font-black text-[10px] uppercase hover:bg-indigo-500 transition-all active:scale-95 shadow-lg shadow-indigo-500/20">
                    Demo <FaExternalLinkAlt />
                  </a>
                  <a href={selectedProject.github} className="h-16 md:h-20 rounded-2xl bg-zinc-900 border border-white/10 text-white flex items-center justify-center gap-3 font-black text-[10px] uppercase hover:bg-zinc-800 transition-all active:scale-95">
                    Code <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .mask-fade-right { mask-image: linear-gradient(to right, black 80%, transparent 100%); }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #444; }
      `}</style>
    </section>
  );
};

export default ProjectShowcase;