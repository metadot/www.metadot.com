import { getAllBlogs } from "../blog/utils";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { POSTS_PER_PAGE } from "./constants";

export default async function BlogIndex() {
  const blogs = await getAllBlogs();
  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  const pageBlogs = blogs.slice(0, POSTS_PER_PAGE);

  return (
    <>
      <div className="container pt-16 pb-8">
        <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#94a3b8] mb-4 text-center">
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
        <Pagination currentPage={1} totalPages={totalPages} />
      </div>
    </>
  );
}
