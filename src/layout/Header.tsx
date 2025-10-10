"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = () => setMenuOpen(!menuOpen);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
          <Link href="/" className="navbar-brand">
            <Image
              src="/logo_metadot.webp"
              alt="Metadot"
              width={230}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

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
            <li ref={dropdownRef} className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                onClick={toggleDropdown}
                aria-expanded={menuOpen}
              >
                Products
              </button>

              {menuOpen && (
                <div className="dropdown-menu show">
                  <Link href="https://bamzooka.com" className="dropdown-item">
                    <Image
                      src="/brand/bamzooka.webp"
                      alt="Bamzooka"
                      width={192}
                      height={192}
                      className="dropdown-image"
                    />
                    Bamzooka
                  </Link>
                  <Link
                    href="https://www.daskeyboard.com"
                    className="dropdown-item"
                  >
                    <Image
                      src="/brand/dkbrand.webp"
                      alt="Das Keyboard"
                      width={49}
                      height={63}
                      className="dropdown-image"
                    />
                    Das Keyboard
                  </Link>
                  <Link
                    href="https://www.mojohelpdesk.com"
                    className="dropdown-item"
                  >
                    <Image
                      src="/brand/mojo-star.svg"
                      alt="Mojo Helpdesk"
                      width={129}
                      height={123}
                      className="dropdown-image"
                    />
                    Mojo Helpdesk
                  </Link>
                  <Link
                    href="https://www.montastic.com"
                    className="dropdown-item"
                  >
                    <Image
                      src="/brand/montastic.webp"
                      alt="Montastic"
                      width={75}
                      height={64}
                      className="dropdown-image"
                    />
                    Montastic
                  </Link>
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
      </div>
    </header>
  );
}
