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
      <section className="section-mojo text-center">
        <h1>Metadot, A Team That Puts Quality, And Customer, First</h1>
      </section>
      <section id="about-us">
        <div className="container">
          <div className="flex flex-row mx-[-15px]">
            <aside className="hidden md:block w-1/4 px-[15px]">
              <nav className="sticky top-24">
                <ul className="pl-[40px]">
                  <li className="py-[0.75rem]">
                    <a
                      href="#identity-section"
                      className="hover:text-[#2b70a9] transition-colors"
                    >
                      Our identity
                    </a>
                  </li>
                  <li className="py-[0.75rem]">
                    <a
                      href="#values-section"
                      className="hover:text-[#2b70a9] transition-colors"
                    >
                      Our core values
                    </a>
                  </li>
                  <li className="py-[0.75rem]">
                    <a
                      href="#work-section"
                      className="hover:text-[#2b70a9] transition-colors"
                    >
                      How we work
                    </a>
                  </li>
                  <li className="py-[0.75rem]">
                    <a
                      href="#history-section"
                      className="hover:text-[#2b70a9] transition-colors"
                    >
                      Our history
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>
            <main className="md:w-3/4 px-[15px]">
              <div id="identity-section">
                <div className="mb-[3rem]">
                  <h2 className="section-title">Our Identity</h2>
                  <p className="section-subtitle">
                    The world wide web revolution made us significantly change
                    over the years, but we remained the same. Here are some
                    notions we focus on:
                  </p>
                </div>
                <div className="container !px-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col mb-[3.3rem] px-[15px]">
                      <div>
                        <Image
                          src="/about-us/quality.svg"
                          alt="Quality illustration"
                          width={1013}
                          height={845}
                          className="mb-[1.1rem]"
                        />
                      </div>
                      <h3>Quality Before Quantity</h3>
                      <p>
                        Even if we are a small team, all of our products are
                        designed with great expertise. We invest time and energy
                        into creating top notch products and service.
                      </p>
                    </div>
                    <div className="flex flex-col  mb-[3.3rem] px-[15px]">
                      <div>
                        <Image
                          src="/about-us/potential.svg"
                          alt="Potential illustration"
                          width={958}
                          height={825}
                          className="mb-[1.1rem]"
                        />
                      </div>
                      <h3>Ignite Human Potential</h3>
                      <p>
                        Here at Metadot, we believe in every company and every
                        individual. Our products aim to support productivity and
                        organization to help make even your most challenging
                        goals, possible.
                      </p>
                    </div>
                    <div className="flex flex-col  mb-[3.3rem] px-[15px]">
                      <div>
                        <Image
                          src="/about-us/communication.svg"
                          alt="Communication illustration"
                          width={817}
                          height={524}
                          className="mb-[1.1rem]"
                        />
                      </div>
                      <h3>Communication Is Key</h3>
                      <p>
                        We aim to provide high quality service with
                        transparency. This means open communication throughout
                        the process. From building strong relations with our
                        suppliers, to delivering top-notch products to our
                        customers - communication remains a driving force of our
                        company.
                      </p>
                    </div>
                    <div className="flex flex-col  mb-[3.3rem] px-[15px]">
                      <div>
                        <Image
                          src="/about-us/improve.svg"
                          alt="Improve illustration"
                          width={1114}
                          height={784}
                          className="mb-[1.1rem]"
                        />
                      </div>
                      <h3>Constantly Improving</h3>
                      <p>
                        We are constantly seeking new ways to improve our
                        product and stay on the cutting edge of technology. We
                        don't strive to just complete our goals. We strive to
                        create a new, innovative way of thinking that dominates
                        the industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="values-section" className="mb-[5rem]">
                <div className="mb-[3rem]">
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
                  className="w-full border-t"
                >
                  <AccordionItem value="item-1" className="border-b">
                    <AccordionTrigger>
                      <div className="left-item flex items-center">
                        <Image
                          src="/about-us/boss.webp"
                          alt="Boss"
                          width={584}
                          height={584}
                          className="value-icon"
                        />
                        <p className="title !mb-0">THE BEST</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="content">
                      <ul className="list-disc ps-[40px]">
                        <li>
                          The Best People:
                          <p>
                            We recognize the value in allowing people a chance
                            to grow.
                          </p>
                        </li>

                        <li>
                          The Best Products:
                          <p>
                            Our products aren’t afraid to be the overachievers
                            that they are.
                          </p>
                        </li>

                        <li>
                          The Best Customers:
                          <p>
                            From professional end-users, to uber geeks, our
                            customers do their research, and seek our products
                            to bring their productivity to the next level.
                          </p>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-b">
                    <AccordionTrigger>
                      <div className="left-item flex items-center">
                        <Image
                          src="/about-us/obsess.webp"
                          alt="Obsess"
                          width={584}
                          height={584}
                          className="value-icon"
                        />
                        <p className="title !mb-0">QUALITY OBSESSED</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="content">
                      <ul className="list-disc ps-[40px] ">
                        <li>
                          Premium Materials: In hardware, quality starts with
                          our product components:
                          <ul className="list-disc ps-[40px] mb-[0.55rem]">
                            <li>Gold-plated key switches</li>
                            <li>N-key rollover on all keyboards</li>
                            <li>Aluminum construction details</li>
                            <li>Extra long USB cable</li>
                          </ul>
                        </li>

                        <li>
                          Durable construction:
                          <p>
                            Our products aren’t afraid to be the overachievers
                            that they are.
                          </p>
                        </li>

                        <li>
                          Superior Experience:
                          <p>
                            Every element of each product is taken into
                            consideration - we’ve held full staff meetings to
                            test the precise feel, sound, and reactivity of a
                            single keystroke until we are all completely
                            satisfied.
                          </p>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-b">
                    <AccordionTrigger>
                      <div className="left-item flex items-center">
                        <Image
                          src="/about-us/best.webp"
                          alt="Best"
                          width={584}
                          height={584}
                          className="value-icon"
                        />
                        <p className="title !mb-0">BE YOUR BEST SELF</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="content">
                      <ul className="list-disc ps-[40px]">
                        <li>
                          Cultivate Personal Growth:
                          <ul className="list-disc ps-[40px] mb-[0.55rem]">
                            <li>
                              We create a work/life balance to provide the
                              harmony that allows our employees to thrive.
                            </li>
                            <li>
                              We understand that it can be hard to dedicate time
                              outside of work for personal wellness, so we have
                              brought classes such as yoga, tai chi, and dance
                              to our employees within office hours.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Cultivate Professional Growth:
                          <ul className="list-disc ps-[40px] mb-[0.55rem]">
                            <li>
                              Our goal is to help our employees enrich their
                              skill sets in a way that will help them not just
                              within our company, but throughout their
                              professional careers.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Cultivate Friendship:
                          <ul className="list-disc ps-[40px] mb-[0.55rem]">
                            <li>
                              We inspire each other, and nurture a positive work
                              environment that congratulates each other’s hard
                              work.
                            </li>
                            <li>
                              Company-wide events allow us to celebrate company
                              and individual milestones & achievements.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border-b">
                    <AccordionTrigger>
                      <div className="left-item flex items-center">
                        <Image
                          src="/about-us/innovation.webp"
                          alt="Innovation"
                          width={584}
                          height={584}
                          className="value-icon"
                        />
                        <p className="title !mb-0">INNOVATION</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="content">
                      <ul className="list-disc ps-[40px]">
                        <p>
                          Fearlessly Pushing the Limits with Products that
                          Inspire:
                        </p>
                        <li>We created a new market with a blank keyboard.</li>
                        <li>
                          We added a magnetic ruler as a keyboard foot bar.
                        </li>
                        <li>
                          We added an over-sized volume knob to our keyboards.
                        </li>
                        <li>
                          We were the first company (that we know of) to add a
                          3.0 USB hub to our keyboards.
                        </li>
                        <li>
                          We continue to innovate and create products that
                          inspire.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border-b">
                    <AccordionTrigger>
                      <div className="left-item flex items-center">
                        <Image
                          src="/about-us/getitdone.webp"
                          alt="Get it done"
                          width={584}
                          height={584}
                          className="value-icon"
                        />
                        <p className="title !mb-0">GET IT DONE</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="content">
                      <ul className="list-disc ps-[40px]">
                        <p>
                          Metadot employees do what it takes to ensure our
                          products continue to be unstoppable forces to be
                          reckoned with...
                        </p>
                        <li>Sometimes this means we work late.</li>
                        <li>Sometimes this means we take work home.</li>
                        <li>We work hard, but we also know how to party.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div id="work-section" className="mb-[5rem]">
                <h2 className="section-title">How Do We Work</h2>
                <div className="flex justify-center my-[1.65rem] mx-[-15px]">
                  <Image
                    src="/about-us/map.svg"
                    alt="Map"
                    width={1177}
                    height={874}
                    className="max-w-[80%]"
                  />
                </div>
                <p>
                  We are a team of individuals, spread out across the world. Our
                  diversity is our greatest strength. Despite the miles between
                  us, we come together in one remote environment to create
                  top-tier products and a new approach to an entirely virtual
                  organization. We do this through the use of our own softwares
                  Bamzooka and Mojo Helpdesk.
                </p>
              </div>
              <Timeline />
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
