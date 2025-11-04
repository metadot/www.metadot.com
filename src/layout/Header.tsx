"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const products = [
  {
    name: "Bamzooka",
    href: "https://bamzooka.com",
    src: "/brand/bamzooka.webp",
    width: 192,
    height: 192,
  },
  {
    name: "Das Keyboard",
    href: "https://www.daskeyboard.com",
    src: "/brand/dkbrand.webp",
    width: 49,
    height: 63,
  },
  {
    name: "Mojo Helpdesk",
    href: "https://www.mojohelpdesk.com",
    src: "/brand/mojo-star.svg",
    width: 129,
    height: 123,
  },
  {
    name: "Montastic",
    href: "https://www.montastic.com",
    src: "/brand/montastic.webp",
    width: 75,
    height: 64,
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

  const desktopDropRef = useRef<HTMLLIElement>(null);
  const mobileDropRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent outside handler
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const onMouseUp = (e: MouseEvent) => {
      const t = e.target as Node;

      const clickedInsideDesktop = desktopDropRef.current?.contains(t) ?? false;
      const clickedInsideMobile = mobileDropRef.current?.contains(t) ?? false;

      if (!clickedInsideDesktop && !clickedInsideMobile) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mouseup", onMouseUp);
    return () => document.removeEventListener("mouseup", onMouseUp);
  }, []);

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
    <header className="navigation z-[1000] bg-white!" >
      <div className="container-header z-[1000]">
        <nav className="navbar">
          {/* Logo */}
          {/* Logo */}
          {/* Logo */}
          {/* Logo */}
          {/* Logo */}
          <Link href="/" className="navbar-brand ">
            <Image
              src="/logo_metadot.webp"
              alt="Metadot"
              width={230}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

          <button
            className="navbar-toggler relative cursor-pointer "
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <FaBars size={24} />
          </button>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/about-us" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>

            {/* Dropdown */}
            {/* Dropdown */}
            {/* Dropdown */}
            {/* Dropdown */}
            {/* Dropdown */}
            <li ref={desktopDropRef} className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                onClick={toggleDropdown}
                aria-expanded={menuOpen}
              >
                Products
              </button>

              {menuOpen && (
                <div className="dropdown-menu show">
                  {products.map(({ name, href, src, width, height }) => (
                    <Link key={name} href={href} className="dropdown-item">
                      <Image
                        src={src}
                        alt={name}
                        width={width}
                        height={height}
                        className="dropdown-image"
                      />
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li className="nav-item">
              <Link href="/blog" className="nav-link">
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className={`background-blur fixed inset-0 backdrop-blur-sm transition-opacity z-[999] ${
            navOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeNav}
        />

        {/* Side Drawer (mobile nav) */}
        <aside
          className={`fixed top-0 right-0 h-full z-[1000] w-64 bg-white shadow-xl transform transition-transform duration-300  ${
            navOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b text-center">
            <Image
              src="/logo_metadot.webp"
              alt="Metadot"
              width={140}
              height={40}
              className="object-contain"
            />
            <button aria-label="Close menu" onClick={closeNav} className="cursor-pointer">
              <FaTimes size={22} />
            </button>
          </div>

          <nav className="flex flex-col text-left px-[5px]">
            <Link
              href="/about-us"
              className="nav-item nav-link !py-[10px] !px-[11px]"
              onClick={closeNav}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="nav-link !py-[10px] !px-[11px]"
              onClick={closeNav}
            >
              Contact
            </Link>

            {/* Mobile dropdown */}
            <div ref={mobileDropRef} className="nav-item py-[10px] ">
              <Link
                className="nav-link dropdown-toggle !px-[11px]"
                href="#"
                onClick={toggleDropdown}
                aria-expanded={menuOpen}
              >
                Products
              </Link>

              {menuOpen && (
                <div className="dropdown-menu show">
                  {products.map(({ name, href, src, width, height }) => (
                    <Link key={name} href={href} className="dropdown-item">
                      <Image
                        src={src}
                        alt={name}
                        width={width}
                        height={height}
                        className="dropdown-image"
                      />
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="nav-link !py-[10px] !px-[11px]"
              onClick={closeNav}
            >
              Blog
            </Link>
          </nav>
        </aside>
      </div>
    </header>
  );
}
