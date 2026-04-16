"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Products", href: "/#products" },
  { name: "About", href: "/about-us" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  return (
    <header className="navigation z-[1000]">
      <div className="container-header">
        <nav className="navbar">
          {/* Wordmark */}
          <Link href="/" className="navbar-brand">
            <Image
              src="/logo_metadot.webp"
              alt="Metadot"
              width={140}
              height={30}
              className="brightness-0 invert"
              priority
            />
          </Link>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen(!navOpen)}
          >
            <FaBars size={20} />
          </button>

          {/* Desktop nav */}
          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <Link href={link.href} className="nav-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile backdrop */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity z-[999] ${
            navOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeNav}
        />

        {/* Mobile drawer */}
        <aside
          className={`fixed top-0 right-0 h-full z-[1000] w-72 bg-[#1e293b] border-l border-[#334155] shadow-2xl transform transition-transform duration-300 ${
            navOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-[#334155]">
            <Image
              src="/logo_metadot.webp"
              alt="Metadot"
              width={100}
              height={22}
              className="brightness-0 invert"
            />
            <button
              aria-label="Close menu"
              onClick={closeNav}
              className="cursor-pointer p-2 text-[#94a3b8] hover:text-white transition-colors"
            >
              <FaTimes size={18} />
            </button>
          </div>

          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-6 py-3 font-mono text-sm text-[#94a3b8] hover:text-[#f0b93c] hover:bg-[#1e293b] transition-colors"
                onClick={closeNav}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
}
