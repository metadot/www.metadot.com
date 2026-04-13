import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metadot Apps — Private Beta",
  description:
    "Everything your team needs to work. One suite. No duct tape. Join the Metadot Apps private beta.",
  robots: { index: false, follow: false },
};

const POLL_URL =
  "https://metadot.net/poll/metadot/DZCxa6_xZmN747gDtAgQt";

const apps = [
  {
    name: "Stackr Projects",
    tag: "Kanban",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    description:
      "Stackr Projects gives your team a visual board that makes it clear what\u2019s done, what\u2019s in progress, and what\u2019s stuck. If your team runs on spreadsheets right now, this is built for you.",
  },
  {
    name: "BookMe",
    tag: "Scheduling",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    description:
      "BookMe eliminates the scheduling back-and-forth. Share a link, let people pick a time. Works for internal meetings, customer appointments, service calls, and consultations.",
  },
  {
    name: "Changelog",
    tag: "Updates",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
      </svg>
    ),
    description:
      "Changelog gives you a single, searchable record of what changed: policies, procedures, system updates, tool rollouts. When IT pushes updates, HR revises a policy, or your call center changes procedures, this is where it lives so nobody has to ask again.",
  },
  {
    name: "Workflows",
    tag: "Automation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
    description:
      "Workflows automates the handoffs between apps so work moves on its own. No manual steps, no third-party tools connecting things together.",
  },
  {
    name: "AI assistant",
    tag: "Built in",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    description:
      "The AI assistant works across the whole suite. Ask it to create a board for a project, surface what\u2019s overdue, or answer questions about your data.",
  },
];

const comingSoon = [
  { name: "Assets", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg> },
  { name: "CRM", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
  { name: "Inventory", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg> },
  { name: "InvoiceMe", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> },
  { name: "Knowledge base", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> },
  { name: "Polls", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> },
  { name: "Suppliers", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg> },
  { name: "Tickets", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M15 5v2" /><path d="M15 11v2" /><path d="M15 17v2" /><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7a2 2 0 0 1 2-2z" /></svg> },
];

export default function BetaPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 pt-12 pb-20">
      {/* Hero */}
      <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#94a3b8] mb-3">
        Metadot Apps
      </p>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
        Everything your team needs to work.{" "}
        <em className="font-bold">One suite.</em> No duct tape.
      </h1>

      <p className="text-lg leading-relaxed text-[#94a3b8] mb-10 max-w-[540px]">
        Metadot replaces the five tools that don&apos;t talk to each
        other&mdash;projects, scheduling, change communication, automation, and
        AI, all in one place.
      </p>

      <div className="flex items-center gap-4 flex-wrap mb-16">
        <a
          href={POLL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Join the private beta
        </a>
      </div>

      {/* Divider */}
      <hr className="border-t border-[#334155] mb-11" />

      {/* What's in the suite */}
      <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#94a3b8] mb-6">
        WHAT&apos;S IN THE SUITE
      </p>

      <div className="flex flex-col gap-3 mb-10">
        {apps.map((app) => (
          <div
            key={app.name}
            className="p-6 bg-[#1e293b] border border-[#334155] rounded-sm hover:border-[#475569] transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#94a3b8]">{app.icon}</span>
              <span className="font-mono text-base font-semibold text-white">{app.name}</span>
              <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#94a3b8] border border-[#94a3b8] px-2 py-0.5 rounded-sm ml-auto">
                {app.tag}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#94a3b8]">
              {app.description}
            </p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="border-t border-[#334155] mb-11" />

      {/* Coming soon */}
      <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#94a3b8] mb-6">
        COMING SOON
      </p>
      <div className="flex flex-wrap gap-2 mb-14">
        {comingSoon.map((item) => (
          <span
            key={item.name}
            className="inline-flex items-center gap-1.5 text-sm text-[#94a3b8] bg-[#1e293b] border border-[#334155] rounded-full px-3.5 py-1"
          >
            {item.icon}
            {item.name}
          </span>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="rounded-sm p-8 bg-[#1e293b] border border-[#334155]" id="beta-section">
        <h2 className="!text-2xl font-bold mb-2 text-white">Join the private beta</h2>
        <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
          Metadot Apps is in active development. Private beta participants get
          first access and shape what gets built. Spots are limited.
        </p>
        <a
          href={POLL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Request a spot
        </a>
        <p className="text-xs text-[#94a3b8] mt-4">
          Built by the team behind Mojo Helpdesk.
        </p>
      </div>
    </div>
  );
}
