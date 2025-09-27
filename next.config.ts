import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // change the build folder to build
  // from .next folder
  distDir: 'build',
  // static site build only - enable
  output: 'export',
};

export default nextConfig;
