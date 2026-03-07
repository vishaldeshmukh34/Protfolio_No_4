import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FaPaperPlane, FaGithub, FaLinkedinIn, FaCompass } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navItems = ["about", "skills", "projects", "mywork", "blog", "contact"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Scroll Progress Bar Logic
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
      {/* SCROLL PROGRESS LINE */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-indigo-600 origin-left z-[250]" 
        style={{ scaleX }} 
      />

      <nav className={`fixed w-full z-[200] transition-all duration-500 ${
        menuOpen 
          ? "py-6 bg-transparent" // Keep transparent when menu is open to avoid background overlap
          : isScrolled 
            ? "py-2 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm" 
            : "py-6 bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* 2. KINETIC LOGO */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            onClick={() => { setMenuOpen(false); window.scrollTo({top: 0, behavior: 'smooth'}); }}
            className="group cursor-pointer flex items-center gap-3 relative z-[210]"
          >
            <div className="relative w-11 h-11 bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
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

          {/* 4. ACTIONS & SOCIAL (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-4">
               <SocialIcon Icon={FaGithub} href="https://github.com/vishaldeshmukh34" />
               <SocialIcon Icon={FaLinkedinIn} href="https://www.linkedin.com/in/vishal-deshmukh79/" />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
              className="bg-slate-900 px-7 py-3 rounded-2xl text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-indigo-600 transition-colors shadow-md"
            >
              Let's Talk <FaPaperPlane />
            </motion.button>
          </div>

          {/* 5. MOBILE TOGGLE - Color Dynamic based on menuOpen */}
          <button
            className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 z-[210] ${
              menuOpen ? "bg-slate-100 text-slate-900" : "bg-slate-900 text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={24}/> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>

        {/* 6. FULL SCREEN OVERLAY MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white z-[150] flex flex-col p-10 lg:hidden"
            >
              {/* Vertical spacing for fixed logo/toggle area */}
              <div className="h-20" />

              <div className="flex flex-col gap-6 overflow-y-auto">
                {navItems.map((item, i) => (
                  <motion.button
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left text-5xl font-[1000] uppercase tracking-tighter text-slate-900 hover:text-indigo-600 transition-colors"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto border-t border-slate-100 pt-10 flex justify-between items-end">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Based in</p>
                  <p className="text-slate-900 font-bold">Maharashtra, India</p>
                </div>
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                >
                  <FaCompass className="text-indigo-600" size={32} />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

// Helper component for Magnetic-style icons
function SocialIcon({ Icon, href }) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.1 }}
      className="w-10 h-10 border border-slate-200 rounded-xl flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-colors bg-white/50 backdrop-blur-sm"
    >
      <Icon size={16}/>
    </motion.a>
  );
}

export default Navbar;