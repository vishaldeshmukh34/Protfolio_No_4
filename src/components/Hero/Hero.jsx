import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { FaDownload, FaCommentDots, FaTerminal, FaCode, FaServer, FaReact, FaShieldAlt } from "react-icons/fa";
import profile1 from "../../assets/vishal.png";
import cv from "../../assets/Vishal_Resume.pdf";

// --- Magnetic Interaction with Spring Physics ---
const MagneticButton = ({ children, className, ...props }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    >
      <a className={className} {...props}>{children}</a>
    </motion.div>
  );
};

function Hero() {
  const roles = ["Java Full Stack Developer", "Frontend  Developer", "Backed Developer", "MERN Stack Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax elements
  const yBlob1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const yBlob2 = useTransform(scrollY, [0, 1000], [0, 150]);
  const rotateHero = useTransform(scrollY, [0, 500], [0, 5]);

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((p) => (p + 1) % roles.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#f8fafc] py-16 lg:py-0">
      
      {/* 1. CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* 2. ADVANCED PARALLAX BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: yBlob1 }} className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-indigo-200/40 rounded-full blur-[120px]" />
        <motion.div style={{ y: yBlob2 }} className="absolute bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] bg-purple-200/40 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full mt-4 lg:mt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">
          
          {/* 3. TEXT ARCHITECTURE (Fluid Typography) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 font-bold text-[10px] uppercase tracking-[0.5em] mb-8 shadow-2xl">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              Vishal.Dev_Console
            </div>

            <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-[1000] text-slate-900 mb-6 tracking-tighter leading-[0.9] sm:leading-[0.85]">
              Full Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 drop-shadow-sm">
                Visionary.
              </span>
            </h1>

            <div className="h-14 flex items-center justify-center lg:justify-start mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 50, opacity: 0, skewY: 10 }}
                  animate={{ y: 0, opacity: 1, skewY: 0 }}
                  exit={{ y: -50, opacity: 0, skewY: -10 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xl md:text-4xl font-black text-slate-400/80 italic flex items-center gap-4"
                >
                  <FaCode className="text-indigo-600 text-sm md:text-2xl" /> {roles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="max-w-xl text-slate-500 text-sm md:text-xl font-medium leading-relaxed mb-10 mx-auto lg:mx-0">
              Transforming complex Java backends and MERN architectures into 
              seamless digital experiences.
            </p>

            {/* CTAs with Modern Hover Logic */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <MagneticButton
                href={cv}
                download
                className="group relative px-10 py-5 bg-indigo-600 text-white font-black text-[11px] uppercase tracking-[0.3em] rounded-2xl overflow-hidden flex items-center gap-3 shadow-[0_20px_50px_rgba(79,70,229,0.3)]"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                <FaDownload className="group-hover:-translate-y-1 transition-transform" /> 
                Download Resume
              </MagneticButton>

              <MagneticButton
                href="#contact"
                className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-900 font-black text-[11px] uppercase tracking-[0.3em] rounded-2xl hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center gap-3"
              >
                Start Project <FaCommentDots />
              </MagneticButton>
            </div>
          </motion.div>

          {/* 4. ADVANCED 3D PROFILE SYSTEM (Mobile Responsive) */}
          <motion.div 
            style={{ rotate: rotateHero }}
            className="flex-1 relative order-1 lg:order-2 w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[550px]"
          >
            <div className="relative group perspective-[2000px]">
              
              {/* Floating Stat Card (Top Left) */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-6 top-10 z-30 bg-white/70 backdrop-blur-2xl p-4 rounded-3xl border border-white shadow-2xl hidden sm:block"
              >
                <FaShieldAlt className="text-indigo-500 mb-2" size={24} />
                <p className="text-[10px] font-black text-slate-400 uppercase">Status</p>
                <p className="text-xs font-bold text-slate-900 tracking-tight">Available to Hire</p>
              </motion.div>

              {/* Main Visual Frame */}
              <motion.div 
                whileHover={{ rotateY: -15, rotateX: 10, scale: 1.05 }}
                className="relative z-10 aspect-[4/5] w-full bg-gradient-to-br from-white to-slate-50 rounded-[3rem] lg:rounded-[5rem] p-4 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.15)] border border-white overflow-hidden transform-gpu transition-all duration-700 ease-[0.23,1,0.32,1]"
              >
                {/* Dynamic Image Shine */}
                <div className="absolute inset-0 z-20 pointer-events-none group-hover:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] transition-all duration-1000 bg-[0%_0%] group-hover:bg-[100%_100%]" />
                
                <img 
                  src={profile1} 
                  alt="Vishal Deshmukh" 
                  className="w-full h-full object-cover rounded-[2rem] lg:rounded-[4rem] grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000" 
                />
                
                {/* Tech Badges (Glassmorphism) */}
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center z-30">
                  <div className="flex -space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center border-2 border-white shadow-xl"><FaReact className="text-indigo-400" /></div>
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center border-2 border-white shadow-xl"><FaServer className="text-white" /></div>
                  </div>
                  <div className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white">
                     <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Est. 2021</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating ID Card (Bottom Right) */}
              <motion.div 
  animate={{ 
    y: [0, 8, 0],
    rotateX: [0, 3, 0],
    rotateY: [0, -3, 0]
  }}
  transition={{ 
    duration: 5, 
    repeat: Infinity, 
    ease: "easeInOut" 
  }}
  className="absolute -right-2 -bottom-4 lg:-right-4 lg:-bottom-4 p-[1px] rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500/40 via-transparent to-purple-500/40 shadow-xl z-30 group"
>
  {/* Inner Container - Ultra Compact */}
  <div className="relative bg-slate-950/90 backdrop-blur-xl p-2.5 lg:p-3 rounded-[11px] overflow-hidden min-w-[130px] lg:min-w-[170px]">
    
    {/* Minimal Header */}
    <div className="flex items-center gap-1.5 mb-2 opacity-60">
      <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
      <div className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
    </div>

    {/* Stylish Code Content */}
    <div className="space-y-0.5 font-mono relative">
      <div className="flex items-center gap-1.5 text-[8px] lg:text-[10px]">
        <span className="text-purple-400 italic">const</span>
        <span className="text-blue-400">Dev</span>
        <span className="text-white">=</span>
        <span className="text-indigo-400">{'{'}</span>
      </div>

      <div className="pl-3 border-l border-indigo-500/20 py-0.5">
        <p className="text-white font-bold text-[10px] lg:text-[12px] tracking-tighter group-hover:text-indigo-400 transition-colors">
          Vishal_Deshmukh
        </p>
        
        <p className="text-slate-500 text-[7px] lg:text-[9px]">
          edu: <span className="text-emerald-400/70">"MCA_CS"</span>
        </p>
      </div>

      <div className="text-indigo-400 text-[8px] lg:text-[10px]">{'}'}</div>

      {/* Mini Status Indicator */}
      <div className="absolute top-0 right-0 flex items-center gap-1">
        <span className="w-1 h-1 rounded-full bg-indigo-500 animate-ping" />
        <span className="text-[6px] text-indigo-500/70 font-bold tracking-widest uppercase">Live</span>
      </div>
    </div>
  </div>
</motion.div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}

export default Hero;