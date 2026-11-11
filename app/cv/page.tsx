"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

type Entry = {
  year: string;
  title: string;
  subtitle?: string;
  description?: string;
  points?: string[];
};

// ─────────────────────────────────────────────────────────────────
// PROFILE — each string is one paragraph
// ─────────────────────────────────────────────────────────────────
const profile = [
  "BA(Hons) Architecture graduate seeking an Art Department Assistant role, with a view to pursue a career in art direction / set design, available immediately.",
  "Recently exploring film / TV set design has significantly built upon technical and soft skills established at architecture school and my varied experience. I'm moving forward with all I have learnt across film, architecture and my various hospitality jobs, to further my career in a like-minded and exciting environment.",
];

// ─────────────────────────────────────────────────────────────────
// EXPERIENCE — split into Film, Architectural and Other
// Each entry: year, title, optional subtitle, optional description,
// optional points (a short bulleted list)
// ─────────────────────────────────────────────────────────────────
const filmExperience: Entry[] = [
  {
    year: "July 2025",
    title: "Avengers: Doomsday",
    subtitle: "Work Experience, London",
    description: "Production Designer: Gavin Bocquet.",
  },
  {
    year: "July 2025",
    title: "Star Wars: Ahsoka S2",
    subtitle: "Work Experience, London",
    description: "Production Designer: Martin Foley.",
  },
];

const architecturalExperience: Entry[] = [
  {
    year: "Aug. — Oct. 2024",
    title: "Hollaway Studio",
    subtitle: "Part 1 Architectural Assistant, S/E England",
    points: [
      "Draughting (AutoCAD)",
      "Site + massing modelling (SketchUp)",
      "Rendering (Enscape + Photoshop)",
      "Early concept design to the client's brief",
      "Creating documents for planning and tender",
    ],
  },
  {
    year: "July 2023",
    title: "Morphis Design",
    subtitle: "Landscape Architecture Intern, Hong Kong",
    points: [
      "Draughting design options (AutoCAD)",
      "Rendering (Photoshop)",
      "Creating documents for concept design",
      "Taking minutes",
    ],
  },
  {
    year: "July 2019",
    title: "Studio PDP",
    subtitle: "Architecture Work Experience, London",
    points: [
      "Contextually based design assignment",
      "Massing (SketchUp)",
    ],
  },
];

const otherExperience: Entry[] = [
  {
    year: "2025 — Present",
    title: "Freelance Photography",
    description: "Marketing images.",
  },
  {
    year: "2018 — Present",
    title: "Various Hospitality",
    description: "Weddings, private family functions, pubs etc.",
  },
  {
    year: "2022 — 2024",
    title: "Farm Hand",
  },
];

// ─────────────────────────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────────────────────────
const education: Entry[] = [
  {
    year: "Jan. 2025",
    title: "FDI Art Direction for Film & Television",
    description: "Pinewood Studios. Certification in Draughting.",
  },
  {
    year: "2021 — 2024",
    title: "Sheffield School of Architecture",
    description: "BA(Hons) Architecture (2:1). Special Study (1st).",
  },
  {
    year: "2016 — 2021",
    title: "Eastbourne College",
    description: "A-Levels: DT (A*), Art (A*), Business (A).",
  },
];

// ─────────────────────────────────────────────────────────────────
// SKILLS + SOFTWARE
// ─────────────────────────────────────────────────────────────────
const skills = [
  "Technical Drawing",
  "CAD Modelling",
  "Scale Model Making",
  "Working in Metric + Imperial",
  "Visual Communication",
  "Document Collation",
  "Presenting",
  "Collaborative Working",
  "Hands-on Working",
  "Organised Working",
  "Pragmatic Decision Making",
];

const software = [
  "Rhino (3D + 2D)",
  "AutoCAD — 2D",
  "SketchUp (3D + 2D)",
  "Enscape (Rendering)",
  "Photoshop",
  "InDesign",
  "Illustrator",
  "Lightroom",
  "Capture One",
  "Microsoft Word",
  "Microsoft PowerPoint",
  "Microsoft Excel",
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
              Art Department Assistant — Available to work, UK based
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
            <SectionLabel>Personal Statement</SectionLabel>
            <div className="max-w-2xl space-y-4">
              {profile.map((para, i) => (
                <p
                  key={i}
                  className="text-stone-600 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", fontWeight: 300 }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="border-t border-stone-100 mb-12" />

        {/* Two column layout — left: experience + education / right: skills + software */}
        {/* Mobile: skills shown before experience via order classes */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-24 pb-16 md:items-stretch">

          {/* LEFT COLUMN — Film, Architectural, Other experience + Education */}
          <div className="flex-1 min-w-0 flex flex-col order-2 md:order-1">

            {/* Film Experience */}
            <div className="mb-10">
              <ScrollReveal>
                <SectionLabel>Film Experience</SectionLabel>
              </ScrollReveal>
              <TimelineSection entries={filmExperience} />
            </div>

            <div className="border-t border-stone-100 mb-10" />

            {/* Architectural Experience */}
            <div className="mb-10">
              <ScrollReveal>
                <SectionLabel>Architectural Experience</SectionLabel>
              </ScrollReveal>
              <TimelineSection entries={architecturalExperience} />
            </div>

            <div className="border-t border-stone-100 mb-10" />

            {/* Other Experience */}
            <div className="mb-10">
              <ScrollReveal>
                <SectionLabel>Other Experience</SectionLabel>
              </ScrollReveal>
              <TimelineSection entries={otherExperience} />
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
              <SectionLabel>Software Skills</SectionLabel>
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

function TimelineSection({ entries }: { entries: Entry[] }) {
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
                <p
                  className="text-stone-900 mb-1"
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase" }}
                >
                  {entry.title}
                </p>
                {entry.subtitle && (
                  <p
                    className="text-stone-400 mb-1"
                    style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
                  >
                    {entry.subtitle}
                  </p>
                )}
                {entry.description && (
                  <p
                    className="text-stone-500 leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", fontWeight: 300 }}
                  >
                    {entry.description}
                  </p>
                )}
                {entry.points && (
                  <ul className="mt-2 space-y-1">
                    {entry.points.map((point, j) => (
                      <li
                        key={j}
                        className="text-stone-500 flex gap-3 items-start"
                        style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", fontWeight: 300 }}
                      >
                        <span className="text-stone-300 shrink-0">—</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
