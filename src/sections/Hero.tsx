"use client";

import { smoothScroll } from "@/lib/smoothScroll";
import Image from "next/image";

export default function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      smoothScroll(href);
    }
  };

  return (
    <>
      <section
        id="banner"
        className="section-mojo border-b text-center h-screen"
      >
        <div className="pointer-events-none fixed inset-0 -z-10">
          <Image
            src="/building.webp"
            alt="Hero"
            fill
            priority
            sizes="(min-width: 1600px) 1600px, 100vw"
            className="bg-img"
          />
        </div>
        <div className="container">
          <h1 className="banner-title">Move Forward. Faster.</h1>
          <h2 className="banner-subtitle">
            Tools That Boost Productivity Up Through The Roof.
          </h2>
          <a
            href="#software"
            className="btn banner-button"
            onClick={handleSmoothScroll}
          >
            USE IT WITH CAUTION
          </a>
        </div>
      </section>
    </>
  );
}
