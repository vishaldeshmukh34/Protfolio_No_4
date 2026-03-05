import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaRocket, FaArrowRight, FaTimes, FaCheckCircle, FaCode } from "react-icons/fa";

// Dummy Data Array (Replace with your actual imports)
const projectsData = [
  {
    title: "Java MCQ App",
    category: "React",
    desc: "A high-performance quiz engine with real-time score tracking.",
    longDesc: "This application features a robust quiz logic system that handles various question types and tracks user progress through a sleek dashboard.",
    tech: ["React.js", "JavaScript", "Tailwind"],
    features: ["Instant Feedback", "Score History", "Mobile Optimized"],
    live: "#",
    code: "#",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "To-Do Master",
    category: "JS",
    desc: "Productivity tool featuring persistent storage and intuitive UI.",
    longDesc: "Built with vanilla JavaScript, this app demonstrates complex DOM manipulation and local storage integration.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Local Storage", "Drag & Drop", "Filter Tasks"],
    live: "#",
    code: "#",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "New Adventures",
    category: "React",
    desc: "Premium travel platform with smooth parallax effects.",
    longDesc: "A visually driven landing page that uses Framer Motion for high-end animations responding to scroll depth.",
    tech: ["React.js", "Tailwind", "Framer Motion"],
    features: ["Parallax Scroll", "Smooth Reveal", "SVG Animations"],
    live: "#",
    code: "#",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
  }
];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ["All", "React", "JS", "UI/UX"];

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-6 bg-[#030305] text-white relative min-h-screen overflow-hidden">
      
      {/* --- LIQUID WATERCOLOR BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-6"
            >
              <span className="text-indigo-400 font-bold tracking-widest uppercase text-[10px]">Portfolio Showcase</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter"
            >
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-500">
                MASTERPIECES.
              </span>
            </motion.h2>
          </div>

          {/* --- FILTER BAR --- */}
          <div className="flex flex-wrap gap-2 p-1 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat ? "bg-indigo-600 text-white shadow-lg" : "text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- GRID --- */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layoutId={`card-${project.title}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer relative bg-white/[0.03] backdrop-blur-md rounded-[2.5rem] border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <motion.img 
                    layoutId={`img-${project.title}`}
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent" />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-[1px] bg-indigo-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">{project.category}</span>
                  </div>
                  <motion.h3 layoutId={`title-${project.title}`} className="text-2xl font-black mb-3 italic tracking-tight">
                    {project.title}
                  </motion.h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2">{project.desc}</p>
                  <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest group-hover:text-indigo-400 transition-colors">
                    View Project <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- MOBILE RESPONSIVE MODAL --- */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
              />

              <motion.div 
                layoutId={`card-${selectedProject.title}`}
                className="relative w-full max-w-5xl bg-[#0a0a0c] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col lg:flex-row max-h-[90vh] overflow-y-auto lg:overflow-hidden"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-50 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <FaTimes />
                </button>

                {/* Modal Media */}
                <div className="w-full lg:w-1/2 h-64 lg:h-auto">
                  <motion.img 
                    layoutId={`img-${selectedProject.title}`} 
                    src={selectedProject.image} 
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Modal Info */}
                <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <motion.h3 layoutId={`title-${selectedProject.title}`} className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
                    {selectedProject.title}
                  </motion.h3>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-black rounded-lg border border-indigo-500/20 uppercase">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-8 text-sm md:text-base">
                    {selectedProject.longDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {selectedProject.features.map(f => (
                      <div key={f} className="flex items-center gap-3 text-xs font-bold text-slate-400">
                        <FaCheckCircle className="text-indigo-500" /> {f}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <a href={selectedProject.live} className="flex-1 bg-indigo-600 hover:bg-indigo-500 py-4 rounded-xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-indigo-600/20">
                      Live Link <FaRocket />
                    </a>
                    <a href={selectedProject.code} className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 py-4 rounded-xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest transition-all">
                      Source Code <FaGithub />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;