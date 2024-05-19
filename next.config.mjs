/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
module.exports = {
  output: 'export',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/word/[word]': { page: '/word/[word]' },
      '/wordNotFound': { page: '/wordNotFound' }
    };
  },
  distDir: 'dist'
};
