"use client";

import Image from "next/image";

interface SoftwareProduct {
  name: string;
  logo: string;
  href: string;
  desc: string;
  width: number;
  height: number;
}

const softwareProducts: SoftwareProduct[] = [
  {
    name: "Bamzooka",
    logo: "/brand/bamzooka.webp",
    href: "https://bamzooka.com/",
    desc: "Bamzooka is a recurring checklist software for easy business process management (BPM).",
    width: 192,
    height: 192,
  },
  {
    name: "Montastic",
    logo: "/brand/montastic.webp",
    href: "https://www.montastic.com/",
    desc: "Montastic monitors websites and sends notifications when a problem is detected.",
    width: 75,
    height: 64,
  },
  {
    name: "Mojo Helpdesk",
    logo: "/brand/mojo-star.svg",
    href: "https://www.mojohelpdesk.com/",
    desc: "Mojo Helpdesk is a leading ticketing system to centralize support requests and improve customer service.",
    width: 129,
    height: 123,
  },
];

export default function Products() {
  return (
    <>
      {/* Software */}
      <section id="software" className="section-mojo border-b">
        <div className="container mx-auto max-w-[1140px]">
          {/* Title */}
          <h2 className="section-mojo-title !mb-[3.3rem]">
            <Image
              src="/icon-works.webp"
              alt="separator"
              width={94}
              height={64}
              className="mx-auto my-[10px]"
            />
            Our Software Products
          </h2>

          {/* Grid */}
          <div className="software-products grid md:grid-cols-3 text-left">
            {softwareProducts.map((product) => (
              <div
                key={product.name}
                className="software-product mb-[3.3rem] px-[15px]"
              >
                <Image
                  src={product.logo}
                  alt={`${product.name} Logo`}
                  width={product.width}
                  height={product.height}
                  className="h-[47px] w-auto"
                />
                <h2>{product.name}</h2>
                <p>{product.desc}</p>
                <a
                  href={product.href}
                  className="btn btn-primary"
                  aria-label={`Link to ${product.name}`}
                >
                  Visit the site »
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="section-mojo border-b" id="hardware">
        <div className="container mx-auto max-w-[1140px]">
          <h2 className="section-mojo-title !mb-[3.3rem]">
            <Image
              src="/icon-works.webp"
              alt="separator"
              width={94}
              height={64}
              className="mx-auto my-[10px]"
            />
            Our Hardware Products
          </h2>
          <div className="hardware-products">
            <div className="hardware-product text-center">
              <Image
                src="/daskeyboard.webp"
                alt="Product image"
                width={1909}
                height={766}
                className="hardware-image mb-[.275rem] img-fluid"
              />
              <Image
                src="/daskeyboardbrand.webp"
                alt="Brand image"
                width={1500}
                height={211}
                className="hardware-brand-image mb-[3.3rem]"
              />
              <p className="hardware-description text-center">
                <strong>Das Keyboard</strong> is a brand of high-quality
                mechanical keyboards for typists, software developers, tech
                enthusiasts, and gamers. A reference in the market.
              </p>
              <div>
                <a href="https://www.daskeyboard.com" className="btn-link">
                  Visit Das Keyboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
