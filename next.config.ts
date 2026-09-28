import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    // Whitelisted remote hosts for external image URLs.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default config;