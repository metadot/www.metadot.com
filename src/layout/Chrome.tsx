"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

// Lets a page be embedded chrome-free, e.g. inside an app via iframe:
//   ?hideHeader   removes the site header
//   ?hideFooter   removes the site footer
function useQueryFlag(param: string) {
  const [present, setPresent] = useState(false);
  useEffect(() => {
    setPresent(new URLSearchParams(window.location.search).has(param));
  }, [param]);
  return present;
}

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
