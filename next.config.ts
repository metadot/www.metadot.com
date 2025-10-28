import type { NextConfig } from "next";
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const nextConfig: NextConfig = {};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
});

export default withMDX(nextConfig);
