import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useVelocity, useTransform } from "framer-motion";

/* -----------------------------
   ULTRA PREMIUM CUSTOM CURSOR
----------------------------- */
export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Velocity for kinetic effects
  const velX = useVelocity(mouseX);
  const velY = useVelocity(mouseY);
  
  // Create a slight tilt based on mouse velocity
  const skewX = useTransform(velX, [-3000, 3000], [-20, 20]);

  const spring = { damping: 28, stiffness: 320, mass: 0.6 };
  const cursorX = useSpring(mouseX, spring);
  const cursorY = useSpring(mouseY, spring);

  // Follower with more "mass" for a trailing effect
  const followerX = useSpring(mouseX, { damping: 30, stiffness: 80, mass: 1 });
  const followerY = useSpring(mouseY, { damping: 30, stiffness: 80, mass: 1 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };

    checkMobile();

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target;
      const interactable = target.closest("a, button, .hover-target, input, textarea, [role='button']");
      setIsHovering(!!interactable);
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      {/* 1. MAIN CURSOR (Interactive Center) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center overflow-hidden"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
          skewX, // Tilts when moving fast
        }}
        animate={{
          width: isHovering ? 100 : 16,
          height: isHovering ? 100 : 16,
          borderRadius: isHovering ? "30px" : "100%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Solid White Base (inverted by difference mode) */}
        <motion.div className="absolute inset-0 bg-white" />

        <AnimatePresence>
          {isHovering && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[10px] font-[1000] uppercase text-black tracking-[0.2em] relative z-10"
            >
              
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 2. GLOW FOLLOWER (Atmospheric Background) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] transform-gpu"
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 250 : 50,
          height: isHovering ? 250 : 50,
          opacity: isHovering ? 0.4 : 0.15,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 blur-[50px] opacity-50" />
      </motion.div>

      {/* 3. EXPANDING OUTER RING (Visual Echo) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] border border-white/30 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </>
  );
};

/* -----------------------------
   MAGNETIC WRAPPER
----------------------------- */
export const Magnetic = ({ children }) => {
  const ref = useRef(null);
  const x = useSpring(0, { damping: 15, stiffness: 150 });
  const y = useSpring(0, { damping: 15, stiffness: 150 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Moves 35% of the distance to the mouse
    x.set(middleX * 0.35);
    y.set(middleY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default CustomCursor;