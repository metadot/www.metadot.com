"use client";

import BookingCta from "./BookingCta";
import { useQueryFlag } from "@/lib/useQueryFlag";

const MOJO_LOGIN_URL = "https://www.mojohelpdesk.com/login";

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
        Your Mojo subscription
        <br />
        <em className="not-italic text-[#f0b93c]">just got better</em>
      </h2>
      <p className="text-[15px] text-[#94a3b8] max-w-[680px] mx-auto mb-8 leading-relaxed">
        Now included with your Mojo subscription.
        <br />
        Book a quick session and we&rsquo;ll walk you through everything,
        answer your questions, and help you launch one, two, or all three.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <BookingCta bookUrl={bookUrl} />
        <a
          href={MOJO_LOGIN_URL}
          className="btn"
          style={{
            background: "#f0a500",
            borderColor: "#f0a500",
            color: "#0f172a",
            fontWeight: 600,
          }}
        >
          Continue in Mojo Helpdesk
        </a>
      </div>
    </section>
  );
}
