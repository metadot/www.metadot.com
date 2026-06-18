"use client";

import { usePathname } from "next/navigation";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { useQueryFlag } from "@/lib/useQueryFlag";

// Lets a page be embedded chrome-free, e.g. inside an app via iframe:
//   ?hideHeader   removes the site header
//   ?hideFooter   removes the site footer

export function SiteHeader() {
  const pathname = usePathname();
  const hidden = useQueryFlag("hideHeader");
  if (pathname?.startsWith("/preview-")) return null;
  if (hidden) return null;
  return <Header />;
}

export function SiteFooter() {
  const pathname = usePathname();
  const hidden = useQueryFlag("hideFooter");
  if (pathname?.startsWith("/preview-")) return null;
  if (hidden) return null;
  return <Footer />;
}
