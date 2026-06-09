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
    title: "Pavilion Study",
    year: "2024",
    type: "Competition Entry",
    description: "A temporary pavilion exploring thresholds between interior and exterior.",
    gap: "lg",
    imageGroups: [
      {
        layout: "trio",
        gap: "sm",
        images: [
          { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80", caption: "Exterior perspective" },
          { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80", caption: "Detail" },
          { src: "https://images.unsplash.com/photo-1490971588704-2a2d5eab7e77?w=800&q=80", caption: "Plan" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Coastal Dwelling",
    year: "2023",
    type: "Residential Design",
    description: "A house designed around the experience of the horizon.",
    gap: "md",
    imageGroups: [
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1400&q=80", caption: "Site view" },
        ],
      },
      {
        layout: "pair",
        gap: "md",
        images: [
          { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", caption: "Section" },
          { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80", caption: "Detail" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Urban Threshold",
    year: "2022",
    type: "Urban Design",
    description: "An intervention that redefines the edge between public and private space.",
    gap: "lg",
    imageGroups: [
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=80", caption: "Street elevation" },
        ],
      },
      {
        layout: "feature-left",
        gap: "md",
        images: [
          { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000&q=80", caption: "Detail" },
          { src: "https://images.unsplash.com/photo-1490971588704-2a2d5eab7e77?w=800&q=80", caption: "Plan" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Material Studies",
    year: "2022",
    type: "Research",
    description: "Investigations into the expressive potential of raw concrete and timber.",
    gap: "md",
    imageGroups: [
      {
        layout: "trio",
        gap: "sm",
        images: [
          { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", caption: "Model" },
          { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000&q=80", caption: "Detail study" },
          { src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80", caption: "Texture" },
        ],
      },
      {
        layout: "full",
        gap: "md",
        images: [
          { src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1400&q=80", caption: "Full spread" },
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
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
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
            Architectural projects spanning competition entries, residential design,
            and urban interventions. Each project is presented as a curated sequence
            of drawings, models, and built photography.
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
        <ScrollReveal key={i} delay={0.1} direction="none">
          <Img img={img} aspect="4/3" sizes="50vw" />
        </ScrollReveal>
      ))}
    </div>
  );

  if (layout === "feature-left") return (
    <div className="grid grid-cols-5 gap-2 md:gap-4">
      <ScrollReveal delay={0.1} className="md:col-span-3" direction="none">
        <Img img={images[0]} aspect="4/3" sizes="60vw" />
      </ScrollReveal>
      <ScrollReveal delay={0.2} className="md:col-span-2" direction="none">
        <Img img={images[1]} aspect="4/3" sizes="40vw" />
      </ScrollReveal>
    </div>
  );

  if (layout === "feature-right") return (
    <div className="grid grid-cols-5 gap-2 md:gap-4">
      <ScrollReveal delay={0.1} className="md:col-span-2" direction="none">
        <Img img={images[0]} aspect="4/3" sizes="40vw" />
      </ScrollReveal>
      <ScrollReveal delay={0.2} className="md:col-span-3" direction="none">
        <Img img={images[1]} aspect="4/3" sizes="60vw" />
      </ScrollReveal>
    </div>
  );

  if (layout === "trio") return (
    <div className="grid grid-cols-3 gap-2 md:gap-4">
      {images.slice(0, 3).map((img, i) => (
        <ScrollReveal key={i} delay={0.1}>
          <Img img={img} aspect="4/3" sizes="33vw" />
        </ScrollReveal>
      ))}
    </div>
  );

  return null;
}
