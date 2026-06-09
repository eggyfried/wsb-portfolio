"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";

const projects = [
  {
    id: 1,
    title: "The Cherry Orchard",
    year: "2024",
    description: "Chekhov's final masterpiece reimagined in a contemporary industrial space.",
    images: [
      "https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?w=1200&q=80",
      "https://images.unsplash.com/photo-1507276311058-5e6f4a04e6a2?w=900&q=80",
    ],
    wide: true,
  },
  {
    id: 2,
    title: "Hamlet",
    year: "2023",
    description: "A stripped-back production exploring duality and transformation.",
    images: [
      "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=900&q=80",
    ],
    wide: false,
  },
  {
    id: 3,
    title: "The Glass Menagerie",
    year: "2023",
    description: "Memory and fragility rendered through transparent planes and diffused light.",
    images: [
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80",
    ],
    wide: true,
  },
  {
    id: 4,
    title: "A Midsummer Night's Dream",
    year: "2022",
    description: "The forest as a psychological landscape, shifting between reality and dream.",
    images: [
      "https://images.unsplash.com/photo-1503095396549-807759245b35?w=900&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=900&q=80",
    ],
    wide: false,
  },
  {
    id: 5,
    title: "Three Sisters",
    year: "2022",
    description: "Confined interiors that mirror the characters' emotional imprisonment.",
    images: [
      "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1200&q=80",
    ],
    wide: true,
  },
];

export default function SetDesignPage() {
  return (
    <div className="pt-16">
      {/* Banner */}
      <div className="relative w-full overflow-hidden" style={{ height: "60vh" }}>
        <ParallaxImage
          src="https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?w=1600&q=80"
          alt="Set Design"
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
              Set Design
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
            A collection of set designs spanning theatre, opera, and live performance.
            Each project explores the relationship between space, light, and narrative.
          </p>
        </ScrollReveal>
      </div>

      {/* Projects */}
      <div className="px-8 md:px-16 lg:px-24 pb-24">
        {projects.map((project, i) => (
          <ProjectSection key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}

function ProjectSection({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <div className="mb-24 md:mb-32">
      {/* Project header */}
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
            className="text-stone-500 mb-8 max-w-md"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 300 }}
          >
            {project.description}
          </p>
        )}
      </ScrollReveal>

      {/* Images */}
      {project.wide && project.images.length === 1 ? (
        <ScrollReveal delay={0.1}>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover hover:scale-[1.03] transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
              sizes="(max-width: 768px) 100vw, 80vw"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      ) : project.images.length === 2 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ScrollReveal delay={0.1} className="col-span-1 md:col-span-1 md:col-start-1" direction={index % 2 === 0 ? "left" : "right"}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src={project.images[0]}
                alt={`${project.title} 1`}
                fill
                className="object-cover hover:scale-[1.03] transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2} direction={index % 2 === 0 ? "right" : "left"}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src={project.images[1]}
                alt={`${project.title} 2`}
                fill
                className="object-cover hover:scale-[1.03] transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      ) : (
        <ScrollReveal delay={0.1}>
          <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", maxWidth: "65%" }}>
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover hover:scale-[1.03] transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
              sizes="(max-width: 768px) 100vw, 65vw"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}
