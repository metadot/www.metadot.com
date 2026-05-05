"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  BookOpen,
  CalendarCheck,
  FileText,
  Handshake,
  LayoutList,
  type LucideIcon,
  Monitor,
  Package,
  Ticket,
  Truck,
  Zap,
} from "lucide-react";

type App = {
  name: string;
  color: string;
  Icon: LucideIcon;
  description: string;
  bullets: string[];
};

const apps: App[] = [
  {
    name: "Assets",
    color: "from-blue-400 to-blue-700",
    Icon: Monitor,
    description: "Track every device. Stay in control.",
    bullets: [
      "Hardware & software inventory",
      "Assignments & ownership",
      "Lifecycle & warranty tracking",
      "Maintenance schedules",
      "Audit-ready reports",
      "Quick check-in / check-out",
    ],
  },
  {
    name: "BookMe",
    color: "from-emerald-400 to-emerald-600",
    Icon: CalendarCheck,
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
    name: "Changelogs",
    color: "from-teal-400 to-teal-600",
    Icon: FileText,
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
    name: "CRM",
    color: "from-rose-400 to-rose-600",
    Icon: Handshake,
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
    name: "Inventory",
    color: "from-orange-400 to-orange-600",
    Icon: Package,
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
  {
    name: "Knowledge base",
    color: "from-purple-400 to-purple-600",
    Icon: BookOpen,
    description: "Capture know-how. Find it fast.",
    bullets: [
      "Rich-text articles",
      "Powerful search",
      "Categories & tags",
      "Drafts & approvals",
      "Public or internal access",
      "Version history",
    ],
  },
  {
    name: "Polls",
    color: "from-violet-400 to-violet-600",
    Icon: BarChart3,
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
    name: "Stackr",
    color: "from-indigo-400 to-indigo-600",
    Icon: LayoutList,
    description: "Stack tasks. Ship work.",
    bullets: [
      "Lightweight task lists",
      "Kanban boards",
      "Priorities & due dates",
      "Team assignments",
      "Comments & mentions",
      "Status at a glance",
    ],
  },
  {
    name: "Suppliers",
    color: "from-green-400 to-green-600",
    Icon: Truck,
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
    name: "Tickets",
    color: "from-amber-400 to-amber-600",
    Icon: Ticket,
    description: "Resolve issues. Keep customers happy.",
    bullets: [
      "Shared inbox",
      "Priorities & SLAs",
      "Assignments & queues",
      "Macros & templates",
      "Customer satisfaction",
      "Reports & insights",
    ],
  },
  {
    name: "Workflows",
    color: "from-yellow-400 to-amber-600",
    Icon: Zap,
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
  {
    title: "All the apps.",
    body: "One workspace.",
    bubble: "bg-blue-200/70",
    dot: "bg-blue-500",
  },
  {
    title: "Less stress.",
    body: "More fulfillment.",
    bubble: "bg-pink-200/70",
    dot: "bg-pink-500",
  },
  {
    title: "More value.",
    body: "Less spend.",
    bubble: "bg-amber-200/70",
    dot: "bg-amber-500",
  },
];

type DotConfig = {
  direction: "out" | "in";
  duration: number;
  delay: number;
  length: number;
  opacity: number;
  jitter: number;
};

function makeRng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// Per-app streak configs. One streak per app, but each cycle does BOTH
// directions (out then in, with idle gaps embedded in the keyframe). The
// `direction` field flips animation-direction so half the apps start with
// outbound, half with inbound — at any moment the visible streaks are a mix.
const dotConfigs: DotConfig[][] = apps.map((_, i) => {
  const rng = makeRng(i * 73 + 17);
  return [
    {
      direction: rng() > 0.5 ? "out" : "in",
      duration: 2.4 + rng() * 1.2, // 2.4 – 3.6s
      delay: rng() * 3, // 0 – 3s (cycle scrambles the rest)
      length: 10 + Math.floor(rng() * 8), // 10 – 17px
      opacity: 0.55 + rng() * 0.35, // 0.55 – 0.90
      jitter: (rng() - 0.5) * 8, // ±4°
    },
  ];
});

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
      className={`app-node group absolute left-1/2 top-1/2 grid h-10 w-10 cursor-pointer place-items-center rounded-xl bg-gradient-to-br ${app.color} text-lg text-white shadow-lg transition-[box-shadow,filter] duration-200 hover:z-30 hover:shadow-2xl hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl ${
        isSelected ? "z-30 ring-4 ring-white" : "z-10"
      }`}
      style={
        {
          animation: "orbitLoop 90s linear infinite",
          animationPlayState: paused ? "paused" : "running",
          ["--start" as string]: `${startAngle}deg`,
          transform:
            "translate(-50%, -50%) translate(calc(var(--orbit-rx) * cos(var(--start) + var(--orbit-angle))), calc(var(--orbit-ry) * sin(var(--start) + var(--orbit-angle))))",
        } as React.CSSProperties
      }
      aria-label={`${app.name}: ${app.description}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-white opacity-0 blur-xl transition-opacity duration-200 group-hover:opacity-60 group-focus:opacity-60"
      />
      <span
        aria-hidden
        className="inline-flex transition-transform duration-200 ease-out group-hover:scale-125 group-focus:scale-125"
      >
        <app.Icon className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={2.25} />
      </span>
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
  const [pillIdx, setPillIdx] = useState(0);

  const paused = selected !== null || hovered !== null;
  const pillApp = apps[pillIdx];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setPillIdx((i) => (i + 1) % apps.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused]);

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
              className="rounded-full bg-blue-600 px-5 py-2 text-sm font-bold text-white! shadow-md shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Join the private beta
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
        @property --dot-progress {
          syntax: "<number>";
          inherits: false;
          initial-value: 0;
        }
        @keyframes orbitLoop {
          from {
            --orbit-angle: 0deg;
          }
          to {
            --orbit-angle: 360deg;
          }
        }
        /* Single keyframe that fires outbound, idles at the app, fires
           inbound, idles at the workspace. Reversing it (animation-direction:
           reverse) flips the phase order so half the apps go in-then-out.
           Active phases sum to ~22% of the cycle, so density stays sparse. */
        @keyframes dotPing {
          0% {
            --dot-progress: 0.42;
            opacity: 0;
          }
          20% {
            --dot-progress: 0.42;
            opacity: 0;
          }
          22% {
            --dot-progress: 0.5;
            opacity: var(--dot-peak-opacity, 0.85);
          }
          29% {
            --dot-progress: 0.78;
            opacity: var(--dot-peak-opacity, 0.85);
          }
          31% {
            --dot-progress: 0.85;
            opacity: 0;
          }
          65% {
            --dot-progress: 0.85;
            opacity: 0;
          }
          67% {
            --dot-progress: 0.78;
            opacity: var(--dot-peak-opacity, 0.85);
          }
          74% {
            --dot-progress: 0.5;
            opacity: var(--dot-peak-opacity, 0.85);
          }
          76% {
            --dot-progress: 0.42;
            opacity: 0;
          }
          100% {
            --dot-progress: 0.42;
            opacity: 0;
          }
        }
        .connection-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 12px;
          height: 2px;
          border-radius: 1px;
          pointer-events: none;
          opacity: 0;
          z-index: 5;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 35%,
            black 65%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 35%,
            black 65%,
            transparent 100%
          );
          transform: translate(-50%, -50%)
            translate(
              calc(
                var(--dot-progress) * var(--orbit-rx) *
                  cos(var(--start) + var(--orbit-angle))
              ),
              calc(
                var(--dot-progress) * var(--orbit-ry) *
                  sin(var(--start) + var(--orbit-angle))
              )
            )
            rotate(
              atan2(
                calc(
                  var(--orbit-ry) *
                    sin(var(--start) + var(--orbit-angle))
                ),
                calc(
                  var(--orbit-rx) *
                    cos(var(--start) + var(--orbit-angle))
                )
              )
            );
        }
        @keyframes workspacePulse {
          0% {
            transform: scale(0.92);
            opacity: 0;
          }
          25% {
            opacity: 0.55;
          }
          100% {
            transform: scale(1.45);
            opacity: 0;
          }
        }
        .workspace-pulse {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(37, 99, 235, 0.22) 0%,
            rgba(37, 99, 235, 0.08) 45%,
            transparent 70%
          );
          opacity: 0;
          pointer-events: none;
          animation: workspacePulse 4s ease-out infinite;
        }
        .workspace-pulse--delayed {
          animation-delay: 2s;
        }
        .orbit-stage {
          --orbit-rx: 120px;
          --orbit-ry: 120px;
        }
        @media (min-width: 640px) {
          .orbit-stage {
            --orbit-rx: 280px;
            --orbit-ry: 175px;
          }
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
          </div>
          <p className="mx-auto mt-6 max-w-none text-base leading-7 text-slate-600 sm:text-lg sm:whitespace-nowrap">
            Everything you need to run your business{" "}
            <span className="font-semibold text-slate-900">
              without breaking the bank.
            </span>
          </p>

          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-2 text-sm sm:gap-3">
            {benefits.map((b) => (
              <li
                key={b.title}
                className={`relative isolate flex items-center gap-2 overflow-hidden rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-slate-700 shadow-sm backdrop-blur`}
              >
                <span
                  aria-hidden
                  className={`absolute -left-3 -top-3 -z-10 h-10 w-10 rounded-full ${b.bubble} blur-md`}
                />
                <span
                  aria-hidden
                  className={`inline-block h-2 w-2 flex-shrink-0 rounded-full ${b.dot}`}
                />
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
          <div className="relative h-[400px] overflow-hidden rounded-[2.5rem] border border-white bg-gradient-to-b from-white via-blue-50/40 to-blue-100/60 shadow-2xl shadow-blue-200/40 sm:h-[500px] lg:h-[600px]">
            {/* center logo */}
            <div className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white text-center shadow-2xl ring-1 ring-slate-100 sm:h-32 sm:w-56 sm:rounded-[50%] sm:px-4 lg:h-36 lg:w-64">
              <span aria-hidden className="workspace-pulse" />
              <span
                aria-hidden
                className="workspace-pulse workspace-pulse--delayed"
              />
              <div className="relative flex items-baseline gap-1 text-3xl font-black italic text-blue-950 sm:text-5xl">
                m
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow-400 sm:h-2 sm:w-2" />
              </div>
              <p className="relative mt-1 hidden text-[10px] font-semibold leading-tight text-slate-500 sm:block sm:text-[11px]">
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

            {apps.map((app, index) => {
              const startAngle = (index / apps.length) * 360;
              return (
                <Fragment key={app.name}>
                  <AppNode
                    app={app}
                    index={index}
                    total={apps.length}
                    paused={paused}
                    selected={selected}
                    onSelect={handleSelect}
                    onHover={setHovered}
                  />
                  {dotConfigs[index].map((cfg, j) => (
                    <span
                      key={j}
                      aria-hidden
                      className={`connection-dot bg-gradient-to-r ${app.color}`}
                      style={
                        {
                          width: `${cfg.length}px`,
                          animation: `dotPing ${cfg.duration.toFixed(2)}s linear infinite ${cfg.direction === "in" ? "reverse" : "normal"}`,
                          animationDelay: `${cfg.delay.toFixed(2)}s`,
                          ["--start" as string]: `${startAngle + cfg.jitter}deg`,
                          ["--dot-peak-opacity" as string]:
                            cfg.opacity.toFixed(2),
                        } as React.CSSProperties
                      }
                    />
                  ))}
                </Fragment>
              );
            })}

            {/* now-showing pill — mobile only */}
            <button
              type="button"
              onClick={() => handleSelect(pillApp)}
              className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-slate-900 shadow-lg ring-1 ring-slate-200 backdrop-blur transition hover:bg-white sm:hidden"
              aria-label={`Currently showing ${pillApp.name}. Tap to explore.`}
            >
              <span
                aria-hidden
                className={`inline-block h-3 w-3 rounded-md bg-gradient-to-br ${pillApp.color}`}
              />
              <span>{pillApp.name}</span>
              <span aria-hidden className="text-slate-300">
                ·
              </span>
              <span className="font-normal text-slate-500">tap to explore</span>
            </button>
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
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 shadow-lg backdrop-blur">
                <selected.Icon
                  aria-hidden
                  className="h-7 w-7"
                  strokeWidth={2.25}
                />
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
                className="mt-6 block rounded-2xl bg-blue-600 px-5 py-3.5 text-center text-sm font-bold text-white! shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Discover it in private beta
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
                <p className="mb-0! flex h-10 items-center text-xs leading-none text-slate-500">
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
                className="rounded-2xl bg-blue-600 px-7 py-4 text-sm font-bold text-white! shadow-lg shadow-blue-950/50 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Join the private beta
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
