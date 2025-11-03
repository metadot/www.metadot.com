import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost } from "../utils";
import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type HeadingProps = ComponentPropsWithoutRef<"h2">;
type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  children?: ReactNode;
};
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;

interface ImgProps extends ComponentPropsWithoutRef<"img"> {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

const components = {
  h2: (props: HeadingProps) => (
    <h2 className="blog-title title-h2" {...props} />
  ),
  a: (props: AnchorProps) => {
    const text =
      typeof props.children === "string"
        ? props.children.trim() // removes trailing (and leading) whitespace
        : props.children;

    return (
      <a
        {...props}
        className="text-[#2b70a9] underline! underline-offset-2"
        target={props.href?.startsWith("http") ? "_blank" : undefined}
        rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    );
  },
  ul: (props: ListProps) => (
    <ul className="list-disc ps-[40px] mb-[1.65rem]" {...props} />
  ),
  li: (props: ListItemProps) => <li className="mb-[0.55rem]" {...props} />,
  img: (props: ImgProps) => {
    <Image
      {...props}
      alt={props.alt || ""}
      className="img-fluid rounded img-post"
      width={props.width || 808}
      height={props.height || 582}
    />;
  },
};

type Params = Promise<{ slug: string[] }>;

export default async function BlogArticlePage({
  params,
}: {
  params: Params;
}) {
  const {slug} = await params;
  const slugPath = slug.join("/");
  const { blog, content } = await getBlogPost(slugPath);

  return (
    <>
      <div className="container mt-[1.1rem]">
        <nav className="nav flex">
          <Link className="p-[0.55rem] !text-[#6c757d]" href="/blog/">
            Back to Home
          </Link>
        </nav>
      </div>{" "}
      <article className="mojo-card blogpost container mb-[3.3rem]">
        <h2 className="blog-title title-h2">{blog.title}</h2>
        <p className="blog-references my-[1.65rem]">
          {blog.author} on{" "}
          <time>
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
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
