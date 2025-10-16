import glob from "fast-glob";
import path from "path";
import fs from "fs";

interface Blog {
  title: string;
  description: string;
  author: {
    name: string;
    src: string;
  };
  date: string;
  image?: string;
  alt?: string;
}

export interface BlogWithSlug extends Blog {
  slug: string;
  excerpt?: string;
}

const BLOG_DIR = path.join(process.cwd(), "src/app/blog-articles");

async function importBlog(blogFilename: string): Promise<BlogWithSlug> {
  const { blog } = (await import(
    `../../app/blog-articles/${blogFilename}`
  )) as {
    default: React.ComponentType;
    blog: Blog;
  };

  const filePath = path.join(BLOG_DIR, blogFilename);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const parts = fileContent.split("---");
  const content = parts[parts.length - 1].trim();

  // Find first non-empty line
  const text = content
    .split("\n")
    .map((l) => l.trim())
    .join(" "); // join into one string

  // Clean and limit to 297 chars
  const excerpt =
    text
      .replace(/^#+\s*/, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // remove markdown links
      .replace(/[*_`>]/g, "") // remove markdown symbols
      .replace(/\s+/g, " ") // collapse spaces
      .trim()
      .slice(0, 297) + "...";

  const slug = blogFilename.replace(/\.mdx?$/, "").toLowerCase();

  return {
    slug,
    excerpt,
    ...blog,
  };
}

export async function getAllBlogs() {
  const blogFilenames = await glob("*.mdx", {
    cwd: BLOG_DIR,
  });

  const blogs = await Promise.all(blogFilenames.map(importBlog));

  return blogs.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}

export async function getLatestBlogs(count: number = 2) {
  const allBlogs = await getAllBlogs();
  return allBlogs.slice(0, count);
}
