import glob from "fast-glob";

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
  imageAlt?: string;
}

async function importBlog(blogFilename: string): Promise<BlogWithSlug> {
  let { blog } = (await import(`../../app/blog-articles/${blogFilename}`)) as {
    default: React.ComponentType;
    blog: Blog;
  };
  const slug = blogFilename.replace(/\.mdx?$/, "").toLowerCase();
  return {
    slug,
    ...blog,
  };
}

export async function getAllBlogs() {
  let blogFilenames = await glob("*.mdx", {
    cwd: "./src/app/blog-articles",
  });

  let blogs = await Promise.all(blogFilenames.map(importBlog));
  return blogs.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}

export async function getLatestBlogs(count: number = 2) {
  const allBlogs = await getAllBlogs();
  return allBlogs.slice(0, count);
}
