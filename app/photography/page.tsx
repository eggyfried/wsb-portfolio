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
    src: "/images/photography/a.jpg",
    caption: "osaka, japan, 2025",
  },
  {
    src: "/images/photography/b.jpg",
    caption: "kyoto, japan, 2025",
  },
  {
    src: "/images/photography/c.jpg",
    caption: "St Ives, UK, 2024",
  },
  {
    src: "/images/photography/d.jpg",
    caption: "Seven Sisters, UK, 2023",
  },
  {
    src: "/images/photography/e.jpg",
    caption: "Hong Kong, 2026",
  },
  {
    src: "/images/photography/f.jpg",
    caption: "Kyoto, Japan, 2025",
  },
  {
    src: "/images/photography/g.jpg",
    caption: "Hong Kong, 2023",
  },
  {
    src: "/images/photography/h.jpg",
    caption: "Yamagata, Japan, 2025",
  },
  {
    src: "/images/photography/i.jpg",
    caption: "Kyoto, Japan, 2025",
  },
  {
    src: "/images/photography/j.jpg",
    caption: "Hong Kong, 2023",
  },
  {
    src: "/images/photography/k.jpg",
    caption: "Iceland, 2018",
  },
  {
    src: "/images/photography/l.jpg",
    caption: "Hong Kong, 2026",
  },
  {
    src: "/images/photography/m.jpg",
    caption: "Hakone, Japan, 2025",
  },
  {
    src: "/images/photography/n.jpg",
    caption: "Peak District, UK, 2022",
  },
  {
    src: "/images/photography/o.jpg",
    caption: "Rye, UK, 2025",
  },
  {
    src: "/images/photography/p.jpg",
    caption: "Hong Kong, 2023",
  },
  {
    src: "/images/photography/q.jpg",
    caption: "Osaka, Japan, 2025",
  },
  {
    src: "/images/photography/r.jpg",
    caption: "Seven Sisters, Uk, 2023",
  },
  {
    src: "/images/photography/s.jpg",
    caption: "Nagano, Japan, 2025",
  },
  {
    src: "/images/photography/t.jpg",
    caption: "Hakone, Japan, 2025",
  },
  {
    src: "/images/photography/u.jpg",
    caption: "Staplehurst, Uk 2023",
  },
  {
    src: "/images/photography/v.jpg",
    caption: "Iceland, 2018",
  },
  {
    src: "/images/photography/w.jpg",
    caption: "Gujo, Japan, 2025",
  },
  {
    src: "/images/photography/x.jpg",
    caption: "Hong Kong, 2026",
  },
  {
    src: "/images/photography/y.jpg",
    caption: "Nagano, Japan, 2025",
  },
  {
    src: "/images/photography/z.jpg",
    caption: "Gujo, Japan 2025",
  },
  {
    src: "/images/photography/aa.jpg",
    caption: "Sheffield, UK, 2024",
  },
  {
    src: "/images/photography/bb.jpg",
    caption: "Hong Kong, 2026",
  },
  {
    src: "/images/photography/cc.jpg",
    caption: "Amsterdam, 2023",
  },
  {
    src: "/images/photography/dd.jpg",
    caption: "Kyoto, Japan, 2023",
  },
  {
    src: "/images/photography/ee.jpg",
    caption: "Hong Kong, 2026",
  },
  {
    src: "/images/photography/ff.jpg",
    caption: "Nagano, Japan, 2025",
  },
  {
    src: "/images/photography/gg.jpg",
    caption: "Hong Kong, 2026",
  },
  {
    src: "/images/photography/hh.jpg",
    caption: "Hong Kong, 2023",
  },
  {
    src: "/images/photography/ii.jpg",
    caption: "Hong Kong, 2026",
  },
  {
    src: "/images/photography/jj.jpg",
    caption: "Tokyo, Japan, 2025",
  },
  {
    src: "/images/photography/kk.jpg",
    caption: "Helsinki, Finland, 2026",
  },
  {
    src: "/images/photography/ll.jpg",
    caption: "Nagano, Japan, 2025",
  },
  {
    src: "/images/photography/mm.jpg",
    caption: "Hong Kong, 2026",
  },
  {
    src: "/images/photography/oo.jpg",
    caption: "Hong Kong, 2026",
  },
  {
    src: "/images/photography/pp.jpg",
    caption: "Hong Kong, 2023",
  },
  {
    src: "/images/photography/qq.jpg",
    caption: "Kyoto, Japan, 2025",
  },
  {
    src: "/images/photography/rr.jpg",
    caption: "Hong Kong, 2026",
  },
  {
    src: "/images/photography/ss.jpg",
    caption: "Hong Kong, 2019",
  },
  {
    src: "/images/photography/tt.jpg",
    caption: "Rye, UK, 2025",
  },
  {
    src: "/images/photography/uu.jpg",
    caption: "Tokyo, Japan, 2025",
  },
  {
    src: "/images/photography/vv.jpg",
    caption: "Matsumoto, Japan, 2025",
  },
  {
    src: "/images/photography/ww.jpg",
    caption: "Peak District, UK, 2024",
  },
  {
    src: "/images/photography/xx.jpg",
    caption: "Naxos, Greece, 2022",
  },
  {
    src: "/images/photography/yy.jpg",
    caption: "Gujo, Japan, 2025",
  },
  {
    src: "/images/photography/zz.jpg",
    caption: "Kyoto, Japan, 2025",
  },
  {
    src: "/images/photography/aaa.jpg",
    caption: "Iceland, 2018",
  },
  {
    src: "/images/photography/bbb.jpg",
    caption: "Kyoto, Japan, 2025",
  },
  {
    src: "/images/photography/ccc.jpg",
    caption: "Peak District, UK, 2023",
  },
  {
    src: "/images/photography/ddd.jpg",
    caption: "Nagano, Japan, 2025",
  },
  {
    src: "/images/photography/eee.jpg",
    caption: "Seven Sisters, UK, 2023",
  },
  {
    src: "/images/photography/fff.jpg",
    caption: "Naxos, Greece, 2022",
  },
  {
    src: "/images/photography/ggg.jpg",
    caption: "Peak District, UK, 2023",
  },
  {
    src: "/images/photography/hhh.jpg",
    caption: "Iceland, 2018",
  },
  {
    src: "/images/photography/iii.jpg",
    caption: "Nagano, Japan, 2025",
  },
  {
    src: "/images/photography/jjj.jpg",
    caption: "Kyoto, Japan, 2025",
  },
  {
    src: "/images/photography/kkk.jpg",
    caption: "Peak District, UK, 2023",
  },
  {
    src: "/images/photography/lll.jpg",
    caption: "London, UK, 2018",
  },
  {
    src: "/images/photography/mmm.jpg",
    caption: "Seven Sisters, UK, 2020",
  },
  {
    src: "/images/photography/nnn.jpg",
    caption: "Tokyo, Japan, 2025",
  },
  {
    src: "/images/photography/ooo.jpg",
    caption: "Nagano, Japan, 2025",
  },
  {
    src: "/images/photography/ppp.jpg",
    caption: "Hong Kong, 2023",
  },
  {
    src: "/images/photography/qqq.jpg",
    caption: "Tokyo, Japan, 2025",
  },
  {
    src: "/images/photography/rrr.jpg",
    caption: "Hakone, Japan, 2025",
  },
  {
    src: "/images/photography/sss.jpg",
    caption: "Nagano, Japan, 2025",
  },
  {
    src: "/images/photography/ttt.jpg",
    caption: "Peak District, UK, 2023",
  },
  {
    src: "/images/photography/uuu.jpg",
    caption: "Uji, Japan, 2025",
  },
  {
    src: "/images/photography/vvv.jpg",
    caption: "Gujo, Japan, 2025",
  },
  {
    src: "/images/photography/www.jpg",
    caption: "Yamagata, Japan, 2025",
  },
  {
    src: "/images/photography/xxx.jpg",
    caption: "Hong Kong, 2026",
  },
  {
    src: "/images/photography/yyy.jpg",
    caption: "Nagano, Japan, 2025",
  },
  {
    src: "/images/photography/zzz.jpg",
    caption: "Gujo, Japan, 2025",
  },
  {
    src: "/images/photography/aaaa.jpg",
    caption: "Takayama, Japan 2025",
  },
  {
    src: "/images/photography/bbbb.jpg",
    caption: "Kyoto, Japan, 2025",
  },
  {
    src: "/images/photography/cccc.jpg",
    caption: "Matsumoto, Japan, 2025",
  },
  {
    src: "/images/photography/dddd.jpg",
    caption: "Nagano, Japan, 2025",
  },
  {
    src: "/images/photography/eeee.jpg",
    caption: "Yamagata, Japan, 2025",
  },
  {
    src: "/images/photography/ffff.jpg",
    caption: "Gujo, Japan, 2025",
  },
  {
    src: "/images/photography/gggg.jpg",
    caption: "Tokyo, Japan, 2025",
  },
  {
    src: "/images/photography/hhhh.jpg",
    caption: "Nagano, Japan, 2025",
  },
  {
    src: "/images/photography/iiii.jpg",
    caption: "Hong Kong, 2026",
  },
  {
    src: "/images/photography/jjjj.jpg",
    caption: "Matsumoto, Japan, 2025",
  },
  {
    src: "/images/photography/kkkk.jpg",
    caption: "Tokyo, Japan, 2025",
  },
  {
    src: "/images/photography/llll.jpg",
    caption: "Takayama, Japan, 2025",
  },
  {
    src: "/images/photography/mmmm.jpg",
    caption: "Takayama, Japan, 2025",
  },
  {
    src: "/images/photography/nnnn.jpg",
    caption: "Cornwall, UK, 2019",
  },
  {
    src: "/images/photography/oooo.jpg",
    caption: "Takayama, Japan, 2025",
  },{
    src: "/images/photography/pppp.jpg",
    caption: "Staplehurst, UK, 2025",
  },
  {
    src: "/images/photography/qqqq.jpg",
    caption: "Hong Kong, 2026",
  },
  {
    src: "/images/photography/rrrr.jpg",
    caption: "Gujo, Japan, 2025",
  },
  {
    src: "/images/photography/ssss.jpg",
    caption: "Takayama, Japan, 2025",
  },
  {
    src: "/images/photography/tttt.jpg",
    caption: "Matsumoto, Japan, 2025",
  },
  {
    src: "/images/photography/uuuu.jpg",
    caption: "Nagano, Japan, 2025",
  },
  {
    src: "/images/photography/vvvv.jpg",
    caption: "Hong Kong, 2019",
  },
  {
    src: "/images/photography/wwww.jpg",
    caption: "Rye, UK, 2025",
  },
  {
    src: "/images/photography/xxxx.jpg",
    caption: "Tokyo, Japan, 2025",
  },
  {
    src: "/images/photography/yyyy.jpg",
    caption: "Tokyo, Japan, 2025",
  },
  {
    src: "/images/photography/zzzz.jpg",
    caption: "Yamagata, Japan, 2025",
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
          src="/images/photography/header.jpg"
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
            A small collection of film and digital, medium format, full frame, cropped and micro 4/3 (everything basically) photography that I've captured over the years.
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
