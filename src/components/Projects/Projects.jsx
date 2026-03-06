import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  FaGithub, FaRocket, FaArrowRight, FaTimes, FaCode, 
  FaLaptopCode, FaRobot, FaShoppingCart, FaPlayCircle, FaCar 
} from "react-icons/fa";

// --- EXPANDED PROJECT DATA ---
const projectsData = [
  {
    title: "Vishak Restaurant",
    category: "React",
    desc: "Premium dining experience with fluid animations and cart logic.",
    longDesc: "A high-end restaurant platform built for speed and aesthetics. Features include real-time menu filtering, a smooth glassmorphism cart, and optimized image delivery using React hooks.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icon: <FaShoppingCart />,
    live: "https://vishakrestaurnt.netlify.app",
    code: "https://github.com/vishaldeshmukh34/VishakRestaurant-",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    size: "large" 
  },
  {
    title: "Car Rental Web",
    category: "Frontend",
    desc: "Modern vehicle booking landing page with sleek UI.",
    longDesc: "A fully responsive car rental website designed with a focus on typography and clean user paths. Built using pure HTML, CSS, and vanilla JavaScript for high performance.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    icon: <FaCar />,
    live: "#",
    code: "https://github.com/vishaldeshmukh34/Car-Rental_project",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    size: "medium"
  },
  {
    title: "EduLearn Hub",
    category: "MERN",
    desc: "Full-stack education platform for roadmap tracking.",
    longDesc: "A comprehensive LMS where students can visualize their learning journey through structured roadmaps. Features a robust backend with Node and Express.",
    tech: ["MongoDB", "Express", "React", "Node"],
    icon: <FaLaptopCode />,
    live: "#",
    code: "https://github.com/vishaldeshmukh34/LearnwWthVishal",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
    size: "medium"
  },
  {
    title: "Amazon Clone",
    category: "React",
    desc: "E-commerce replica with full checkout functionality.",
    longDesc: "A deep dive into complex UI components, replicating the Amazon shopping experience including cart management and stripe-integrated checkout simulations.",
    tech: ["React", "Firebase", "CSS Modules"],
    icon: <FaShoppingCart />,
    live: "#",
    code: "https://github.com/vishaldeshmukh34/Amazon-Clone",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Netflix Clone",
    category: "UI/UX",
    desc: "Cinematic movie streaming dashboard with TMDB API.",
    longDesc: "A visually stunning replica of the Netflix interface. Fetches real-time movie data and trailers, featuring a dynamic banner and horizontal scroll rows.",
    tech: ["React", "TMDB API", "Axios"],
    icon: <FaPlayCircle />,
    live: "#",
    code: "https://github.com/vishaldeshmukh34/Netflix-clone",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop",
    size: "medium"
  },
  {
    title: "My Virtual Assistant",
    category: "AI",
    desc: "Voice-activated AI helper for task automation.",
    longDesc: "A smart assistant capable of processing voice commands to perform web searches, open apps, and provide weather updates using Web Speech API.",
    tech: ["JavaScript", "Web Speech API", "OpenWeather API"],
    icon: <FaRobot />,
    live: "#",
    code: "https://github.com/vishaldeshmukh34/My-Virtual-Assistant",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop",
    size: "small"
  }
];

// --- TILT CARD COMPONENT ---
const ProjectCard = ({ project, onClick, idx }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      layoutId={`card-${project.title}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onClick={() => onClick(project)}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative rounded-[2.5rem] border border-white/5 overflow-hidden cursor-pointer bg-[#111] 
        ${project.size === 'large' ? 'md:col-span-2 md:row-span-2 h-[500px] md:h-auto' : 'h-[320px] md:h-auto'}
        ${project.size === 'medium' ? 'md:col-span-2' : ''}
        ${project.size === 'small' ? 'md:col-span-1' : ''}
      `}
    >
      <div className="absolute inset-0 z-0">
        <motion.img 
          layoutId={`img-${project.title}`}
          src={project.image} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 group-hover:blur-[2px]"
        />
        <div className="absolute inset-0 bg-[#030305]/60 group-hover:bg-[#030305]/40 transition-colors" />
      </div>

      <div style={{ transform: "translateZ(40px)" }} className="absolute inset-0 p-8 flex flex-col justify-between z-20">
        <div className="flex justify-between items-start">
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl text-indigo-400 border border-white/10">
            {project.icon}
          </div>
          <div className="bg-indigo-600/20 border border-indigo-500/30 px-3 py-1 rounded-full">
            <span className="text-[9px] font-black uppercase tracking-tighter text-indigo-300">{project.category}</span>
          </div>
        </div>

        <div>
          <motion.h3 layoutId={`title-${project.title}`} className="text-3xl font-black mb-2 tracking-tighter text-white">
            {project.title}
          </motion.h3>
          <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {project.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN SECTION ---
const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ["All", "React", "MERN", "Frontend", "AI", "UI/UX"];

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 md:py-32 px-4 md:px-12 bg-[#030305] text-white relative min-h-screen">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 space-y-6">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center gap-4">
            <span className="h-[1px] w-12 bg-indigo-500" />
            <span className="text-indigo-400 font-bold uppercase tracking-widest text-[10px]">Curated Portfolio</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="text-6xl md:text-[120px] font-black tracking-tighter leading-none uppercase italic">
              Major <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500">Works.</span>
            </motion.h2>

            <div className="flex flex-wrap gap-2 p-1 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-2xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    filter === cat ? "bg-white text-black scale-105" : "text-slate-500 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} onClick={setSelectedProject} idx={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
              />

              <motion.div 
                layoutId={`card-${selectedProject.title}`}
                className="relative w-full max-w-6xl bg-[#0a0a0c] rounded-[3rem] border border-white/10 flex flex-col lg:flex-row h-[85vh] overflow-hidden"
              >
                <div className="w-full lg:w-3/5 h-[40%] lg:h-auto relative bg-[#111]">
                  <motion.img 
                    layoutId={`img-${selectedProject.title}`} 
                    src={selectedProject.image} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#0a0a0c]/20 to-[#0a0a0c]" />
                </div>

                <div className="w-full lg:w-2/5 p-10 md:p-14 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <button onClick={() => setSelectedProject(null)} className="mb-10 text-slate-500 hover:text-white hover:rotate-90 transition-all">
                      <FaTimes size={24} />
                    </button>
                    
                    <span className="text-indigo-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">{selectedProject.category}</span>
                    <motion.h3 layoutId={`title-${selectedProject.title}`} className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none italic">
                      {selectedProject.title}
                    </motion.h3>
                    <p className="text-slate-400 leading-relaxed mb-10 text-sm md:text-base">
                      {selectedProject.longDesc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-indigo-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a href={selectedProject.live} className="flex-1 bg-indigo-600 hover:bg-indigo-500 py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest transition-all">
                      Live <FaRocket />
                    </a>
                    <a href={selectedProject.code} className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest transition-all">
                      Code <FaGithub />
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
};

export default Projects;