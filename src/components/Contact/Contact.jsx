import React, { useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { 
  FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, 
  FaMapMarkerAlt, FaTerminal, FaCheckCircle, FaCode, FaSatellite
} from "react-icons/fa";

// --- NEW: Cinematic Noise Component ---
const GrainOverlay = () => (
  <div className="fixed inset-0 z-[99] pointer-events-none opacity-[0.035] mix-blend-overlay">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

const ContactInfo = ({ icon: Icon, label, value, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="group flex items-center gap-4 p-6 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-2xl shadow-indigo-500/5 hover:bg-white hover:scale-[1.02] transition-all cursor-pointer relative overflow-hidden"
  >
    <div className={`shrink-0 w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-white shadow-lg group-hover:rotate-[12deg] transition-transform duration-500`}>
      <Icon size={20} />
    </div>
    <div className="min-w-0">
      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 mb-1">{label}</p>
      <p className="text-sm md:text-base font-black text-slate-900 truncate tracking-tight">{value}</p>
    </div>
  </motion.div>
);

function Contact() {
  const [isSent, setIsSent] = useState(false);

  // Magnetic Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const dx = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const dy = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - (left + width / 2));
    mouseY.set(clientY - (top + height / 2));
  };

  const handleSend = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 8000);
  };

  return (
    <div className="relative bg-[#fcfcff] selection:bg-indigo-600 selection:text-white overflow-x-hidden">
      <GrainOverlay />
      
      <section id="contact" className="relative py-20 lg:py-40 px-4">
        {/* AMBIENT BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* HEADER SECTION */}
          <div className="flex flex-col items-center text-center mb-20 md:mb-32 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 px-4 py-2 bg-white/50 backdrop-blur-md border border-white rounded-full text-indigo-600 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.5em] shadow-sm"
            >
              <FaSatellite className="animate-pulse" /> Uplink_Channel.v5
            </motion.div>

            <div className="relative group cursor-default px-2">
              <h2 className="text-2xl sm:text-7xl md:text-8xl lg:text-[10rem] font-[1000] leading-[0.85] tracking-[-0.06em] text-slate-900/5 absolute top-0 left-0 w-full select-none text-center">
                START A <br /> CONVERSATION
              </h2>
              
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-[1000] leading-[0.85] tracking-[-0.06em] text-slate-950 relative">
                <motion.span 
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  START A
                </motion.span>
                <span className="block text-transparent py-1" style={{ WebkitTextStroke: "1.5px rgba(15, 23, 42, 0.2)" }}>
                  CONVERSATION<span className="text-indigo-600">.</span>
                </span>
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT SIDE: INFO */}
            <div className="lg:col-span-5 space-y-6">
              <ContactInfo icon={FaEnvelope} label="Direct_Uplink" value="vishaldeshmukh7972@gmail.com" color="bg-indigo-600" delay={0.1} />
              <ContactInfo icon={FaMapMarkerAlt} label="Base_Station" value="Jalna, MH, India" color="bg-slate-950" delay={0.2} />
              
              <div className="p-8 md:p-12 bg-slate-950 rounded-[3rem] text-white relative overflow-hidden group min-h-[350px] flex flex-col justify-between shadow-3xl">
                <FaCode className="absolute -bottom-16 -right-16 text-[18rem] text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000 ease-out" />
                <h3 className="text-4xl sm:text-5xl font-black relative z-10 leading-none tracking-tighter">Let's build <br/> the next <br/> <span className="text-indigo-500 italic">big thing.</span></h3>
                <div className="flex gap-4 relative z-10">
                  <motion.a href="https://github.com/vishaldeshmukh34" whileHover={{ y: -8, scale: 1.1 }} className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all text-xl shadow-lg"><FaGithub /></motion.a>
                  <motion.a href="https://www.linkedin.com/in/vishal-deshmukh79/" whileHover={{ y: -8, scale: 1.1 }} className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-indigo-500 transition-all text-xl shadow-lg shadow-indigo-500/20"><FaLinkedin /></motion.a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: TERMINAL FORM */}
            <div className="lg:col-span-7 relative">
              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02, filter: "blur(20px)" }}
                    className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-slate-100 h-full flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-12 opacity-30">
                      <FaTerminal size={14} />
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Input_Buffer_Active</span>
                    </div>

                    <form onSubmit={handleSend} className="space-y-10 flex-grow">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Origin_ID</label>
                          <input required type="text" placeholder="NAME" className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-500/20 focus:bg-white rounded-[1.5rem] p-6 text-sm font-bold transition-all outline-none" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Contact_Route</label>
                          <input required type="email" placeholder="EMAIL" className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-500/20 focus:bg-white rounded-[1.5rem] p-6 text-sm font-bold transition-all outline-none" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Message_Payload</label>
                        <textarea required rows="4" placeholder="WHAT'S ON YOUR MIND?" className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-500/20 focus:bg-white rounded-[2rem] p-8 text-sm font-bold transition-all outline-none resize-none"></textarea>
                      </div>

                      <motion.button 
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
                        style={{ x: dx, y: dy }}
                        whileTap={{ scale: 0.96 }}
                        className="relative w-full py-8 bg-slate-950 text-white rounded-[2rem] overflow-hidden group shadow-2xl"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.6em]">
                          Execute Dispatch <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#0a0a0f] rounded-[3rem] p-10 md:p-16 h-full flex flex-col justify-center border border-indigo-500/30 relative overflow-hidden shadow-2xl"
                  >
                    <div className="absolute inset-0 opacity-10 pointer-events-none font-mono text-[10px] text-indigo-500 overflow-hidden leading-tight">
                      {Array(25).fill("01_SUCCESS_INDEX_").map((t, i) => <div key={i}>{t.repeat(12)}</div>)}
                    </div>
                    <div className="relative z-10 text-center space-y-8">
                      <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(79,70,229,0.5)]">
                        <FaCheckCircle size={40} className="text-white" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-white text-4xl font-black uppercase tracking-tighter">Transmission Successful</h3>
                        <p className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.3em]">Payload indexed. Reply within 24 cycles.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ULTRA FOOTER */}
      <footer className="relative z-10 pt-24 pb-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
            
           {/* BRAND SIGNATURE - ELITE LAYERED STYLE */}
<div className="relative group perspective-1000 max-w-fit cursor-default">
  
  {/* The "Ghost" Background Shadow - Moves slightly on hover */}
  <span className="absolute -top-3 -left-3 text-5xl sm:text-7xl font-[1000] tracking-tighter uppercase text-slate-100/50 select-none transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-1">
    VISHAL
  </span>

  <div className="relative z-10 flex flex-col gap-0">
    {/* Upper Name - Gradient Text */}
    <h4 className="text-5xl sm:text-6xl md:text-7xl font-[1000] tracking-[-0.06em] leading-[0.8] uppercase bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 bg-clip-text text-transparent transition-all duration-500 group-hover:tracking-[-0.03em]">
      VISHAL
    </h4>

    {/* Lower Name - Kinetic Reveal Style */}
    <div className="flex items-end gap-3 overflow-hidden">
      <h4 className="text-5xl sm:text-6xl md:text-7xl font-[1000] tracking-[-0.06em] leading-[0.8] uppercase text-transparent transition-all duration-700 group-hover:text-slate-950" 
          style={{ WebkitTextStroke: "1.5px #0f172a" }}>
        DESHMUKH
      </h4>
      
      {/* Pulse Period */}
      <span className="relative flex h-3 w-3 sm:h-4 sm:w-4 mb-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-indigo-600"></span>
      </span>
    </div>
  </div>

  {/* Advanced Metadata - Floating Label Style */}
  <div className="flex items-center gap-4 mt-6">
    <div className="flex items-center justify-center px-3 py-1 bg-slate-950 rounded-full">
       <span className="text-[8px] font-black tracking-[0.2em] uppercase text-white">
        Pro
      </span>
    </div>
    
    <div className="h-[1px] flex-grow min-w-[30px] bg-gradient-to-r from-indigo-600 to-transparent" />

    <div className="flex flex-col">
      <span className="text-[9px] font-black tracking-[0.3em] uppercase text-slate-900">
        Digital Architect
      </span>
      <span className="text-[7px] font-bold tracking-[0.1em] uppercase text-indigo-500/60 -mt-1">
        V5.0 / STABLE REEL
      </span>
    </div>
  </div>

  {/* Background Glass Ornament */}
  <div className="absolute inset-0 bg-indigo-50/0 group-hover:bg-indigo-50/40 blur-2xl transition-all duration-1000 -z-10" />
</div>

            {/* QUICK ACTIONS */}
            <div className="grid grid-cols-2 sm:flex gap-3 w-full lg:w-auto">
              {["LinkedIn", "Github", "Resume", "Twitter"].map((name) => (
                <motion.a
                  key={name}
                  href="#"
                  whileHover={{ scale: 1.05, backgroundColor: "#0f172a", color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-center border border-slate-200 text-slate-500 transition-all"
                >
                  {name}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-40 mb-12" />

          {/* STATUS BAR */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
            <div className="order-2 md:order-1 flex flex-col items-center md:items-start space-y-2">
              <p className="text-[9px] font-black tracking-[0.4em] uppercase text-slate-400">© 2026 — GLOBAL DEPLOYMENT</p>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-slate-900 font-black tracking-tight underline decoration-indigo-500 underline-offset-4">V5.0.0_STABLE</span>
                <span className="text-[10px] font-mono text-slate-300 uppercase">JALNA_IN</span>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="px-6 py-3 bg-slate-950 rounded-full flex items-center gap-4 shadow-xl border border-slate-800">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="text-[9px] font-mono text-emerald-400 tracking-[0.2em] uppercase">Systems_Online</span>
              </div>
            </div>

            <div className="order-3 text-center md:text-right space-y-1">
              <div className="flex items-center justify-center md:justify-end gap-2 text-indigo-600 mb-1">
                <FaSatellite size={10}/>
                <span className="text-[9px] font-black uppercase tracking-[0.4em]">Locate_Node</span>
              </div>
              <div className="font-mono text-[10px] text-slate-400 tracking-tighter">19.8415° N, 75.8833° E</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;