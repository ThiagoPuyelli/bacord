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
  env: {
    EMAIL: 'thiagopuyelli@gmail.com',
    EMAIL_PASS: 'xmqqcsgdticmgejj'
  },
  ...nextVideos()
}


module.exports = nextConfig
