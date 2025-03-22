import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.ashyo.fullstackdev.uz",
      },
    ],
  },
};

export default createNextIntlPlugin()(nextConfig);
