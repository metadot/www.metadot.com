import { getLatestBlogs } from "@/app/blog/utils";
import BlogCard from "@/components/BlogCard";

export default async function LatestPosts() {
  const blogs = await getLatestBlogs(2);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#94a3b8] mb-3">
            From the Blog
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Latest Posts</h2>
        </div>
        <div className="latest-posts">
          {blogs.map((post) => (
            <div key={post.slug}>
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
      </div>
    </section>
  );
}
