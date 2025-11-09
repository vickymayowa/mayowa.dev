import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Skip ESLint during production builds
    ignoreDuringBuilds: true,
  },
  domains: ["zuyzoxkdnyentxxydkvp.supabase.co"],
};

export default nextConfig;
