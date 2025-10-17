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
      <div className="container head-section px-[15px] mx-auto">
        <h1 className="text-center !mb-0">Metadot Blog</h1>
        <p className="text-center mt-[0.55rem] mb-[3.3rem]">
          A blog about productivity, startups, Metadot products and news.
        </p>
      </div>
      <div className="max-w-[1140px] mx-auto flex flex-wrap justify-center text-left mb-[3.3rem]">
        {pageBlogs.map((post) => (
          <div key={post.slug} className="w-1/2 px-[15px] mb-[3.3rem]">
            <BlogCard
              title={post.title}
              excerpt={post.excerpt || post.description}
              imageSrc={post.image || "/blog/default.svg"}
              alt={post.title}
              width={808}
              height={582}
              href={`/blog/${post.slug}/`}
            />
          </div>
        ))}
        <Pagination currentPage={1} totalPages={totalPages} />
      </div>
    </>
  );
}
