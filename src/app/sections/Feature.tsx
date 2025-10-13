"use client";

import Image from "next/image";

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
  reverse,
  links,
}: FeatureProps) {
  return (
    <section id={id} className="section-mojo border-b">
      <div className="container mx-auto">
        <div
          className={`flex flex-wrap justify-center items-center text-left ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          {/* Text */}
          <div className="w-[570px] px-[15px] flex flex-col justify-center">
            <h2 className="section-mojo-title mb-[1.1rem]">{title}</h2>
            <p className="mb-[1rem]">{description}</p>

            <div className="flex flex-wrap gap-x-[1.1rem]">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="btn-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-[570px] px-[15px]">
            <Image
              src={image}
              alt={`${title} image`}
              width={width}
              height={height}
              className="rounded img-fluid"
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
        title="Typrx"
        description="Typrx is an online game where you can compete with people from all around the world, while increasing your typing speed and accuracy. The more you play, the more your typing improves. Increase your speed to earn coins and unlock new skins for your typing vehicle. Keep practicing, and one day - you might just be a Typrx Champion!"
        image="/race.webp"
        width={1142}
        height={788}
        links={[{ href: "https://typrx.com/", label: "Try it, it's free!" }]}
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
