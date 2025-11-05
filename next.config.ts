import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Skip ESLint during production builds
    ignoreDuringBuilds: true,
  },
  // other config options here...
};

export default nextConfig;
