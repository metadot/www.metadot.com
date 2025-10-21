import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost } from "../utils";

const components = {
  h2: (props: any) => <h2 className="blog-title title-h2" {...props} />,
  a: (props: any) => {
    const text =
      typeof props.children === "string"
        ? props.children.trim() // removes trailing (and leading) whitespace
        : props.children;

    return (
      <a
        {...props}
        className="text-[#2b70a9] hover:underline"
        target={props.href?.startsWith("http") ? "_blank" : undefined}
        rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    );
  },
  ul: (props: any) => (
    <ul className="list-disc ps-[40px] mb-[1.65rem]" {...props} />
  ),
  li: (props: any) => <li className="mb-[0.55rem]" {...props} />,
  img: (props: any) => {
    <Image
      {...props}
      alt={props.alt || ""}
      className="img-fluid rounded img-post"
      width={props.width || 808}
      height={props.height || 582}
    />;
  },
};

export default async function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { blog, content } = await getBlogPost(params.slug);

  return (
    <>
      <div className="container mt-[1.1rem]">
        <nav className="nav flex">
          <a className="p-[0.55rem] !text-[#6c757d]" href="/blog/">
            Back to Home
          </a>
        </nav>
      </div>{" "}
      <article className="mojo-card blogpost container mb-[3.3rem]">
        <h2 className="blog-title title-h2">{blog.title}</h2>
        <p className="blog-references my-[1.65rem]">
          {blog.author?.name} on{" "}
          <time>{new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}</time>
        </p>

        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.alt || blog.title}
            width={808}
            height={582}
            className="img-fluid rounded img-post"
          />
        )}

        <div className="blog-content pt-[1.1rem]">
          <MDXRemote source={content} components={components} />
        </div>
      </article>
    </>
  );
}
