/* eslint-disable react/no-unescaped-entities */
"use client";

import Timeline from "@/components/Timeline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href")?.substring(1);
        const target = targetId && document.getElementById(targetId);

        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
      <section className="py-16 md:py-24 text-center border-b border-[#334155]">
        <div className="container">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#94a3b8] mb-4">
            About Us
          </p>
          <h1 className="text-3xl md:text-5xl">
            A Team That Puts Quality,
            <br />
            And Customer, First
          </h1>
        </div>
      </section>

      <section id="about-us" className="py-12">
        <div className="container">
          <div className="flex flex-row">
            <aside className="hidden md:block w-1/4 pr-8">
              <nav className="sticky top-24">
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#identity-section"
                      className="block py-2 text-sm"
                    >
                      Our identity
                    </a>
                  </li>
                  <li>
                    <a
                      href="#values-section"
                      className="block py-2 text-sm"
                    >
                      Our core values
                    </a>
                  </li>
                  <li>
                    <a
                      href="#work-section"
                      className="block py-2 text-sm"
                    >
                      How we work
                    </a>
                  </li>
                  <li>
                    <a
                      href="#history-section"
                      className="block py-2 text-sm"
                    >
                      Our history
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            <div className="md:w-3/4">
              {/* Identity */}
              <div id="identity-section" className="mb-16">
                <div className="mb-8">
                  <h2 className="section-title">Our Identity</h2>
                  <p className="section-subtitle">
                    The world wide web revolution made us significantly change
                    over the years, but we remained the same. Here are some
                    notions we focus on:
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      img: "/about-us/quality.svg",
                      title: "Quality Before Quantity",
                      desc: "Even if we are a small team, all of our products are designed with great expertise. We invest time and energy into creating top notch products and service.",
                    },
                    {
                      img: "/about-us/potential.svg",
                      title: "Ignite Human Potential",
                      desc: "Here at Metadot, we believe in every company and every individual. Our products aim to support productivity and organization to help make even your most challenging goals, possible.",
                    },
                    {
                      img: "/about-us/communication.svg",
                      title: "Communication Is Key",
                      desc: "We aim to provide high quality service with transparency. This means open communication throughout the process.",
                    },
                    {
                      img: "/about-us/improve.svg",
                      title: "Constantly Improving",
                      desc: "We are constantly seeking new ways to improve our product and stay on the cutting edge of technology.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex flex-col">
                      <div className="mb-4 p-4 bg-[#1e293b] border border-[#334155] rounded-sm inline-block">
                        <Image
                          src={item.img}
                          alt={`${item.title} illustration`}
                          width={200}
                          height={160}
                          className="h-32 w-auto mx-auto"
                        />
                      </div>
                      <h3 className="text-lg">{item.title}</h3>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Values */}
              <div id="values-section" className="mb-16">
                <div className="mb-8">
                  <h2 className="section-title">Our core values</h2>
                  <p className="section-subtitle">
                    From creating processes to decision-making and recruiting,
                    we build our five core values into nearly every single thing
                    we do.
                  </p>
                </div>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full border-t border-[#334155]"
                >
                  {[
                    {
                      value: "item-1",
                      img: "/about-us/boss.webp",
                      title: "THE BEST",
                      content: (
                        <ul className="list-disc pl-8 space-y-2 text-sm text-[#94a3b8]">
                          <li>
                            <strong className="text-[#f1f5f9]">The Best People:</strong> We
                            recognize the value in allowing people a chance to
                            grow.
                          </li>
                          <li>
                            <strong className="text-[#f1f5f9]">The Best Products:</strong> Our
                            products aren't afraid to be the overachievers that
                            they are.
                          </li>
                          <li>
                            <strong className="text-[#f1f5f9]">The Best Customers:</strong> From
                            professional end-users to uber geeks, our customers
                            do their research and seek our products to bring
                            their productivity to the next level.
                          </li>
                        </ul>
                      ),
                    },
                    {
                      value: "item-2",
                      img: "/about-us/obsess.webp",
                      title: "QUALITY OBSESSED",
                      content: (
                        <ul className="list-disc pl-8 space-y-2 text-sm text-[#94a3b8]">
                          <li>
                            <strong className="text-[#f1f5f9]">Premium Materials:</strong>{" "}
                            Gold-plated key switches, N-key rollover, aluminum
                            construction, extra long USB cable.
                          </li>
                          <li>
                            <strong className="text-[#f1f5f9]">Durable Construction:</strong> Our
                            products are built to last.
                          </li>
                          <li>
                            <strong className="text-[#f1f5f9]">Superior Experience:</strong> We've
                            held full staff meetings to test the precise feel,
                            sound, and reactivity of a single keystroke.
                          </li>
                        </ul>
                      ),
                    },
                    {
                      value: "item-3",
                      img: "/about-us/best.webp",
                      title: "BE YOUR BEST SELF",
                      content: (
                        <ul className="list-disc pl-8 space-y-2 text-sm text-[#94a3b8]">
                          <li>
                            <strong className="text-[#f1f5f9]">Personal Growth:</strong> Work/life
                            balance, in-office wellness classes.
                          </li>
                          <li>
                            <strong className="text-[#f1f5f9]">Professional Growth:</strong> We
                            help employees enrich their skill sets.
                          </li>
                          <li>
                            <strong className="text-[#f1f5f9]">Friendship:</strong> Company-wide
                            events celebrate milestones and achievements.
                          </li>
                        </ul>
                      ),
                    },
                    {
                      value: "item-4",
                      img: "/about-us/innovation.webp",
                      title: "INNOVATION",
                      content: (
                        <ul className="list-disc pl-8 space-y-2 text-sm text-[#94a3b8]">
                          <li>Created a new market with a blank keyboard.</li>
                          <li>Added a magnetic ruler as a keyboard foot bar.</li>
                          <li>Added an oversized volume knob to keyboards.</li>
                          <li>First company to add a 3.0 USB hub to keyboards.</li>
                        </ul>
                      ),
                    },
                    {
                      value: "item-5",
                      img: "/about-us/getitdone.webp",
                      title: "GET IT DONE",
                      content: (
                        <ul className="list-disc pl-8 space-y-2 text-sm text-[#94a3b8]">
                          <li>Sometimes this means we work late.</li>
                          <li>Sometimes this means we take work home.</li>
                          <li>We work hard, but we also know how to party.</li>
                        </ul>
                      ),
                    },
                  ].map((item) => (
                    <AccordionItem
                      key={item.value}
                      value={item.value}
                      className="border-b border-[#334155]"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-4">
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={48}
                            height={48}
                            className="w-10 h-10 rounded-sm"
                          />
                          <span className="font-mono text-sm font-semibold tracking-wider text-[#f1f5f9]">
                            {item.title}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-14">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* How we work */}
              <div id="work-section" className="mb-16">
                <h2 className="section-title">How Do We Work</h2>
                <div className="flex justify-center my-6">
                  <Image
                    src="/about-us/map.svg"
                    alt="World map showing team locations"
                    width={1177}
                    height={874}
                    className="max-w-[80%] opacity-80"
                  />
                </div>
                <p className="text-[#94a3b8] leading-relaxed">
                  We are a team of individuals, spread out across the world. Our
                  diversity is our greatest strength. Despite the miles between
                  us, we come together in one remote environment to create
                  top-tier products. We do this through the use of our own
                  software: Bamzooka and Mojo Helpdesk.
                </p>
              </div>

              {/* History */}
              <Timeline />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
