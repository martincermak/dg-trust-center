/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // static export — drop this if using SSR/ISR
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: { unoptimized: true },
};

module.exports = nextConfig;
