import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  images: {
    // Bypass the image optimiser for all images.
    // Local files in /public are served directly, no 400 errors.
    // Unsplash placeholders load as normal external URLs.
    unoptimized: true,
  },
  devIndicators: false,
};
 
export default nextConfig;