import { getLatestBlogs } from "@/app/blog/utils";
import BlogCard from "@/components/BlogCard";

export default async function LatestPosts() {
  const blogs = await getLatestBlogs(2);
  console.log("COUCOU");
  console.log(blogs);

  return (
    <>
      <section className="section-mojo">
        <div className="container mx-auto text-center px-[10px] pb-[40px]">
          <h2 className="section-mojo-title">Our most recent posts</h2>
        </div>
        <div className="container-lg mx-auto flex flex-wrap justify-center text-left">
          {blogs.map((post) => (
            <div key={post.slug} className="w-[570px] px-[15px]">
              <BlogCard
                title={post.title}
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
