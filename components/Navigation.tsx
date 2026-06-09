"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [menuOpen]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  const links = [
    { href: "/art-direction", label: "Art Direction" },
    { href: "/architecture",  label: "Architecture"  },
    { href: "/photography",   label: "Photography"   },
    { href: "/cv",            label: "CV"            },
  ];

  return (
    <>
      {/* ─── DESKTOP HEADER ─── */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: isHome ? 0 : 1,
          y: 0,
          pointerEvents: isHome ? "none" : "auto",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200"
          animate={{ opacity: transparent ? 0 : 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <div className="relative flex items-center justify-between px-10 lg:px-16 h-16">
          <Link href="/">
            <motion.span
              className="font-display text-sm font-light tracking-widest uppercase"
              animate={{ color: transparent ? "#ffffff" : "#1c1917" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              William Stewart-Blacker
            </motion.span>
          </Link>
          <nav className="flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link transition-opacity duration-300 hover:opacity-50"
                  style={{
                    color: transparent ? "rgba(255,255,255,0.8)" : "#57534e",
                    transition: "color 0.6s ease, opacity 0.3s ease",
                    fontWeight: isActive ? 500 : 300,
                    borderBottom: isActive ? "1px solid currentColor" : "none",
                    paddingBottom: isActive ? "1px" : "0",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </motion.header>

      {/* ─── MOBILE HEADER ───
          Mirrors the cursor approach exactly:
          A fixed white element with mix-blend-mode:difference sits over
          the page. White over dark = white. White over light = dark.
          Critically: this element has NO parent with backdrop-filter,
          isolation, or transform — nothing that creates a stacking context
          and breaks blend mode. It is a direct child of the body stack. */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "64px",
          zIndex: 9999,
          pointerEvents: "none",
          mixBlendMode: "difference",
        }}
      >
        {/* Logo */}
        <div
          style={{
            position: "absolute",
            left: "1.5rem",
            top: 0,
            height: "100%",
            display: "flex",
            alignItems: "center",
            pointerEvents: "auto",
          }}
        >
          <Link href="/">
            <span
              className="font-display font-light tracking-widest uppercase"
              style={{ color: "white", fontSize: "0.875rem" }}
            >
              William Stewart-Blacker
            </span>
          </Link>
        </div>

        {/* Hamburger */}
        <div
          style={{
            position: "absolute",
            right: "1.5rem",
            top: 0,
            height: "100%",
            display: "flex",
            alignItems: "center",
            pointerEvents: "auto",
          }}
        >
          <button
            style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "8px" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                style={{ display: "block", width: "20px", height: "1px", backgroundColor: "white" }}
                animate={
                  menuOpen
                    ? i === 0 ? { rotate: 45,  y: 7,  opacity: 1 }
                    : i === 1 ? { opacity: 0 }
                    :           { rotate: -45, y: -7, opacity: 1 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.3 }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-stone-950 flex flex-col justify-center items-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <nav className="flex flex-col items-center gap-8">
              {[{ href: "/", label: "Home" }, ...links].map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="font-display text-4xl font-light tracking-wide transition-opacity hover:opacity-40"
                      style={{
                        color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
                        fontWeight: isActive ? 300 : 200,
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
