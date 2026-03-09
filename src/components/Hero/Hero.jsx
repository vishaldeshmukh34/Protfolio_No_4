import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FaDownload, FaCommentDots, FaCode, FaServer, FaReact, FaShieldAlt } from "react-icons/fa";
import profile1 from "../../assets/profile2.webp";
import cv from "../../assets/Vishal_Resume.pdf";

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
      className="z-20 w-full sm:w-auto"
    >
      <a className={className} {...props}>{children}</a>
    </motion.div>
  );
};

function Hero() {
  const roles = ["Java Full Stack Developer", "Frontend Developer", "Backend Developer", "MERN Stack Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollY } = useScroll();
  
  const yBlob1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const yBlob2 = useTransform(scrollY, [0, 1000], [0, 150]);

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((p) => (p + 1) % roles.length), 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-[110dvh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#f8fafc] pt-20 pb-12 lg:py-0">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div style={{ y: yBlob1 }} className="absolute top-[-5%] left-[-10%] w-[80vw] h-[80vw] lg:w-[40vw] lg:h-[40vw] bg-indigo-200/40 rounded-full blur-[80px] lg:blur-[120px]" />
        <motion.div style={{ y: yBlob2 }} className="absolute bottom-[-5%] right-[-10%] w-[70vw] h-[70vw] lg:w-[35vw] lg:h-[35vw] bg-purple-200/40 rounded-full blur-[80px] lg:blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:30px_30px] lg:bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* 1. VISUAL AREA (Top on Mobile) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 relative order-1 lg:order-2 w-full max-w-[260px] sm:max-w-[380px] lg:max-w-[500px]"
          >
            <div className="relative group">
              {/* Main Image Frame */}
              <div className="relative z-10 aspect-[4/5] w-full bg-white rounded-[2.5rem] lg:rounded-[4rem] p-3 shadow-2xl border border-white overflow-hidden">
                <img 
                  src={profile1} 
                  alt="Vishal Deshmukh" 
                  className="w-full h-full object-cover rounded-[2rem] lg:rounded-[3.5rem]" 
                />
                
                {/* Tech Badges */}
                <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 right-4 lg:right-8 flex justify-between items-center z-30">
                  <div className="flex -space-x-2 lg:-space-x-3">
                    <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-slate-900 flex items-center justify-center border-2 border-white shadow-lg"><FaReact className="text-indigo-400 text-xs lg:text-base" /></div>
                    <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-indigo-600 flex items-center justify-center border-2 border-white shadow-lg"><FaServer className="text-white text-xs lg:text-base" /></div>
                  </div>
                  <div className="px-3 py-1 lg:px-5 lg:py-2 bg-white/90 backdrop-blur-md rounded-xl lg:rounded-2xl shadow-lg border border-white">
                     <span className="text-[8px] lg:text-[10px] font-black text-slate-900 uppercase tracking-widest">Est. 2021</span>
                  </div>
                </div>
              </div>

              {/* Floating Code Card (Hidden on very small screens to save space) */}
              <div className="absolute -right-2 -bottom-4 lg:-right-6 lg:-bottom-6 p-[1px] rounded-xl bg-gradient-to-br from-indigo-500/40 to-purple-500/40 shadow-xl z-30 hidden sm:block">
                <div className="bg-slate-950/95 backdrop-blur-xl p-3 lg:p-4 rounded-[10px] min-w-[140px] lg:min-w-[180px]">
                  <div className="font-mono text-[9px] lg:text-[11px]">
                    <span className="text-purple-400">const</span> <span className="text-blue-400">Dev</span> <span className="text-white">=</span> <span className="text-indigo-400">{'{'}</span>
                    <div className="pl-3 border-l border-indigo-500/20 my-1">
                      <p className="text-white font-bold">Vishal_Deshmukh</p>
                    </div>
                    <span className="text-indigo-400">{'}'}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. TEXT AREA (Bottom on Mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 font-bold text-[9px] uppercase tracking-[0.4em] mb-6">
              <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Vishal.Dev_Console
            </div>

            <h1 className="text-[clamp(2rem,10vw,5.5rem)] font-[1000] text-slate-900 mb-4 tracking-tighter leading-[1.1] lg:leading-[0.85]">
              Full Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500">
                Visionary.
              </span>
            </h1>

            <div className="h-10 lg:h-14 flex items-center justify-center lg:justify-start mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-lg lg:text-3xl font-black text-slate-400/80 italic flex items-center gap-3"
                >
                  <FaCode className="text-indigo-600" /> {roles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="max-w-md lg:max-w-xl text-slate-500 text-sm lg:text-lg font-medium mb-8 mx-auto lg:mx-0">
              Transforming complex Java backends and MERN architectures into 
              seamless digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <MagneticButton
                href={cv}
                download
                className="px-8 py-4 bg-indigo-600 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl flex items-center gap-3 shadow-xl w-full sm:w-auto justify-center"
              >
                <FaDownload /> Download Resume
              </MagneticButton>

              <MagneticButton
                href="#contact"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] rounded-xl flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                Start Project <FaCommentDots />
              </MagneticButton>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;