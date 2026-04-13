import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Metadot. Support for Mojo Helpdesk, Das Keyboard, Bamzooka, and Montastic. Offices in Austin, Texas and France.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
