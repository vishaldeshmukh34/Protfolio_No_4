import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaArrowUp, FaGithub, FaLinkedinIn, 
  FaEnvelope, FaClock, FaArrowRight
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const SocialBadge = ({ icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2.5 px-4 py-3 bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-indigo-500/40 rounded-2xl backdrop-blur-xl transition-all duration-300 text-slate-300 hover:text-white group"
  >
    <span className="text-base text-indigo-400 group-hover:scale-110 transition-transform">{icon}</span>
    <span className="text-xs font-medium tracking-wide uppercase">{label}</span>
  </motion.a>
);

function AdvanceFooter({ 
  isAvailable = false, 
  availableStatusText = "Busy", 
  activeStatusText = "Available for Work" 
}) {
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
    
    const handleScrollOrResize = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (windowHeight > 0) {
        const progress = (totalScroll / windowHeight) * 100;
        setScrollProgress(progress);
        setShowScroll(totalScroll > 300);
      }
    };

    window.addEventListener("scroll", handleScrollOrResize);
    window.addEventListener("resize", handleScrollOrResize);
    handleScrollOrResize();

    return () => { 
      clearInterval(timer); 
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, []);

  const currentStatusText = isAvailable ? activeStatusText : availableStatusText;

  // SVG circle calculation for r = 20
  const circleRadius = 20;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <footer className="relative bg-[#030305] text-white pt-24 pb-12 overflow-hidden selection:bg-indigo-500/30">
      
      {/* Ambient Mesh Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      <div className="absolute top-[-20%] left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Card 1: Main Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-7 p-8 md:p-10 bg-white/[0.015] border border-white/[0.08] rounded-3xl backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                <HiSparkles className="text-indigo-400 text-xs" />
                <span className="text-[10px] font-mono tracking-widest uppercase text-indigo-300">Frontend Architecture</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
                Let's Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Something Iconic.
                </span>
              </h2>

              <p className="text-slate-400 text-sm md:text-base font-light max-w-lg leading-relaxed">
                Crafting performant web experiences with fluid micro-interactions, clean design systems, and modern React ecosystems.
              </p>
            </div>

            {/* Live Data Widgets */}
            <div className="flex flex-wrap items-center gap-3 pt-8 relative z-10">
              <div className="flex items-center gap-2.5 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl backdrop-blur-md">
                <FaClock className="text-indigo-400 text-xs animate-pulse" />
                <span className="text-xs font-mono text-slate-300 font-bold">{time} IST</span>
              </div>

              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-md border ${
                isAvailable ? 'bg-emerald-500/[0.03] border-emerald-500/20' : 'bg-white/[0.03] border-white/10'
              }`}>
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isAvailable ? 'bg-emerald-400' : 'bg-slate-400'}`} />
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${isAvailable ? 'bg-emerald-500' : 'bg-slate-500'}`} />
                </span>
                <span className={`text-xs font-mono font-bold tracking-wider ${isAvailable ? 'text-emerald-400' : 'text-slate-300'}`}>
                  {currentStatusText}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Navigation & Action Hub */}
          <motion.div variants={itemVariants} className="lg:col-span-5 p-8 md:p-10 bg-white/[0.015] border border-white/[0.08] rounded-3xl backdrop-blur-2xl flex flex-col justify-between space-y-8">
            
            {/* STYLISH NAVIGATION CARDS (Work, About, Resume) */}
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500 mb-4">Quick Navigation</h4>
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  { label: "Explore Work", sub: "View featured projects", id: "#work", isExternal: false },
                  { label: "About Me", sub: "Background & skills", id: "#about", isExternal: false },
                  { label: "Download Resume", sub: "PDF Format", id: "/resume.pdf", isExternal: true }
                ].map(item => (
                  <motion.a 
                    key={item.label} 
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    href={item.id} 
                    {...(item.isExternal ? { download: "Vishal_Deshmukh_Resume.pdf", target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-between p-3.5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-indigo-500/40 rounded-2xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform" />
                      <div>
                        <span className="block text-xs font-bold text-white uppercase tracking-wider group-hover:text-indigo-300 transition-colors">
                          {item.label}
                        </span>
                        <span className="block text-[10px] text-slate-400 font-mono">
                          {item.sub}
                        </span>
                      </div>
                    </div>
                    <span className="text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all text-xs font-bold">
                      {item.isExternal ? "↓" : "→"}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* LinkedIn Button */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500">Direct Network</h4>
              
              <motion.a
                href="https://www.linkedin.com/in/vishal-deshmukh79/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative group block w-full p-px rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative px-6 py-4 bg-[#07070a] group-hover:bg-[#0c0c12] rounded-2xl flex items-center justify-between transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <FaLinkedinIn className="text-sm" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-indigo-300 transition-colors">
                      Connect on LinkedIn
                    </span>
                  </div>
                  <span className="text-indigo-400 font-bold group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </motion.a>
            </div>

            {/* Social Badges Row */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <SocialBadge icon={<FaGithub />} href="https://github.com/vishaldeshmukh34" label="GitHub" />
              <SocialBadge icon={<FaEnvelope />} href="mailto:vishaldeshmukh7972@gmail.com" label="Email" />
            </div>

          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-mono">
          <p>© 2026 VISHAL DESHMUKH. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">HANDCRAFTED IN INDIA</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span className="text-indigo-400">STABLE_BUILD v5.0</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Scroll-to-Top Indicator */}
      <AnimatePresence>
        {showScroll && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            className="fixed bottom-8 right-8 z-[100]"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll to top of page"
              className="group relative w-12 h-12 bg-indigo-600 hover:bg-white text-white hover:text-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-600/30 transition-all duration-300 backdrop-blur-xl border border-indigo-500/30"
            >
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1.5" viewBox="0 0 44 44" aria-hidden="true">
                <circle cx="22" cy="22" r={circleRadius} fill="transparent" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />
                <circle
                  cx="22" cy="22" r={circleRadius} fill="transparent" stroke="currentColor" strokeWidth="2.5"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>
              <FaArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default AdvanceFooter;