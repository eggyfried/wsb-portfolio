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
    title: "The Cherry Orchard",
    year: "2024",
    description: "Chekhov's final masterpiece reimagined in a contemporary industrial space.",
    gap: "lg",
    imageGroups: [
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?w=1200&q=80", caption: "Set design" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Hamlet",
    year: "2023",
    description: "A stripped-back production exploring duality and transformation.",
    gap: "md",
    imageGroups: [
      {
        layout: "pair",
        gap: "sm",
        images: [
          { src: "https://images.unsplash.com/photo-1507276311058-5e6f4a04e6a2?w=900&q=80", caption: "Stage left" },
          { src: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=900&q=80", caption: "Stage right" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "The Glass Menagerie",
    year: "2023",
    description: "Memory and fragility rendered through transparent planes and diffused light.",
    gap: "xl",
    imageGroups: [
      {
        layout: "full",
        gap: "sm",
        images: [
          { src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80", caption: "Full set" },
        ],
      },
      {
        layout: "pair",
        gap: "sm",
        images: [
          { src: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=1200&q=80", caption: "Act I" },
          { src: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1200&q=80", caption: "Act II" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "A Midsummer Night's Dream",
    year: "2022",
    description: "The forest as a psychological landscape, shifting between reality and dream.",
    gap: "md",
    imageGroups: [
      {
        layout: "feature-left",
        gap: "sm",
        images: [
          { src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&q=80", caption: "The forest" },
          { src: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=900&q=80", caption: "Detail" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Three Sisters",
    year: "2022",
    description: "Confined interiors that mirror the characters' emotional imprisonment.",
    gap: "md",
    imageGroups: [
      {
        layout: "right",
        gap: "sm",
        images: [
          { src: "https://images.unsplash.com/photo-1507276311058-5e6f4a04e6a2?w=900&q=80", caption: "Interior" },
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
          src="https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?w=1600&q=80"
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
            A collection of art direction projects spanning theatre, opera, and live performance.
            Each project explores the relationship between space, light, and narrative.
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
        <ScrollReveal key={i} delay={0.1}>
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
