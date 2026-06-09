"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";

// ─────────────────────────────────────────────────────────────────
// EDIT YOUR ABOUT TEXT HERE
// ─────────────────────────────────────────────────────────────────

const intro = [
  "William Stewart-Blacker is a designer working across set design, architecture, and photography.",
  "His practice is concerned with the construction of atmosphere — the way space, light, and material can shape experience and direct attention.",
];

// ─────────────────────────────────────────────────────────────────
// EDIT YOUR TIMELINE HERE
// Add or remove entries as needed. Each entry has:
//   year        — displayed large and bold on the left
//   title       — short heading for the entry
//   description — one or two sentences of detail
// ─────────────────────────────────────────────────────────────────

const timeline = [
  {
    year: "2024",
    title: "Associate Designer, ENO",
    description:
      "Set and costume design for a new production of La Traviata at the English National Opera, London.",
  },
  {
    year: "2023",
    title: "Resident Designer, Almeida Theatre",
    description:
      "Year-long residency developing new work across the main stage and studio spaces.",
  },
  {
    year: "2022",
    title: "MArch Architecture, Bartlett School",
    description:
      "Masters thesis exploring the staging of public space in post-industrial cities. Distinction.",
  },
  {
    year: "2021",
    title: "Freelance Set Designer",
    description:
      "Independent practice spanning fringe theatre, short film, and exhibition design.",
  },
  {
    year: "2019",
    title: "BA Architecture, University of Edinburgh",
    description:
      "Undergraduate degree with focus on drawing, representation, and spatial narrative.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Banner */}
      <div className="relative w-full overflow-hidden" style={{ height: "60vh" }}>
        <ParallaxImage
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80"
          alt="About William Stewart-Blacker"
          className="w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-stone-950/40" />
        <div className="absolute inset-0 flex items-end pb-12 px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="text-white/50 mb-3"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              About
            </p>
            <h1
              className="text-white font-display font-light"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              William
              <br />
              <span style={{ fontWeight: 200 }}>Stewart-Blacker</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Intro text */}
      <div className="px-8 md:px-16 lg:px-24 py-16 md:py-24 max-w-4xl">
        {intro.map((para, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <p
              className="text-stone-600 leading-relaxed mb-6"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                fontWeight: 300,
              }}
            >
              {para}
            </p>
          </ScrollReveal>
        ))}
      </div>

      {/* Divider */}
      <div className="px-8 md:px-16 lg:px-24">
        <div className="border-t border-stone-200" />
      </div>

      {/* Timeline */}
      <div className="px-8 md:px-16 lg:px-24 py-16 md:py-24 pb-32">
        <ScrollReveal>
          <p
            className="text-stone-400 mb-12"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            Experience
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-stone-200 hidden md:block" />

          <div className="flex flex-col gap-0">
            {timeline.map((entry, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex flex-col md:flex-row md:gap-16 py-8 md:py-10 border-b border-stone-100 md:border-none relative">

                  {/* Dot on the line — desktop only */}
                  <div
                    className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2"
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#0c0a09",
                      transform: "translate(-3px, -50%)",
                    }}
                  />

                  {/* Year */}
                  <div className="md:pl-10 md:w-36 shrink-0 mb-3 md:mb-0">
                    <span
                      className="font-display text-stone-900"
                      style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 300, letterSpacing: "0.05em" }}
                    >
                      {entry.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p
                      className="text-stone-900 mb-2"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        fontWeight: 400,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {entry.title}
                    </p>
                    <p
                      className="text-stone-500 leading-relaxed max-w-lg"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        fontWeight: 300,
                      }}
                    >
                      {entry.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
