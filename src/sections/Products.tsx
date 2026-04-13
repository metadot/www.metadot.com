import Image from "next/image";
import Link from "next/link";

interface Product {
  name: string;
  tag: string;
  href: string;
  desc: string;
}

const softwareProducts: Product[] = [
  {
    name: "Mojo Helpdesk",
    tag: "Ticketing",
    href: "https://www.mojohelpdesk.com/",
    desc: "Centralize support requests. Track, prioritize, and resolve tickets faster.",
  },
  {
    name: "Bamzooka",
    tag: "Checklists",
    href: "https://bamzooka.com/",
    desc: "Recurring checklists for business process management. Never miss a step.",
  },
  {
    name: "Montastic",
    tag: "Monitoring",
    href: "https://www.montastic.com/",
    desc: "Website monitoring with instant notifications when something goes down.",
  },
  {
    name: "TyprX",
    tag: "Typing",
    href: "https://typrx.com/",
    desc: "Online typing races. Compete against others and track your speed.",
  },
];

export default function Products() {
  return (
    <>
      {/* Software Products */}
      <section id="products" className="py-16 md:py-24 border-b border-[#334155]">
        <div className="container">
          <div className="mb-12">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#94a3b8] mb-3">
              Software
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Our Products</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {softwareProducts.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-[#1e293b] border border-[#334155] rounded-sm hover:border-[#475569] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-base font-semibold text-white">
                    {product.name}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#94a3b8] border border-[#94a3b8] px-2 py-0.5 rounded-sm">
                    {product.tag}
                  </span>
                </div>
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                  {product.desc}
                </p>
                <span className="font-mono text-xs text-[#f0b93c] group-hover:text-[#e5a825] transition-colors inline-flex items-center gap-1">
                  Visit site
                  <span className="group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware: Das Keyboard */}
      <section id="hardware" className="py-16 md:py-24 bg-[#1e293b] border-b border-[#334155]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Image */}
            <div className="md:w-3/5">
              <Image
                src="/daskeyboard-dark.webp"
                alt="Das Keyboard mechanical keyboard"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>

            {/* Text */}
            <div className="md:w-2/5">
              <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#94a3b8] mb-3">
                Hardware
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Das Keyboard
              </h2>
              <p className="text-[#94a3b8] leading-relaxed mb-6">
                Premium mechanical keyboards for typists, developers, and
                enthusiasts. Gold-plated switches, aluminum construction,
                built to last.
              </p>
              <Link
                href="https://www.daskeyboard.com"
                className="btn-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Das Keyboard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
