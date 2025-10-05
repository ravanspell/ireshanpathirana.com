import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // enable unoptimized for static serve
  // remove this when enable SSR
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
