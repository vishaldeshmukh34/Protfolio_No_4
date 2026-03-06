import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSatellite, FaClock } from "react-icons/fa";

const LiveStatusNode = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="flex flex-col items-center md:items-end order-2 md:order-3 space-y-2">
      {/* COORDINATES HEADER */}
      <div className="flex items-center gap-2 text-indigo-600">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <FaSatellite size={12} />
        </motion.div>
        <span className="text-[10px] font-black tracking-[0.3em] uppercase">
          Local_Node_Sync
        </span>
      </div>

      {/* GEOLOCATION & LIVE CLOCK */}
      <div className="flex flex-col items-center md:items-end">
        <div className="font-mono text-[11px] text-slate-950 font-black tracking-widest leading-none">
          19.8415° N, 75.8833° E
        </div>
        
        {/* THE "IES" LIVE CLOCK DISPLAY */}
        <div className="mt-2 flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg">
          <FaClock size={10} className="text-slate-400" />
          <span className="font-mono text-[9px] text-slate-500 font-bold tracking-tighter uppercase">
            Jalna_ST: {formattedTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveStatusNode;