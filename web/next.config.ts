import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // /manager 로 들어오면 질문 분석으로 보내요
      { source: "/manager", destination: "/manager/insights", permanent: false },
    ];
  },
};

export default nextConfig;
