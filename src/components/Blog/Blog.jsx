import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll, useVelocity } from "framer-motion";
import { FaArrowRight, FaTerminal, FaClock, FaPlus, FaLayerGroup, FaShareAlt } from "react-icons/fa";

// --- COMPONENT: GRAIN OVERLAY ---
const GrainOverlay = () => {
  const { scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollYProgress);
  
  const grainOpacity = useTransform(scrollVelocity, [-1500, 0, 1500], [0.12, 0.04, 0.12]);
  const grainScale = useTransform(scrollVelocity, [-1500, 0, 1500], [1.1, 1, 1.1]);

  return (
    <motion.div 
      style={{ opacity: grainOpacity, scale: grainScale }}
      className="fixed inset-0 pointer-events-none z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat will-change-transform"
    />
  );
};

// --- COMPONENT: DYNAMIC PROGRESS BAR ---
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-[2px] md:h-[4px] bg-white z-[1000] origin-left"
      style={{ scaleX }}
    />
  );
};

// --- COMPONENT: CUSTOM LIQUID CURSOR (Hidden on Touch Devices) ---
const CustomCursor = ({ isHovering }) => {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    if (!isMobile) {
      window.addEventListener("mousemove", moveMouse);
      return () => window.removeEventListener("mousemove", moveMouse);
    }
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center overflow-hidden"
      style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: isHovering ? 100 : 16, height: isHovering ? 100 : 16 }}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="text-[10px] font-black text-black uppercase tracking-widest"
          >
            Read
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const BlogCard = ({ blog, index, setCursorHover }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Reduced tilt for mobile to prevent weird clipping
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 80, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 80, damping: 20 });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={(e) => {
        const rect = cardRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseEnter={() => setCursorHover(true)}
      onMouseLeave={() => { x.set(0); y.set(0); setCursorHover(false); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative bg-[#0a0a0a] rounded-[2rem] md:rounded-[3.5rem] p-3 md:p-5 border border-white/5"
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] overflow-hidden rounded-[1.8rem] md:rounded-[2.8rem]">
          <motion.img 
            src={blog.img} 
            loading="lazy"
            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 right-6">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[0.9] uppercase mb-4">
              {blog.title}
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-4">
               <span className="text-[8px] md:text-[10px] font-mono text-white/50 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md uppercase tracking-widest">{blog.category}</span>
               <span className="text-[8px] md:text-[10px] font-mono text-white/50 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md uppercase tracking-widest">{blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-1000"
        style={{ backgroundColor: blog.accent }}
      />
    </motion.div>
  );
};

const Blog = () => {
  const [isHovering, setIsHovering] = useState(false);
  const blogs = [
    { id: 1, title: "JVM Deep", category: "Backend", accent: "#6366f1", readTime: "8m", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070" },
    { id: 2, title: "Tailwind UI", category: "Design", accent: "#06b6d4", readTime: "5m", img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931" },
    { id: 3, title: "Async Pro", category: "Dev", accent: "#f59e0b", readTime: "12m", img: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070" },
  ];

  return (
    <div className="bg-[#030303] min-h-screen text-white selection:bg-white selection:text-black sm:cursor-none overflow-x-hidden">
      <GrainOverlay />
      <ScrollProgress />
      <CustomCursor isHovering={isHovering} />

      <section className="container mx-auto px-4 sm:px-8 pt-32 md:pt-60 pb-20 md:pb-40">
        <header className="mb-16 md:mb-32 max-w-7xl">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-3 mb-6 md:mb-10"
          >
            <FaTerminal className="text-indigo-500 text-xs animate-pulse" />
            <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-white/40">Latest_Artifacts_v2.0</span>
          </motion.div>
          
          <h1 className="text-[clamp(3.5rem,15vw,14rem)] font-[1000] leading-[0.75] tracking-[-0.06em] uppercase">
            Radical<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "max(1px, 0.05vw) rgba(255,255,255,0.2)" }}>Ideas.</span>
          </h1>
        </header>

        {/* Responsive Grid: 1 col on mobile, 2 col on large md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16">
          {blogs.map((blog, i) => (
            <div key={blog.id} className={i === 2 ? "md:col-span-2 lg:col-span-1" : ""}>
               <BlogCard blog={blog} index={i} setCursorHover={setIsHovering} />
            </div>
          ))}
        </div>

        <footer className="mt-32 md:mt-60 pb-10 border-t border-white/5 pt-16 flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="max-w-2xl">
                <h4 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 md:mb-8 italic text-indigo-500 leading-none">The Modern Standard.</h4>
                <p className="text-lg md:text-2xl text-white/40 leading-relaxed tracking-tight">
                    Optimized for every viewport. Engineered for high-fidelity interaction. Radical simplicity meets technical complexity.
                </p>
            </div>
            
            <motion.div 
                whileHover={{ x: 20 }}
                whileTap={{ scale: 0.95 }}
                className="w-full lg:w-auto bg-white/5 border border-white/10 px-8 py-6 md:px-12 md:py-8 rounded-full text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-6 cursor-pointer hover:bg-white hover:text-black transition-all duration-500"
            >
                View Archive <FaArrowRight />
            </motion.div>
        </footer>
      </section>
    </div>
  );
};

export default Blog;