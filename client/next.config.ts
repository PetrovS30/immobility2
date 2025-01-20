import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: true, // true для 301, false для 302
      },
    ];
  },
};

export default nextConfig;
