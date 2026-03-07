import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaArrowUp, FaGithub, FaLinkedinIn, FaInstagram, 
  FaHeart, FaEnvelope, FaClock, FaArrowRight
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

const SocialLink = ({ icon, href }) => (
  <motion.a
    href={href}
    variants={itemVariants}
    whileTap={{ scale: 0.9, backgroundColor: "rgba(99, 102, 241, 0.4)" }}
    whileHover={{ scale: 1.1, rotate: -5, color: "#fff" }} 
    className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl transition-all duration-300"
  >
    <span className="text-slate-500 transition-colors text-lg md:text-xl">{icon}</span>
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
    <footer className="relative bg-[#020204] text-white pt-20 pb-8 md:pt-32 md:pb-12 overflow-hidden selection:bg-indigo-500/30">
      
      {/* 1. BRUTALIST BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* 2. BRUTALIST BRANDING SECTION */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div variants={itemVariants} className="relative group w-full">
              
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <span className="h-px w-8 bg-indigo-500/50" />
                <span className="text-[10px] font-black tracking-[0.6em] text-indigo-400 uppercase">Mastery</span>
              </div>

              <div className="relative mb-8">
                <h2 className="hidden md:block text-[8rem] lg:text-[10rem] font-[1000] leading-none tracking-[-0.08em] text-white/[0.02] absolute top-[-20%] left-[-2%] select-none uppercase pointer-events-none">
                    NEXT-GEN
                </h2>

                <h2 className="text-[clamp(2.8rem,11vw,6rem)] font-[1000] tracking-[-0.04em] md:tracking-[-0.06em] leading-[0.85] uppercase">
                    <motion.span 
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="block text-white"
                    >
                        NEXT-GEN
                    </motion.span>
                    <span className="block text-transparent py-2 transition-all duration-700 hover:tracking-normal" 
                          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
                        CREATIVE<span className="text-indigo-500 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">.</span>
                    </span>
                </h2>
              </div>

              <p className="text-slate-400 max-w-md mx-auto lg:mx-0 text-base md:text-lg font-light leading-relaxed">
                Fusing code with aesthetics to build <span className="text-white border-b border-indigo-500/30">immersive</span> digital realities.
              </p>
            </motion.div>

            {/* STATUS DASHBOARD - Reduced Size */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-2 items-center">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-xl backdrop-blur-md">
                <FaClock className="text-indigo-400 text-[10px] animate-pulse" />
                <span className="text-[9px] font-mono text-slate-300 font-bold uppercase tracking-widest">{time}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/[0.03] border border-emerald-500/20 rounded-xl backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Active_Node</span>
              </div>
            </motion.div>
          </div>

          {/* 3. ACTION GRID */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-12 w-full">
            <div className="space-y-6 text-center sm:text-left">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600">Explore_Paths</h4>
              <nav className="flex flex-col gap-4">
                {["Work", "Stack", "Design", "About"].map(item => (
                  <motion.a 
                    key={item} 
                    whileHover={{ x: 10, color: "#fff" }}
                    whileTap={{ scale: 0.95 }}
                    href={`#${item.toLowerCase()}`} 
                    className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-[0.2em] transition-all flex items-center justify-center sm:justify-start group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-indigo-500 mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100" />
                    {item}
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="space-y-8 text-center sm:text-left flex flex-col items-center sm:items-start">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600">Connect_Core</h4>
              <div className="flex gap-3">
                <SocialLink icon={<FaGithub />} href="https://github.com/vishaldeshmukh34" />
                <SocialLink icon={<FaLinkedinIn />} href="https://www.linkedin.com/in/vishal-deshmukh79/" />
                <SocialLink icon={<FaInstagram />} href="#" />
                <SocialLink icon={<FaEnvelope />} href="mailto:vishaldeshmukh7972@gmail.com" />
              </div>
              
              <motion.a 
                href="mailto:vishaldeshmukh7972@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full flex items-center justify-between p-5 bg-indigo-600 hover:bg-indigo-500 rounded-2xl transition-all duration-300 shadow-xl shadow-indigo-600/20"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.2em]">Inquire Project</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* 4. REFINED BOTTOM BAR - Reduced Size */}
        <div className="mt-20 md:mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div variants={itemVariants} className="text-center md:text-left order-2 md:order-1">
            <p className="text-[8px] font-black text-slate-600 tracking-[0.5em] uppercase">© 2026 VISHAL DESHMUKH</p>
            <p className="text-[7px] font-mono text-slate-800 uppercase mt-1 tracking-tighter opacity-50">BUILD_VER: 5.0.0_STABLE // JALNA_MAH_IN</p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-4 md:gap-8 order-1 md:order-2">
            <div className="flex items-center gap-2 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
               Handcrafted with <FaHeart className="text-indigo-600 text-[10px] animate-bounce" /> in India
            </div>
            <div className="text-[8px] font-mono text-slate-400 bg-white/[0.01] px-3 py-1 rounded-full border border-white/5 backdrop-blur-sm">
              19.8415° N <span className="text-indigo-900/40 mx-1">|</span> 75.8833° E
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* COMPACT SCROLL PROGRESS */}
      <AnimatePresence>
        {showScroll && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-8 right-8 z-[100]"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group relative w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:bg-white hover:text-indigo-600"
            >
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                <circle cx="24" cy="24" r="21" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <motion.circle
                  cx="24" cy="24" r="21" fill="transparent" stroke="currentColor" strokeWidth="2"
                  strokeDasharray="132"
                  strokeDashoffset={132 - (132 * scrollProgress) / 100}
                />
              </svg>
              <FaArrowUp className="text-sm group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default AdvanceFooter;