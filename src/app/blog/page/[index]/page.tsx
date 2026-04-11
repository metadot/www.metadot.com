import { getAllBlogs } from "../../utils";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { POSTS_PER_PAGE } from "../../constants";

interface PageProps {
  params: Promise<{
    index: string;
  }>;
}

export default async function BlogPage({ params }: PageProps) {
  const { index } = await params;
  const currentPage = parseInt(index, 10);
  const blogs = await getAllBlogs();

  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const pageBlogs = blogs.slice(start, end);

  return (
    <>
      <div className="container pt-16 pb-8">
        <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#475569] mb-4 text-center">
          Blog
        </p>
        <h1 className="text-center text-3xl md:text-5xl mb-2">Metadot Blog</h1>
        <p className="text-center text-[#94a3b8] mb-12">
          Productivity, startups, Metadot products and news.
        </p>
      </div>
      <div className="container-lg grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
        {pageBlogs.map((post) => (
          <div key={post.slug} className="mb-4">
            <BlogCard
              title={post.title}
              quote={post.quote}
              excerpt={post.excerpt || post.description}
              imageSrc={post.image || "/blog/default.svg"}
              alt={post.title}
              width={808}
              height={582}
              href={`/blog/${post.slug}/`}
            />
          </div>
        ))}
      </div>
      <div className="container-lg flex justify-center py-8">
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  return Array.from({ length: totalPages }).map((_, i) => ({
    index: (i + 1).toString(),
  }));
}
