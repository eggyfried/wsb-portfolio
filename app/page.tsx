"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const categories: {
  title: string;
  href: string;
  image: string | null;
  alt: string;
  external?: boolean;
}[] = [
  {
    title: "Art Direction",
    href: "/art-direction",
    image:
      "https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?w=1600&q=80",
    alt: "Art direction theatrical space",
  },
  {
    title: "Architecture",
    href: "/architecture",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
    alt: "Architecture building design",
  },
  {
    title: "Photography",
    href: "/photography",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600&q=80",
    alt: "Photography portfolio",
  },
  {
    title: "CV",
    href: "/cv",
    image: null,
    alt: "",
    
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <motion.div className="absolute inset-0 scale-110" style={{ y: heroY }}>
          <Image
            src="https://images.unsplash.com/photo-1503095396549-807759245b35?w=2000&q=80"
            alt="William Stewart-Blacker Portfolio Hero"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-stone-950/40" />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="text-white/60 tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.3em" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Portfolio
          </motion.p>
          <motion.h1
            className="text-white font-display font-light leading-none flex flex-col items-center md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Mobile: two lines stacked, smaller so Stewart-Blacker fits */}
            <span className="block md:hidden" style={{ fontSize: "clamp(2rem, 10vw, 3.5rem)", letterSpacing: "0.12em" }}>William</span>
            <span className="block md:hidden font-extralight whitespace-nowrap" style={{ fontSize: "clamp(1.6rem, 7.5vw, 3rem)", letterSpacing: "0.1em" }}>Stewart-Blacker</span>
            {/* Desktop: original large sizing */}
            <span className="hidden md:block" style={{ fontSize: "clamp(3rem, 8vw, 8rem)", letterSpacing: "0.15em" }}>
              William
              <br />
              <span className="font-extralight">Stewart-Blacker</span>
            </span>
          </motion.h1>
          <motion.div
            className="mt-10 flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {["Art Direction", "Architecture", "Photography"].map((d, i) => (
              <span
                key={d}
                className="text-white/60 text-[0.45rem] md:text-[0.65rem]"
                style={{ fontFamily: "var(--font-body)", letterSpacing: "0.15em", textTransform: "uppercase" }}
              >
                {d}
                {i < 2 && <span className="ml-2 md:ml-6 text-white/20">·</span>}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span
            className="text-white/40"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
          >
            Scroll
          </span>
          <motion.div
            className="w-px h-12 bg-white/30 origin-top"
            animate={{ scaleY: [0, 1, 0], y: [0, 0, 12] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* Category Navigation */}
      <section className="w-full flex flex-col" style={{ gap: 0 }}>
        {categories.map((cat, index) => (
          <CategorySection key={cat.href} cat={cat} index={index} />
        ))}
      </section>
    </>
  );
}

function CategorySection({
  cat,
  index,
}: {
  cat: (typeof categories)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const LinkComponent = cat.external ? "a" : Link;
  const linkProps = cat.external
    ? { href: cat.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: cat.href };

  return (
    <motion.div
      ref={ref}
      className="relative w-full overflow-hidden cursor-view group"
      style={{ height: "clamp(300px, 40vw, 600px)", marginBottom: "-2px" }}
    >
      <LinkComponent {...(linkProps as any)}>
        {/* Image — parallax on desktop, static on mobile to prevent edge gaps */}
        {cat.image ? (
          <>
            {/* Desktop: parallax */}
            <motion.div className="absolute inset-0 scale-125 hidden md:block" style={{ y: imgY }}>
              <Image
                src={cat.image}
                alt={cat.alt}
                fill
                className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                sizes="100vw"
                loading={index < 2 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-stone-950/20 transition-colors duration-700" />
            </motion.div>
            {/* Mobile: static, no parallax, no scale, no gaps */}
            <div className="absolute inset-0 md:hidden">
              <Image
                src={cat.image}
                alt={cat.alt}
                fill
                className="object-cover"
                sizes="100vw"
                loading={index < 2 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-stone-950/30" />
            </div>
          </>
        ) : (
          <div className="absolute inset-0 bg-stone-900 group-hover:bg-stone-800 transition-colors duration-700" />
        )}

        {/* Title + line that expands in proportion with letter-spacing */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h2
              className="text-white font-display font-light tracking-wide group-hover:tracking-widest transition-all duration-700"
              style={{ fontSize: "clamp(2rem, 5vw, 5.5rem)" }}
            >
              {cat.title}
            </h2>
            {/* Line grows proportionally as letter-spacing widens on hover */}
            <div
              className="h-px bg-white/40 mt-4 w-10 group-hover:w-24 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </div>
        </div>

        {/* Number */}
        <span
          className="absolute bottom-6 right-8 text-white/30"
          style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.12em" }}
        >
          0{index + 1}
        </span>
      </LinkComponent>
    </motion.div>
  );
}
