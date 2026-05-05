"use client";

import { useEffect, useMemo, useState } from "react";

type App = {
  name: string;
  color: string;
  emoji: string;
  description: string;
  bullets: string[];
};

const apps: App[] = [
  {
    name: "CRM",
    color: "from-indigo-400 to-indigo-700",
    emoji: "🤝",
    description: "Manage relationships. Close more deals.",
    bullets: [
      "Track leads & opportunities",
      "Manage contacts & accounts",
      "Visual sales pipeline",
      "Activity & follow-up reminders",
      "Built-in email & notifications",
      "Reports & performance insights",
    ],
  },
  {
    name: "Scheduling",
    color: "from-blue-400 to-blue-700",
    emoji: "📅",
    description: "Book more. Stay organized.",
    bullets: [
      "Shared team calendars",
      "Automated booking links",
      "Reminders & confirmations",
      "Time zone smart",
      "Recurring availability",
      "Sync with your inbox",
    ],
  },
  {
    name: "Automation",
    color: "from-orange-400 to-orange-600",
    emoji: "⚙️",
    description: "Workflows that run for you.",
    bullets: [
      "Trigger-based actions",
      "Multi-step flows",
      "Cross-app handoffs",
      "Conditional logic",
      "Error retries",
      "Run history & logs",
    ],
  },
  {
    name: "Changelog",
    color: "from-red-400 to-red-600",
    emoji: "📝",
    description: "Track updates. Stay aligned.",
    bullets: [
      "Publish release notes",
      "In-app announcements",
      "Subscriber notifications",
      "Versioned history",
      "Customer feedback",
      "Roadmap previews",
    ],
  },
  {
    name: "Workflows",
    color: "from-teal-400 to-teal-600",
    emoji: "🔁",
    description: "Streamline tasks. Save hours.",
    bullets: [
      "Templates for every team",
      "Drag-and-drop builder",
      "Approvals & sign-offs",
      "Status tracking",
      "Notifications baked in",
      "Audit trail",
    ],
  },
  {
    name: "AI Assistant",
    color: "from-slate-500 to-slate-800",
    emoji: "✨",
    description: "Smart help. Right on time.",
    bullets: [
      "Cross-app answers",
      "Drafting & summaries",
      "Action suggestions",
      "Context-aware search",
      "Privacy-first by design",
      "Always learning",
    ],
  },
  {
    name: "Suppliers",
    color: "from-stone-400 to-stone-600",
    emoji: "🚚",
    description: "Manage suppliers. Avoid delays.",
    bullets: [
      "Vendor directory",
      "Purchase orders",
      "Lead-time tracking",
      "Document vault",
      "Performance scoring",
      "Automated reminders",
    ],
  },
  {
    name: "Polls",
    color: "from-pink-400 to-pink-600",
    emoji: "📊",
    description: "Ask, analyze, decide better.",
    bullets: [
      "Quick poll builder",
      "Anonymous responses",
      "Real-time results",
      "Branching questions",
      "Export reports",
      "Schedule & expire",
    ],
  },
  {
    name: "Inventory",
    color: "from-blue-300 to-blue-600",
    emoji: "📦",
    description: "Track stock. Never run out.",
    bullets: [
      "Real-time levels",
      "Reorder points",
      "Multi-location",
      "Barcode scanning",
      "Stock movement history",
      "Low-stock alerts",
    ],
  },
];

const integrationSteps = [
  { number: 1, title: "Capture Leads", body: "Add new leads directly to CRM." },
  { number: 2, title: "Check Inventory", body: "See what's in stock in real time." },
  { number: 3, title: "Send Invoice", body: "Bill faster and get paid sooner." },
  { number: 4, title: "Automate Tasks", body: "Workflows run while you focus." },
  { number: 5, title: "Track Updates", body: "Stay aligned across the team." },
  { number: 6, title: "Grow Business", body: "Everything connected. Easier." },
];

const benefits = [
  { title: "All the apps.", body: "One workspace." },
  { title: "Less stress.", body: "More fulfillment." },
  { title: "More value.", body: "Less spend." },
];

function AppNode({
  app,
  index,
  total,
  paused,
  selected,
  onSelect,
  onHover,
}: {
  app: App;
  index: number;
  total: number;
  paused: boolean;
  selected: App | null;
  onSelect: (app: App) => void;
  onHover: (app: App | null) => void;
}) {
  const startAngle = (index / total) * 360;
  const isSelected = selected?.name === app.name;

  return (
    <button
      type="button"
      onClick={() => onSelect(app)}
      onMouseEnter={() => onHover(app)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(app)}
      onBlur={() => onHover(null)}
      className={`group absolute left-1/2 top-1/2 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${app.color} text-2xl text-white shadow-lg transition-[box-shadow] duration-200 hover:z-30 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:h-14 sm:w-14 ${
        isSelected ? "z-30 ring-4 ring-white" : "z-10"
      }`}
      style={
        {
          animation: "orbitLoop 60s linear infinite",
          animationPlayState: paused ? "paused" : "running",
          ["--start" as string]: `${startAngle}deg`,
          transform:
            "translate(-50%, -50%) translate(calc(var(--orbit-rx) * cos(var(--start) + var(--orbit-angle))), calc(var(--orbit-ry) * sin(var(--start) + var(--orbit-angle))))",
        } as React.CSSProperties
      }
      aria-label={`${app.name}: ${app.description}`}
    >
      <span aria-hidden>{app.emoji}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus:opacity-100"
      >
        {app.name}
      </span>
    </button>
  );
}

export default function AppsMockupPage() {
  const [selected, setSelected] = useState<App | null>(null);
  const [hovered, setHovered] = useState<App | null>(null);
  const [scrollY, setScrollY] = useState(0);

  const paused = selected !== null || hovered !== null;

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerReveal = Math.min(1, scrollY / 60);

  const currentIndex = useMemo(
    () => apps.findIndex((a) => a.name === selected?.name),
    [selected]
  );

  function handleSelect(app: App) {
    setSelected(app);
  }

  function closeModal() {
    setSelected(null);
  }

  function nextApp() {
    const next = apps[(currentIndex + 1) % apps.length];
    setSelected(next);
  }

  function prevApp() {
    const prev = apps[(currentIndex - 1 + apps.length) % apps.length];
    setSelected(prev);
  }

  useEffect(() => {
    if (!selected) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-blue-50 text-slate-900">
      {/* Floating header — emerges as you scroll */}
      <div
        className="fixed inset-x-0 top-0 z-[1050] will-change-transform"
        style={{
          transform: `translateY(${(headerReveal - 1) * 100}%)`,
          opacity: headerReveal,
        }}
        aria-hidden={headerReveal < 0.5}
      >
        <div className="border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2">
            <div className="flex items-baseline gap-2">
              <span className="flex items-baseline gap-1 text-xl font-black italic text-blue-950">
                m
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow-400" />
              </span>
              <span className="hidden text-sm font-bold text-slate-900 sm:inline">
                Metadot Apps
              </span>
            </div>
            <a
              href="/beta"
              className="rounded-full bg-blue-600 px-5 py-2 text-sm font-bold text-white shadow-md shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Join private beta
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @property --orbit-angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }
        @keyframes orbitLoop {
          from {
            --orbit-angle: 0deg;
          }
          to {
            --orbit-angle: 360deg;
          }
        }
        @keyframes dashMove {
          to {
            stroke-dashoffset: -120;
          }
        }
        .orbit-stage {
          --orbit-rx: 328px;
          --orbit-ry: 203px;
        }
        @media (min-width: 1024px) {
          .orbit-stage {
            --orbit-rx: 400px;
            --orbit-ry: 247px;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-0 mx-auto h-[460px] max-w-5xl rounded-b-[3rem] bg-gradient-to-b from-blue-100/60 via-white to-transparent blur-2xl" />
        <div className="relative mx-auto max-w-3xl px-6 pt-16 pb-10 text-center sm:pt-20 lg:pt-24">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-blue-600">
            Connected Workspace
          </p>
          <div className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            The Search Is Over.
            <span className="mt-2 block text-blue-600">Metadot Apps</span>
            <span className="block">Connected Workspace.</span>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Everything you need to run your business{" "}
            <span className="font-semibold text-slate-900">
              without breaking the bank.
            </span>
          </p>

          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-2 text-sm sm:gap-3">
            {benefits.map((b) => (
              <li
                key={b.title}
                className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-slate-700 shadow-sm backdrop-blur"
              >
                <span className="font-bold text-slate-900">{b.title}</span>{" "}
                <span className="text-slate-500">{b.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Orbit stage with overlaid popover */}
      <section className="px-4 pb-12 sm:px-6">
        <div className="orbit-stage relative mx-auto max-w-6xl">
          <div className="relative h-[420px] overflow-hidden rounded-[2.5rem] border border-white bg-gradient-to-b from-white via-blue-50/40 to-blue-100/60 shadow-2xl shadow-blue-200/40 sm:h-[500px] lg:h-[600px]">
            {/* orbit rings */}
            <svg
              className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 lg:h-[640px] lg:w-[1000px]"
              viewBox="0 0 800 500"
              aria-hidden
            >
              <ellipse
                cx="400"
                cy="250"
                rx="320"
                ry="198"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
                strokeDasharray="14 16"
                style={{
                  animation: "dashMove 4s linear infinite",
                  animationPlayState: paused ? "paused" : "running",
                }}
              />
              <ellipse
                cx="400"
                cy="250"
                rx="220"
                ry="136"
                fill="none"
                stroke="#bfdbfe"
                strokeWidth="2"
                strokeDasharray="6 10"
              />
              <ellipse
                cx="400"
                cy="250"
                rx="120"
                ry="74"
                fill="none"
                stroke="#dbeafe"
                strokeWidth="1.5"
              />
            </svg>

            {/* center logo */}
            <div className="absolute left-1/2 top-1/2 z-20 flex h-28 w-48 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[50%] bg-white px-4 text-center shadow-2xl ring-1 ring-slate-100 sm:h-32 sm:w-56 lg:h-36 lg:w-64">
              <div className="flex items-baseline gap-1 text-4xl font-black italic text-blue-950 sm:text-5xl">
                m
                <span className="inline-block h-2 w-2 rounded-full bg-yellow-400" />
              </div>
              <p className="mt-1 text-[10px] font-semibold leading-tight text-slate-500 sm:text-[11px]">
                One workspace. Any direction.
              </p>
            </div>

            {/* status pill — top left */}
            <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-slate-700 shadow ring-1 ring-slate-100 backdrop-blur sm:left-6 sm:top-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              All systems connected
            </div>

            {apps.map((app, index) => (
              <AppNode
                key={app.name}
                app={app}
                index={index}
                total={apps.length}
                paused={paused}
                selected={selected}
                onSelect={handleSelect}
                onHover={setHovered}
              />
            ))}

          </div>
        </div>
      </section>

      {/* App modal */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="app-modal-title"
          className="fixed inset-0 z-[1100] flex items-center justify-center px-4 py-6"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={closeModal}
            className="absolute inset-0 cursor-default bg-slate-950/60 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-md overflow-hidden rounded-[1.75rem] bg-white shadow-2xl shadow-slate-900/30">
            <div
              className={`relative bg-gradient-to-br ${selected.color} px-7 pt-7 pb-10 text-white`}
            >
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
              >
                ✕
              </button>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 text-3xl shadow-lg backdrop-blur">
                <span aria-hidden>{selected.emoji}</span>
              </div>
              <p
                id="app-modal-title"
                className="mt-4 text-2xl font-black tracking-tight"
              >
                {selected.name}
              </p>
              <p className="mt-1 text-sm text-white/85">
                {selected.description}
              </p>
            </div>

            <div className="px-7 pt-6 pb-7">
              <ul className="space-y-2.5">
                {selected.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-sm text-slate-700"
                  >
                    <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                      ✓
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <a
                href="/beta"
                className="mt-6 block rounded-2xl bg-blue-600 px-5 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Join private beta <span aria-hidden>→</span>
              </a>
              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={prevApp}
                  aria-label="Previous app"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  <span aria-hidden>←</span>
                </button>
                <p className="text-xs text-slate-500">
                  {currentIndex + 1} of {apps.length} apps
                </p>
                <button
                  type="button"
                  onClick={nextApp}
                  aria-label="Next app"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  <span aria-hidden>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Seamless integration */}
      <section className="px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
              Seamless integration
            </p>
            <div className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Move from one app to the next without missing a beat.
            </div>
          </div>

          <ol className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {integrationSteps.map((step) => (
              <li key={step.number} className="flex items-start gap-4">
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-blue-600 text-base font-black text-white shadow-md shadow-blue-200">
                  {step.number}
                </span>
                <div>
                  <p className="text-base font-bold text-slate-950">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 px-8 py-12 text-center text-white shadow-2xl shadow-blue-900/30 sm:px-12 sm:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-blue-300">
              Powerful apps. Fair price. Big impact.
            </p>
            <div className="mx-auto mt-4 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
              All the tools you need. None of the clutter.
            </div>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-blue-100">
              Built for teams. Priced for real life. Less clutter, more clarity —
              a better way to run your business.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/beta"
                className="rounded-2xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-950/50 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Join private beta
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
