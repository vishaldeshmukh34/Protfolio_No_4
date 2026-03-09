import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

/**
 * ULTRA STYLISH CUSTOM CURSOR
 * Features: Outer Glow, Glassmorphism, and Kinetic Scaling
 */
export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Motion values for X and Y
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring configuration (makes it feel "liquid")
  const springConfig = { damping: 28, stiffness: 350, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    checkMobile();

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Auto-detect interaction targets
      const target = e.target;
      const isInteractable = target.closest('a, button, .hover-target, [role="button"], input, textarea');
      setIsHovering(!!isInteractable);
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      {/* 1. Main Cursor Body */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center overflow-hidden border border-white/20"
        style={{ 
          x: cursorX, 
          y: cursorY, 
          translateX: "-50%", 
          translateY: "-50%",
          mixBlendMode: "difference", // Inverts color based on background
          backdropFilter: isHovering ? "blur(4px)" : "none",
          backgroundColor: "rgba(255, 255, 255, 1)"
        }}
        animate={{ 
          width: isHovering ? 110 : 16, 
          height: isHovering ? 110 : 16,
          borderRadius: isHovering ? "40px" : "100%", // Becomes slightly squircle on hover
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <AnimatePresence>
          {isHovering && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5, letterSpacing: "-0.05em" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "0.15em" }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[11px] font-black text-black uppercase text-center px-4"
            >
              Explore
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 2. Outer Glow / Ring (Optional stylish detail) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[9998]"
        style={{ 
          x: cursorX, 
          y: cursorY, 
          translateX: "-50%", 
          translateY: "-50%",
        }}
        animate={{
            scale: isHovering ? 2.5 : 1,
            opacity: isHovering ? 0 : 1
        }}
      />
    </>
  );
};

/**
 * MAGNETIC WRAPPER
 */
export const Magnetic = ({ children }) => {
  const ref = useRef(null);
  const x = useSpring(0, { damping: 15, stiffness: 150, mass: 0.1 });
  const y = useSpring(0, { damping: 15, stiffness: 150, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.35); 
    y.set(middleY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x, y }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default CustomCursor;