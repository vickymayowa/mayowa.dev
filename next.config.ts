import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
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
