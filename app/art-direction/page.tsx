"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";

// ─────────────────────────────────────────────────────────────────
// HOW TO BUILD IMAGE LAYOUTS PER PROJECT
// ─────────────────────────────────────────────────────────────────
//
// Each project has an `imageGroups` array. Each group is a separate
// row of images with its own layout. Stack as many groups as you like.
//
// Each group has:
//   layout   — how images in this group are arranged (see options below)
//   gap      — vertical space AFTER this group before the next: "sm" | "md" | "lg"
//   images   — array of { src, caption } objects
//              caption is optional — leave as "" to show no text on hover
//
// Layout options:
//   "full"          → One image, full page width (natural aspect ratio, no crop)
//   "left"          → One image, left 65% of page
//   "right"         → One image, right 65% of page
//   "pair"          → Two images side by side, equal width
//   "feature-left"  → Two images: large left (60%), small right (40%)
//   "feature-right" → Two images: small left (40%), large right (60%)
//   "trio"          → Three equal images in a row
//   "sequence"      → Any number of images stacked full width
//
// Example — a full spread followed by a pair:
//
//   imageGroups: [
//     { layout: "full", gap: "sm", images: [{ src: "/images/hero.jpg", caption: "Title" }] },
//     { layout: "pair", gap: "md", images: [
//       { src: "/images/detail1.jpg", caption: "Detail" },
//       { src: "/images/detail2.jpg", caption: "Process" },
//     ]},
//   ],
//
// ─────────────────────────────────────────────────────────────────
// PROJECT GAP — space after the entire project before the next one
//   gap: "sm" | "md" | "lg" | "xl"
// ─────────────────────────────────────────────────────────────────
// NOTE: All project titles and descriptions are left-aligned
// ─────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: "Akira Dewar Flask Facility",
    year: "2026",
    description: "Concept set based on the Akira film/manga, W.I.P.",
    gap: "md",
    imageGroups: [
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/art direction/akira/1.jpg", caption: "Concept Sketch" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Easton Neston Manor",
    year: "2025/6",
    description: "Facade studies, doorway detail and stair P&E are all based on Easton Neston's Baroque architecture.",
    gap: "md",
    imageGroups: [
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/art direction/Easton Neston/1.png", caption: "Rhino Facade Model" },
        ],
      },
      {
        layout: "trio",
        gap: "sm",
        images: [
          { src: "/images/art direction/Easton Neston/2.png", caption: "Set design" },
          { src: "/images/art direction/Easton Neston/3.png", caption: "Set design" },
          { src: "/images/art direction/Easton Neston/4.png", caption: "Set design" },
        ],
      },
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/art direction/Easton Neston/5.jpg", caption: "Door Detail" },
        ],
      },
       {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/art direction/Easton Neston/6.jpg", caption: "Facade P&E" },
        ],
      },
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/art direction/Easton Neston/7.jpg", caption: "Interior Stair P&E" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "An American Dream",
    year: "2025",
    description: "Concept set based on the work of mid-century futurists and design around this period (e.g.Syd Mead, Charles Schridde, etc.) The hand-drafted work was completed at FDI's Pinewood Course.",
    gap: "md",
    imageGroups: [
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/art direction/American Dream/1.jpg", caption: "Set Concept" },
        ],
      },
      {
        layout: "trio",
        gap: "sm",
        images: [
          { src: "/images/art direction/American Dream/2.jpg", caption: "Massing Detail" },
          { src: "/images/art direction/American Dream/3.jpg", caption: "Massing Overview" },
          { src: "/images/art direction/American Dream/4.jpg", caption: "Massing Detail" },
        ],
      },
        {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/art direction/American Dream/5.jpg", caption: "Hand-Draughted P&E" },
        ],
      },
        {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/art direction/American Dream/6.png", caption: "Door Detail" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Islamic Set",
    year: "2025",
    description: "Originally inspired by a rewatch of Lawrence of Arabia, the hand-drafted work was again completed at FDI's Pinewood Course.",
    gap: "md",
    imageGroups: [
       {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/art direction/Islamic/1.jpg", caption: "Sketchup P&E" },
        ],
      },
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/art direction/Islamic/2.jpg", caption: "Hand-Draughted P&E" },
        ],
      },
       {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/art direction/Islamic/3.jpg", caption: "Column Detail" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Hopper's Hut",
    year: "2025",
    description: "Concept set based on a surveyed abandoned agricultural building in my local area.",
    gap: "md",
    imageGroups: [
      {
        layout: "pair",
        gap: "sm",
        images: [
          { src: "/images/art direction/hoppers hut/1.jpg", caption: "Existing Exterior" },
          { src: "/images/art direction/hoppers hut/2.jpg", caption: "Existing Interior" },
        ],
      },
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/art direction/hoppers hut/3.png", caption: "Rercreated Building" },
        ],
      },
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/art direction/hoppers hut/4.png", caption: "Building Structure" },
        ],
      },
        {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/art direction/hoppers hut/5.jpg", caption: "Set Concept" },
        ],
      },
        {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/art direction/hoppers hut/6.jpg", caption: "Set P&E" },
        ],
      },
      {
        layout: "pair",
        gap: "sm",
        images: [
          { src: "/images/art direction/hoppers hut/7.jpg", caption: "" },
          { src: "/images/art direction/hoppers hut/8.jpg", caption: "" },
        ],
      },
      {
        layout: "pair",
        gap: "sm",
        images: [
          { src: "/images/art direction/hoppers hut/9.jpg", caption: "" },
          { src: "/images/art direction/hoppers hut/10.jpg", caption: "" },
        ],
      },
    ],
  },
];

const projectGapMap: Record<string, string> = {
  sm: "mb-12 md:mb-16",
  md: "mb-20 md:mb-28",
  lg: "mb-28 md:mb-40",
  xl: "mb-36 md:mb-52",
};

const groupGapMap: Record<string, string> = {
  sm: "mb-4",
  md: "mb-8",
  lg: "mb-12",
};

const IMG_CLASS = "object-cover transition-all duration-500";

export default function ArtDirectionPage() {
  return (
    <div className="pt-16">
      {/* Banner */}
      <div className="relative w-full overflow-hidden" style={{ height: "60vh" }}>
        <ParallaxImage
          src="/images/art direction/header.jpg"
          alt="Art Direction"
          className="w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-stone-950/35" />
        <div className="absolute inset-0 flex items-end pb-12 px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="text-white/50 mb-3"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
            >
              Portfolio
            </p>
            <h1
              className="text-white font-display font-light"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              Art Direction
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Intro */}
      <div className="px-8 md:px-16 lg:px-24 py-16 md:py-24">
        <ScrollReveal>
          <p
            className="max-w-xl text-stone-500 leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 300 }}
          >
            A collection of self-led work (with some hand draughting from FDI). These have been great for learning the overlaps between film and architecture. Each mini project aims to explore a different style of design.
          </p>
        </ScrollReveal>
      </div>

      {/* Projects */}
      <div className="px-8 md:px-16 lg:px-24 pb-24">
        {projects.map((project, i) => (
          <ArtDirectionProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ArtDirectionProject({
  project,
}: {
  project: (typeof projects)[0];
}) {
  const projectGapClass = projectGapMap[project.gap] ?? projectGapMap.md;

  return (
    <div className={projectGapClass}>
      {/* Header — always left aligned */}
      <ScrollReveal delay={0.05}>
        <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-stone-200">
          <h2
            className="font-display font-light text-stone-900"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            {project.title}
          </h2>
          <span
            className="text-stone-400 ml-4 shrink-0"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "0.1em" }}
          >
            {project.year}
          </span>
        </div>
        {project.description && (
          <p
            className="text-stone-500 mb-3 md:mb-8 max-w-md"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 300 }}
          >
            {project.description}
          </p>
        )}
      </ScrollReveal>

      {/* Image groups */}
      {project.imageGroups.map((group, gi) => (
        <div key={gi} className={groupGapMap[group.gap] ?? groupGapMap.sm}>
          <ImageGroup group={group} projectTitle={project.title} />
        </div>
      ))}
    </div>
  );
}

function ImageGroup({
  group,
  projectTitle,
}: {
  group: { layout: string; images: { src: string; caption?: string }[] };
  projectTitle: string;
}) {
  const { layout, images } = group;

  const Img = ({
    img,
    aspect = "4/3",
    sizes = "50vw",
  }: {
    img: { src: string; caption?: string };
    aspect?: string;
    sizes?: string;
  }) => (
    <div className="relative overflow-hidden group" style={{ aspectRatio: aspect }}>
      <Image
        src={img.src}
        alt={img.caption || projectTitle}
        fill
        className={IMG_CLASS}
        sizes={sizes}
        loading="lazy"
      />
      {img.caption && (
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-500 flex items-center justify-center">
          <span
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-center px-4"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            {img.caption}
          </span>
        </div>
      )}
    </div>
  );

  if (layout === "full") return (
    <ScrollReveal delay={0.1}>
      <div className="relative w-full overflow-hidden group">
        <Image
          src={images[0].src}
          alt={images[0].caption || projectTitle}
          width={2400}
          height={1600}
          className="w-full h-auto transition-all duration-500"
          sizes="100vw"
          loading="lazy"
          style={{ display: "block" }}
        />
        {images[0].caption && (
          <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-500 flex items-center justify-center">
            <span
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-center px-4"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
            >
              {images[0].caption}
            </span>
          </div>
        )}
      </div>
    </ScrollReveal>
  );

  if (layout === "left") return (
    <ScrollReveal delay={0.1}>
      <div style={{ width: "65%" }}>
        <Img img={images[0]} aspect="4/3" sizes="65vw" />
      </div>
    </ScrollReveal>
  );

  if (layout === "right") return (
    <ScrollReveal delay={0.1}>
      <div className="flex justify-end">
        <div style={{ width: "65%" }}>
          <Img img={images[0]} aspect="4/3" sizes="65vw" />
        </div>
      </div>
    </ScrollReveal>
  );

  if (layout === "sequence") return (
    <div className="flex flex-col gap-4">
      {images.map((img, i) => (
        <ScrollReveal key={i} delay={0.05 + i * 0.1}>
          <div className="relative w-full overflow-hidden group" style={{ aspectRatio: "16/9" }}>
            <Image
              src={img.src}
              alt={img.caption || projectTitle}
              fill
              className={IMG_CLASS}
              sizes="100vw"
              loading="lazy"
            />
            {img.caption && (
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-500 flex items-center justify-center">
                <span
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-center px-4"
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
                >
                  {img.caption}
                </span>
              </div>
            )}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );

  if (layout === "pair") return (
    <div className="grid grid-cols-2 gap-2 md:gap-4">
      {images.slice(0, 2).map((img, i) => (
        <ScrollReveal key={i} delay={0.05 + i * 0.08} direction={i === 0 ? "left" : "right"}>
          <Img img={img} aspect="4/3" sizes="50vw" />
        </ScrollReveal>
      ))}
    </div>
  );

  if (layout === "feature-left") return (
    <div className="grid grid-cols-5 gap-2 md:gap-4">
      <ScrollReveal delay={0.1} className="md:col-span-3" direction="left">
        <Img img={images[0]} aspect="4/3" sizes="60vw" />
      </ScrollReveal>
      <ScrollReveal delay={0.2} className="md:col-span-2" direction="right">
        <Img img={images[1]} aspect="4/3" sizes="40vw" />
      </ScrollReveal>
    </div>
  );

  if (layout === "feature-right") return (
    <div className="grid grid-cols-5 gap-2 md:gap-4">
      <ScrollReveal delay={0.1} className="md:col-span-2" direction="left">
        <Img img={images[0]} aspect="4/3" sizes="40vw" />
      </ScrollReveal>
      <ScrollReveal delay={0.2} className="md:col-span-3" direction="right">
        <Img img={images[1]} aspect="4/3" sizes="60vw" />
      </ScrollReveal>
    </div>
  );

  if (layout === "trio") return (
    <div className="grid grid-cols-3 gap-2 md:gap-4">
      {images.slice(0, 3).map((img, i) => (
        <ScrollReveal key={i} delay={0.05 + i * 0.08}>
          <Img img={img} aspect="4/3" sizes="33vw" />
        </ScrollReveal>
      ))}
    </div>
  );

  return null;
}
