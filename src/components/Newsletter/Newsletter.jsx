import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal, FaPaperPlane, FaCheckCircle, FaDatabase } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Enter_Destination_Email_Address...";

  // Typewriter effect for the placeholder
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) i = 0;
    }, 150);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
    }, 2000);
  };

  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-slate-950 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl shadow-indigo-200"
        >
          {/* BACKGROUND TECH DECOR */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/10 blur-[80px] rounded-full" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 text-indigo-400 font-mono text-[10px] uppercase tracking-[0.4em] mb-6">
              <FaDatabase className="animate-pulse" /> Node_Database_Sync
            </div>
            
            <h2 className="text-4xl md:text-6xl font-[1000] text-white tracking-tighter mb-8 leading-none">
              STAY <span className="text-indigo-500 italic">PUSHED.</span>
            </h2>
            
            <p className="text-slate-400 max-w-md text-sm font-medium mb-12 leading-relaxed">
              Subscribe to receive technical deep-dives and architectural blueprints directly to your inbox. No spam, just pure logic.
            </p>

            <form onSubmit={handleSubmit} className="relative group">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-indigo-500">
                    <FaTerminal size={14} />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={displayText}
                    className="w-full bg-slate-900 border border-white/10 rounded-full py-6 pl-16 pr-8 text-white font-mono text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-slate-700"
                  />
                </div>

                <button
                  disabled={isSubmitting || isSuccess}
                  className="relative overflow-hidden px-10 py-6 bg-indigo-600 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-indigo-500 transition-colors flex items-center justify-center gap-3 disabled:bg-slate-800 disabled:text-slate-500"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      >
                        <FaPaperPlane />
                      </motion.div>
                    ) : isSuccess ? (
                      <motion.div key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                        <FaCheckCircle className="text-emerald-400" /> SYNCED
                      </motion.div>
                    ) : (
                      <motion.div key="default" className="flex items-center gap-2">
                        INITIATE <FaPaperPlane />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>

            <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[8px] font-bold text-slate-500">
                            U{i}
                        </div>
                    ))}
                </div>
                <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                  Join 1,200+ Engineers in the loop
                </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;