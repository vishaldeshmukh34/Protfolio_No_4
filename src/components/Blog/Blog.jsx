import React, { useRef, useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaArrowRight, FaFireAlt, FaShareAlt, FaTerminal, FaClock } from "react-icons/fa";

const blogs = [
  { 
    id: 1, 
    title: "Mastering Core Java", 
    category: "Backend", 
    description: "Deep dive into JVM internals and high-concurrency patterns for scalable enterprise apps.", 
    link: "https://blog1corejava.netlify.app/", 
    readTime: "8 min", 
    tags: ["JDK 21", "Performance"],
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    title: "Tailwind CSS Mastery", 
    category: "Design", 
    description: "Architecting scalable design systems with utility-first principles and fluid layouts.", 
    link: "https://blog2tailwincss.netlify.app/", 
    readTime: "5 min", 
    tags: ["UI/UX", "Modern Web"],
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    title: "Modern JavaScript", 
    category: "Development", 
    description: "Explaining the Event Loop and Async patterns that power the high-performance modern web.", 
    link: "file:///D:/portfolio/blog/blog3.html", 
    readTime: "12 min", 
    tags: ["ESNext", "V8 Engine"],
    img: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070&auto=format&fit=crop" 
  },
];

const BlogCard = ({ blog, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["7deg", "-7deg"]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-7deg", "7deg"]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); setIsHovered(false); }}
      onMouseEnter={() => setIsHovered(true)}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative bg-white rounded-[3rem] md:rounded-[5rem] p-4 md:p-6 border border-slate-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_60px_100px_-20px_rgba(79,70,229,0.12)] transition-all duration-700"
    >
      {/* 1. IMAGE CONTAINER */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden rounded-[2.5rem] md:rounded-[4.2rem] bg-slate-100">
        <motion.img
          src={blog.img}
          alt={blog.title}
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            filter: isHovered ? "brightness(1) contrast(1.1)" : "brightness(0.9) contrast(1)"
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
        
        {/* Floating Read Time Badge */}
        <div className="absolute top-6 right-6 px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 text-white text-[9px] font-black uppercase flex items-center gap-2">
           <FaClock className="text-indigo-300" /> {blog.readTime}
        </div>

        {/* Tags Overlay */}
        <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
           {blog.tags.map(tag => (
             <span key={tag} className="px-4 py-1.5 bg-indigo-600/80 backdrop-blur-md text-white text-[8px] font-bold rounded-full uppercase tracking-widest">
               {tag}
             </span>
           ))}
        </div>
      </div>

      {/* 2. CONTENT */}
      <div className="px-4 md:px-6 py-8 md:py-10" style={{ transform: "translateZ(50px)" }}>
        <div className="flex items-center gap-3 mb-6">
          <div className={`h-[2px] transition-all duration-700 ${isHovered ? 'w-16 bg-indigo-600' : 'w-8 bg-slate-200'}`} />
          <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.4em]">{blog.category}</span>
        </div>

        <h3 className="text-3xl md:text-4xl font-[1000] text-slate-950 leading-[0.95] tracking-tighter mb-6 group-hover:text-indigo-600 transition-colors">
          {blog.title}
        </h3>
        
        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 line-clamp-2 font-medium">
          {blog.description}
        </p>

        {/* 3. FOOTER ACTIONS */}
        <div className="flex items-center justify-between">
          <motion.a
            href={blog.link}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group/btn relative px-6 md:px-8 py-3 md:py-4 bg-slate-950 text-white rounded-full text-[9px] font-black uppercase tracking-widest overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Read Story <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
          </motion.a>
          
          <div className="flex gap-4">
            <button className="text-slate-300 hover:text-indigo-600 transition-colors transform hover:-translate-y-1">
              <FaShareAlt size={16} />
            </button>
            <button className="text-slate-300 hover:text-orange-500 transition-colors transform hover:-translate-y-1">
              <FaFireAlt size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* BG DECOR NUMBER */}
      <div className="absolute -top-6 -right-6 text-[10rem] md:text-[14rem] font-black text-slate-900/[0.03] select-none pointer-events-none italic group-hover:text-indigo-600/[0.05] transition-colors">
        0{blog.id}
      </div>
    </motion.div>
  );
};

const Blog = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Backend", "Design", "Development"];
  
  const filteredBlogs = useMemo(() => 
    filter === "All" ? blogs : blogs.filter(b => b.category === filter), 
  [filter]);

  return (
    <section id="blog" className="py-24 md:py-48 bg-[#fafafa] relative overflow-hidden">
      
      {/* BACKGROUND MESH */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-indigo-100 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-purple-100 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-20 md:mb-32 gap-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-indigo-600 font-black text-[10px] uppercase tracking-[0.5em] mb-8"
            >
              <FaTerminal /> Dev.Insights_2026
            </motion.div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-[1000] text-slate-950 leading-[0.8] tracking-tighter">
              LATEST <br /> <span className="text-indigo-600 italic">THOUGHTS.</span>
            </h2>
          </div>

          {/* FILTER TABS */}
          <div className="flex flex-wrap gap-2 md:gap-3 bg-white p-2 rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100 self-start">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${
                  filter === cat ? "bg-slate-950 text-white shadow-xl scale-105" : "hover:bg-slate-50 text-slate-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* RESPONSIVE GRID */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-16">
          <AnimatePresence mode='popLayout'>
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* FOOTER ACCENT */}
        <div className="mt-32 md:mt-48 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30">
          <div className="text-slate-900 font-mono text-[9px] uppercase tracking-[0.4em]">Vishal Deshmukh // Creative Dev</div>
          <div className="hidden md:block h-[1px] flex-1 mx-10 bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
          <div className="text-slate-900 font-mono text-[9px] uppercase tracking-[0.4em]">Scroll to Discover More</div>
        </div>
      </div>
    </section>
  );
};

export default Blog;