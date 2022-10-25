/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.NODE_ENV === 'production' ? '/nextjsDemo' : '',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    return {
      '/': { page: '/' },
    };
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
