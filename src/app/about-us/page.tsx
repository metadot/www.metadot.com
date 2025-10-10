import Timeline from "@/components/Timeline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <section className="section-mojo text-center">
        <h1>Metadot, A Team That Puts Quality, And Customer, First</h1>
      </section>
      <section id="about-us">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto px-6 py-16 gap-10">
            <aside className="hidden md:block md:w-1/4 lg:w-1/5">
              <nav className="sticky top-24">
                <ul className="space-y-3 text-gray-700 font-medium">
                  <li>
                    <a
                      href="#identity-section"
                      className="hover:text-[#2b70a9] transition-colors"
                    >
                      Our identity
                    </a>
                  </li>
                  <li>
                    <a
                      href="#values-section"
                      className="hover:text-[#2b70a9] transition-colors"
                    >
                      Our core values
                    </a>
                  </li>
                  <li>
                    <a
                      href="#work-section"
                      className="hover:text-[#2b70a9] transition-colors"
                    >
                      How we work
                    </a>
                  </li>
                  <li>
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
            <main className="w-full md:w-3/4 lg:w-4/5">
              <div id="identity-section">
                <div className="mb-[3rem]">
                  <h2 className="section-title">Our Identity</h2>
                  <p className="section-subtitle">
                    The world wide web revolution made us significantly change
                    over the years, but we remained the same. Here are some
                    notions we focus on:
                  </p>
                </div>
                <div className="container">
                  <div className="grid grid-cols-1 sm:grid-cols-2 max-w-screen-lg mx-auto">
                    <div className="flex flex-col px-[15px] mb-[3.3rem]">
                      <div>
                        <Image
                          src="/about-us/quality.svg"
                          alt="Quality illustration"
                          width={1013}
                          height={845}
                          className="about-us-image mb-[1.1rem]"
                        />
                      </div>
                      <h3 className="mb-[1.1rem]">Quality Before Quantity</h3>
                      <p className="mb-[1rem]">
                        Even if we are a small team, all of our products are
                        designed with great expertise. We invest time and energy
                        into creating top notch products and service.
                      </p>
                    </div>
                    <div className="flex flex-col px-[15px] mb-[3.3rem]">
                      <div>
                        <Image
                          src="/about-us/potential.svg"
                          alt="Potential illustration"
                          width={958}
                          height={825}
                          className="about-us-image mb-[1.1rem]"
                        />
                      </div>
                      <h3 className="mb-[1.1rem]">Ignite Human Potential</h3>
                      <p className="mb-[1rem]">
                        Here at Metadot, we believe in every company and every
                        individual. Our products aim to support productivity and
                        organization to help make even your most challenging
                        goals, possible.
                      </p>
                    </div>
                    <div className="flex flex-col px-[15px] pb-[3.3rem]">
                      <div>
                        <Image
                          src="/about-us/communication.svg"
                          alt="Communication illustration"
                          width={817}
                          height={524}
                          className="about-us-image mb-[1.1rem]"
                        />
                      </div>
                      <h3 className="mb-[1.1rem]">Communication Is Key</h3>
                      <p className="mb-[1rem]">
                        We aim to provide high quality service with
                        transparency. This means open communication throughout
                        the process. From building strong relations with our
                        suppliers, to delivering top-notch products to our
                        customers - communication remains a driving force of our
                        company.
                      </p>
                    </div>
                    <div className="flex flex-col px-[15px] pb-[3.3rem]">
                      <div>
                        <Image
                          src="/about-us/improve.svg"
                          alt="Improve illustration"
                          width={1114}
                          height={784}
                          className="about-us-image mb-[1.1rem]"
                        />
                      </div>
                      <h3 className="mb-[1.1rem]">Constantly Improving</h3>
                      <p className="mb-[1rem]">
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
                  <h2 className="section-title mb-[1.1rem]">Our core values</h2>
                  <p className="section-subtitle mb-[1.1rem]">
                    From creating processes to decision-making and recruiting,
                    we build our five core values into nearly every single thing
                    we do.
                  </p>
                </div>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full border-t border-gray-200"
                >
                  <AccordionItem
                    value="item-1"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="py-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/about-us/boss.webp"
                          alt="Boss"
                          width={584}
                          height={584}
                          className="value-icon"
                        />
                        <p className="font-semibold text-gray-800">THE BEST</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-2 pb-4 text-gray-700">
                      <ul className="list-disc pl-5 space-y-5 text-gray-800 text-[1rem] leading-relaxed">
                        <li>
                          <span className="font-semibold text-gray-900">
                            The Best People:
                          </span>{" "}
                          We recognize the value in allowing people a chance to
                          grow.
                        </li>

                        <li>
                          <span className="font-semibold text-gray-900">
                            The Best Products:
                          </span>{" "}
                          Our products aren’t afraid to be the overachievers
                          that they are.
                        </li>

                        <li>
                          <span className="font-semibold text-gray-900">
                            The Best Customers:
                          </span>{" "}
                          From professional end-users to uber geeks, our
                          customers do their research, and seek our products to
                          bring their productivity to the next level.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-2"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="py-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/about-us/obsess.webp"
                          alt="Obsess"
                          width={584}
                          height={584}
                          className="value-icon"
                        />
                        <p className="font-semibold text-gray-800">
                          QUALITY OBSESSED
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-2 pb-4 text-gray-700">
                      <ul className="list-disc pl-5 space-y-5 text-gray-800 text-[1rem] leading-relaxed">
                        <li>
                          <span className="font-semibold text-gray-900">
                            Premium Materials:
                          </span>{" "}
                          In hardware, quality starts with our product
                          components:
                          <ul className="list-disc pl-8 mt-2 space-y-1 text-gray-700 text-[0.95rem]">
                            <li>Gold-plated key switches</li>
                            <li>N-key rollover on all keyboards</li>
                            <li>Aluminum construction details</li>
                            <li>Extra long USB cable</li>
                          </ul>
                        </li>

                        <li>
                          <span className="font-semibold text-gray-900">
                            Durable Construction:
                          </span>{" "}
                          Our products aren’t afraid to be the overachievers
                          that they are.
                        </li>

                        <li>
                          <span className="font-semibold text-gray-900">
                            Superior Experience:
                          </span>{" "}
                          Every element of each product is taken into
                          consideration – we’ve held full staff meetings to test
                          the precise feel, sound, and reactivity of a single
                          keystroke until we are all completely satisfied.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-3"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="py-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/about-us/best.webp"
                          alt="Best"
                          width={584}
                          height={584}
                          className="value-icon"
                        />
                        <p className="font-semibold text-gray-800">
                          BE YOUR BEST SELF
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-2 pb-4 text-gray-700">
                      <ul className="list-disc pl-5 space-y-5 text-gray-800 text-[1rem] leading-relaxed">
                        <li>
                          <span className="font-semibold text-gray-900">
                            Cultivate Personal Growth:
                          </span>
                          <ul className="list-disc pl-8 mt-2 space-y-1 text-gray-700 text-[0.95rem]">
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
                          <span className="font-semibold text-gray-900">
                            Cultivate Professional Growth:
                          </span>
                          <ul className="list-disc pl-8 mt-2 space-y-1 text-gray-700 text-[0.95rem]">
                            <li>
                              Our goal is to help our employees enrich their
                              skill sets in a way that will help them not just
                              within our company, but throughout their
                              professional careers.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span className="font-semibold text-gray-900">
                            Cultivate Friendship:
                          </span>
                          <ul className="list-disc pl-8 mt-2 space-y-1 text-gray-700 text-[0.95rem]">
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

                  <AccordionItem
                    value="item-4"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="py-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/about-us/innovation.webp"
                          alt="Innovation"
                          width={584}
                          height={584}
                          className="value-icon"
                        />
                        <p className="font-semibold text-gray-800">
                          INNOVATION
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-2 pb-4 text-gray-700">
                      <ul className="pl-5 space-y-5 text-gray-800 text-[1rem] leading-relaxed">
                        <li>
                          <span className="font-semibold text-gray-900">
                            Fearlessly Pushing the Limits with Products that
                            Inspire:
                          </span>
                          <ul className="list-disc pl-8 mt-2 space-y-1 text-gray-700 text-[0.95rem]">
                            <li>
                              We created a new market with a blank keyboard.
                            </li>
                            <li>
                              We added a magnetic ruler as a keyboard foot bar.
                            </li>
                            <li>
                              We added an over-sized volume knob to our
                              keyboards.
                            </li>
                            <li>
                              We were the first company (that we know of) to add
                              a 3.0 USB hub to our keyboards.
                            </li>
                            <li>
                              We continue to innovate and create products that
                              inspire.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-5"
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="py-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/about-us/getitdone.webp"
                          alt="Get it done"
                          width={584}
                          height={584}
                          className="value-icon"
                        />
                        <p className="font-semibold text-gray-800">
                          GET IT DONE
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-2 pb-4 text-gray-700">
                      <ul className="pl-5 space-y-5 text-gray-800 text-[1rem] leading-relaxed">
                        <li>
                          <span className="font-semibold text-gray-900">
                            Metadot employees do what it takes to ensure our
                            products continue to be unstoppable forces to be
                            reckoned with...
                          </span>
                          <ul className="list-disc pl-8 mt-2 space-y-1 text-gray-700 text-[0.95rem]">
                            <li>Sometimes this means we work late.</li>
                            <li>Sometimes this means we take work home.</li>
                            <li>
                              We work hard, but we also know how to party.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div id="work-section" className="mb-[5rem]">
                <div className="mb-[3rem]">
                  <h2 className="section-title mb-[1.1rem]">How Do We Work</h2>
                  <div className="flex justify-center my-[1.65rem]">
                    <Image
                      src="/about-us/map.svg"
                      alt="Map"
                      width={1177}
                      height={874}
                      className="max-w-4/5"
                    />
                  </div>
                  <p className="mb-[1rem]">
                    We are a team of individuals, spread out across the world.
                    Our diversity is our greatest strength. Despite the miles
                    between us, we come together in one remote environment to
                    create top-tier products and a new approach to an entirely
                    virtual organization. We do this through the use of our own
                    softwares Bamzooka and Mojo Helpdesk.
                  </p>
                </div>
              </div>

              {/* <div className="mb-[5rem]" id="history-section">
                <div className="mb-[3rem]">
                  <h2 className="section-title mb-[1.1rem]">Our History</h2>
                  <p className="section-subtitle mb-[1.1rem]">
                    Here are some of our key moments and milestones throughout
                    the history of Metadot...
                  </p>
                </div>
              </div> */}
              <Timeline />
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
