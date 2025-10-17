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
  const filePath = path.join(BLOG_DIR, blogFilename);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // --- extract blog frontmatter ---
  const match = fileContent.match(/export const blog\s*=\s*({[\s\S]*?});/m);
  if (!match) throw new Error(`Missing blog metadata in ${blogFilename}`);

  // evaluate safely
  // eslint-disable-next-line no-eval
  const blog = eval("(" + match[1] + ")") as Blog;

  let content = fileContent;

  // Remove everything before the first empty line after the export
  const exportEnd = content.indexOf("};");
  if (exportEnd !== -1) {
    content = content.slice(exportEnd + 2).trim();
  }
  // Split and clean lines
  const lines = content
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith(">") && !l.startsWith("-"));

  // ✅ Just use the very first visible text line
  let excerpt = lines.join(" ") || "";

  // Clean up Markdown and limit length
  const plainExcerpt =
    excerpt
      .replace(/^#+\s*/, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // remove markdown links
      .replace(/[*_`>]/g, "") // remove markdown symbols
      .replace(/\s+/g, " ") // collapse spaces
      .trim()
      .slice(0, 297) + "...";

  const slug = blogFilename.replace(/\.mdx?$/, "").toLowerCase();

  return {
    slug,
    excerpt: plainExcerpt,
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

export async function getBlogPost(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const match = fileContent.match(/export const blog\s*=\s*({[\s\S]*?});/m);
  if (!match) throw new Error(`Missing blog metadata in ${slug}`);

  const blog = eval("(" + match[1] + ")") as Blog;

  const contentStart = fileContent.indexOf("---", match.index || 0);
  let content = "";

  if (contentStart !== -1) {
    const afterMeta = fileContent.indexOf("};", match.index || 0);
    content = fileContent.slice(afterMeta + 2).trim();
  } else {
    content = fileContent.slice(match[0].length).trim();
  }

  return { blog, content };
}
