import type { Metadata } from "next";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost, getAllBlogs } from "../utils";
import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import { notFound } from "next/navigation";

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
        ? props.children.trim()
        : props.children;

    return (
      <a
        {...props}
        className="text-[#e5a825] underline! underline-offset-2"
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
  img: (props: ImgProps) => (
    <Image
      {...props}
      alt={props.alt || ""}
      className="img-fluid rounded img-post"
      width={props.width || 808}
      height={props.height || 582}
    />
  ),
};

type Params = Promise<{ slug: string[] }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugPath = slug.join("/");

  try {
    const { blog } = await getBlogPost(slugPath);
    const title = blog.title;
    const description =
      blog.description ||
      `${title} — by ${blog.author || "Metadot"} on the Metadot blog.`;
    const ogImage = blog.image || "/building-dark.png";

    return {
      title,
      description,
      authors: blog.author ? [{ name: blog.author }] : undefined,
      openGraph: {
        type: "article",
        title,
        description,
        images: [{ url: ogImage, alt: blog.alt || title }],
        publishedTime: blog.date,
      },
      alternates: { canonical: `/blog/${slugPath}` },
    };
  } catch {
    notFound();
  }
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((post) => ({
    slug: post.slug.split("/"),
  }));
}

export default async function BlogArticlePage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const slugPath = slug.join("/");

  let blogData;
  try {
    blogData = await getBlogPost(slugPath);
  } catch {
    notFound();
  }

  const { blog, content } = blogData;

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    image: blog.image
      ? `https://www.metadot.com${blog.image}`
      : undefined,
    datePublished: blog.date,
    author: {
      "@type": "Person",
      name: blog.author || "Metadot",
    },
    publisher: {
      "@type": "Organization",
      name: "Metadot",
      logo: {
        "@type": "ImageObject",
        url: "https://www.metadot.com/icon.svg",
      },
    },
    mainEntityOfPage: `https://www.metadot.com/blog/${slugPath}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.metadot.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.metadot.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
      },
    ],
  };

  return (
    <>
      <JsonLd data={blogPostingJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <div className="container pt-6">
        <nav>
          <Link className="font-mono text-sm text-[#94a3b8] hover:text-[#f0b93c] transition-colors" href="/blog/">
            &larr; Back to Blog
          </Link>
        </nav>
      </div>
      <article className="blogpost container mb-12">
        <h1 className="blog-title text-3xl md:text-4xl mt-6">{blog.title}</h1>
        <p className="blog-references my-4 text-sm text-[#94a3b8]">
          {blog.author} on{" "}
          <time dateTime={blog.date}>
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
