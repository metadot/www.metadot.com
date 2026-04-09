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
    bgColor: "#EAF3DE",
    iconColor: "#3B6D11",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
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
    bgColor: "#E6F1FB",
    iconColor: "#185FA5",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
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
    bgColor: "#FAEEDA",
    iconColor: "#854F0B",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
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
    bgColor: "#EEEDFE",
    iconColor: "#534AB7",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
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
    bgColor: "#F1EFE8",
    iconColor: "#5F5E5A",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    description:
      "The AI assistant works across the whole suite. Ask it to create a board for a project, surface what\u2019s overdue, or answer questions about your data.",
  },
];

const comingSoon = [
  "Assets",
  "CRM",
  "Inventory",
  "InvoiceMe",
  "Knowledge base",
  "Polls",
  "Suppliers",
  "Tickets",
];

export default function BetaPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 pt-12 pb-20">
      {/* Hero */}
      <p className="text-xs font-medium tracking-[0.12em] uppercase text-[#888] mb-4">
        Metadot Apps
      </p>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
        Everything your team needs to work.{" "}
        <em className="font-bold">One suite.</em> No duct tape.
      </h1>

      <p className="text-lg leading-relaxed text-text mb-2 max-w-[540px]">
        Most teams are running five tools that don&apos;t talk to each other.{" "}
        <strong className="font-medium text-text-dark">
          Metadot replaces the stack.
        </strong>
      </p>

      <p className="text-sm leading-relaxed text-gray-400 max-w-[520px] mb-10">
        Projects, scheduling, change communication, automation, and AI. All in
        one place.
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
        <span className="text-sm text-gray-400">Limited spots.</span>
      </div>

      {/* Divider */}
      <hr className="border-t border-[#f0f0f0] mb-11" />

      {/* What's in the suite */}
      <h2 className="text-xs font-medium tracking-[0.1em] uppercase text-[#aaa] mb-6">
        What&apos;s in the suite
      </h2>

      <div className="flex flex-col border border-[#f0f0f0] rounded-2xl overflow-hidden mb-10">
        {apps.map((app, i) => (
          <div
            key={app.name}
            className={`bg-white px-6 py-5 ${i < apps.length - 1 ? "border-b border-[#f0f0f0]" : ""}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center"
                style={{ backgroundColor: app.bgColor, color: app.iconColor }}
              >
                {app.icon}
              </div>
              <span className="text-[15px] font-medium">{app.name}</span>
              <span
                className="text-[11px] font-medium tracking-[0.06em] uppercase ml-auto px-2 py-0.5 rounded"
                style={{ backgroundColor: app.bgColor, color: app.iconColor }}
              >
                {app.tag}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#666]">
              {app.description}
            </p>
          </div>
        ))}
      </div>

      {/* Coming soon */}
      <div className="border border-[#f0f0f0] rounded-2xl p-6 mb-14">
        <h3 className="text-xs font-medium tracking-[0.1em] uppercase text-[#aaa] mb-4">
          Coming soon
        </h3>
        <div className="flex flex-wrap gap-2">
          {comingSoon.map((item) => (
            <span
              key={item}
              className="text-sm text-gray-500 bg-[#f7f7f7] rounded-full px-3.5 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#f9f9f9] rounded-2xl p-8" id="beta-section">
        <h2 className="text-2xl font-bold mb-2">Join the private beta</h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
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
        <p className="text-xs text-gray-400 mt-4">
          Built by the team behind Mojo Helpdesk.
        </p>
      </div>
    </div>
  );
}
