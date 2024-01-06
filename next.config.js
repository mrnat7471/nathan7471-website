/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: '/',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  }
}

module.exports = nextConfig
