import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pre-render all pages at build time so there's no on-demand
  // compilation delay when navigating between pages
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
    // Minimise image optimisation overhead in dev
    minimumCacheTTL: 60,
  },
  // Reduce dev overlay noise
  devIndicators: false,
};

export default nextConfig;
