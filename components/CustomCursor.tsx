"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 700, damping: 40, mass: 0.3 });
  const springY = useSpring(cursorY, { stiffness: 700, damping: 40, mass: 0.3 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      setIsTouch(true);
      return;
    }

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, label"
      );
      setIsHovering(!!interactive);
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[999]"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        // Invert whatever is underneath — works on any background
        mixBlendMode: "difference",
      }}
    >
      <motion.div
        className="rounded-full bg-white"
        animate={{
          width:   isHovering ? 31 : 10,
          height:  isHovering ? 31 : 10,
          opacity: isVisible  ?  1 :  0,
        }}
        transition={{
          width:   { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          height:  { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.2 },
        }}
      />
    </motion.div>
  );
}
