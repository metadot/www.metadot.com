"use client";

import Image from "next/image";

export interface BlogCardProps {
  title: string;
  quote?: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  width: number;
  height: number;
  href: string;
  buttonText?: string;
}

export default function BlogCard({
  title,
  quote,
  excerpt,
  imageSrc,
  imageAlt,
  width,
  height,
  href,
  buttonText = "Continue Reading",
}: BlogCardProps) {
  return (
    <div className="blog-card container rounded mb-[3.3rem]">
      <div className="blog-card-image">
        <a href={href}>
          <Image src={imageSrc} alt={imageAlt} width={width} height={height} />
        </a>
      </div>

      <div className="blog-card-title mt-[1.1rem]">
        <h3>
          <a href={href}>{title}</a>
        </h3>
      </div>

      <div className="blog-card-excerpt">
          {quote && (
            <h2>
              “{quote}”
            </h2>
          )}
          <p>{excerpt}</p>
        </div>

      <div className="mt-6">
        <a href={href} className="rounded blog-card-button">
          {buttonText}
        </a>
      </div>
    </div>
  );
}
