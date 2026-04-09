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
    color: "#4A90D9",
    description:
      "Stackr Projects gives your team a visual board that makes it clear what\u2019s done, what\u2019s in progress, and what\u2019s stuck. If your team runs on spreadsheets right now, this is built for you.",
  },
  {
    name: "BookMe",
    tag: "Scheduling",
    color: "#50B86C",
    description:
      "BookMe eliminates the scheduling back-and-forth. Share a link, let people pick a time. Works for internal meetings, customer appointments, service calls, and consultations.",
  },
  {
    name: "Changelog",
    tag: "Updates",
    color: "#F5A623",
    description:
      "Changelog gives you a single, searchable record of what changed: policies, procedures, system updates, tool rollouts. When IT pushes updates, HR revises a policy, or your call center changes procedures, this is where it lives so nobody has to ask again.",
  },
  {
    name: "Workflows",
    tag: "Automation",
    color: "#9B59B6",
    description:
      "Workflows automates the handoffs between apps so work moves on its own. No manual steps, no third-party tools connecting things together.",
  },
  {
    name: "AI assistant",
    tag: "Built in",
    color: "#1a1a1a",
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
      <h2 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-6">
        What&apos;s in the suite
      </h2>

      <div className="border border-[#f0f0f0] rounded-xl overflow-hidden mb-10">
        {apps.map((app, i) => (
          <div
            key={app.name}
            className={`bg-white p-5 ${i < apps.length - 1 ? "border-b border-[#f0f0f0]" : ""}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-8 h-8 rounded-lg shrink-0"
                style={{ backgroundColor: app.color }}
              />
              <span className="text-[15px] font-medium">{app.name}</span>
              <span className="text-[11px] font-medium tracking-wide uppercase ml-auto px-2 py-0.5 rounded bg-gray-100 text-gray-500">
                {app.tag}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              {app.description}
            </p>
          </div>
        ))}
      </div>

      {/* Coming soon */}
      <div className="border border-[#f0f0f0] rounded-xl p-6 mb-14">
        <h3 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">
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
      <div className="bg-[#f9f9f9] rounded-xl p-8" id="beta-section">
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
