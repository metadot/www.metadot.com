"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="py-[1.1rem] bg-gray-50 flex justify-center pr-0 md:pr-5">
        <div className="flex items-center space-x-4">
          <div>
            <a className=" py-[.5rem] px-[1rem] mr-[.55rem]" href="/contact">
              Contact Us
            </a>
          </div>
          <div>
            <a className=" py-[.5rem] px-[1rem] mr-[.55rem]" href="/contact">
              About Us
            </a>
          </div>
          <div>
            <a
              className=" py-[.5rem] px-[1rem]"
              href="https://github.com/metadot"
              aria-label="GitHub link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          </div>
          <div>
            <a
              className=" py-[.5rem] px-[1rem]"
              href="https://www.linkedin.com/company/metadot-corporation"
              aria-label="LinkedIn link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center bg-gray-100 py-[1.1rem] px-[1rem]">
        © Copyright 2020, product of{" "}
        <a href="/" className="btn-link">
        Metadot
        </a>
        . All rights reserved. Made with ♥ in Austin, Texas.
      </div>
    </>
  );
}
