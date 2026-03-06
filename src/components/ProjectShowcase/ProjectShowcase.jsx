import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaGlobe, FaTrophy, FaGamepad, FaTimes, FaArrowRight, FaCode, FaTerminal, FaCircle } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "New Adventures",
    category: "Travel & Exploration",
    desc: "A high-performance travel discovery platform with immersive animations.",
    longDesc: "Exploration redefined. This platform uses Framer Motion for buttery-smooth page transitions and integrates MapBox for interactive travel paths.",
    tags: ["React", "Framer", "Tailwind"],
    img: "https://images.unsplash.com/photo-1503221043305-f7498f8b7888?q=80&w=2070&auto=format&fit=crop",
    icon: <FaGlobe className="text-emerald-400" />,
    link: "#",
    github: "https://github.com/vishaldeshmukh34/NEW-ADVENTURES-Website",
    snippet: `const animatePath = () => {
  return {
    initial: { pathLength: 0 },
    animate: { pathLength: 1 },
    transition: { duration: 2, ease: "easeInOut" }
  };
};`
  },
  {
    id: 2,
    title: "Quiz-App",
    category: "EdTech / Gamification",
    desc: "Real-time interactive quiz engine with leaderboard logic.",
    longDesc: "Test your knowledge with a real-time engine. Features include a global leaderboard and instant feedback loops powered by Firebase.",
    tags: ["JS", "React", "Firebase"],
    img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
    icon: <FaGamepad className="text-purple-400" />,
    link: "#",
    github: "https://github.com/vishaldeshmukh34/Quiz-app",
    snippet: `export const useQuizScore = (uid) => {
  const [score, setScore] = useState(0);
  useEffect(() => {
    return db.collection('scores').doc(uid)
      .onSnapshot(snap => setScore(snap.data()));
  }, [uid]);
  return score;
};`
  },
  {
    id: 3,
    title: "Cricket Newz",
    category: "Sports Media",
    desc: "Live cricket news aggregator with real-time score updates.",
    longDesc: "Stay updated with the gentlemen's game. This aggregator pulls live data from RapidAPI to provide ball-by-ball updates and player rankings.",
    tags: ["React", "API", "Node.js"],
    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop",
    icon: <FaTrophy className="text-yellow-400" />,
    link: "#",
    github: "https://github.com/vishaldeshmukh34/crecket_webpage",
    snippet: `async function getLiveScore(matchId) {
  const res = await fetch(\`api/scores/\${matchId}\`);
  const data = await res.json();
  return data.currentScore;
}`
  }
];

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
    if (!selectedProject) setShowCode(false);
  }, [selectedProject]);

  return (
    <section id="projects" className="bg-[#050505] py-20 md:py-32 px-4 relative overflow-hidden text-white font-sans">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-indigo-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-purple-600/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-12 md:mb-24 text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-[10px]">Portfolio 2026</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.85]">
            LATEST <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-300">WORKS.</span>
          </motion.h2>
        </header>

        {/* MASONRY-STYLE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer bg-[#0a0a0c] rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col transition-all duration-500 hover:border-indigo-500/50"
            >
              <div className="relative aspect-video overflow-hidden">
                <motion.img 
                  layoutId={`img-${project.id}`}
                  src={project.img} 
                  className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">{project.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{project.category}</span>
                </div>
                <h3 className="text-3xl font-black mb-3 italic group-hover:text-indigo-400 transition-colors uppercase leading-none">{project.title}</h3>
                <div className="flex items-center justify-between mt-6">
                   <div className="flex -space-x-2">
                      {project.tags.map(tag => (
                        <div key={tag} className="h-6 px-2 bg-zinc-800 border border-white/10 rounded flex items-center text-[8px] font-bold uppercase">{tag}</div>
                      ))}
                   </div>
                   <FaArrowRight className="text-indigo-500 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- ADVANCED MODAL SYSTEM --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            
            <motion.div 
              layoutId={`card-${selectedProject.id}`}
              className="relative w-full max-w-6xl bg-[#0d0d0f] md:rounded-[3rem] rounded-t-[2.5rem] border-t md:border border-white/10 overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-auto shadow-2xl"
            >
              {/* Media Section */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-black">
                {!showCode ? (
                  <motion.img layoutId={`img-${selectedProject.id}`} src={selectedProject.img} className="w-full h-full object-cover" />
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 md:p-10 font-mono text-xs md:text-sm h-full overflow-y-auto bg-[#050505]">
                    <div className="flex gap-2 mb-6">
                      <FaCircle className="text-red-500 size-2" />
                      <FaCircle className="text-yellow-500 size-2" />
                      <FaCircle className="text-green-500 size-2" />
                    </div>
                    <pre className="text-indigo-300"><code>{selectedProject.snippet}</code></pre>
                  </motion.div>
                )}
                
                {/* Mobile Floating Toggle for Code */}
                <button 
                  onClick={() => setShowCode(!showCode)}
                  className="absolute bottom-6 right-6 p-4 bg-indigo-600 rounded-full shadow-xl z-20 md:flex items-center gap-2 font-bold text-[10px] uppercase"
                >
                  {showCode ? <FaGlobe /> : <FaCode />}
                  <span className="hidden md:block">{showCode ? "Show Visuals" : "View Logic"}</span>
                </button>
              </div>

              {/* Details Section */}
              <div className="p-8 md:p-16 w-full md:w-1/2 flex flex-col overflow-y-auto bg-[#0d0d0f]">
                <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors"><FaTimes size={24} /></button>

                <div className="mb-10">
                  <div className="text-indigo-500 font-black text-[10px] tracking-[0.4em] mb-4 uppercase">{selectedProject.category}</div>
                  <h3 className="text-5xl md:text-7xl font-black italic mb-6 leading-[0.8] uppercase">{selectedProject.title}</h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{selectedProject.longDesc}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8 border-t border-white/5">
                  <a href={selectedProject.link} className="flex-1 h-16 rounded-2xl bg-white text-black flex items-center justify-center gap-3 font-black text-xs uppercase hover:bg-indigo-500 hover:text-white transition-all transform active:scale-95">
                    Live Demo <FaExternalLinkAlt />
                  </a>
                  <a href={selectedProject.github} className="flex-1 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center gap-3 font-black text-xs uppercase hover:bg-zinc-800 transition-all transform active:scale-95">
                    Code <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectShowcase;