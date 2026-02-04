import type { NextConfig } from "next";
import nextMDX from "@next/mdx";

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
