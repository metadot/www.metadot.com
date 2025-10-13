"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="py-[1.1rem] bg-[#f8f9fa] flex justify-center !pr-[3.3rem]">
        <div className="flex items-center">
          <a className="nav-link mr-[0.55rem] font-bold" href="/contact">
            Contact Us
          </a>

          <a className="nav-link mr-[0.55rem] font-bold" href="/contact">
            About Us
          </a>

          <a
            className="nav-link"
            href="https://github.com/metadot"
            aria-label="GitHub link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={26} />
          </a>
          <a
            className="nav-link"
            href="https://www.linkedin.com/company/metadot-corporation"
            aria-label="LinkedIn link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={23} />
          </a>
        </div>
      </footer>
      <footer className="text-center copyright">
        © Copyright 2020, product of{" "}
        <a href="/" className="btn-link" style={{ color: "#1034ea" }}>
          Metadot
        </a>
        . All rights reserved. Made with ♥ in Austin, Texas.
      </footer>
    </>
  );
}
