"use client";

import {
  FaRegEnvelope,
  FaRegKeyboard,
  FaTasks,
  FaShare,
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";

const cards = [
  {
    title: "Mojo Helpdesk",
    href: "https://www.mojohelpdesk.com/contact-us/",
    icon: <FaRegEnvelope size={32} />,
  },
  {
    title: "Das Keyboard",
    href: "https://www.daskeyboard.com/contact-us/",
    icon: <FaRegKeyboard size={36} />,
  },
  {
    title: "Bamzooka",
    href: "https://bamzooka.com/contact/",
    icon: <FaTasks size={32} />,
  },
  {
    title: "Metadot & Montastic",
    href: "https://support.metadot.com/login/create_request#/ticket-form/13",
    icon: <FaShare size={32} />,
  },
];

export default function Contact() {
  return (
    <>
      <section className="py-16 md:py-24 border-b border-[#334155]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#94a3b8] mb-4">
              Support
            </p>
            <h1 className="text-3xl md:text-5xl">
              Questions? We are here to help
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {cards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-6 bg-[#1e293b] border border-[#334155] rounded-sm hover:border-[#f0b93c] transition-colors"
              >
                <div className="text-[#94a3b8] group-hover:text-[#f0b93c] transition-colors mb-4">
                  {card.icon}
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {card.title}
                </h3>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#334155]">
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#94a3b8] group-hover:text-[#f0b93c] transition-colors">
                    Go to support
                  </span>
                  <FaArrowRight className="w-3 h-3 text-[#94a3b8] group-hover:text-[#f0b93c] group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="section-title">Our international offices</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-[#1e293b] border border-[#334155] rounded-sm">
              <p className="flex items-center gap-2 font-semibold text-white mb-3">
                <Image
                  src="/flags/us-flag.webp"
                  alt="USA flag"
                  width={24}
                  height={16}
                  className="inline-block"
                />
                Austin, Texas, USA (HQ)
              </p>
              <div className="text-sm text-[#94a3b8] leading-relaxed">
                Metadot Corporation
                <br />
                14400 Piper Glen Dr
                <br />
                Austin, Texas 78738-6528
                <br />
                USA
                <br />
                <br />
                Tel:{" "}
                <a href="tel:+15126379983" className="hover:text-[#f0b93c]">
                  +1 512-637-9983
                </a>
                <br />
                Fax: +1 512-233-5335
              </div>
            </div>

            <div className="p-6 bg-[#1e293b] border border-[#334155] rounded-sm">
              <p className="flex items-center gap-2 font-semibold text-white mb-3">
                <Image
                  src="/flags/france-flag.webp"
                  alt="France flag"
                  width={24}
                  height={16}
                  className="inline-block"
                />
                France
              </p>
              <div className="text-sm text-[#94a3b8] leading-relaxed">
                29 bis, Rue de la Prairie
                <br />
                78120 Rambouillet - FRANCE
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
