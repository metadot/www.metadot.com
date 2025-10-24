"use client";

import Image from "next/image";

export interface BlogCardProps {
  title: string;
  excerpt: string;
  imageSrc: string;
  alt: string;
  width: number;
  height: number;
  href: string;
  quote?: string;
  buttonText?: string;
}

export default function BlogCard({
  title,
  quote,
  excerpt,
  imageSrc,
  alt,
  width,
  height,
  href,
  buttonText = "Continue Reading",
}: BlogCardProps) {
  return (
    <div className="blog-card rounded mx-auto">
      <div className="blog-card-image">
        <a href={href}>
          <Image src={imageSrc} alt={alt} width={width} height={height}/>
        </a>
      </div>

      <div className="blog-card-title mt-[1.1rem]">
        <h3>
          <a href={href}>{title}</a>
        </h3>
      </div>

      <div className="blog-card-excerpt">
        {quote && <h4>“{quote}”</h4>}
        <p>{excerpt}</p>
      </div>

      <div className="px-[15px] text-center">
        <a href={href} className="rounded blog-card-button">
          {buttonText}
        </a>
      </div>
    </div>
  );
}
