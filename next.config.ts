import type { NextConfig } from 'next';

const nextConfig = {
  transpilePackages: ['lucide-react'],
  experimental: {
    authInterrupts: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
} satisfies NextConfig;

export default nextConfig;
