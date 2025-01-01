import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['lucide-react'],
} satisfies NextConfig;

export default nextConfig;
