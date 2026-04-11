import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const productLinks = [
  { name: "Das Keyboard", href: "https://www.daskeyboard.com" },
  { name: "Mojo Helpdesk", href: "https://www.mojohelpdesk.com" },
  { name: "Bamzooka", href: "https://bamzooka.com" },
  { name: "Montastic", href: "https://www.montastic.com" },
  { name: "TyprX", href: "https://typrx.com" },
];

const companyLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Beta Program", href: "/beta" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] border-t border-[#334155]">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/logo_metadot.webp"
                alt="Metadot"
                width={120}
                height={26}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-[#94a3b8] leading-relaxed mt-2">
              Hardware and software products built in Austin, Texas.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-[#94a3b8] mb-4">
              Products
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-[#f0b93c] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-[#94a3b8] mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-[#f0b93c] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-[#94a3b8] mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              <Link
                href="https://github.com/metadot"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-[#334155] rounded-sm text-[#94a3b8] hover:text-[#f0b93c] hover:border-[#f0b93c] transition-colors"
              >
                <FaGithub size={16} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/metadot-corporation"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-[#334155] rounded-sm text-[#94a3b8] hover:text-[#f0b93c] hover:border-[#f0b93c] transition-colors"
              >
                <FaLinkedin size={16} />
              </Link>
            </div>
            <p className="text-xs text-[#94a3b8] mt-4 leading-relaxed">
              Austin, Texas, USA
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        &copy; {year} Metadot Corporation. All rights reserved.
      </div>
    </footer>
  );
}
