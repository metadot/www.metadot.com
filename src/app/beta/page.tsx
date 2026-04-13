import type { Metadata } from "next";
import type { IconType } from "react-icons";
import {
  FaColumns,
  FaCalendarCheck,
  FaClipboardList,
  FaCogs,
  FaRobot,
  FaBox,
  FaUsers,
  FaWarehouse,
  FaFileInvoiceDollar,
  FaBookOpen,
  FaPoll,
  FaTruck,
  FaTicketAlt,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Metadot Apps — Private Beta",
  description:
    "One suite to replace your stack. Join the Metadot Apps private beta.",
  robots: { index: false, follow: false },
};

const POLL_URL =
  "https://metadot.net/poll/metadot/DZCxa6_xZmN747gDtAgQt";

const apps: {
  name: string;
  tag: string;
  wide?: boolean;
  icon: IconType;
  description: string;
}[] = [
  {
    name: "Stackr Projects",
    tag: "Kanban",
    wide: true,
    icon: FaColumns,
    description:
      "Stackr gives your team a visual board that makes it clear what\u2019s done, what\u2019s in progress, and what\u2019s stuck. If your team runs on spreadsheets right now, this is built for you.",
  },
  {
    name: "BookMe",
    tag: "Scheduling",
    icon: FaCalendarCheck,
    description:
      "BookMe eliminates the scheduling back-and-forth. Share a link, let people pick a time. Works for internal meetings, customer appointments, service calls, and consultations.",
  },
  {
    name: "Changelog",
    tag: "Updates",
    icon: FaClipboardList,
    description:
      "Changelog gives you a single, searchable record of what changed \u2014 policies, procedures, system updates, tool rollouts. So nobody has to ask again.",
  },
  {
    name: "Workflows",
    tag: "Automation",
    icon: FaCogs,
    description:
      "Workflows automates the handoffs between apps so work moves on its own. No manual steps, no third-party tools connecting things together.",
  },
  {
    name: "AI Assistant",
    tag: "Built in",
    icon: FaRobot,
    description:
      "The AI assistant works across the whole suite. Ask it to create a board, surface what\u2019s overdue, or answer questions about your data.",
  },
];

const comingSoon: { name: string; icon: IconType }[] = [
  { name: "Assets", icon: FaBox },
  { name: "CRM", icon: FaUsers },
  { name: "Inventory", icon: FaWarehouse },
  { name: "InvoiceMe", icon: FaFileInvoiceDollar },
  { name: "Knowledge base", icon: FaBookOpen },
  { name: "Polls", icon: FaPoll },
  { name: "Suppliers", icon: FaTruck },
  { name: "Tickets", icon: FaTicketAlt },
];

const painPoints = [
  "Projects tracked in spreadsheets nobody updates",
  "Scheduling still happening over email",
  "Policy changes buried in a Slack thread",
  "Manual handoffs eating up everyone\u2019s time",
];

function Separator({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px bg-[#334155]" />
      <span className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase text-[#64748b] whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-[#334155]" />
    </div>
  );
}

export default function BetaPage() {
  return (
    <div className="max-w-[960px] mx-auto px-6 pt-16 pb-20">
      {/* Hero */}
      <section className="text-center mb-6">
        <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#f0b93c] mb-4">
          Metadot Apps &mdash; Private Beta
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-3">
          One suite to replace
          <br />
          your stack.
        </h1>
        <p className="font-mono text-sm md:text-base font-semibold tracking-[0.12em] uppercase text-[#94a3b8] mb-6">
          Everything your team needs to work. No duct tape.
        </p>
        <p className="text-base leading-relaxed text-[#94a3b8] max-w-[480px] mx-auto mb-8">
          Metadot replaces the five tools that don&apos;t talk to each
          other&mdash;projects, scheduling, change communication, automation, and
          AI, all in one place.
        </p>
        <div className="flex items-center gap-4 justify-center flex-wrap mb-6">
          <a
            href={POLL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn"
          >
            Join the private beta
          </a>
          <a href="#suite-section" className="btn">
            Explore the suite &darr;
          </a>
        </div>
        <p className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-[#64748b]">
          Built by the team behind{" "}
          <a
            href="https://www.mojohelpdesk.com"
            className="text-[#94a3b8] no-underline border-b border-[#475569] hover:text-[#f0b93c] hover:border-[#f0b93c] transition-colors"
          >
            Mojo Helpdesk
          </a>
        </p>
      </section>

      {/* Why it exists */}
      <Separator label="Why it exists" />

      <section className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-8 mb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold leading-snug text-white mb-1">
            Built for teams tired of duct tape.
          </h3>
          <p className="text-base md:text-lg font-semibold text-[#64748b]">
            One place. Everything connected.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {painPoints.map((point) => (
            <div
              key={point}
              className="flex items-start gap-2.5 py-3 pr-2 border-b border-[#1e293b] text-sm text-[#94a3b8] leading-relaxed"
            >
              <span className="text-red-500 font-bold text-xs mt-0.5 shrink-0">&times;</span>
              {point}
            </div>
          ))}
        </div>
      </section>

      {/* What's in the suite */}
      <Separator label="What&rsquo;s in the suite" />

      <section className="mb-6" id="suite-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#334155]">
          {apps.map((app) => (
            <div
              key={app.name}
              className={`border-b border-r border-[#334155] p-6 lg:p-8 hover:bg-[#1e293b] transition-colors${
                app.wide ? " sm:col-span-2" : ""
              }`}
            >
              <span className="font-mono text-[10px] font-semibold tracking-[0.16em] uppercase text-[#f0b93c] mb-3 block">
                {app.tag}
              </span>
              <div className="flex items-center gap-2.5 font-bold text-xl tracking-tight leading-tight text-white mb-3">
                <app.icon className="text-[#f0b93c] text-lg shrink-0" />
                {app.name}
              </div>
              <p className="text-sm leading-relaxed text-[#94a3b8] mb-0">
                {app.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Coming soon */}
      <Separator label="Coming soon" />

      <section className="bg-[#1e293b] border border-[#334155] py-5 px-6 mb-6">
        <div className="flex items-center gap-6 flex-wrap">
          <span className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-[#64748b] whitespace-nowrap">
            In development
          </span>
          <div className="flex gap-2 flex-wrap">
            {comingSoon.map((item) => (
              <span
                key={item.name}
                className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-[0.1em] uppercase text-[#94a3b8] border border-[#475569] px-3 py-1"
              >
                <item.icon className="text-[11px] text-[#64748b]" />
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <Separator label="" />

      <section className="text-center py-12" id="beta-section">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-white mb-4">
          Metadot Apps is in active development.
          <br />
          <em className="not-italic text-[#f0b93c]">
            Private beta participants shape what gets built.
          </em>
        </h2>
        <p className="text-[15px] text-[#94a3b8] max-w-[400px] mx-auto mb-8 leading-relaxed">
          First access. Limited spots. No commitment.
        </p>
        <a
          href={POLL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Request a spot
        </a>
      </section>
    </div>
  );
}
