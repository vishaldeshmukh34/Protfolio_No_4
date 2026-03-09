import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FaPaperPlane, FaGithub, FaLinkedinIn, FaCompass } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navItems = ["about", "skills", "projects", "mywork", "blog", "contact"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 150;
      navItems.forEach((item) => {
        const el = document.getElementById(item);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActive(item);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. SCROLL PROGRESS LINE */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-indigo-600 origin-left z-[110]" style={{ scaleX }} />

      <nav className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled ? "py-2 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm" : "py-6 bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* 2. KINETIC LOGO */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="group cursor-pointer flex items-center gap-3"
          >
            <div className="relative w-11 h-11 bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden">
               <motion.span 
                 initial={{ y: 0 }}
                 whileHover={{ y: -40 }}
                 className="text-white font-black text-xl absolute"
                >V</motion.span>
               <motion.span 
                 initial={{ y: 40 }}
                 whileHover={{ y: 0 }}
                 className="text-indigo-400 font-black text-xl absolute"
                >V</motion.span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter text-slate-900 leading-none">Vishal</span>
              <span className="text-[9px] font-bold tracking-[0.3em] text-indigo-600 uppercase">Interactive</span>
            </div>
          </motion.div>

          {/* 3. THE SMART PILL (Desktop) */}
          <div className="hidden lg:flex items-center bg-slate-100/50 p-1 rounded-full border border-slate-200/50 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative px-6 py-2 text-[10px] font-black uppercase tracking-[0.15em] transition-colors duration-300 rounded-full
                ${active === item ? "text-white" : "text-slate-500 hover:text-slate-900"}`}
              >
                <span className="relative z-10">{item}</span>
                {active === item && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-slate-900 rounded-full shadow-lg shadow-indigo-200"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* 4. ACTIONS & SOCIAL */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-4">
               <SocialIcon Icon={FaGithub} href="https://github.com/vishaldeshmukh34" />
               <SocialIcon Icon={FaLinkedinIn} href="https://www.linkedin.com/in/vishal-deshmukh79/" />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
              className="bg-slate-900 px-7 py-3 rounded-2xl text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-indigo-600 transition-colors"
            >
              Let's Talk <FaPaperPlane />
            </motion.button>
          </div>

          {/* 5. MOBILE TOGGLE */}
          <button
            className="lg:hidden w-12 h-12 flex items-center justify-center bg-slate-900 text-white rounded-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={24}/> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>

      {/* 6. FULL SCREEN OVERLAY MENU (Dark Theme) */}
<AnimatePresence>
  {menuOpen && (
    <motion.div 
      initial={{ x: '100%', borderRadius: '100px 0 0 100px' }}
      animate={{ x: 0, borderRadius: '0' }}
      exit={{ x: '100%', borderRadius: '100px 0 0 100px' }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
      className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 z-[150] flex flex-col p-8 lg:hidden shadow-2xl"
    >
      {/* 1. Menu Top Bar */}
      <div className="flex justify-between items-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-[1000] text-3xl tracking-tighter text-sky-400"
        >
          V.
        </motion.span>
        
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(false)} 
          className="p-5 bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/20 backdrop-blur-md"
        >
          <HiX size={26}/>
        </motion.button>
      </div>

      {/* 2. Navigation Links */}
      <div className="flex flex-col gap-4">
        <p className="text-[10px] font-black text-sky-500/50 uppercase tracking-[0.5em] mb-4 ml-1">Navigation</p>
        
        {navItems.map((item, i) => (
          <motion.div
            key={item}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              delay: 0.2 + (i * 0.1), 
              type: "spring", 
              stiffness: 100, 
              damping: 20 
            }}
          >
            <button
              onClick={() => scrollToSection(item)}
              className="group relative flex items-center gap-4 text-left"
            >
              <span className="text-[10px] font-black text-sky-300 opacity-0 group-hover:opacity-100 transition-opacity">
                /0{i+1}
              </span>

              {/* TEXT WRAPPER WITH BLACK LINE */}
              <div className="relative">
                {/* THE BLACK LINE (Small anchor line with radius) */}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-[4px] bg-slate-950 rounded-full -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                />
                
                <span className="text-4xl font-[1000] uppercase tracking-tighter text-sky-400 group-hover:text-white transition-all duration-300 group-hover:pl-2">
                  {item}
                </span>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* 3. Bottom Quick Contact */}
      <div className="mt-auto border-t border-sky-500/10 pt-10 flex justify-between items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-[10px] font-black text-sky-500/50 uppercase tracking-widest mb-1">Located In</p>
          <p className="text-sky-100 font-black text-xl">Maharashtra, India</p>
        </motion.div>

        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="w-16 h-16 bg-sky-500/5 border border-sky-500/10 rounded-full flex items-center justify-center"
        >
          <FaCompass className="text-sky-400" size={32} />
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-sky-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-[20%] left-[-10%] w-40 h-40 bg-blue-600/10 rounded-full blur-3xl -z-10" />
    </motion.div>
  )}
</AnimatePresence>
      </nav>
    </>
  );
}

function SocialIcon({ Icon, href }) {
  return (
    <motion.a 
      href={href}
      whileHover={{ y: -4, scale: 1.1 }}
      className="w-10 h-10 border border-slate-200 rounded-xl flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-colors"
    >
      <Icon size={16}/>
    </motion.a>
  );
}

export default Navbar;