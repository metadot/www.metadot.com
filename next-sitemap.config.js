import glob from "fast-glob";

/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: "https://www.metadot.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/"],
      },
    ],
  },
  additionalPaths: async () => {
    // Get all blog post paths directly from the filesystem
    const blogFilenames = await glob("**/*.mdx", {
      cwd: "src/app/blog-articles",
    });

    return blogFilenames.map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      return {
        loc: `/blog/${slug}`,
        changefreq: "weekly",
        priority: 0.6,
      };
    });
  },
};