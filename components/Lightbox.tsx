"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  images: { src: string; alt: string; caption?: string }[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = currentIndex !== null ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey, currentIndex]);

  return (
    <AnimatePresence>
      {currentIndex !== null && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "rgba(10, 10, 9, 0.98)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
        >
          {/* ── DESKTOP: close top right, counter top left ── */}
          <button
            className="hidden md:block absolute top-6 right-8 text-white/70 hover:text-white tracking-widest uppercase transition-colors z-10"
            onClick={onClose}
            style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.12em" }}
          >
            Close
          </button>
          <span
            className="hidden md:block absolute top-6 left-8 text-white/50"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.1em" }}
          >
            {currentIndex + 1} / {images.length}
          </span>

          {/* ── MOBILE: counter below header (top-20 clears the 64px nav) ── */}
          <span
            className="md:hidden absolute left-6 text-white/60"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.1em", top: "80px" }}
          >
            {currentIndex + 1} / {images.length}
          </span>

          {/* ── IMAGE ── */}
          <motion.div
            key={currentIndex}
            className="relative w-full h-full flex items-center justify-center px-12 md:px-16 pb-28 md:pb-16 pt-16"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative max-h-full max-w-full"
              style={{ height: "72vh", width: "88vw" }}
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-contain"
                sizes="88vw"
                priority
              />
            </div>
          </motion.div>

          {/* ── DESKTOP: caption bottom centre ── */}
          {images[currentIndex].caption && (
            <div
              className="hidden md:block absolute bottom-8 left-0 right-0 text-center text-white/50"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
            >
              {images[currentIndex].caption}
            </div>
          )}

          {/* ── MOBILE: caption + close button centred below image ── */}
          <div
            className="md:hidden absolute bottom-8 left-0 right-0 flex flex-col items-center gap-4 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            {images[currentIndex].caption && (
              <span
                className="text-white/60"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                {images[currentIndex].caption}
              </span>
            )}
            <button
              onClick={onClose}
              className="text-white hover:text-white/70 transition-colors border border-white/40 hover:border-white/20 px-10 py-2.5"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
            >
              Close
            </button>
          </div>

          {/* ── PREV / NEXT — inset from edges ── */}
          <button
            className="absolute text-white/50 hover:text-white transition-colors p-3"
            style={{ left: "0.75rem", top: "50%", transform: "translateY(-50%)" }}
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous image"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            className="absolute text-white/50 hover:text-white transition-colors p-3"
            style={{ right: "0.75rem", top: "50%", transform: "translateY(-50%)" }}
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next image"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
