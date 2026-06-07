"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const experience = [
  {
    year: "July 2025",
    title: "Avengers: Doomsday",
    subtitle: "Work Experience",
    description: "Art Department. Production Designer: Gavin Bocquet.",
  },
  {
    year: "July 2025",
    title: "Ahsoka Season 2",
    subtitle: "Work Experience",
    description: "Art Department. Production Designer: Martin Foley.",
  },
  {
    year: "2025 — Present",
    title: "Freelance Photography",
    description: "Images for marketing at a local school.",
  },
  {
    year: "2025 — Present",
    title: "The Three Chimneys",
    description: "Front of house, pub / restaurant.",
  },
  {
    year: "2024 — Present",
    title: "Suitable People",
    description: "Catering assistant.",
  },
  {
    year: "Aug. — Oct. 2024",
    title: "Hollaway Studio",
    description:
      "Part 1 Architectural Assistant. Draughting (AutoCAD), concept design, working to client brief, location work, 3D modelling (SketchUp), rendering (Enscape).",
  },
  {
    year: "July 2023",
    title: "Morphis",
    description:
      "Landscape architect work experience. Draughting design options (AutoCAD), rendering (Photoshop).",
  },
  {
    year: "2022 — 2024",
    title: "Farm Hand",
    description: "Hop picking.",
  },
];

const education = [
  {
    year: "Jan. 2025",
    title: "FDI Art Direction for Film & Television",
    description: "Pinewood Studios. Certification in Draughting.",
  },
  {
    year: "2021 — 2024",
    title: "Sheffield School of Architecture",
    description: "BA(Hons) Architecture — 2:1. Special Study — 1st.",
  },
  {
    year: "2016 — 2021",
    title: "Eastbourne College",
    description: "A-Levels: Design & Technology (A*), Art (A*), Business (A).",
  },
];

const skills = [
  "Technical Drawing (Imperial & Metric)",
  "3D Modelling",
  "Scale Model Making (Sketch + Detail)",
  "Sketch / Visual Communication",
  "Document Collation + Presentation",
  "Collaborative Working",
  "Photography",
  "Organised Working",
  "Degree of Management / Leadership",
  "Sustainable Design",
];

const software = [
  "AutoCAD — 2D",
  "Rhino",
  "SketchUp (3D + Layout)",
  "Enscape (Rendering)",
  "Photoshop",
  "Illustrator",
  "InDesign",
  "Lightroom",
  "Capture One",
  "Office 365 (Word, PowerPoint, Excel)",
];

export default function CVPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <div
        className="w-full flex items-end px-8 md:px-16 lg:px-24 pb-12 pt-20 border-b border-stone-200"
        style={{ minHeight: "22vh" }}
      >
        <motion.div
          className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p
              className="text-stone-400 mb-3"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              Art Department Assistant — UK Based (South East)
            </p>
            <h1
              className="font-display font-light text-stone-900"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              Will
              <br />
              <span style={{ fontWeight: 200 }}>Stewart-Blacker</span>
            </h1>
          </div>

          {/* Download button — prominent */}
          <a
            href="/cv.pdf"
            download="Will_Stewart-Blacker_CV.pdf"
            className="group inline-flex items-center gap-4 border border-stone-300 hover:border-stone-900 hover:bg-stone-900 transition-all duration-500 shrink-0 self-end"
            style={{ padding: "0.9rem 1.6rem" }}
          >
            <span
              className="text-stone-700 group-hover:text-white transition-colors duration-500"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Download CV
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-stone-500 group-hover:text-white transition-colors duration-500 group-hover:translate-y-0.5 transition-transform"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="px-8 md:px-16 lg:px-24 pt-14 pb-0">

        {/* Profile */}
        <ScrollReveal>
          <div className="mb-12">
            <SectionLabel>Profile</SectionLabel>
            <div className="max-w-2xl">
              <p
                className="text-stone-600 leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", fontWeight: 300 }}
              >
                Pursuing a passion for film having come from architecture — a path that reflects
                determination and a can-do attitude for my future career. I have been fortunate
                in my variety of experiences in different sectors that have taught me many
                valuable lessons:
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Farming has taught me the value of putting in 110% and a hard day's work.",
                  "Hospitality has taught me how to work effectively with and for others to the highest standards.",
                  "Architecture has taught me how to work to elaborate briefs under intense time pressures and practical restrictions.",
                  "Photography has taught me how to work with a client to collaboratively realise their vision.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-stone-500 flex gap-3"
                    style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", fontWeight: 300 }}
                  >
                    <span className="text-stone-300 shrink-0 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p
                className="text-stone-600 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", fontWeight: 300 }}
              >
                I am excited for my next chapter amongst the ever changing world of film and to
                begin working amongst passionate, hardworking teams; building new skills and
                contributing all I have learnt so far.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="border-t border-stone-100 mb-12" />

        {/* Two column layout — left: experience + education / right: skills + software */}
        {/* Mobile: skills shown before education via order classes */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-24 pb-16 md:items-stretch">

          {/* LEFT COLUMN — Experience + Education */}
          <div className="flex-1 min-w-0 flex flex-col order-2 md:order-1">

            {/* Experience */}
            <div className="mb-10">
              <ScrollReveal>
                <SectionLabel>Experience</SectionLabel>
              </ScrollReveal>
              <TimelineSection entries={experience} />
            </div>

            <div className="border-t border-stone-100 mb-10" />

            {/* Education */}
            <div>
              <ScrollReveal>
                <SectionLabel>Education</SectionLabel>
              </ScrollReveal>
              <TimelineSection entries={education} />
            </div>
            {/* Grow spacer — equalises left column height with right */}
            <div className="flex-1" />
          </div>

          {/* RIGHT COLUMN — Skills + Software stacked */}
          <div className="w-full md:w-72 lg:w-80 shrink-0 order-1 md:order-2 mt-0 mb-10 md:mb-0">

            {/* Skills */}
            <ScrollReveal delay={0.05}>
              <SectionLabel>Skills</SectionLabel>
              <ul className="space-y-2.5 mb-10">
                {skills.map((skill, i) => (
                  <li
                    key={i}
                    className="text-stone-500 flex gap-3 items-start"
                    style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", fontWeight: 300 }}
                  >
                    <span className="text-stone-300 shrink-0">—</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <div className="border-t border-stone-100 mb-10" />

            {/* Software */}
            <ScrollReveal delay={0.08}>
              <SectionLabel>Software</SectionLabel>
              <ul className="space-y-2.5">
                {software.map((item, i) => (
                  <li
                    key={i}
                    className="text-stone-500 flex gap-3 items-start"
                    style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", fontWeight: 300 }}
                  >
                    <span className="text-stone-300 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* GDPR — full width footer-style */}
      <div className="border-t border-stone-200 px-8 md:px-16 lg:px-24 py-6">
        <p
          className="text-stone-900 text-center w-full"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            letterSpacing: "0.03em",
            fontWeight: 300,
          }}
        >
          GDPR — I consent to my CV being kept on file or passed on for employment purposes.
        </p>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-stone-800 mb-6"
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.8rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        fontWeight: 500,
      }}
    >
      {children}
    </p>
  );
}

function TimelineSection({
  entries,
}: {
  entries: { year: string; title: string; subtitle?: string; description: string }[];
}) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-stone-200 hidden md:block" />
      <div className="flex flex-col">
        {entries.map((entry, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div className="flex flex-col md:flex-row md:gap-10 py-5 border-b border-stone-100 relative">
              {/* Timeline dot */}
              <div
                className="hidden md:block absolute"
                style={{
                  left: 0,
                  top: "50%",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#0c0a09",
                  transform: "translate(-3px, -50%)",
                }}
              />
              {/* Year */}
              <div className="md:pl-8 md:w-36 shrink-0 mb-1 md:mb-0">
                <span
                  className="font-display text-stone-900"
                  style={{ fontSize: "clamp(1rem, 1.5vw, 1.3rem)", fontWeight: 300, letterSpacing: "0.04em" }}
                >
                  {entry.year}
                </span>
              </div>
              {/* Content */}
              <div className="flex-1">
                {entry.subtitle && (
                  <p
                    className="text-stone-400 mb-0.5"
                    style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
                  >
                    {entry.subtitle}
                  </p>
                )}
                <p
                  className="text-stone-900 mb-1"
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase" }}
                >
                  {entry.title}
                </p>
                <p
                  className="text-stone-500 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", fontWeight: 300 }}
                >
                  {entry.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
