import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disables type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disables ESLint checking during build (optional, but often paired)
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
};

export default nextConfig;