import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // static site build only - enable
  output: 'export',
  // enable unoptimized for static serve
  // remove this when enable SSR
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
