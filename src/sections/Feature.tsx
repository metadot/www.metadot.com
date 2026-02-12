import Image from "next/image";
import Link from "next/link";

interface FeatureProps {
  id: string;
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
  reverse?: boolean;
  links: { href: string; label: string }[];
}

function FeatureSection({
  id,
  title,
  description,
  image,
  width,
  height,
  reverse = false,
  links,
}: FeatureProps) {
  return (
    <section id={id} className="section-mojo border-b bg-white">
      <div className="container">
        <div
          className={`flex flex-col justify-center items-center md:gap-[30px] text-left ${
            reverse ? "flex-col-reverse md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Text */}
          <div className=" md:w-1/2 flex flex-col justify-center">
            <h2 className="section-mojo-title">{title}</h2>
            <p className={`mb-[1rem] ${!reverse ? "pt-[1.1rem]" : ""} `}>
              {description}
            </p>

            <div className="flex flex-wrap gap-x-[1.1rem]">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="btn-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className=" md:w-1/2">
            <Image
              src={image}
              alt={`${title} image`}
              width={width}
              height={height}
              className={`rounded img-fluid ${
                !reverse ? "pt-[1.1rem]" : "pb-[1.1rem]"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Feature() {
  return (
    <>
      <FeatureSection
        id="typrx"
        title="How fast do you type? Let's find out with Typrx."
        description="Typrx is an online typing race app. Type a random sentence as fast as you can and compete with others"
        image="/race.webp"
        width={1142}
        height={788}
        links={[{ href: "https://typrx.com/", label: "Try a tying race with TyprX" }]}
      />

      <FeatureSection
        id="utc"
        title="Ultimate Typing Championship"
        description="Ultimate Typing Championship : UTC is a world wide competition, where some of the best compete for the title of Quickest Typist in the World! Online or offline, this competition is open to everyone - so why not give it your best shot?"
        image="/utc.webp"
        width={701}
        height={484}
        reverse
        links={[
          {
            href: "https://ultimatetypingchampionship.com/",
            label: "Learn more about UTC",
          },
          {
            href: "https://www.youtube.com/watch?v=vPlb8IwJIzY",
            label: "Watch the 2020 competition",
          },
        ]}
      />
    </>
  );
}
