import type { Metadata } from "next";
import BookingCta from "./BookingCta";

const WISTIA_IFRAME = "https://fast.wistia.net/embed/iframe/dlc5eorlvu";
const BOOK_URL = "https://metadot.net/book/metadot/bkm/metadot-apps-onboarding";

export const metadata: Metadata = {
  title: { absolute: "Metadot Apps Overview — Watch the Tour" },
  description:
    "See how Metadot Apps brings project management, CRM, scheduling, tickets, and AI into one connected workspace. Watch the overview.",
  alternates: { canonical: "/apps-overview" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "Metadot Apps Overview — Watch the Tour",
    description:
      "See how Metadot Apps brings project management, CRM, scheduling, tickets, and AI into one connected workspace.",
    type: "video.other",
  },
};

export default function AppsOverviewPage() {
  return (
    <div className="max-w-[960px] mx-auto px-6 pt-16 pb-20">
      {/* Hero */}
      <section className="text-center mb-10">
        <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#f0b93c] mb-4">
          Productivity apps for teams
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-4">
          Metadot Apps Connected
          <br />
          Workspace
        </h1>
        <p className="text-base md:text-lg text-[#94a3b8] max-w-[560px] mx-auto">
          <span className="block text-xl md:text-2xl font-semibold text-white mb-2">
            The Search Is Over
          </span>
          Project management, CRM, scheduling, changelog, and more. Everything
          your team needs, in one place. Take a quick look.
        </p>
      </section>

      {/* Video */}
      <section className="mb-12">
        <div className="relative rounded-[16px] border border-[#334155] bg-[#1e293b] p-2 shadow-2xl shadow-black/40">
          <div
            className="overflow-hidden rounded-[12px]"
            style={{ padding: "56.25% 0 0 0", position: "relative" }}
          >
            <iframe
              src={WISTIA_IFRAME}
              title="Metadot Apps Overview"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{
                height: "100%",
                left: 0,
                position: "absolute",
                top: 0,
                width: "100%",
                border: 0,
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[#1e293b] border border-[#334155] py-12 px-6 text-center">
        <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#f0b93c] mb-4">
          Like what you saw?
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-white mb-4">
          Your Mojo subscription
          <br />
          <em className="not-italic text-[#f0b93c]">just got better</em>
        </h2>
        <p className="text-[15px] text-[#94a3b8] max-w-[680px] mx-auto mb-8 leading-relaxed">
          Now included with your Mojo subscription: 3 new apps your team can
          start using today.
          <br />
          Book a quick session and we&rsquo;ll walk you through everything,
          answer your questions, and help you launch one, two, or all three.
        </p>
        <div className="flex items-center justify-center">
          <BookingCta bookUrl={BOOK_URL} />
        </div>
      </section>
    </div>
  );
}
