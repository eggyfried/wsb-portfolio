"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const shown = sessionStorage.getItem("wsb-loaded");
    if (shown) {
      setVisible(false);
      return;
    }
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("wsb-loaded", "true");
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#111110" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Logo */}
          <motion.p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.8rem",
              letterSpacing: "0.18em",
              textTransform: "lowercase",
              color: "#78716c",
              marginBottom: "2rem",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            wsbportfolio
          </motion.p>

          {/* Track */}
          <motion.div
            style={{
              position: "relative",
              width: "75vw",
              height: "2px",
              overflow: "hidden",
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: "1px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/*
              A single gradient element — opaque white in the centre,
              fully transparent at both edges — sweeps left to right
              continuously. This creates the illusion of a tight fluid
              pulse travelling through the solid line rather than dots
              moving on top of it.
            */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                height: "100%",
                width: "25%",
                background:
                  "linear-gradient(to right, transparent 0%, rgba(17,17,16,0.85) 20%, rgba(17,17,16,0.85) 80%, transparent 100%)",
                borderRadius: "1px",
              }}
              animate={{ left: ["-25%", "100%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
