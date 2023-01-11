/** @type {import('next').NextConfig} */
const nextVideos = require('next-videos')
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' }
    }
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  ...nextVideos()
}


module.exports = nextConfig
