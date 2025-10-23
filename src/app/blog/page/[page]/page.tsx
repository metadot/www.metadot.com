import { getAllBlogs } from "../../utils";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { POSTS_PER_PAGE } from "../../constants";

export default async function BlogPage({
  params,
}: {
  params: { page: string };
}) {
  const {page} = await params;
  const currentPage = parseInt(page, 10);
  const blogs = await getAllBlogs();

  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const pageBlogs = blogs.slice(start, end);

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
          <div key={post.slug} className="mb-[3rem]">
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
