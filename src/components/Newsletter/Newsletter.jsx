import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal, FaPaperPlane, FaCheckCircle, FaDatabase, FaShieldAlt } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "root@vishal:~/subscribe --email";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i) + (i % 2 === 0 ? "_" : " "));
      i++;
      if (i > fullText.length) i = 0;
    }, 120);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
    }, 2000);
  };

  return (
    <section className="py-24 bg-[#050505] overflow-hidden relative">
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto relative group"
        >
          {/* ANIMATED BORDER GLOW */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 animate-gradient-x" />

          <div className="relative bg-slate-950 rounded-[2.5rem] p-8 md:p-16 border border-white/10 overflow-hidden shadow-2xl">
            
            {/* TERMINAL HEADER */}
            <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
              </div>
              <div className="flex items-center gap-2 text-slate-500 font-mono text-[9px] tracking-[0.3em] uppercase">
                <FaShieldAlt className="text-indigo-500" /> System_v5.0_Auth_Success
              </div>
            </div>

            <div className="grid lg:grid-cols-5 gap-16 items-center">
              
              {/* LEFT COLUMN: ELITE HEADING (Spans 3 columns) */}
              <div className="lg:col-span-3">
                <div className="relative mb-8 group/title">
                  {/* BACKGROUND GHOST TEXT */}
                  <span className="absolute -top-6 -left-2 text-7xl md:text-9xl font-[1000] text-white/[0.03] uppercase tracking-tighter select-none pointer-events-none group-hover/title:-translate-y-2 transition-transform duration-700">
                    UPGRADE
                  </span>

                  <h2 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-[1000] text-white tracking-[-0.04em] leading-[0.85] uppercase">
                    LEVEL UP <br />
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-indigo-400 via-white to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                        YOUR STACK
                      </span>
                      <span className="absolute inset-0 bg-indigo-500/20 blur-2xl opacity-0 group-hover/title:opacity-100 transition-opacity duration-500" />
                      <motion.span 
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="text-indigo-600 ml-1"
                      >
                        _
                      </motion.span>
                    </span>
                  </h2>

                  {/* HARVESTER LINE */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className="h-[2px] w-12 bg-indigo-600 rounded-full" />
                    <div className="h-[2px] w-2 bg-slate-800 rounded-full" />
                    <div className="h-[2px] w-2 bg-slate-800 rounded-full" />
                  </div>
                </div>

                <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-md">
                  Deploy architectural blueprints and deep-level source code insights directly to your local environment.
                  <span className="text-indigo-400/80 block mt-3 font-mono text-xs"> 
                    &gt; [INFO] No spam. Only pure technical logic.
                  </span>
                </p>
              </div>

              {/* RIGHT COLUMN: FORM OR JSON SUCCESS RESPONSE */}
<div className="lg:col-span-2 relative min-h-[300px] flex flex-col justify-center">
  <AnimatePresence mode="wait">
    {!isSuccess ? (
      <motion.form
        key="form"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div className="relative group/input">
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within/input:text-indigo-500 transition-colors">
            <FaTerminal size={14} />
          </div>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={displayText}
            className="w-full bg-black/40 border border-white/5 rounded-2xl py-6 pl-14 pr-6 text-white font-mono text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all placeholder:text-slate-800 shadow-inner"
          />
        </div>

        <button
          disabled={isSubmitting}
          className="w-full relative group/btn overflow-hidden h-16 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] disabled:bg-slate-900 disabled:text-slate-700"
        >
          <div className="absolute inset-0 bg-indigo-600 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10 flex items-center justify-center gap-3 group-hover/btn:text-white transition-colors">
            {isSubmitting ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                <FaPaperPlane />
              </motion.div>
            ) : (
              <div className="flex items-center gap-2">
                PUSH_DATA <FaPaperPlane className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </div>
            )}
          </span>
        </button>
      </motion.form>
    ) : (
      <motion.div
        key="success-terminal"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/60 border border-emerald-500/20 rounded-2xl p-6 font-mono text-[11px] leading-relaxed shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]"
      >
        <div className="flex items-center gap-2 mb-4 text-emerald-400">
          <FaCheckCircle /> <span>HTTP 201: CREATED</span>
        </div>
        
        <div className="space-y-1 text-slate-300">
          <p><span className="text-purple-400">"status"</span>: <span className="text-emerald-400">"success"</span>,</p>
          <p><span className="text-purple-400">"origin"</span>: <span className="text-emerald-400">"VISHAL_DESHMUKH_CORE"</span>,</p>
          <p><span className="text-purple-400">"message"</span>: <span className="text-emerald-400">"Node synced successfully"</span>,</p>
          <p><span className="text-purple-400">"timestamp"</span>: <span className="text-amber-400">"{new Date().toISOString()}"</span>,</p>
          <p><span className="text-purple-400">"payload"</span>: {"{"}</p>
          <p className="pl-4"><span className="text-purple-400">"auth"</span>: <span className="text-emerald-400">true</span>,</p>
          <p className="pl-4"><span className="text-purple-400">"tier"</span>: <span className="text-emerald-400">"Elite"</span></p>
          <p>{"}"}</p>
        </div>

        <motion.button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-slate-600 hover:text-indigo-400 transition-colors uppercase tracking-[0.2em] text-[9px] flex items-center gap-2"
        >
          {">"} Close_Session
        </motion.button>
      </motion.div>
    )}
  </AnimatePresence>

  {/* NODES INDICATOR stays below the toggle */}
  <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
    <div className="flex -space-x-2">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-900 flex items-center justify-center text-[7px] font-bold text-slate-500 ring-1 ring-white/5">
          #{i}
        </div>
      ))}
    </div>
    <div className="text-right">
      <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">Active Clusters</p>
      <p className="text-[11px] font-black text-indigo-400">1,240+ NODES</p>
    </div>
  </div>
</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;