import type { NextConfig } from 'next';

const nextConfig = {
    experimental: {
        reactCompiler: true,
    },
} satisfies NextConfig;

export default nextConfig;
