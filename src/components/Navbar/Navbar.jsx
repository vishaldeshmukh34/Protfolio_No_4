import { useState, useEffect } from "react";
import { FaPaperPlane, FaGithub, FaLinkedinIn, FaCompass } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navItems = ["about", "skills", "projects", "mywork", "blog", "contact"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      // Advanced Intersection Logic
      const scrollPos = window.scrollY + 120;
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
      window.scrollTo({ top: target.offsetTop - 100, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled ? "py-4" : "py-10"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* 1. KINETIC LOGO: Morphing Square */}
          <div 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="group cursor-pointer flex items-center gap-3"
          >
            <div className="relative w-10 h-10 bg-slate-900 rounded-[12px] flex items-center justify-center transition-all duration-500 group-hover:rotate-[90deg] group-hover:bg-indigo-600 group-hover:rounded-full">
               <span className="text-white font-black text-xl group-hover:-rotate-90 transition-transform duration-500">V</span>
               <div className="absolute inset-0 border border-white/20 rounded-inherit animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter text-slate-900 leading-none">VISHAL</span>
              <span className="text-[9px] font-bold tracking-[0.3em] text-indigo-600 uppercase">Engineer</span>
            </div>
          </div>

          {/* 2. THE FLOATING ISLAND (Desktop) */}
          <div className={`hidden lg:flex items-center p-1.5 rounded-full border transition-all duration-700 ${
            isScrolled 
              ? "bg-white/40 backdrop-blur-2xl border-white/40 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] scale-110 translate-y-2" 
              : "bg-transparent border-transparent"
          }`}>
            <div className="flex items-center relative">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 rounded-full z-10
                  ${active === item ? "text-white" : "text-slate-500 hover:text-slate-900"}`}
                >
                  {item}
                  {active === item && (
                    <div className="absolute inset-0 bg-slate-900 rounded-full -z-10 shadow-xl shadow-slate-300 animate-in fade-in zoom-in duration-500"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 3. NEON CTA & CONNECT */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex -space-x-2">
               <a href="#" className="w-9 h-9 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:z-10 transition-all hover:-translate-y-1"><FaGithub size={14}/></a>
               <a href="#" className="w-9 h-9 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:z-10 transition-all hover:-translate-y-1"><FaLinkedinIn size={14}/></a>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="relative overflow-hidden group px-8 py-3 bg-slate-900 rounded-[14px] text-white text-[10px] font-black uppercase tracking-widest transition-all hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">Let's Talk <FaPaperPlane className="group-hover:translate-x-1 transition-transform"/></span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* 4. ADVANCED MENU TOGGLE */}
          <button
            className="lg:hidden w-12 h-12 flex items-center justify-center bg-slate-900 text-white rounded-2xl shadow-xl active:scale-90 transition-transform overflow-hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`transition-all duration-500 ${menuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
              <HiOutlineMenuAlt3 size={24} />
            </div>
            <div className={`absolute transition-all duration-500 ${menuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
              <HiX size={24} />
            </div>
          </button>
        </div>

        {/* 5. CINEMATIC CURTAIN MENU (Mobile) */}
        <div className={`fixed inset-0 z-[-1] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}>
           {/* Two-Pane Sliding Background */}
           <div className={`absolute inset-0 bg-slate-900 transition-transform duration-700 delay-100 ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}></div>
           
           <div className="relative h-full flex flex-col items-center justify-center px-10">
              <div className="flex flex-col gap-2 w-full">
                {navItems.map((item, i) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    style={{ transitionDelay: `${300 + i * 50}ms` }}
                    className={`text-left text-6xl font-black uppercase tracking-tighter transition-all duration-700 group
                    ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}
                    ${active === item ? "text-indigo-500 italic" : "text-white/10 hover:text-white"}
                    `}
                  >
                    <span className="inline-block group-hover:translate-x-4 transition-transform">{item}</span>
                  </button>
                ))}
              </div>

              {/* Mobile Footer Info */}
              <div className={`absolute bottom-12 left-10 right-10 flex justify-between items-end border-t border-white/10 pt-8 transition-all duration-1000 delay-700 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div>
                  <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-2">Location</p>
                  <p className="text-white font-bold text-sm">Jalna, Maharashtra, IN</p>
                </div>
                <FaCompass className="text-white/20 animate-spin-slow" size={40} />
              </div>
           </div>
        </div>
      </nav>

      {/* Global Smoothness Styles */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        body { scroll-behavior: smooth; }
      `}</style>
    </>
  );
}

export default Navbar;