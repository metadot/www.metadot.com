"use client";

import { smoothScroll } from "@/lib/smoothScroll";

export default function ScrollLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      smoothScroll(href, 600);
    }
  };

  return (
    <a href={href} className={className} onClick={handleSmoothScroll}>
      {children}
    </a>
  );
}
