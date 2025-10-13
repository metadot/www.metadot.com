"use client";

import BlogCard from "@/components/BlogCard";

export default function LatestPosts() {
  return (
    <>
      <section className="section-mojo">
        <div className="container mx-auto text-center px-[10px] pb-[40px]">
          <h2 className="section-mojo-title">Our most recent posts</h2>
        </div>
        <div className="container-lg mx-auto flex flex-wrap justify-center text-left">
          <div className="w-[570px] px-[15px]">
            <BlogCard
              title="Connecting the Continents: How We Operate a Global Team"
              excerpt="The United States, Canada, France, and Germany - the Metadot team is spread all throughout the world. While we live in these countries, we represent many different cultures and diverse backgrounds - all connected through our organization, Metadot. Our diversity is something we celebrate, and we c..."
              imageSrc="/blog/global.svg"
              imageAlt="Woman staring at a globe with marked locations"
              width={808}
              height={582}
              href="/blog/globalteam/"
            />
          </div>
          <div className="w-[570px] px-[15px]">
            <BlogCard
              title="The Sitting Disease: How your Workweek Habits are Damaging your Health"
              quote="“We are sitting ourselves to death.”"
              excerpt="A shocking, yet true statement from Dr. James Levine about the unintentional danger we put ourselves in each day just by living our lives. Our health classes teach us the risk of things like eating too much junk ..."
              imageSrc="/blog/sitting.svg"
              imageAlt="Woman lounging on a couch using her phone"
              width={906}
              height={511}
              href="/blog/thesittingdisease/"
            />
          </div>
        </div>
      </section>
    </>
  );
}
