"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  const getInitial = () => {
    switch (direction) {
      case "left": return { opacity: 0, x: -30 };
      case "right": return { opacity: 0, x: 30 };
      case "none": return { opacity: 0 };
      default: return { opacity: 0, y: 24 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case "left": return { opacity: 1, x: 0 };
      case "right": return { opacity: 1, x: 0 };
      case "none": return { opacity: 1 };
      default: return { opacity: 1, y: 0 };
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start(getAnimate());
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitial()}
      animate={controls}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
