"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

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
    name: "Mojo HelpDesk",
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
  const desktopDropRef = useRef<HTMLLIElement>(null);
  const mobileDropRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent outside handler
    setMenuOpen((prev) => !prev);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      const t = e.target as Node;

      const clickedInsideDesktop = desktopDropRef.current?.contains(t) ?? false;
      const clickedInsideMobile = mobileDropRef.current?.contains(t) ?? false;

      if (!clickedInsideDesktop && !clickedInsideMobile) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  return (
    <header className="navigation">
      <div className="container-header">
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

        <div className="mobile-nav text-center">
          <ul
            className={`dropdown ${
              navOpen ? "visible" : "max-h-0 invisible overflow-hidden"
            }`}
          >
            <li className="nav-item">
              <a href="/about-us" className="nav-link ">
                About Us
              </a>
            </li>

            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>

            <li ref={mobileDropRef} className="nav-item">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                onClick={toggleDropdown}
                aria-expanded={menuOpen}
              >
                Products
              </Link>
            </li>
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
            <li className="nav-item">
              <Link href="/blog" className="nav-link">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
