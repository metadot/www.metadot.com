import { getLatestBlogs } from "@/app/blog/utils";
import BlogCard from "@/components/BlogCard";

export default async function LatestPosts() {
  const blogs = await getLatestBlogs(2);

  return (
    <>
      <section className="section-mojo bg-white">
        <div className="container text-center px-[10px] pb-[40px]">
          <h2 className="section-title">Our most recent posts</h2>
        </div>
        <div className="latest-posts container-lg">
          {blogs.map((post) => (
            <div key={post.slug} className="mb-[3.3rem]">
              <BlogCard
                title={post.title}
                quote={post.quote}
                excerpt={post.excerpt || post.description}
                imageSrc={post.image || "/blog/default.svg"}
                alt={post.alt || post.title}
                width={808}
                height={582}
                href={`/blog/${post.slug}/`}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
