import React, { useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { 
  FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, 
  FaMapMarkerAlt, FaTerminal, FaCopy, FaCheckCircle, FaGlobe, FaCode, FaSatellite
} from "react-icons/fa";

const ContactInfo = ({ icon: Icon, label, value, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="group flex items-center gap-4 p-6 bg-white/40 backdrop-blur-md rounded-[2rem] border border-white/50 shadow-xl shadow-indigo-500/5 hover:bg-white transition-all cursor-pointer relative overflow-hidden"
  >
    <div className={`shrink-0 w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-white shadow-lg group-hover:rotate-[10deg] transition-transform`}>
      <Icon size={20} />
    </div>
    <div className="min-w-0">
      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1">{label}</p>
      <p className="text-sm md:text-base font-black text-slate-900 truncate">{value}</p>
    </div>
  </motion.div>
);

function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);

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
    // Simulate a reset after 8 seconds
    setTimeout(() => setIsSent(false), 8000);
  };

  return (
    <div className="bg-[#fcfcff] selection:bg-indigo-500 selection:text-white">
      <section id="contact" className="relative py-24 lg:py-44 px-4 overflow-hidden">
        {/* AMBIENT BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-purple-100/50 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              className="px-5 py-1.5 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.4em] mb-6 shadow-xl flex items-center gap-3"
            >
              <FaSatellite className="text-indigo-400 animate-pulse" /> Uplink_Ready
            </motion.span>
           <h2 className="
  /* Fluid font size: Min 2.5rem, Scales with viewport, Max 7rem */
  text-[clamp(2.5rem,10vw,7rem)] 
  font-[1000] 
  text-slate-950 
  tracking-[-0.04em] 
  /* Tighter leading for desktop, slightly looser for mobile to prevent overlap */
  leading-[0.9] md:leading-[0.85] 
  mb-6 
  uppercase 
  /* Break words only on very small screens if necessary */
  break-words
">
  Start a <br/> 
  <span className="italic text-indigo-600 inline-block">
    Conversation.
  </span>
</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            {/* LEFT SIDE */}
            <div className="lg:col-span-5 space-y-6">
              <ContactInfo icon={FaEnvelope} label="Direct_Uplink" value="vishaldeshmukh7972@gmail.com" color="bg-indigo-600" delay={0.1} />
              <ContactInfo icon={FaMapMarkerAlt} label="Base_Station" value="Jalna, MH, India" color="bg-slate-900" delay={0.2} />
              
              <div className="p-10 bg-slate-950 rounded-[3rem] text-white relative overflow-hidden group min-h-[300px] flex flex-col justify-between">
                <FaCode className="absolute -bottom-10 -right-10 text-[15rem] text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                <h3 className="text-3xl font-black relative z-10">Let's build the <br/> next big thing.</h3>
                <div className="flex gap-4 relative z-10">
                  <motion.a href="#" whileHover={{ y: -5 }} className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all text-xl"><FaGithub /></motion.a>
                  <motion.a href="#" whileHover={{ y: -5 }} className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-indigo-500 transition-all text-xl"><FaLinkedin /></motion.a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: THE TERMINAL FORM */}
            <div className="lg:col-span-7 relative">
              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    className="bg-white rounded-[3rem] p-8 md:p-14 shadow-2xl border border-slate-100 h-full"
                  >
                    <div className="flex items-center gap-3 mb-12 opacity-30">
                      <FaTerminal size={14} />
                      <span className="font-mono text-[10px] uppercase tracking-widest">Input_Buffer_Active</span>
                    </div>

                    <form onSubmit={handleSend} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Origin_ID</label>
                          <input required type="text" placeholder="NAME" className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-500/20 focus:bg-white rounded-2xl p-6 text-sm font-bold transition-all outline-none" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Contact_Route</label>
                          <input required type="email" placeholder="EMAIL" className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-500/20 focus:bg-white rounded-2xl p-6 text-sm font-bold transition-all outline-none" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Message_Payload</label>
                        <textarea required rows="4" placeholder="WHAT'S ON YOUR MIND?" className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-500/20 focus:bg-white rounded-[2rem] p-8 text-sm font-bold transition-all outline-none resize-none"></textarea>
                      </div>

                      <motion.button 
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
                        style={{ x: dx, y: dy }}
                        whileTap={{ scale: 0.96 }}
                        className="relative w-full py-8 bg-slate-950 text-white rounded-[2rem] overflow-hidden group shadow-2xl"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.5em]">
                          Execute Dispatch <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#0a0a0f] rounded-[3rem] p-10 md:p-16 h-full flex flex-col justify-center border border-indigo-500/30 relative overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.2)]"
                  >
                    {/* MATRIX RAIN EFFECT (Simplified) */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none font-mono text-[10px] text-indigo-500 overflow-hidden leading-tight">
                      {Array(20).fill("010110_DISPATCH_SUCCESS_").map((t, i) => <div key={i}>{t.repeat(10)}</div>)}
                    </div>

                    <div className="relative z-10 text-center space-y-8">
                      <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                        <FaCheckCircle size={40} className="text-white" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-white text-3xl font-black uppercase tracking-tighter">Transmission Successful</h3>
                        <p className="text-indigo-300/60 font-mono text-xs uppercase tracking-widest">Your data has been indexed. <br/> Response expected within 24 cycles.</p>
                      </div>
                      <div className="pt-8 flex justify-center">
                        <div className="px-6 py-2 rounded-full border border-indigo-500/30 text-indigo-400 font-mono text-[10px] animate-pulse">
                          TERMINAL_ID: {Math.random().toString(36).substring(7).toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

<footer className="relative z-10 pt-16 pb-8 bg-white overflow-hidden border-t border-slate-100">
      
      {/* BACKGROUND BLOBS - Subtle movement */}
      <motion.div 
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 right-0 w-[40vw] h-[40vw] bg-indigo-50/50 blur-[100px] rounded-full -z-10"
      />
      <motion.div 
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-purple-50/50 blur-[100px] rounded-full -z-10"
      />

      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* TOP SECTION: Streamlined for height */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16">
          
          {/* BRANDING */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <h4 className="text-[clamp(2rem,6vw,3.5rem)] font-[1000] tracking-tighter leading-[0.9] uppercase italic text-slate-900">
              VISHAL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 not-italic">
                DESHMUKH.
              </span>
            </h4>
            
            <div className="flex items-center gap-3 mt-4">
              <div className="h-[2px] w-8 bg-indigo-600 group-hover:w-16 transition-all duration-500"/>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">
                Digital Architect
              </span>
            </div>
          </motion.div>

          {/* ACTION BUTTONS: Compact Grid on Mobile */}
          <div className="grid grid-cols-2 sm:flex flex-wrap gap-3 w-full lg:w-auto">
            {[
              { name: "Twitter", link: "#" },
              { name: "LinkedIn", link: "https://www.linkedin.com/in/vishal-deshmukh79/" },
              { name: "Github", link: "https://github.com/vishaldeshmukh34" },
              { name: "Resume", link: "https://github.com/vishaldeshmukh34" },
            ].map((item, idx) => (
              <motion.a
                key={item.name}
                href={item.link}
                whileHover={{ y: -4, backgroundColor: "rgb(15, 23, 42)", color: "#fff" }}
                whileTap={{ scale: 0.98 }}
                className={`px-5 py-3 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] text-center transition-all duration-300 border
                  ${item.link === "special" 
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200" 
                    : "bg-white border-slate-200 text-slate-500"}
                `}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>

        {/* THIN GRADIENT DIVIDER */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-60 mb-10" />

        {/* BOTTOM BAR: Ultra-compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          
          {/* COPYRIGHT & VERSION */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start">
             <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400">
              © {new Date().getFullYear()} — STABLE RELEASE
            </p>
            <div className="flex items-center gap-2 mt-1">
               <span className="text-[10px] font-mono text-slate-900 font-bold tracking-tighter">V5.0.0_STABLE</span>
               <span className="w-1 h-1 rounded-full bg-slate-300"/>
               <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Node_Jalna_IN</span>
            </div>
          </div>

          {/* STATUS BADGE: Centered Glass Pill */}
          <div className="order-1 md:order-2 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="px-5 py-2.5 bg-slate-900 border border-slate-800 rounded-full flex items-center gap-3 shadow-2xl"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 tracking-[0.1em] uppercase">
                Systems Online // Worldwide
              </span>
            </motion.div>
          </div>

          {/* LOCATION & COORDS */}
          <div className="order-3 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-2 text-indigo-500 mb-1 group cursor-crosshair">
              <FaSatellite size={10} className="group-hover:rotate-45 transition-transform duration-500"/>
              <span className="text-[9px] font-black uppercase tracking-widest">Locate_Node</span>
            </div>
            <div className="font-mono text-[10px] text-slate-400 tracking-tighter">
              19.8415° N, 75.8833° E
            </div>
          </div>

        </div>
      </div>
    </footer>
    </div>
  );
}

export default Contact;