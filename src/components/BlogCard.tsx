import Image from "next/image";
import Link from "next/link";

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
  buttonText = "Read more",
}: BlogCardProps) {
  return (
    <div className="blog-card mx-auto">
      <div className="blog-card-image">
        <Link href={href}>
          <Image src={imageSrc} alt={alt} width={width} height={height} />
        </Link>
      </div>

      <div className="blog-card-title">
        <h3>
          <Link href={href}>{title}</Link>
        </h3>
      </div>

      <div className="blog-card-excerpt">
        {quote && (
          <p className="text-sm text-[#475569] italic mb-2">&ldquo;{quote}&rdquo;</p>
        )}
        <p>{excerpt}</p>
      </div>

      <div className="px-5 pb-5 mt-auto">
        <Link href={href} className="blog-card-button">
          {buttonText} &rarr;
        </Link>
      </div>
    </div>
  );
}
