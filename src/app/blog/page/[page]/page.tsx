import { getAllBlogs } from "../../utils";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { POSTS_PER_PAGE } from "../../constants";

export default async function BlogPage({
  params,
}: {
  params: { page: string };
}) {
  const currentPage = parseInt(params.page, 10);
  const blogs = await getAllBlogs();

  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const pageBlogs = blogs.slice(start, end);

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
          <div key={post.slug} className="w-1/2 px-[15px] mb-[3rem]">
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
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );
}

// Static generation for all paginated routes
export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  return Array.from({ length: totalPages }).map((_, i) => ({
    page: (i + 1).toString(),
  }));
}
