"use client";

import Link from "next/link";
import BookingCta from "./BookingCta";
import { useQueryFlag } from "@/lib/useQueryFlag";

const METADOT_SIGNUP_URL = "https://metadot.net/signup";

// The "Your Mojo subscription just got better" onboarding CTA band.
// Removed when the page is embedded with `?hideCta`, e.g. inside another app.
export default function OnboardingCta({ bookUrl }: { bookUrl: string }) {
  const hidden = useQueryFlag("hideCta");
  if (hidden) return null;

  return (
    <section
      id="onboarding"
      className="scroll-mt-20 bg-[#1e293b] border border-[#334155] py-12 px-6 text-center"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-white mb-4">
        Used by hundreds of teams
        <br />
        <em className="not-italic text-base md:text-lg lg:text-xl leading-snug text-[#f0b93c]">
          large and small, high-tech, K12 schools and small businesses
        </em>
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <BookingCta bookUrl={bookUrl} />
        <Link href="/pricing" className="btn">
          View pricing
        </Link>
        <a href={METADOT_SIGNUP_URL} className="btn btn-primary">
          Sign me up
        </a>
      </div>
      <p className="text-[15px] text-[#94a3b8] max-w-[680px] mx-auto mt-4 mb-8 leading-relaxed">
        Sign up, or book a quick demo and we&rsquo;ll walk you through
        everything.
      </p>
    </section>
  );
}
