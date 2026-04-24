"use client";

import { usePathname } from "next/navigation";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

export function SiteHeader() {
  const pathname = usePathname();
  if (pathname?.startsWith("/preview-")) return null;
  return <Header />;
}

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname?.startsWith("/preview-")) return null;
  return <Footer />;
}
