import type { NextConfig } from 'next';

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lucide-react'],
  experimental: {
    authInterrupts: true,
  },
} satisfies NextConfig;

export default nextConfig;
