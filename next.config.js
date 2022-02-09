/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fs-prod-cdn.nintendo-europe.com"],
  },
};

module.exports = nextConfig;
