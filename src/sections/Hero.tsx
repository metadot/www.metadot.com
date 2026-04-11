"use client";

import { smoothScroll } from "@/lib/smoothScroll";

export default function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      smoothScroll(href);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center border-b border-[#334155]">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,185,60,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(240,185,60,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container relative z-10 py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-[#f0b93c] tracking-wider mb-6">
            METADOT CORPORATION
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Built for
            <br />
            Overachievers.
          </h1>
          <p className="text-lg md:text-xl text-[#94a3b8] max-w-xl mb-10 leading-relaxed">
            Hardware and software tools that boost productivity through the
            roof. From mechanical keyboards to helpdesk systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="btn-primary btn"
              onClick={handleSmoothScroll}
            >
              Explore Products
            </a>
            <a
              href="/beta"
              className="btn"
            >
              Join the Beta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
