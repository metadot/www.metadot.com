import type { Metadata } from "next";
import { CalendarClock, Kanban, Megaphone, type LucideIcon } from "lucide-react";
import OnboardingCta from "./OnboardingCta";
import OnboardingLink from "./OnboardingLink";

const WISTIA_IFRAME = "https://fast.wistia.net/embed/iframe/dlc5eorlvu";
const BOOK_URL = "https://metadot.net/book/metadot/bkm/metadot-apps-onboarding";

type AppCard = {
  name: string;
  tagline: string;
  Icon: LucideIcon;
  iconClass: string;
  nameClass: string;
  dotClass: string;
  bullets: string[];
};

const APP_CARDS: AppCard[] = [
  {
    name: "Stackr",
    tagline: "Project boards",
    Icon: Kanban,
    iconClass: "bg-[#1a3a5c] text-[#60a5fa]",
    nameClass: "text-[#60a5fa]",
    dotClass: "bg-[#60a5fa]",
    bullets: [
      "Kanban boards for managing team work",
      "Pulse shows what's overdue, due date changes, and throughput",
      "Status updates automatically when a card moves",
    ],
  },
  {
    name: "BookMe",
    tagline: "Appointment scheduling",
    Icon: CalendarClock,
    iconClass: "bg-[#1a3a2a] text-[#4ade80]",
    nameClass: "text-[#4ade80]",
    dotClass: "bg-[#4ade80]",
    bullets: [
      "Your own booking page, ready to share",
      "Set buffers between meetings",
      "Offer group slots for classes, events, or open sessions",
    ],
  },
  {
    name: "Changelog",
    tagline: "Keep everyone in the loop",
    Icon: Megaphone,
    iconClass: "bg-[#2a1a3a] text-[#c084fc]",
    nameClass: "text-[#c084fc]",
    dotClass: "bg-[#c084fc]",
    bullets: [
      "Post updates for your team or customers",
      "Subscribers get notified on new entries",
      "Embed on your help center or website",
    ],
  },
];

export const metadata: Metadata = {
  title: { absolute: "Metadot Apps Overview — Watch the Tour" },
  description:
    "See how Metadot Apps brings project management, CRM, appointment scheduling, tickets, and AI into one connected workspace.",
  alternates: { canonical: "/apps-overview" },
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
          Metadot Apps
          <br />
          The All-in-One Workspace
        </h1>
        <p className="text-lg md:text-xl text-[#94a3b8] max-w-[720px] mx-auto">
          <OnboardingLink />
          Project management, CRM, appointment scheduling, changelog, and more.
          Everything your team needs, in one place.
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

      {/* Three apps */}
      <section className="mb-12 rounded-[16px] border border-[#1e3a5f] bg-[#0b1623] px-6 py-12 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 text-center">
          Start using these 3 apps today
        </h2>
        <p className="text-base font-semibold text-[#f0a500] mb-12 text-center">
          Integrated with Mojo Helpdesk, ready to use at no extra cost
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {APP_CARDS.map((app) => (
            <div
              key={app.name}
              className="flex flex-col gap-3 rounded-[14px] border border-[#1e3a5f] bg-[#13243a] p-6"
            >
              <div>
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-[9px] ${app.iconClass}`}
                >
                  <app.Icon size={20} aria-hidden="true" />
                </div>
                <p
                  style={{ marginBottom: 0 }}
                  className={`mt-2 text-[0.7rem] font-bold uppercase tracking-[0.1em] ${app.nameClass}`}
                >
                  {app.name}
                </p>
                <p
                  style={{ marginBottom: 0 }}
                  className="mt-0.5 text-sm text-[#94a3b8]"
                >
                  {app.tagline}
                </p>
              </div>
              <hr className="border-t border-[#1e3a5f]" />
              <ul className="flex flex-col gap-2">
                {app.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-[0.85rem] leading-[1.5] text-[#cbd5e1]"
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-[6px] h-[5px] w-[5px] flex-shrink-0 rounded-full ${app.dotClass}`}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <OnboardingCta bookUrl={BOOK_URL} />
    </div>
  );
}
