import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // 👈 忽略构建时的 ESLint 报错
  },
};

export default nextConfig;
