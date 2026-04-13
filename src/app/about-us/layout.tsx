import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Metadot builds productivity tools used by thousands of teams worldwide. Based in Austin, Texas with offices in France.",
  alternates: { canonical: "/about-us" },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
