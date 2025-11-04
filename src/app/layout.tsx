import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose what you need
  display: "swap",
});

export const metadata: Metadata = {
  title: "Metadot",
  description: "Move forward faster with tools that supercharge productivity — Montastic, Das Keyboard, Mojo Helpdesk, and Bamzooka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
