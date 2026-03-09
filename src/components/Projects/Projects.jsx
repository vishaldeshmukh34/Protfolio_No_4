import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  FaGithub, FaRocket, FaTimes, FaLaptopCode,
  FaRobot, FaShoppingCart, FaPlayCircle, FaCar,
} from "react-icons/fa";

/* ---------------- PROJECT DATA (ALL 6 PROJECTS) ---------------- */
const projectsData = [
  {
    title: "Vishak Restaurant",
    category: "React",
    desc: "Premium dining experience with cart system.",
    longDesc: "Modern restaurant UI with cart logic and menu filtering built with React. Features fluid animations and a responsive food gallery.",
    tech: ["React", "Tailwind", "Framer Motion"],
    icon: <FaShoppingCart />,
    live: "https://vishakrestaurnt.netlify.app",
    code: "https://github.com/vishaldeshmukh34/VishakRestaurant-",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    size: "large"
  },
  {
    title: "Car Rental Web",
    category: "Frontend",
    desc: "Modern vehicle booking landing page.",
    longDesc: "Clean UI car rental landing page built with HTML, CSS and JavaScript. Includes car selection and booking forms.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: <FaCar />,
    live: "https://vishaldeshmukh34.github.io/Car-Rental_project/",
    code: "https://github.com/vishaldeshmukh34/Car-Rental_project",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    size: "medium"
  },
  {
    title: "EduLearn Hub",
    category: "MERN",
    desc: "Education platform with roadmap tracking.",
    longDesc: "Full-stack learning platform where students track roadmap progress. Built with MongoDB, Express, React, and Node.",
    tech: ["MongoDB", "Express", "React", "Node"],
    icon: <FaLaptopCode />,
    live: "https://learnwithvishal.netlify.app/",
    code: "https://github.com/vishaldeshmukh34/LearnwWthVishal",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
    size: "medium"
  },
  {
    title: "Amazon Clone",
    category: "React",
    desc: "Ecommerce replica with cart & checkout.",
    longDesc: "A pixel-perfect Amazon UI replica featuring Firebase authentication and real-time cart functionality.",
    tech: ["React", "Firebase", "Redux"],
    icon: <FaShoppingCart />,
    live: "https://amazonclonebyvishal.netlify.app/",
    code: "https://github.com/vishaldeshmukh34/Amazon-Clone",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Netflix Clone",
    category: "UI/UX",
    desc: "Cinematic movie streaming dashboard.",
    longDesc: "Dynamic movie dashboard using TMDB API. Includes trailer previews and horizontal scroll categories.",
    tech: ["React", "TMDB API", "Axios"],
    icon: <FaPlayCircle />,
    live: "https://syrniki-62e66d.netlify.app/",
    code: "https://github.com/vishaldeshmukh34/Netflix-clone",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop",
    size: "medium"
  },
  {
    title: "Virtual Assistant",
    category: "AI",
    desc: "Voice activated smart assistant.",
    longDesc: "Voice-controlled web assistant that uses the Web Speech API to recognize commands and automate searches.",
    tech: ["JavaScript", "Web Speech API"],
    icon: <FaRobot />,
    live: "https://vishaldeshmukh34.github.io/My-Virtual-Assistant/",
    code: "https://github.com/vishaldeshmukh34/My-Virtual-Assistant",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop",
    size: "small"
  },
];

/* ---------------- PROJECT CARD ---------------- */
const ProjectCard = ({ project, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative rounded-[2.5rem] overflow-hidden cursor-pointer bg-[#0a0a0c] border border-white/10 group
        ${project.size === 'large' ? 'md:col-span-2 md:row-span-2 h-[500px] md:h-auto' : 'h-[350px] md:h-auto'}
        ${project.size === 'medium' ? 'md:col-span-2 h-[350px]' : ''}
      `}
      onClick={() => onClick(project)}
    >
      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/40 to-transparent group-hover:via-black/20 transition-all" />
      
      <div style={{ transform: "translateZ(60px)" }} className="absolute bottom-0 p-8 w-full z-20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="p-3 bg-white/10 backdrop-blur-xl rounded-2xl text-indigo-400 border border-white/10">{project.icon}</span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-300">{project.category}</span>
          </div>
        </div>
        <h3 className="text-4xl font-[1000] italic uppercase tracking-tighter leading-none mb-3 text-white">{project.title}</h3>
        <p className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 line-clamp-2 max-w-sm">
          {project.desc}
        </p>
      </div>
    </motion.div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */
export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ["All", "React", "MERN", "Frontend", "AI", "UI/UX"];

  const filtered = filter === "All" ? projectsData : projectsData.filter((p) => p.category === filter);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  return (
    <section id="projects" className="py-32 px-4 md:px-12 bg-[#030305] text-white min-h-screen relative overflow-hidden">
      
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-indigo-600/10 blur-[180px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-purple-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- DYNAMIC MEGA HEADER --- */}
        <div className="relative mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute -top-24 md:-top-44 left-0 text-[8rem] md:text-[20rem] font-[1000] text-white/[0.02] select-none pointer-events-none italic tracking-tighter uppercase whitespace-nowrap"
          >
            PORTFOLIO
          </motion.div>
          
          <div className="relative">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-indigo-500 font-black uppercase tracking-[0.5em] text-xs mb-4 block"
            >
              Selected Creations
            </motion.span>
            <h2 className="text-7xl md:text-[11rem] font-[1000] leading-[0.75] uppercase italic tracking-tighter">
              MY <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.2)" }}>PROJECTS</span>
              <span className="text-indigo-500">.</span>
            </h2>
          </div>
        </div>

        {/* REFINED FILTER SYSTEM */}
        <div className="flex overflow-x-auto no-scrollbar pb-8 mb-12">
            <div className="flex gap-3 bg-white/5 p-2 rounded-[2rem] border border-white/5 backdrop-blur-2xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                    filter === cat ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" : "hover:bg-white/10 text-slate-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
        </div>

        {/* PROJECT BENTO GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} onClick={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ULTRA-GLASS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/98 backdrop-blur-3xl"
            />

            <motion.div 
              layoutId={`card-${selectedProject.title}`}
              className="relative bg-[#0a0a0c] max-w-7xl w-full h-full max-h-[90vh] rounded-[3.5rem] overflow-hidden border border-white/10 flex flex-col md:flex-row shadow-2xl"
            >
              <div className="w-full md:w-[60%] h-72 md:h-auto overflow-hidden relative">
                <img src={selectedProject.image} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0c] hidden md:block" />
              </div>
              
              <div className="p-10 md:p-20 w-full md:w-[40%] flex flex-col justify-between overflow-y-auto custom-scrollbar">
                <div>
                  <div className="flex justify-between items-center mb-12">
                    <span className="px-4 py-1 bg-indigo-600/20 rounded-full text-indigo-400 text-[10px] font-black uppercase tracking-widest border border-indigo-500/30">
                      {selectedProject.category}
                    </span>
                    <button onClick={() => setSelectedProject(null)} className="p-4 bg-white/5 rounded-full hover:bg-white/10 text-white transition-all transform hover:rotate-90">
                        <FaTimes size={20} />
                    </button>
                  </div>
                  <h3 className="text-5xl md:text-8xl font-[1000] italic uppercase leading-[0.85] mb-8 tracking-tighter text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-10 opacity-80">
                    {selectedProject.longDesc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-12">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="px-5 py-2 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold text-indigo-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <a href={selectedProject.live} target="_blank" rel="noreferrer" className="bg-indigo-600 py-6 rounded-3xl flex justify-center items-center gap-3 font-black uppercase text-xs tracking-widest hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20">
                    Live <FaRocket />
                  </a>
                  <a href={selectedProject.code} target="_blank" rel="noreferrer" className="bg-white/5 py-6 rounded-3xl flex justify-center items-center gap-3 font-black uppercase text-xs tracking-widest border border-white/10 hover:bg-white/10 transition-all">
                    Code <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
      `}</style>
    </section>
  );
}