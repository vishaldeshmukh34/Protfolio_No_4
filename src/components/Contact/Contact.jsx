import React, { useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { 
  FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, 
  FaMapMarkerAlt, FaTerminal, FaCheckCircle, FaCode, FaSatellite
} from "react-icons/fa";

// --- Cinematic Noise Component ---
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

// --- Individual Contact Info Card ---
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Magnetic Button/Grid Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const dx = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const dy = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    mouseX.set(clientX - (left + width / 2));
    mouseY.set(clientY - (top + height / 2));
    setMousePos({ x: clientX - left, y: clientY - top });
  };

  const handleSend = (e) => {
    e.preventDefault();
    setIsSent(true);
    // Success state lasts 8 seconds then resets
    setTimeout(() => setIsSent(false), 8000);
  };

  return (
    <div className="relative bg-[#fcfcff] selection:bg-indigo-600 selection:text-white overflow-x-hidden font-sans">
      <GrainOverlay />
      
      <section id="contact" className="relative py-20 lg:py-40 px-4">
        {/* AMBIENT BACKGROUND BLURS */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* HEADER SECTION */}
          <div className="flex flex-col items-center text-center mb-20 md:mb-32 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 px-4 py-2 bg-white/50 backdrop-blur-md border border-white rounded-full text-indigo-600 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.5em] shadow-sm"
            >
              <FaSatellite className="animate-pulse" /> Uplink_Channel.v5
            </motion.div>

            <div className="relative group cursor-default px-2">
              <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-[10rem] font-[1000] leading-[0.85] tracking-[-0.06em] text-slate-900/5 absolute top-0 left-0 w-full select-none text-center">
                START A <br /> CONVERSATION
              </h2>
              
              <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-[10rem] font-[1000] leading-[0.85] tracking-[-0.06em] text-slate-950 relative">
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
            {/* LEFT SIDE: CONTACT CARDS & INTERACTIVE CTA */}
            <div className="lg:col-span-5 space-y-4 px-2 md:px-0">
              <ContactInfo 
                icon={FaEnvelope} 
                label="DIRECT_UPLINK" 
                value="vishaldeshmukh7972@gmail.com" 
                color="bg-indigo-600" 
                delay={0.1} 
              />
              <ContactInfo 
                icon={FaMapMarkerAlt} 
                label="BASE_STATION" 
                value="Jalna, MH, India" 
                color="bg-slate-900" 
                delay={0.2} 
              />
              
              <div 
                onMouseMove={handleMouseMove}
                className="p-6 md:p-10 bg-[#030305] rounded-[2rem] md:rounded-[3rem] text-white relative overflow-hidden group min-h-[400px] flex flex-col justify-between border border-white/[0.03] shadow-2xl transition-all duration-500 hover:border-indigo-500/20"
              >
                {/* Magnetic Dot Grid */}
                <motion.div 
                  className="absolute inset-0 z-0 opacity-15 group-hover:opacity-30 transition-opacity duration-1000"
                  style={{ 
                    backgroundImage: `radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)`, 
                    backgroundSize: '24px 24px',
                    x: (mousePos.x - 300) / 30,
                    y: (mousePos.y - 200) / 30,
                  }}
                />

                <div 
                  className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99,102,241,0.12), transparent 40%)`
                  }}
                />
                
                <FaCode className="absolute -bottom-10 -right-10 text-[12rem] md:text-[18rem] text-indigo-500/[0.02] -rotate-6 group-hover:rotate-0 transition-all duration-1000 z-0" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-[1px] w-8 bg-indigo-500/50" />
                    <span className="text-[9px] font-mono tracking-[0.5em] text-indigo-400/70 uppercase">Init_Handshake</span>
                  </div>

                  <h3 className="flex flex-col text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.9] tracking-[-0.07em] uppercase">
                    <motion.span 
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      className="italic text-white/90"
                    >
                      Let's build
                    </motion.span> 
                    <span className="text-white/20 text-[0.6em] tracking-[0.1em] font-light my-1 group-hover:text-white/40 transition-colors uppercase">
                      // THE NEXT
                    </span> 
                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-400 to-indigo-600 font-[1000] not-italic">
                      BIG THING
                      <motion.span 
                        animate={{ left: ['-100%', '200%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 bottom-0 w-1/2 bg-white/10 blur-xl -skew-x-12 pointer-events-none"
                      />
                    </span>
                  </h3>
                </div>

                <div className="relative z-10 flex items-end justify-between gap-4">
                  <div className="flex gap-3">
                    <motion.a href="https://github.com/vishaldeshmukh34" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, scale: 1.05 }} className="w-12 h-12 bg-white/[0.03] rounded-2xl flex items-center justify-center border border-white/10 hover:border-white/30 transition-all text-lg group/icon">
                      <FaGithub className="group-hover/icon:text-white transition-colors" />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/vishal-deshmukh79/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, scale: 1.05 }} className="w-12 h-12 bg-white/[0.03] rounded-2xl flex items-center justify-center border border-white/10 hover:border-indigo-500/50 transition-all text-lg group/icon">
                      <FaLinkedin className="group-hover/icon:text-indigo-400 transition-colors" />
                    </motion.a>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.02] rounded-full border border-white/[0.05]">
                      <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-1 bg-indigo-500 rounded-full" />
                      <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Uplink_Encrypted</span>
                    </div>
                    <span className="text-[7px] font-mono text-zinc-700 tracking-[0.2em] mr-2 uppercase">VISHAL_PRO_V5.1.4</span>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
              </div>
            </div>

            {/* RIGHT SIDE: TERMINAL-STYLE FORM */}
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

                      <button 
                        type="submit"
                        className="relative w-full py-8 bg-slate-950 text-white rounded-[2rem] shadow-xl hover:bg-indigo-600 active:scale-[0.98] transition-all duration-300 group overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.6em]">
                          Execute Dispatch 
                          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </span>
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#0a0a0f] rounded-[3rem] p-10 md:p-16 h-full flex flex-col justify-center border border-indigo-500/30 relative overflow-hidden shadow-2xl"
                  >
                    {/* Background Matrix Rain (Static) */}
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
     {/* ULTRA FOOTER V5.5 - QUANTUM MINIMALIST EDITION */}
<footer className="relative z-10 pt-32 pb-16 bg-[#fafafa] border-t border-slate-200/60 overflow-hidden">
  {/* Subliminal Grid Background */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16 mb-24">
      
      {/* --- VISHAL DESHMUKH: KINETIC INTERFACE --- */}
      <motion.div 
        initial="initial"
        whileHover="hover"
        className="relative group cursor-none"
      >
        <div className="flex flex-col leading-[0.9]">
          {/* First Name with Staggered Letters */}
          <div className="flex overflow-hidden py-2">
            {"VISHAL".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  initial: { y: 0 },
                  hover: { y: -5, color: "#4f46e5", transition: { delay: i * 0.03 } }
                }}
                className="text-5xl sm:text-6xl md:text-7xl font-[1000] tracking-tighter uppercase text-slate-900 inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Last Name with Outline & Tracking Morph */}
          <motion.div 
            variants={{
              initial: { letterSpacing: "-0.05em" },
              hover: { letterSpacing: "0.05em", transition: { duration: 0.8, ease: "circOut" } }
            }}
            className="relative flex items-center gap-4"
          >
            <h4 className="text-5xl sm:text-6xl md:text-7xl font-[1000] uppercase text-transparent transition-all duration-700 group-hover:text-slate-900" 
                style={{ WebkitTextStroke: "1px #0f172a" }}>
              DESHMUKH
            </h4>
            
            {/* Minimalist Status Bar */}
            <div className="h-1 w-12 bg-slate-900 rounded-full mt-4 overflow-hidden">
              <motion.div 
                animate={{ x: [-48, 48] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="h-full w-full bg-indigo-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Dynamic Badge Row */}
        <div className="flex items-center gap-3 mt-6">
          <div className="px-2 py-0.5 border border-slate-900 rounded flex items-center gap-2">
            <div className="w-1 h-1 bg-slate-900 rounded-full animate-pulse" />
            <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-slate-900">Developer_Core</span>
          </div>
          <span className="text-[9px] font-medium tracking-[0.3em] uppercase text-slate-400">/</span>
          <span className="text-[9px] font-black tracking-[0.4em] uppercase text-indigo-600/70">Frontend_Architect</span>
        </div>
      </motion.div>

      {/* --- HYPER-MINIMAL NAV --- */}
      <div className="grid grid-cols-2 gap-2 w-full lg:w-auto">
        {["LinkedIn", "Github", "Resume", "Twitter"].map((name) => (
          <motion.a 
            key={name} 
            href="#" 
            whileHover={{ y: -2, backgroundColor: "#000", color: "#fff" }} 
            className="px-6 py-3 border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-500 rounded-sm transition-all flex items-center justify-between group/link"
          >
            {name}
            <span className="opacity-0 group-hover/link:opacity-100 transition-opacity ml-2">→</span>
          </motion.a>
        ))}
      </div>
    </div>

    {/* Metadata Floor */}
    <div className="pt-12 border-t border-slate-200/60 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
      
      <div className="flex flex-col gap-1">
        <span className="text-[8px] font-black text-slate-400 tracking-[0.5em] uppercase text-center md:text-left">Terminal_Output</span>
        <div className="font-mono text-[10px] text-slate-800 flex items-center gap-2 justify-center md:justify-start">
          <span className="text-emerald-500">●</span> 
          <span>System.Ready(v5.5.0)</span>
          <span className="text-slate-300">//</span>
          <span className="hover:text-indigo-600 transition-colors cursor-pointer">Jalna_IN</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4">
         <div className="text-[10px] font-black tracking-[1em] uppercase text-slate-300 ml-[1em]">Scroll</div>
         <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-indigo-500 to-transparent" 
         />
      </div>

      <div className="flex flex-col items-center md:items-end gap-2">
        <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400">
           <span>LOC: 19.8415 N</span>
           <span>75.8833 E</span>
        </div>
        <p className="text-[9px] font-black tracking-[0.3em] uppercase text-slate-900 opacity-40">
          © 2026 — Vishal Deshmukh
        </p>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}

export default Contact;