"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import Lightbox from "@/components/Lightbox";

// ─────────────────────────────────────────────
// ADD YOUR PHOTOS HERE
// To add a new photo, copy one block and paste
// it at the end of the list before the ];
// Only fill in src and caption — that's it!
// ─────────────────────────────────────────────
const photos = [
  {
    src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=80",
    caption: "Untitled, 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?w=800&q=80",
    caption: "Study I, 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1527334919515-b8dee906a34b?w=800&q=80",
    caption: "Light Study, 2023",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80",
    caption: "Landscape Series, 2023",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
    caption: "Interior, 2023",
  },
  {
    src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
    caption: "Nocturne I, 2022",
  },
  {
    src: "https://images.unsplash.com/photo-1521334726092-b509a19597c6?w=800&q=80",
    caption: "Portrait Study, 2022",
  },
  {
    src: "https://images.unsplash.com/photo-1475775030903-83cdb1f2e97f?w=1200&q=80",
    caption: "Urban Fragment, 2022",
  },
  {
    src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
    caption: "Still Life, 2021",
  },
  {
    src: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=800&q=80",
    caption: "Architecture Detail, 2021",
  },
  {
    src: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?w=1200&q=80",
    caption: "Coast, 2021",
  },
  {
    src: "https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?w=800&q=80",
    caption: "Winter Study, 2020",
  },
];

// ─────────────────────────────────────────────
// No need to edit anything below this line
// ─────────────────────────────────────────────

// Split photos into 3 columns, distributing evenly
function buildColumns(items: typeof photos, count: number) {
  const columns: (typeof photos)[] = Array.from({ length: count }, () => []);
  items.forEach((photo, i) => {
    columns[i % count].push(photo);
  });
  return columns;
}

export default function PhotographyPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxImages = photos.map((p) => ({
    src: p.src,
    alt: p.caption,
    caption: p.caption,
  }));

  const desktopColumns = buildColumns(photos, 3);
  const mobileColumns = buildColumns(photos, 2);

  return (
    <div className="pt-16">
      {/* Banner */}
      <div className="relative w-full overflow-hidden" style={{ height: "60vh" }}>
        <ParallaxImage
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600&q=80"
          alt="Photography"
          className="w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-stone-950/25" />
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
              Portfolio
            </p>
            <h1
              className="text-white font-display font-light"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              Photography
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Intro */}
      <div className="px-8 md:px-16 lg:px-24 py-16 md:py-24">
        <ScrollReveal>
          <p
            className="max-w-xl text-stone-500 leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              fontWeight: 300,
            }}
          >
            A personal photographic practice running alongside design work —
            exploring light, space, and the overlooked detail.
          </p>
        </ScrollReveal>
      </div>

      {/* Masonry grid — mobile: 2 columns, desktop: 3 columns */}
      <div className="px-8 md:px-16 lg:px-24 pb-24">

        {/* Mobile: 2 columns */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {mobileColumns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-3">
              {col.map((photo) => {
                const globalIndex = photos.indexOf(photo);
                return (
                  <MasonryThumb
                    key={globalIndex}
                    photo={photo}
                    index={globalIndex}
                    onClick={() => setLightboxIndex(globalIndex)}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Desktop: 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          {desktopColumns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              {col.map((photo) => {
                const globalIndex = photos.indexOf(photo);
                return (
                  <MasonryThumb
                    key={globalIndex}
                    photo={photo}
                    index={globalIndex}
                    onClick={() => setLightboxIndex(globalIndex)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={() =>
          setLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % photos.length : 0
          )
        }
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev !== null ? (prev - 1 + photos.length) % photos.length : 0
          )
        }
      />
    </div>
  );
}

function MasonryThumb({
  photo,
  index,
  onClick,
}: {
  photo: (typeof photos)[0];
  index: number;
  onClick: () => void;
}) {
  return (
    <ScrollReveal delay={0.05}>
      <button
        className="block w-full cursor-view group relative overflow-hidden"
        onClick={onClick}
        aria-label={`View ${photo.caption}`}
      >
        <Image
          src={photo.src}
          alt={photo.caption}
          width={800}
          height={600}
          className="w-full h-auto object-cover transition-all duration-500"
          sizes="(max-width: 768px) 50vw, 33vw"
          loading="lazy"
        />
        {/* Darken on hover + caption bottom left */}
        <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/45 transition-all duration-500" />
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span
            className="text-white"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {photo.caption}
          </span>
        </div>
      </button>
    </ScrollReveal>
  );
}
