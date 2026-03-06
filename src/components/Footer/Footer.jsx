import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaArrowUp, FaGithub, FaLinkedinIn, FaInstagram, 
  FaHeart, FaEnvelope, FaClock, FaLocationArrow, FaArrowRight
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

// Optimized Social Link for Touch
const SocialLink = ({ icon, href }) => (
  <motion.a
    href={href}
    variants={itemVariants}
    whileTap={{ scale: 0.9, backgroundColor: "rgba(99, 102, 241, 0.4)" }}
    // Hover only works on desktop (hidden on touch devices automatically by browser)
    whileHover={{ scale: 1.1, rotate: -5 }} 
    className="relative flex items-center justify-center w-12 h-12 bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300"
  >
    <span className="text-slate-400 group-active:text-white transition-colors text-xl">{icon}</span>
  </motion.a>
);

function AdvanceFooter() {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Intl.DateTimeFormat('en-IN', { 
        hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' 
      }).format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollHeight > 0 ? (currentScroll / scrollHeight) * 100 : 0);
      setShowScroll(currentScroll > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => { clearInterval(timer); window.removeEventListener("scroll", handleScroll); };
  }, []);

  return (
    <footer className="relative bg-[#020204] text-white pt-16 pb-8 md:pt-24 md:pb-12 overflow-hidden selection:bg-indigo-500/30">
      
      {/* CINEMATIC BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-indigo-500/5 blur-[120px] rounded-full" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* BRANDING SECTION - Responsive Text Alignment */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div variants={itemVariants} className="w-full">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 md:mb-6">
                <span className="h-px w-8 md:w-10 bg-indigo-500" />
                <span className="text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.6em] text-indigo-400 uppercase text-center">Mastery</span>
              </div>
              <h2 className="text-[clamp(2.5rem,10vw,5rem)] font-[1000] tracking-tight leading-[0.9] uppercase mb-4 md:mb-6">
                NEXT-GEN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 italic">CREATIVE.</span>
              </h2>
              <p className="text-slate-400 max-w-md mx-auto lg:mx-0 text-sm md:text-lg font-light leading-relaxed">
                Fusing code with aesthetics to build <span className="text-white border-b border-indigo-500/50">immersive</span> digital realities.
              </p>
            </motion.div>

            {/* STATUS DASHBOARD - Mobile Friendly Row */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 items-center">
              <div className="flex items-center gap-2 md:gap-3 px-4 py-2 bg-white/[0.02] border border-white/10 rounded-xl md:rounded-2xl">
                <FaClock className="text-indigo-400 text-xs md:text-base animate-pulse" />
                <span className="text-[10px] md:text-xs font-mono text-slate-300 font-bold uppercase tracking-wider">{time}</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 px-4 py-2 bg-emerald-500/5 border border-emerald-500/20 rounded-xl md:rounded-2xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[9px] md:text-[10px] font-black text-emerald-400 uppercase tracking-widest">Active_Node</span>
              </div>
            </motion.div>
          </div>

          {/* ACTION GRID - Adaptive Layout */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-4 w-full">
            
            <div className="space-y-4 md:space-y-6 text-center sm:text-left">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">Quick_Nav</h4>
              <nav className="grid grid-cols-2 gap-4">
                {["Work", "Stack", "Design", "About"].map(item => (
                  <motion.a 
                    key={item} 
                    whileTap={{ x: 5, color: "#818cf8" }}
                    href={`#${item.toLowerCase()}`} 
                    className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest p-2 border border-white/5 rounded-lg sm:border-none"
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">Connect</h4>
              <div className="flex gap-2 md:gap-3">
                <SocialLink icon={<FaGithub />} href="https://github.com/vishaldeshmukh34" />
                <SocialLink icon={<FaLinkedinIn />} href="https://www.linkedin.com/in/vishal-deshmukh79/" />
                <SocialLink icon={<FaInstagram />} href="#" />
              <SocialLink icon={<FaEnvelope />} href="mailto:vishaldeshmukh7972@gmail.com" isEmail={true} />
              </div>
              
              <motion.a 
                href="mailto:vishaldeshmukh7972@gmail.com"
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-between p-4 bg-indigo-600 rounded-2xl shadow-xl shadow-indigo-500/20"
              >
                <span className="text-[11px] font-black uppercase tracking-widest">Inquire Project</span>
                <FaArrowRight />
              </motion.a>
            </div>
          </div>
        </div>

        {/* REFINED BOTTOM BAR - Mobile Stacked */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
          <motion.div variants={itemVariants} className="text-center md:text-left order-2 md:order-1">
            <p className="text-[10px] font-black text-slate-500 tracking-[0.5em] uppercase">© 2026 VISHAL DESHMUKH</p>
            <p className="text-[8px] font-mono text-slate-800 uppercase mt-2">v4.1.0 // Node_Jalna_IN</p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-4 md:gap-8 order-1 md:order-2">
            <div className="flex items-center gap-2 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
               Handcrafted with <FaHeart className="text-indigo-500 text-xs animate-bounce" /> in India
            </div>
            <div className="hidden md:block h-4 w-px bg-white/10" />
            <div className="text-[10px] font-mono text-slate-400 bg-white/[0.03] px-3 py-1 rounded-full border border-white/5">
              19.8415° N <span className="text-slate-700 mx-1">|</span> 75.8833° E
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* COMPACT SCROLL PROGRESS - Visible on scroll */}
      <AnimatePresence>
        {showScroll && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-[100]"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-transform"
            >
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="24" cy="24" r="21" fill="transparent" stroke="rgba(0,0,0,0.05)" strokeWidth="3" />
                <motion.circle
                  cx="24" cy="24" r="21" fill="transparent" stroke="#6366f1" strokeWidth="3"
                  strokeDasharray="132"
                  strokeDashoffset={132 - (132 * scrollProgress) / 100}
                />
              </svg>
              <FaArrowUp className="text-sm" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default AdvanceFooter;