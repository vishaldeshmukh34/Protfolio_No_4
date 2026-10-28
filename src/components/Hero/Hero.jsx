import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FaDownload, FaCommentDots, FaCode, FaServer, FaReact, FaShieldAlt } from "react-icons/fa";
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
  
  const roles = ["Java Full Stack Developer", "Java Backend Developer", "Java Developer", "Spring Boot Developer", "React Developer", "Software Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollY } = useScroll();
  
  const yBlob1 = useTransform(scrollY, [0, 500], [0, -100]);
  const yBlob2 = useTransform(scrollY, [0, 500], [0, 80]);
  const rotateHero = useTransform(scrollY, [0, 500], [0, 5]);

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((p) => (p + 1) % roles.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Added pt-24 (mobile) and lg:pt-32 (desktop) for top spacing
    <section className="relative min-h-[90dvh] flex items-start lg:items-center justify-center overflow-hidden bg-[#f8fafc] pt-24 pb-12 lg:pt-32 lg:pb-8">
      
      {/* 1. CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* 2. ADVANCED PARALLAX BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: yBlob1 }} className="absolute top-[-5%] left-[-5%] w-[30vw] h-[30vw] bg-indigo-200/40 rounded-full blur-[100px]" />
        <motion.div style={{ y: yBlob2 }} className="absolute bottom-[-5%] right-[-5%] w-[25vw] h-[25vw] bg-purple-200/40 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          
          {/* 3. TEXT ARCHITECTURE */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 font-bold text-[9px] uppercase tracking-[0.4em] mb-5 shadow-xl">
              <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Vishal.Dev_Console
            </div>

            <h1 className="text-[clamp(2.2rem,6vw,5.5rem)] font-[1000] text-slate-900 mb-4 tracking-tighter leading-[0.9]">
              Full Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 drop-shadow-sm">
                Visionary.
              </span>
            </h1>

            <div className="h-10 flex items-center justify-center lg:justify-start mb-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 30, opacity: 0, skewY: 5 }}
                  animate={{ y: 0, opacity: 1, skewY: 0 }}
                  exit={{ y: -30, opacity: 0, skewY: -5 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-lg md:text-3xl font-black text-slate-400/80 italic flex items-center gap-3"
                >
                  <FaCode className="text-indigo-600 text-sm md:text-xl" /> {roles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="max-w-lg text-slate-500 text-sm md:text-lg font-medium leading-relaxed mb-8 mx-auto lg:mx-0">
              Building powerful Java backends and modern React applications into seamless digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <MagneticButton
                href={cv}
                download
                className="group relative px-8 py-4 bg-indigo-600 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl overflow-hidden flex items-center gap-3 shadow-[0_15px_40px_rgba(79,70,229,0.25)]"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                <FaDownload className="group-hover:-translate-y-1 transition-transform" /> 
                Download Resume
              </MagneticButton>

              <MagneticButton
                href="#contact"
                className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center gap-3"
              >
                Start Project <FaCommentDots />
              </MagneticButton>
            </div>
          </motion.div>

          {/* 4. ADVANCED 3D PROFILE SYSTEM */}
          <motion.div 
            style={{ rotate: rotateHero }}
            className="flex-1 relative order-1 lg:order-2 w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[480px]"
          >
            <div className="relative group perspective-[2000px]">
              
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-4 top-8 z-30 bg-white/70 backdrop-blur-2xl p-3 rounded-2xl border border-white shadow-xl hidden sm:block"
              >
                <FaShieldAlt className="text-indigo-500 mb-1" size={20} />
                <p className="text-[8px] font-black text-slate-400 uppercase">Status</p>
                <p className="text-[10px] font-bold text-slate-900 tracking-tight">Available to Hire</p>
              </motion.div>

              <motion.div 
                whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
                className="relative z-10 aspect-[4/5] w-full bg-gradient-to-br from-white to-slate-50 rounded-[2.5rem] lg:rounded-[4rem] p-3 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] border border-white overflow-hidden transform-gpu transition-all duration-700 ease-[0.23,1,0.32,1]"
              >
                <div className="absolute inset-0 z-20 pointer-events-none group-hover:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] transition-all duration-1000 bg-[0%_0%] group-hover:bg-[100%_100%]" />
                <img 
                  src={profile1} 
                  alt="Vishal Deshmukh" 
                  className="w-full h-full object-cover rounded-[1.8rem] lg:rounded-[3.2rem] grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000" 
                />
                
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-30">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border-2 border-white shadow-lg"><FaReact className="text-indigo-400 text-sm" /></div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center border-2 border-white shadow-lg"><FaServer className="text-white text-sm" /></div>
                  </div>
                  <div className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-white">
                     <span className="text-[8px] font-black text-slate-900 uppercase tracking-widest">Est. 2021</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ 
                  y: [0, 5, 0],
                  rotateX: [0, 2, 0],
                  rotateY: [0, -2, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 -bottom-2 lg:-right-2 lg:-bottom-2 p-[1px] rounded-lg overflow-hidden bg-gradient-to-br from-indigo-500/40 via-transparent to-purple-500/40 shadow-xl z-30 group"
              >
                <div className="relative bg-slate-950/90 backdrop-blur-xl p-2 lg:p-2.5 rounded-[9px] overflow-hidden min-w-[120px] lg:min-w-[150px]">
                  <div className="flex items-center gap-1 mb-1.5 opacity-60">
                    <div className="w-1 h-1 rounded-full bg-red-500/80" />
                    <div className="w-1 h-1 rounded-full bg-amber-500/80" />
                    <div className="w-1 h-1 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="space-y-0.5 font-mono relative">
                    <div className="flex items-center gap-1 text-[7px] lg:text-[9px]">
                      <span className="text-purple-400 italic">const</span>
                      <span className="text-blue-400">Dev</span>
                      <span className="text-white">=</span>
                      <span className="text-indigo-400">{'{'}</span>
                    </div>
                    <div className="pl-2.5 border-l border-indigo-500/20 py-0.5">
                      <p className="text-white font-bold text-[9px] lg:text-[11px] tracking-tighter group-hover:text-indigo-400 transition-colors">
                        Vishal_Deshmukh
                      </p>
                      <p className="text-slate-500 text-[6px] lg:text-[8px]">
                        edu: <span className="text-emerald-400/70">"MCA_CS"</span>
                      </p>
                    </div>
                    <div className="text-indigo-400 text-[7px] lg:text-[9px]">{'}'}</div>
                    <div className="absolute top-0 right-0 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-indigo-500 animate-ping" />
                      <span className="text-[5px] text-indigo-500/70 font-bold tracking-widest uppercase">Live</span>
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