import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="banner" className="section-mojo border-b">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="banner-title mb-[1.1rem]">Move Forward. Faster.</h1>

            <h2 className="banner-subtitle mb-[1.65rem]">
              Tools That Boost Productivity Up Through The Roof.
            </h2>

            <a href="#software" className="banner-button">
              USE IT WITH CAUTION
            </a>
          </div>
        </div>
      </section>
      <section className="section-mojo border-b" id="software">
        <div className="container mx-auto">
          <h2 className="section-mojo-title text-center mb-[3.3rem]">
            <i className="icon-works">
              <Image
                src="/icons/icon-works.webp"
                alt="separator"
                height={64}
                width={94}
                className="mx-auto"
              />
            </i>
            Our Software Products
          </h2>
          <div className="flex flex-wrap justify-center text-left">
            <div className="flex flex-col items-left w-[380px] px-[15px] mb-[3.3rem]">
              <Image
                src="/brand/bamzooka.webp"
                alt="Bamzooka Logo"
                height={47}
                width={47}
              />
              <h2 className="text-left text-[2.5rem] font-bold mb-[1.1rem]">
                Bamzooka
              </h2>
              <p className="text-[1.2rem] mb-[1rem] text-left">
                Bamzooka is a recurring checklist software for easy business
                process management (BPM).
              </p>
              <p className="mb-[1rem]">
                <a
                  className="btn btn-primary inline-block bg-[#2b70a9] text-white text-sm font-semibold px-4 py-2 rounded-[4px] hover:bg-[#1f5483] transition-colors"
                  href="https://bamzooka.com/"
                  aria-label="Link to Bamzooka website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit the site »
                </a>
              </p>
            </div>

            <div className="flex flex-col items-left w-[380px] px-[15px] mb-[3.3rem]">
              <Image
                src="/brand/montastic.webp"
                alt="Montastic Logo"
                width={75}
                height={64}
              />
              <h2 className="text-left text-[2.5rem] font-bold mb-[1.1rem]">
                Montastic
              </h2>
              <p className="text-[1.2rem] mb-[1rem] text-left">
                Montastic monitors websites and sends notifications when a
                problem is detected.
              </p>
              <p className="mb-[1rem]">
                <a
                  className="btn btn-primary inline-block bg-[#2b70a9] text-white text-sm font-semibold px-4 py-2 rounded-[4px] hover:bg-[#1f5483] transition-colors"
                  href="https://www.montastic.com/"
                  aria-label="Link to Montastic website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit the site »
                </a>
              </p>
            </div>

            <div className="flex flex-col items-left w-[380px] px-[15px] mb-[3.3rem]">
              <Image
                src="/brand/mojo-star.svg"
                alt="Mojo Helpdesk Logo"
                width={129}
                height={123}
              />
              <h2 className="text-left text-[2.5rem] font-bold mb-[1.1rem]">
                Mojo Helpdesk
              </h2>
              <p className="software-description text-[1.25rem] font-normal text-black mb-6 leading-relaxed">
                Mojo Helpdesk is a leading ticketing system to centralize
                support requests and improve customer service.
              </p>
              <p>
                <a
                  className="btn btn-primary inline-block bg-[#2b70a9] text-white text-sm font-semibold px-4 py-2 rounded-[4px] hover:bg-[#1f5483] transition-colors"
                  href="https://www.mojohelpdesk.com/"
                  aria-label="Link to Mojo Helpdesk website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit the site »
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-mojo border-b" id="hardware">
        <div className="container mx-auto">
          <h2 className="section-mojo-title text-center mb-[3.3rem]">
            <i className="icon-works">
              <Image
                src="/icons/icon-works.webp"
                alt="separator"
                height={64}
                width={94}
                className="mx-auto"
              />
            </i>
            Our Hardware Products
          </h2>
          <div className="hardware-products">
            <div className="hardware-product text-center">
              <Image
                src="/daskeyboard.webp"
                className="hardware-image mb-[.275rem]"
                alt="Product image"
                width={1909}
                height={766}
              />
              <Image
                src="/brand/daskeyboardbrand.webp"
                className="hardware-brand-image mb-[3.3rem]"
                alt="Brand image"
                width={1500}
                height={211}
              />
              <p className="text-center hardware-description">
                <strong>Das&nbsp;Keyboard&nbsp;</strong>
                is a brand of high-quality mechanical keyboards for typists,
                software developers, tech enthusiasts, and gamers. A reference
                in the market.
              </p>
              <div>
                <a href="https://www.daskeyboard.com/" className="btn-link">
                  Visit Das Keyboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-mojo border-b" id="typrx">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center text-left">
            <div className="flex flex-col items-left w-[570px] px-[15px]">
              <h2 className="section-mojo-title">Typrx</h2>
              <div className="pt-[1.1rem]">
                <p className="mb-[1rem]">
                  Typrx is an online game where you can compete with people from
                  all around the world, while increasing your typing speed and
                  accuracy. The more you play, the more your typing improves.
                  Increase your speed to earn coins and unlock new skins for
                  your typing vehicle. Keep practicing, and one day - you might
                  just be a Typrx Champion!
                </p>
                <div style={{ display: "inline-block" }}>
                  <a
                    href="https://typrx.com/"
                    className="btn-link mr-[1.65rem]"
                  >
                    Try it, it's free!
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-left w-[570px] px-[15px]">
              <div>
                <Image
                  src="/race.webp"
                  alt="Typrx race image"
                  className="img-fluid rounded"
                  width={1142}
                  height={788}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-mojo border-b" id="UTC">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center text-left">
            <div className="flex flex-col items-left w-[570px] px-[15px]">
              <div>
                <Image
                  src="/utc.webp"
                  alt="Ultimate typing championship logo"
                  className="img-fluid rounded"
                  width={1142}
                  height={788}
                />
              </div>
            </div>
            <div className="flex flex-col items-left w-[570px] px-[15px]">
              <h2 className="section-mojo-title">
                Ultimate Typing Championship
              </h2>
              <div className="pt-[1.1rem]">
                <p className="mb-[1rem]">
                  Ultimate Typing Championship : UTC is a world wide
                  competition, where some of the best compete for the title of
                  Quickest Typist in the World! Online or offline, this
                  competition is open to everyone - so why not give it your best
                  shot?
                </p>
                <div className="flex flex-wrap ml-0 gap-x-6 gap-y-3 pt-6">
                  <a
                    href="https://ultimatetypingchampionship.com/"
                    className="btn-link mr-[1.1rem]"
                  >
                    Learn more about UTC
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=vPlb8IwJIzY"
                    className="btn-link mr-[1.1rem]"
                  >
                    Watch the 2020 competition
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-mojo">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="px-[10px] pb-[40px]">
              <h2 className="section-mojo-title">Our most recent posts</h2>
            </div>
          </div>
        </div>
        <div className="container-lg mx-auto">
          <div className="flex flex-wrap justify-center text-left">
            <div className="flex flex-col items-left w-[570px] px-[15px]">
              <div className="blog-card container rounded mb-[3.3rem]">
                <div className="blog-card-image">
                  <a href="/blog/globalteam/">
                    <Image
                      src="/blog/global.svg"
                      alt="Woman lounging on a couch using her phone"
                      width={906}
                      height={511}
                    />
                  </a>
                </div>
                <div className="blog-card-title mt-[1.1rem]">
                  <h3>
                    <a href="/blog/globalteam/">
                      Connecting the Continents: How We Operate a Global Team
                    </a>
                  </h3>
                </div>
                <div className="blog-card-excerpt">
                  <p>
                    The United States, Canada, France, and Germany - the Metadot
                    team is spread all throughout the world. While we live in
                    these countries, we represent many different cultures and
                    diverse backgrounds - all connected through our
                    organization, Metadot. Our diversity is something we
                    celebrate, and we c...
                  </p>
                </div>
                <div className="container row items-center">
                  <a
                    href="/blog/thesittingdisease/"
                    className="rounded blog-card-button"
                  >
                    Continue{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-left w-[570px] px-[15px]">
              <div className="blog-card container rounded mb-[3.3rem]">
                <div className="blog-card-image">
                  <a href="/blog/thesittingdisease/">
                    <Image
                      src="/blog/sitting.svg"
                      alt="Woman lounging on a couch using her phone"
                      width={906}
                      height={511}
                    />
                  </a>
                </div>
                <div className="blog-card-title mt-[1.1rem]">
                  <h3>
                    <a href="/blog/thesittingdisease/">
                      The Sitting Disease: How your Workweek Habits are Damaging
                      your Health
                    </a>
                  </h3>
                </div>
                <div className="blog-card-excerpt">
                  <h2 id="we-are-sitting-ourselves-to-death">
                    “We are sitting ourselves to death.”
                  </h2>
                  <p>
                    A shocking, yet true statement from Dr. James Levine about
                    the unintentional danger we put ourselves in each day just
                    by living our lives. Our health classes teach us the risk of
                    things like eating too much junk ...
                  </p>
                </div>
                <div className="container row items-center">
                  <a
                    href="/blog/thesittingdisease/"
                    className="rounded blog-card-button"
                  >
                    Continue{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
