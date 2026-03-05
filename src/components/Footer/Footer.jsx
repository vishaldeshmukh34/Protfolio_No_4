import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaArrowUp, FaGithub, FaLinkedinIn, FaInstagram, 
  FaHeart, FaCodeBranch, FaEnvelope, FaGlobeAsia, FaClock 
} from "react-icons/fa";

// Magnetic Social Icon Component
const SocialLink = ({ icon, label, href }) => (
  <motion.a
    href={href}
    whileHover={{ y: -10, scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="relative group flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    <span className="text-slate-400 group-hover:text-white transition-colors text-xl relative z-10">
      {icon}
    </span>
    <span className="absolute -top-12 scale-0 group-hover:scale-100 transition-all duration-300 bg-white text-black text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-tighter shadow-xl">
      {label}
    </span>
  </motion.a>
);

function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [time, setTime] = useState("");

  // Real-time Clock for Jalna (IST)
  useEffect(() => {
    const updateTime = () => {
      const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' };
      setTime(new Intl.DateTimeFormat('en-IN', options).format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollHeight > 0 ? (currentScroll / scrollHeight) * 100 : 0);
      setShowScroll(currentScroll > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative bg-[#030305] text-white pt-32 pb-10 overflow-hidden font-sans">
      
      {/* 1. AMBIENT BACKGROUND FX */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-purple-900/5 blur-[150px] rotate-12" />
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-[10px] uppercase tracking-[0.6em] mb-8">
                <span className="h-[1px] w-8 bg-indigo-500/50" /> VISHAL DESHMUKH
              </div>
              <h2 className="text-7xl font-black tracking-tighter mb-8 leading-[0.85] uppercase">
                Ready to<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 italic">Elevate?</span>
              </h2>
              <p className="text-slate-400 max-w-sm text-lg font-light leading-relaxed mb-10">
                Crafting high-performance web applications with the <span className="text-white font-medium underline decoration-indigo-500/50 underline-offset-4">MERN Stack</span> and modern UI/UX principles.
              </p>
            </motion.div>

            {/* LIVE SYSTEM DATA */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <FaClock className="text-indigo-400 text-xs" />
                <span className="text-[10px] font-bold font-mono text-slate-300">{time} IST</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold font-mono text-slate-300 uppercase tracking-widest">Available</span>
              </div>
            </div>
          </div>

          {/* LINKS GRID */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-8">Navigation</h4>
              <ul className="space-y-5">
                {["About", "Work", "Services", "Stack"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-all text-sm font-semibold flex items-center group">
                      <span className="h-[1px] w-0 bg-indigo-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-3" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-8">Connect</h4>
              <div className="grid grid-cols-2 gap-3">
                <SocialLink icon={<FaGithub />} label="Git" href="#" />
                <SocialLink icon={<FaLinkedinIn />} label="In" href="#" />
                <SocialLink icon={<FaInstagram />} label="Ig" href="#" />
                <SocialLink icon={<FaEnvelope />} label="Mail" href="#" />
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-8">Office</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Based in Jalna, MH<br />
                Maharashtra, India
              </p>
              <motion.a 
                href="mailto:vishaldeshmukh7972@gmail.com"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] py-3 px-6 bg-white text-black rounded-lg hover:bg-indigo-500 hover:text-white transition-colors shadow-2xl shadow-indigo-500/20"
              >
                Let's Talk <FaArrowUp className="rotate-45" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* 3. FOOTER BOTTOM */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} VISHAL DESHMUKH
            </span>
            <span className="text-slate-600 text-[8px] font-mono uppercase tracking-widest">
              Built with Passion // Designed for Impact
            </span>
          </div>

          <div className="flex items-center gap-8 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2 group cursor-none">
              Build with <FaHeart className="text-rose-500 group-hover:scale-125 transition-transform" /> in India
            </div>
            <div className="hidden sm:block h-4 w-[1px] bg-white/10" />
            <div className="hidden sm:block font-mono text-slate-700">V2.4.0_PROD</div>
          </div>
        </div>
      </div>

      {/* 4. RE-IMAGINED FLOATING SCROLL PROGRESS */}
      <AnimatePresence>
        {showScroll && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 100 }}
            className="fixed bottom-10 right-10 z-[100]"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative w-14 h-24 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 flex flex-col items-center justify-between py-4 group hover:border-indigo-500/50 transition-colors"
            >
              <div className="relative w-1 h-12 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-500 to-purple-500"
                  style={{ height: `${scrollProgress}%` }}
                />
              </div>
              <FaArrowUp className="text-white group-hover:-translate-y-1 transition-transform" />
              <span className="absolute -left-14 top-1/2 -translate-y-1/2 text-[10px] font-mono text-indigo-400 rotate-90 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                BACK TO TOP
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;