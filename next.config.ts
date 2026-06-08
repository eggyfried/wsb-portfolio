import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local images from public folder + Unsplash placeholders
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
    // Serve local images without size restrictions
    localPatterns: [
      { pathname: "/images/**" },
    ],
  },
  devIndicators: false,
};

export default nextConfig;
