"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="py-[1.1rem] bg-[#f8f9fa] flex justify-center md:pr-[3.3rem]">
        <div className="flex items-center">
          <Link className="nav-link mr-[0.55rem] font-bold" href="/contact">
            Contact Us
          </Link>

          <Link className="nav-link mr-[0.55rem] font-bold" href="/about-us">
            About Us
          </Link>

          <Link
            className="nav-link"
            href="https://github.com/metadot"
            aria-label="GitHub link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-[26px] h-auto" />
          </Link>
          <Link
            className="nav-link"
            href="https://www.linkedin.com/company/metadot-corporation"
            aria-label="LinkedIn link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-[26px] h-auto" />
          </Link>
        </div>
      </footer>
      <footer className="text-center copyright">
        © Copyright {year}, product of{" "}
        <Link href="/" className="btn-link !text-[#1034ea]">
          Metadot
        </Link>
        . All rights reserved. Made with ♥ in Austin, Texas.
      </footer>
    </>
  );
}
