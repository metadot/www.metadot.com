"use client";

import ScrollLink from "./ScrollLink";
import { useQueryFlag } from "@/lib/useQueryFlag";

// The hero "Onboarding Mojo customers now" link that jumps to the CTA band.
// Hidden alongside the band when the page is embedded with `?hideCta`.
export default function OnboardingLink() {
  const hidden = useQueryFlag("hideCta");
  if (hidden) return null;

  return (
    <ScrollLink
      href="#onboarding"
      className="onboarding-link block text-xl md:text-2xl font-semibold mb-2"
    >
      Onboarding Mojo customers now
    </ScrollLink>
  );
}
