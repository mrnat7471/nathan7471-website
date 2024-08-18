/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
