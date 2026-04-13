import type { Metadata } from "next";
import Hero from "../sections/Hero";
import Products from "../sections/Products";
import Feature from "../sections/Feature";
import LatestPosts from "../sections/LatestPosts";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Metadot — Productivity Tools for Teams",
  description:
    "Move forward faster with tools that supercharge productivity — Montastic uptime monitoring, Das Keyboard mechanical keyboards, Mojo Helpdesk ticketing, and Bamzooka checklists.",
  alternates: { canonical: "/" },
};

const products = [
  {
    "@type": "Product" as const,
    name: "Mojo Helpdesk",
    description: "Centralize support requests. Track, prioritize, and resolve tickets faster.",
    url: "https://www.mojohelpdesk.com/",
  },
  {
    "@type": "Product" as const,
    name: "Bamzooka",
    description: "Recurring checklists for business process management. Never miss a step.",
    url: "https://bamzooka.com/",
  },
  {
    "@type": "Product" as const,
    name: "Montastic",
    description: "Website monitoring with instant notifications when something goes down.",
    url: "https://www.montastic.com/",
  },
  {
    "@type": "Product" as const,
    name: "TyprX",
    description: "Online typing races. Compete against others and track your speed.",
    url: "https://typrx.com/",
  },
  {
    "@type": "Product" as const,
    name: "Das Keyboard",
    description: "Premium mechanical keyboards for typists, developers, and enthusiasts.",
    url: "https://www.daskeyboard.com/",
  },
];

const productsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Metadot",
  url: "https://www.metadot.com",
  makesOffer: products.map((p) => ({
    "@type": "Offer",
    itemOffered: p,
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={productsJsonLd} />
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
