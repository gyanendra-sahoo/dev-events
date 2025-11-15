import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemChaceForDev: true,
  } 
};

export default nextConfig;
