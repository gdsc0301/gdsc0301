/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.guibr.com'
      },
      {
        protocol: 'http',
        hostname: 's3.guibr.com'
      }
    ]
  }
}

module.exports = nextConfig
