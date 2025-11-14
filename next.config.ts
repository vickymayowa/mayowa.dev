import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Skip ESLint during production builds
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["zuyzoxkdnyentxxydkvp.supabase.co"],
  },
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
