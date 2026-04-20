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
  title: { absolute: "Metadot Apps — Private Beta" },
  description:
    "Productivity apps for teams. Project management, CRM, scheduling, tickets, and more.",
  alternates: { canonical: "/beta" },
  openGraph: {
    title: "Metadot Apps — Private Beta",
    description:
      "Productivity apps for teams. Project management, CRM, scheduling, tickets, and more.",
  },
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
      "Stackr is a visual project management board that makes it clear what\u2019s done, what\u2019s in progress, and what\u2019s stuck. Keep your projects visible and your team moving forward.",
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
      "Changelog gives you a single, searchable record of what changed. Policies, procedures, system updates, tool rollouts. One source of truth for every change your team makes.",
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

const tools = [
  "Project mgmt",
  "Scheduling",
  "CRM",
  "Automation",
  "Change tracking",
];

const workflows: {
  trigger: string;
  cause: string;
  effect: string;
  from: string;
  to: string;
  direction: "a-to-b" | "b-to-a";
}[] = [
  {
    trigger: "When a deal closes",
    cause: "A deal is won in the CRM.",
    effect:
      "An onboarding project is automatically kicked off in Stackr Projects.",
    from: "CRM",
    to: "Stackr Projects",
    direction: "a-to-b",
  },
  {
    trigger: "When a booking is made",
    cause: "A prospect books a meeting through BookMe.",
    effect: "An opportunity is automatically created in the CRM.",
    from: "BookMe",
    to: "CRM",
    direction: "a-to-b",
  },
  {
    trigger: "When a project is done",
    cause: "A project is marked complete in Stackr Projects.",
    effect: "Changelog automatically writes and publishes the update.",
    from: "Stackr Projects",
    to: "Changelog",
    direction: "b-to-a",
  },
];

const aiExamples: { title: string; body: string }[] = [
  {
    title: "New feature shipped?",
    body: "AI writes and publishes the Changelog.",
  },
  {
    title: "Need a project plan?",
    body: "Describe it. AI builds the board.",
  },
  {
    title: "Want a status update?",
    body: "AI gives you a snapshot across every app.",
  },
  {
    title: "Something overdue?",
    body: "AI surfaces it before anyone asks.",
  },
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
          Productivity apps for teams.
        </h1>
        <p className="text-base md:text-lg text-[#94a3b8] mb-2">
          Project management, CRM, scheduling, tickets, and more.
        </p>
        <p className="font-mono text-xs md:text-sm font-semibold tracking-[0.12em] uppercase text-[#64748b] mb-8">
          Connected apps. Powered by AI.
        </p>
        <div className="flex items-center gap-4 justify-center flex-wrap">
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
      </section>

      {/* Cost band */}
      <section className="mt-12 mb-6 bg-[#1e293b] border border-[#334155] py-12 px-6 text-center">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-white mb-3">
            How many tools is{" "}
            <em className="not-italic text-[#f0b93c]">your team running?</em>
          </h2>
          <p className="text-[15px] text-[#94a3b8] leading-relaxed max-w-[480px] mx-auto mb-8">
            More than you need.
            <br />
            Separate logins. Separate bills.
            <br />
            Separate apps that don&rsquo;t share a single piece of data.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-[#94a3b8] bg-[#0f172a] border border-[#334155] px-3.5 py-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#475569]" />
                {tool}
              </span>
            ))}
          </div>
          <p className="text-base md:text-lg font-bold text-white">
            Metadot changes that with{" "}
            <em className="not-italic text-[#0f172a] bg-[#f0b93c] px-1">
              one suite.
            </em>
          </p>
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

      {/* Your apps, working together */}
      <Separator label="Your apps, working together" />

      <section className="mb-6">
        <div className="max-w-[580px] mb-8">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-white mb-2">
            Put your work on{" "}
            <em className="not-italic text-[#f0b93c]">autopilot.</em>
          </h2>
          <p className="text-[15px] text-[#94a3b8] leading-relaxed">
            When tools connect, work moves itself. Here is what that looks like.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#334155]">
          {workflows.map((w) => (
            <div
              key={w.trigger}
              className="border-b border-r border-[#334155] p-6 hover:bg-[#1e293b] transition-colors"
            >
              <div className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-[#f0b93c] mb-4">
                {w.trigger}
              </div>
              <p className="text-sm font-semibold text-white leading-snug mb-1">
                {w.cause}
              </p>
              <div className="text-lg text-[#334155] my-2">&darr;</div>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                {w.effect}
              </p>
              <div className="mt-5 flex items-center gap-1.5">
                <span
                  className={`font-mono text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-1 ${
                    w.direction === "a-to-b"
                      ? "bg-[#f0b93c]/15 text-[#f0b93c]"
                      : "bg-[#ffffff]/8 text-[#94a3b8]"
                  }`}
                >
                  {w.from}
                </span>
                <span className="text-[#475569] text-xs">&rarr;</span>
                <span
                  className={`font-mono text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-1 ${
                    w.direction === "a-to-b"
                      ? "bg-[#ffffff]/8 text-[#94a3b8]"
                      : "bg-[#f0b93c]/15 text-[#f0b93c]"
                  }`}
                >
                  {w.to}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI section */}
      <section className="my-12 bg-[#1e293b] border border-[#334155] py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-white mb-2">
              AI that{" "}
              <em className="not-italic text-[#f0b93c]">does the work,</em> not
              just answers questions.
            </h2>
            <p className="text-[15px] text-[#94a3b8] leading-relaxed">
              Works across every app. Surfaces what matters. Takes action so
              your team can focus on what&rsquo;s next.
            </p>
          </div>
          <div className="border-t border-l border-[#334155]">
            {aiExamples.map((ex) => (
              <div
                key={ex.title}
                className="border-b border-r border-[#334155] p-5 flex gap-4 items-start"
              >
                <div className="w-2 h-2 rounded-full bg-[#f0b93c] shrink-0 mt-2" />
                <div className="text-sm text-[#94a3b8] leading-relaxed">
                  <strong className="block font-mono text-[13px] font-bold text-white tracking-wide mb-0.5 uppercase">
                    {ex.title}
                  </strong>
                  {ex.body}
                </div>
              </div>
            ))}
          </div>
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
