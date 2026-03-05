import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { 
  FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, 
  FaMapMarkerAlt, FaTerminal, FaCopy, FaCheckCircle, FaGlobe, FaTwitter
} from "react-icons/fa";

// Responsive Info Card
const ContactInfo = ({ icon: Icon, label, value, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="group flex items-center gap-4 md:gap-6 p-5 md:p-8 bg-white/80 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/20 transition-all cursor-pointer overflow-hidden"
  >
    <div className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl ${color} flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
      <Icon size={20} className="md:text-[24px]" />
    </div>
    <div className="min-w-0">
      <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-400 mb-0.5 md:mb-1 truncate">{label}</p>
      <p className="text-sm md:text-base font-[1000] text-slate-900 tracking-tight truncate">{value}</p>
    </div>
  </motion.div>
);

function Contact() {
  const [copied, setCopied] = useState(false);
  
  // Magnetic Button Effect Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 15 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    // Only apply magnetic effect on desktop
    if (window.innerWidth < 1024) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - (left + width / 2));
    mouseY.set(clientY - (top + height / 2));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("vishaldeshmukh.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 lg:py-48 px-4 md:px-8 bg-[#f8f9ff] overflow-hidden">
      
      {/* 1. ADAPTIVE BACKGROUND ORBS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-200/30 rounded-full blur-[80px] md:blur-[150px]" />
        <div className="absolute bottom-1/4 -right-20 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-purple-200/30 rounded-full blur-[80px] md:blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 2. RESPONSIVE TITAN HEADER */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-32 px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 rounded-full bg-slate-900 text-white font-bold text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] mb-6 md:mb-10 shadow-xl"
          >
            <FaTerminal className="text-indigo-400" /> System.Initialize(Communication)
          </motion.div>
          <h2 className="text-[clamp(2.5rem,12vw,7rem)] font-[1000] text-slate-950 tracking-[-0.05em] leading-[0.9] md:leading-[0.85] mb-6">
            LETS <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">SYNC.</span>
          </h2>
          <p className="text-slate-400 font-bold text-xs md:text-lg max-w-xl uppercase tracking-[0.15em] md:tracking-widest leading-relaxed">
            Available for worldwide collaborations <br className="hidden md:block"/> from Pune, Maharashtra.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-12">
          
          {/* LEFT: INFO HUB */}
          <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6 order-2 lg:order-1">
            <ContactInfo 
              icon={FaEnvelope} 
              label="Secure Protocol" 
              value="vishaldeshmukh7972@gmail.com" 
              color="bg-indigo-600"
              delay={0.1}
            />
            <ContactInfo 
              icon={FaMapMarkerAlt} 
              label="Geographical Node" 
              value="Pune, Maharashtra, IN" 
              color="bg-slate-900"
              delay={0.2}
            />

            {/* Interactive Social Card - Optimized for Mobile */}
            <div className="mt-2 md:mt-4 p-8 md:p-12 bg-slate-950 rounded-[2.5rem] md:rounded-[4rem] text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700" />
              <FaGlobe className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 text-[10rem] md:text-[15rem] text-white/5 rotate-12 lg:group-hover:rotate-45 transition-transform duration-1000" />
              
              <h3 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 relative z-10 tracking-tighter leading-tight">Ready for the <br className="hidden md:block"/> Next Sprint?</h3>
              
              <div className="flex flex-wrap gap-3 md:gap-4 relative z-10">
                <motion.a href="#" whileTap={{ scale: 0.9 }} className="w-12 h-12 md:w-16 md:h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all">
                  <FaGithub size={20} />
                </motion.a>
                <motion.a href="#" whileTap={{ scale: 0.9 }} className="w-12 h-12 md:w-16 md:h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all">
                  <FaLinkedin size={20} />
                </motion.a>
                <button 
                  onClick={copyEmail}
                  className="px-4 md:px-8 h-12 md:h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-3 text-[8px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all"
                >
                  {copied ? <FaCheckCircle className="text-emerald-400" /> : <FaCopy />}
                  {copied ? "Copied" : "Copy Mail"}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: THE FORM TERMINAL */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-[2.5rem] md:rounded-[4.5rem] p-8 md:p-16 border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] order-1 lg:order-2"
          >
            <form className="space-y-6 md:space-y-10">
              <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                <div className="group space-y-2 md:space-y-3">
                  <label className="text-[9px] md:text-[10px] font-[900] uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-400 ml-2 group-focus-within:text-indigo-600 transition-colors">Identification</label>
                  <input 
                    type="text" 
                    placeholder="NAME"
                    className="w-full bg-slate-50 border-none rounded-2xl md:rounded-[1.5rem] p-5 md:p-6 text-sm font-bold placeholder:text-slate-300 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all outline-none"
                  />
                </div>
                <div className="group space-y-2 md:space-y-3">
                  <label className="text-[9px] md:text-[10px] font-[900] uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-400 ml-2 group-focus-within:text-indigo-600 transition-colors">Email Route</label>
                  <input 
                    type="email" 
                    placeholder="EMAIL"
                    className="w-full bg-slate-50 border-none rounded-2xl md:rounded-[1.5rem] p-5 md:p-6 text-sm font-bold placeholder:text-slate-300 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>

              <div className="group space-y-2 md:space-y-3">
                <label className="text-[9px] md:text-[10px] font-[900] uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-400 ml-2 group-focus-within:text-indigo-600 transition-colors">Project Brief</label>
                <textarea 
                  rows="4"
                  placeholder="WHAT ARE WE BUILDING?"
                  className="w-full bg-slate-50 border-none rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-8 text-sm font-bold placeholder:text-slate-300 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all resize-none outline-none"
                ></textarea>
              </div>

              <motion.button 
                onMouseMove={handleMouseMove}
                onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
                style={{ x: dx, y: dy }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full py-6 md:py-8 bg-slate-950 text-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-indigo-100"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 md:gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em]">
                  Dispatch Message <FaPaperPlane className="lg:group-hover:translate-x-2 lg:group-hover:-translate-y-2 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* 3. ENGINEERED FOOTER SECTION - RESPONSIVE STACKING */}
        <div className="mt-24 md:mt-48 pt-10 md:pt-16 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-[1000] text-slate-900 uppercase tracking-[0.3em]">Vishal Deshmukh</span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">Software Engineer & Java Full Stack Specialist</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-4">
            {['Github', 'LinkedIn', 'Twitter', 'Resume'].map((link) => (
              <a key={link} href="#" className="relative text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-indigo-600 transition-colors group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-indigo-600 transition-all lg:group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="text-[9px] font-bold text-slate-300 uppercase tracking-widest font-mono">
            V3.4.0-STABLE // {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;