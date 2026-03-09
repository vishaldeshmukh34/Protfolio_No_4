import React, { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaArrowRight, FaTerminal, FaClock, FaPlus, FaLayerGroup } from "react-icons/fa";

const blogs = [
  { 
    id: 1, 
    title: "Mastering Core Java", 
    category: "Backend", 
    description: "Deep dive into JVM internals and high-concurrency patterns for scalable enterprise apps.", 
    link: "https://github.com/vishaldeshmukh34/Servlet/tree/main/Servlet", 
    readTime: "8 min", 
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    title: "Tailwind CSS Mastery", 
    category: "Design", 
    description: "Architecting scalable design systems with utility-first principles and fluid layouts.", 
    link: "#", 
    readTime: "5 min", 
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    title: "Modern JavaScript", 
    category: "Development", 
    description: "Explaining the Event Loop and Async patterns that power the high-performance modern web.", 
    link: "#", 
    readTime: "12 min", 
    img: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070&auto=format&fit=crop" 
  },
];

const BlogCard = ({ blog, index }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-slate-900 to-black rounded-[2rem] md:rounded-[2.5rem] p-4 border border-white/10 shadow-2xl transition-all duration-500 hover:border-indigo-500/50"
    >
      <div className="relative h-56 sm:h-72 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] z-10">
        <motion.img 
          src={blog.img} 
          whileHover={{ scale: 1.1 }}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
            <span className="flex items-center gap-2 px-3 py-1 bg-indigo-600/90 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest rounded-full border border-white/10">
                <FaLayerGroup size={10} /> {blog.category}
            </span>
        </div>
      </div>

      <div className="pt-6 pb-2 px-2" style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-indigo-400 transition-colors">
          {blog.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {blog.description}
        </p>

        <div className="flex items-center justify-between border-t border-white/5 pt-5">
          <div className="flex flex-col">
            <span className="text-[9px] text-slate-500 uppercase tracking-widest mb-1 font-mono">Metric.Time</span>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold">
              <FaClock /> {blog.readTime}
            </div>
          </div>
          <motion.a 
            href={blog.link}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-white text-black rounded-2xl transition-all"
          >
            <FaPlus size={14} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Blog = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Backend", "Design", "Development"];

  return (
    <section className="py-12 md:py-32 bg-[#030303] relative overflow-hidden min-h-screen">
      {/* Texture & Glow */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute top-0 -left-10 w-64 md:w-96 h-64 md:h-96 bg-indigo-600/20 blur-[100px] md:blur-[150px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* MAINTAINED STYLISH HEADER */}
        <div className="mb-16 md:mb-24 space-y-4 md:space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-indigo-500 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em]"
          >
            <FaTerminal className="animate-pulse" /> Latest_Logs.v2
          </motion.div>

          <div className="relative group cursor-default">
            {/* Outline Background Text (Responsive hidden on small screens if preferred, but here scaled) */}
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-[1000] leading-none tracking-[-0.06em] text-white/5 absolute top-0 left-0 select-none">
                LATEST <br /> THOUGHTS
            </h2>
            
            {/* Main Animated Text (Responsive scaling) */}
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-[1000] leading-none tracking-[-0.06em] text-white relative">
                <motion.span 
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 1, ease: "circOut" }}
                  className="block"
                >
                  LATEST
                </motion.span>
                <span className="block text-transparent py-1 md:py-2" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>
                  THOUGHTS<span className="text-indigo-600">.</span>
                </span>
            </h2>
          </div>

          

          {/* RESPONSIVE CATEGORY TABS (Scrollable on Mobile) */}
          <div className="flex overflow-x-auto pb-4 pt-4 md:pt-8 gap-3 no-scrollbar scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative flex-shrink-0 px-6 md:px-8 py-2.5 md:py-3 rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat ? "text-black" : "text-white border border-white/10 hover:border-white/40"
                }`}
              >
                <span className="relative z-10">{cat}</span>
                {filter === cat && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute inset-0 bg-white rounded-2xl z-0 shadow-[0_10px_20px_rgba(255,255,255,0.1)]" 
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <AnimatePresence mode="popLayout">
            {blogs
              .filter(b => filter === "All" || b.category === filter)
              .map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))}
          </AnimatePresence>
        </div>

        {/* RESPONSIVE FOOTER */}
        <div className="mt-20 md:mt-32 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Sys.Operational // 2026</span>
            </div>
            <motion.div 
              whileHover={{ x: 10 }}
              className="text-white font-black text-[10px] uppercase tracking-[0.3em] cursor-pointer flex items-center gap-3 group"
            >
                View Archive <FaArrowRight className="text-indigo-600 group-hover:translate-x-2 transition-transform" />
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;