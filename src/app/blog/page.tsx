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
      <div className="container head-section px-[15px]">
        <h1 className="text-center !mb-0">Metadot Blog</h1>
        <p className="text-center mt-[0.55rem] mb-[3.3rem]">
          A blog about productivity, startups, Metadot products and news.
        </p>
      </div>
      <div className="container-lg grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:gap-[42px]">
        {pageBlogs.map((post) => (
          <div key={post.slug} className="mb-[3.3rem]">
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
      </div>
      <div className="container-lg flex justify-center mb-[3.3rem]">
        <Pagination currentPage={1} totalPages={totalPages} />
      </div>
    </>
  );
}
