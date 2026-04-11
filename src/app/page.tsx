import Hero from "../sections/Hero";
import Products from "../sections/Products";
import Feature from "../sections/Feature";
import LatestPosts from "../sections/LatestPosts";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <Products />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Feature />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <LatestPosts />
      </ScrollReveal>
    </>
  );
}
