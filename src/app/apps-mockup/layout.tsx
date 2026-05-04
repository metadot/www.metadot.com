import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apps Mockup",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: undefined,
  },
};

export default function AppsMockupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
