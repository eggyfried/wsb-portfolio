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
//
// Layout options:
//   "full"          → One image, full page width
//   "left"          → One image, left 65% of page
//   "right"         → One image, right 65% of page
//   "pair"          → Two images side by side, equal width
//   "feature-left"  → Two images: large left (60%), small right (40%)
//   "feature-right" → Two images: small left (40%), large right (60%)
//   "trio"          → Three images: large left + two stacked right
//
// Example — three plans in trio, then a full spread, then a pair:
//
//   imageGroups: [
//     { layout: "trio",  gap: "sm", images: [plan1, plan2, plan3] },
//     { layout: "full",  gap: "sm", images: [heroShot] },
//     { layout: "pair",  gap: "md", images: [detail1, detail2] },
//   ],
//
// ─────────────────────────────────────────────────────────────────
// PROJECT GAP — space after the entire project before the next one
// ─────────────────────────────────────────────────────────────────
//   gap: "sm" | "md" | "lg" | "xl"
// ─────────────────────────────────────────────────────────────────
// TITLE ALIGNMENT — alternates left/right automatically
// Override with align: "left" or align: "right" on any project
// ─────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: "The Hive",
    year: "2024",
    type: "Year 3 Project 2",
    description: "Doncaster archives retrofit. Promoting sustainable technologies, education and a platform for a thriving community.",
    gap: "md",
    imageGroups: [
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/3_P2/1.jpg", caption: "Project Overview" },
          
        ],
      },
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/3_P2/2.jpg", caption: "Approach Sequence" },
          
        ],
      },
      {
        layout: "trio",
        gap: "sm",
        images: [
          { src: "/images/architecture/3_P2/3.jpg", caption: "Basement Plan" },
          { src: "/images/architecture/3_P2/4.jpg", caption: "Ground Flr Plan" },
          { src: "/images/architecture/3_P2/5.jpg", caption: "First Flr Plan" },
        ],
      },
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/3_P2/6.jpg", caption: "Construction Detail" },
          
        ],
      },
        {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/3_P2/7.jpg", caption: "Park Elevation" },
          
        ],
      },
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/3_P2/8.jpg", caption: "Retrofit Section" },
          
        ],
      },
       {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/3_P2/9.jpg", caption: "Courtyard Section" },
          
        ],
      },
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/3_P2/10.jpg", caption: "Park Perspective" },
          
        ],
      },
        {
        layout: "pair",
        gap: "sm",
        images: [
          { src: "/images/architecture/3_P2/11.png", caption: "Cafe Int" },
          { src: "/images/architecture/3_P2/12.jpg", caption: "Street Perspective" },
          
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Attende Topp",
    year: "2023/4",
    type: "Year 3 Project 1",
    description: "Norwegian bathhouse in the centre of Bergen. A monument to the local community's resilience and value in climate promotion and research.",
    gap: "md",
    imageGroups: [
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/3_P1/1.jpg", caption: "Project Overview" },
        ],
      },
      {
        layout: "trio",
        gap: "sm",
        images: [
          { src: "/images/architecture/3_P1/2.jpg", caption: "Ground Flr Plan" },
          { src: "/images/architecture/3_P1/3.jpg", caption: "Mezzanine Flr Plan" },
          { src: "/images/architecture/3_P1/4.jpg", caption: "First Flr Plan" },
        ],
      },
       {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/3_P1/5.jpg", caption: "Concept Sketch" },
        ],
      },
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/3_P1/6.png", caption: "Environmental Strategies" },
        ],
      },
       {
        layout: "trio",
        gap: "sm",
        images: [
          { src: "/images/architecture/3_P1/7.jpg", caption: "" },
          { src: "/images/architecture/3_P1/8.jpg", caption: "" },
          { src: "/images/architecture/3_P1/9.jpg", caption: "" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "The Playground",
    year: "2023",
    type: "Year 2 Project 3",
    description: "A Sheffield newbuild aiming to provide a supportive network to help people back on their feet.",
    gap: "md",
    imageGroups: [
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/2_P3/1.jpg", caption: "Project Overview" },
        ],
      },
      {
        layout: "trio",
        gap: "sm",
        images: [
          { src: "/images/architecture/2_P3/2.jpg", caption: "Ground Flr Plan" },
          { src: "/images/architecture/2_P3/3.jpg", caption: "First Flr Plan" },
          { src: "/images/architecture/2_P3/4.jpg", caption: "Second Flr Plan" },
        ],
      },
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/2_P3/5.jpg", caption: "Construction Section" },
        ],
      },
       {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/2_P3/6.jpg", caption: "Internal Courtyard" },
        ],
      },
       {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/2_P3/7.jpg", caption: "Street Interface" },
        ],
      },
      {
        layout: "pair",
        gap: "sm",
        images: [
          { src: "/images/architecture/2_P3/8.png", caption: "Roof Garden" },
          { src: "/images/architecture/2_P3/9.jpg", caption: "Apartment Int" },
        ],
      },
   
    ],
  },
  {
    id: 4,
    title: "Community Cinema/Theatre",
    year: "2022/3",
    type: "Year 2 Project 2",
    description: "A mixed-use community theatre situated in the suburbs of Sheffield.",
    gap: "md",
    imageGroups: [
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/2_P2/1.jpg", caption: "Project Overview" },
        ],
      },
       {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/2_P2/2.jpg", caption: "Axonometric Breakdown" },
        ],
      },
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/2_P2/3.jpg", caption: "Massing Analysis" },
        ],
      },
      {
        layout: "trio",
        gap: "sm",
        images: [
          { src: "/images/architecture/2_P2/4.png", caption: "Atrium" },
          { src: "/images/architecture/2_P2/5.png", caption: "Circulation" },
          { src: "/images/architecture/2_P2/6.png", caption: "Theatre Int" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Community Space",
    year: "2022",
    type: "Year 2 Project 1",
    description: "A collaborative project centring around under-represented communities in the suburbs of Sheffield.",
    gap: "md",
    imageGroups: [
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/2_P1/1.jpg", caption: "Project Overview" },
        ],
      },
      {
        layout: "pair",
        gap: "sm",
        images: [
          { src: "/images/architecture/2_P1/2.jpg", caption: "Structural Model" },
          { src: "/images/architecture/2_P1/3.jpg", caption: "Structural Model" },
        ],
      },
      {
        layout: "pair",
        gap: "sm",
        images: [
          { src: "/images/architecture/2_P1/4.jpg", caption: "Interior Perspective" },
          { src: "/images/architecture/2_P1/5.jpg", caption: "Exterior Perspective" },
        ],
      },
    ],
  },
   {
    id: 6,
    title: "Mixed-Use Dwelling",
    year: "2022",
    type: "Year 1 Project 4",
    description: "A new build in the outskirts of Huddersfield for an artistic dwelling, workshop and studios.",
    gap: "md",
    imageGroups: [
      {
        layout: "trio",
        gap: "sm",
        images: [
          { src: "/images/architecture/1_P4/1.jpg", caption: "" },
          { src: "/images/architecture/1_P4/2.jpg", caption: "" },
          { src: "/images/architecture/1_P4/3.jpg", caption: "" },
        ],
      },
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "/images/architecture/1_P4/4.jpg", caption: "" },
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

export default function ArchitecturePage() {
  return (
    <div className="pt-16">
      {/* Banner — no grey bar */}
      <div className="relative w-full overflow-hidden" style={{ height: "60vh" }}>
        <ParallaxImage
          src="/images/architecture/header.jpg"
          alt="Architecture"
          className="w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-stone-950/30" />
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
              Architecture
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
            Architectural projects completed at Sheffield University for my Part 1 qualification.
          </p>
        </ScrollReveal>
      </div>

      {/* Projects */}
      <div className="px-8 md:px-16 lg:px-24 pb-24">
        {projects.map((project, i) => (
          <ArchitectureProject key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}

function ArchitectureProject({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const projectGapClass = projectGapMap[project.gap] ?? projectGapMap.md;
  const isRight = (project as any).align
    ? (project as any).align === "right"
    : index % 2 !== 0;

  return (
    <div className={projectGapClass}>
      {/* Header */}
      <ScrollReveal delay={0.05}>
        <div className={`flex mb-8 ${isRight ? "justify-end" : "justify-start"}`}>
          <div className={`max-w-lg ${isRight ? "text-right" : "text-left"}`}>
            <p
              className="text-stone-400 mb-2"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
            >
              {project.type} — {project.year}
            </p>
            <h2
              className="font-display font-light text-stone-900 mb-1 md:mb-3"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              {project.title}
            </h2>
            {project.description && (
              <p
                className="text-stone-500"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 300 }}
              >
                {project.description}
              </p>
            )}
          </div>
        </div>
      </ScrollReveal>

      {/* Image groups — each is its own row with its own layout */}
      {project.imageGroups.map((group, gi) => (
        <div
          key={gi}
          className={groupGapMap[group.gap] ?? groupGapMap.sm}
        >
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
      {/* Grey overlay + centred caption on hover */}
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
        {/* Grey overlay + centred caption on hover */}
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
