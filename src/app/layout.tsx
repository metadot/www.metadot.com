import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import JsonLd from "@/components/JsonLd";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.metadot.com"),
  title: {
    default: "Metadot — Productivity Tools for Teams",
    template: "%s | Metadot",
  },
  description:
    "Move forward faster with tools that supercharge productivity — Montastic, Das Keyboard, Mojo Helpdesk, and Bamzooka.",
  openGraph: {
    type: "website",
    siteName: "Metadot",
    locale: "en_US",
    images: [{ url: "/building-dark.png", width: 1200, height: 630, alt: "Metadot" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Metadot",
  url: "https://www.metadot.com",
  logo: "https://www.metadot.com/icon.svg",
  sameAs: [
    "https://github.com/nickmoline/metadot",
    "https://www.linkedin.com/company/metadot",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#0f172a] text-[#f1f5f9] antialiased">
        <JsonLd data={organizationJsonLd} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#f0b93c] focus:text-black focus:px-4 focus:py-2 focus:rounded-sm focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
