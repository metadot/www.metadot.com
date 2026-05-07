"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  BarChart3,
  BookOpen,
  CalendarCheck,
  FileText,
  Handshake,
  Kanban,
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
  hex: string;
  Icon: LucideIcon;
  description: string;
  bullets: string[];
};

const apps: App[] = [
  {
    name: "Assets",
    color: "from-blue-400 to-blue-700",
    hex: "#3b82f6",
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
    hex: "#10b981",
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
    hex: "#14b8a6",
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
    hex: "#f43f5e",
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
    hex: "#f97316",
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
    hex: "#a855f7",
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
    hex: "#8b5cf6",
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
    name: "Stackr project",
    color: "from-indigo-400 to-indigo-600",
    hex: "#6366f1",
    Icon: Kanban,
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
    hex: "#22c55e",
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
    hex: "#f59e0b",
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
    hex: "#eab308",
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

type Dot = {
  direction: "out" | "in";
  duration: number;
  delay: number;
  size: number;
};

type Connection = {
  pathType: 1 | 2 | 3; // 1=L vert-first, 2=L horiz-first, 3=Z (two turns)
  dots: Dot[];
};

function makeRng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// Constellation: every app is permanently wired to the workspace via a slate
// L- or Z-shape. Each wire carries 2–3 colored dots staggered across its
// cycle, mixed in/out, so the network feels alive in both directions.
const connections: Connection[] = apps.map((_, i) => {
  const rng = makeRng(i * 73 + 17);
  const r = rng();
  const pathType: 1 | 2 | 3 = r < 0.4 ? 1 : r < 0.8 ? 2 : 3;
  const dotCount = 2 + Math.floor(rng() * 2); // 2 or 3
  const dots: Dot[] = [];
  for (let j = 0; j < dotCount; j++) {
    dots.push({
      direction: rng() > 0.5 ? "out" : "in",
      duration: 5 + rng() * 3, // 5 – 8s
      delay: rng() * 8, // 0 – 8s — scatters across cycles
      size: 4 + Math.floor(rng() * 2), // 4 – 5px radius
    });
  }
  return { pathType, dots };
});

function AppNode({
  app,
  index,
  total,
  selected,
  onSelect,
  onHover,
}: {
  app: App;
  index: number;
  total: number;
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
          ["--start" as string]: `${startAngle}deg`,
          transform:
            "translate(-50%, -50%) translate(calc(var(--orbit-rx) * cos(var(--start))), calc(var(--orbit-ry) * sin(var(--start))))",
        } as React.CSSProperties
      }
      aria-label={`${app.name}: ${app.description}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-white opacity-0 blur-xl transition-opacity duration-200 group-hover:opacity-60 group-focus:opacity-60"
      />
      <app.Icon
        className="h-5 w-5 origin-center transition-transform duration-200 ease-out group-hover:scale-125 group-focus:scale-125 sm:h-7 sm:w-7"
        strokeWidth={2.25}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus:opacity-100"
      >
        {app.name}
      </span>
    </button>
  );
}

function ConnectionLayer() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const cx = size.w / 2;
  const cy = size.h / 2;
  let rx = 120;
  let ry = 120;
  if (size.w >= 1024) {
    rx = 400;
    ry = 247;
  } else if (size.w >= 640) {
    rx = 280;
    ry = 175;
  }

  // Inset where lines/dots stop, so they don't overlap the icon and the
  // central workspace circle.
  const appInset = size.w >= 640 ? 32 : 22;
  const centerInsetX = size.w >= 640 ? 110 : 50;
  const centerInsetY = size.w >= 640 ? 64 : 50;

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 z-[1]"
      aria-hidden
    >
      {size.w > 0 && (
        <svg
          width={size.w}
          height={size.h}
          className="absolute inset-0 overflow-visible"
        >
          {apps.map((app, i) => {
            const angle = (i / apps.length) * 2 * Math.PI;
            const ux = Math.cos(angle);
            const uy = Math.sin(angle);
            // Endpoint near the app (just inside its icon).
            const ax = cx + (rx - appInset) * ux;
            const ay = cy + (ry - appInset) * uy;
            // Endpoint near the center workspace (on its rounded edge).
            const tx = cx + centerInsetX * ux * 0.6;
            const ty = cy + centerInsetY * uy * 0.6;

            const cfg = connections[i];
            const dx = tx - ax;
            const dy = ty - ay;
            const adx = Math.abs(dx);
            const ady = Math.abs(dy);

            // If either leg of an L would be near-zero (axis-aligned app),
            // promote to Z so both turns stay visible.
            const minLeg = 50;
            const pathType =
              adx < minLeg || ady < minLeg ? 3 : cfg.pathType;

            let path: string;
            if (pathType === 1) {
              // vertical first, then horizontal — one 90° turn
              path = `M ${ax.toFixed(2)} ${ay.toFixed(2)} L ${ax.toFixed(2)} ${ty.toFixed(2)} L ${tx.toFixed(2)} ${ty.toFixed(2)}`;
            } else if (pathType === 2) {
              // horizontal first, then vertical — one 90° turn
              path = `M ${ax.toFixed(2)} ${ay.toFixed(2)} L ${tx.toFixed(2)} ${ay.toFixed(2)} L ${tx.toFixed(2)} ${ty.toFixed(2)}`;
            } else {
              // Z-shape — two 90° turns at the midpoint of the longer axis
              if (adx >= ady) {
                const midX = ax + dx * 0.5;
                path = `M ${ax.toFixed(2)} ${ay.toFixed(2)} L ${midX.toFixed(2)} ${ay.toFixed(2)} L ${midX.toFixed(2)} ${ty.toFixed(2)} L ${tx.toFixed(2)} ${ty.toFixed(2)}`;
              } else {
                const midY = ay + dy * 0.5;
                path = `M ${ax.toFixed(2)} ${ay.toFixed(2)} L ${ax.toFixed(2)} ${midY.toFixed(2)} L ${tx.toFixed(2)} ${midY.toFixed(2)} L ${tx.toFixed(2)} ${ty.toFixed(2)}`;
              }
            }

            return (
              <g key={app.name}>
                {/* Neutral slate wire — always visible, no animation. */}
                <path
                  d={path}
                  fill="none"
                  stroke="#94a3b8"
                  strokeOpacity="0.35"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {cfg.dots.map((dot, j) => {
                  const dotKeyframe =
                    dot.direction === "out" ? "pulseDotOut" : "pulseDotIn";
                  return (
                    <circle
                      key={j}
                      r={dot.size}
                      cx="0"
                      cy="0"
                      fill={app.hex}
                      style={
                        {
                          offsetPath: `path("${path}")`,
                          offsetRotate: "0deg",
                          filter: `drop-shadow(0 0 8px ${app.hex})`,
                          animation: `${dotKeyframe} ${dot.duration.toFixed(2)}s linear infinite`,
                          animationDelay: `${dot.delay.toFixed(2)}s`,
                        } as React.CSSProperties
                      }
                    />
                  );
                })}
              </g>
            );
          })}
        </svg>
      )}
    </div>
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
        /* Glowing dot travels through in a 15% window per cycle. */
        @keyframes pulseDotOut {
          0%,
          40% {
            offset-distance: 0%;
            opacity: 0;
          }
          42% {
            offset-distance: 0%;
            opacity: 1;
          }
          55% {
            offset-distance: 100%;
            opacity: 1;
          }
          57%,
          100% {
            offset-distance: 100%;
            opacity: 0;
          }
        }
        @keyframes pulseDotIn {
          0%,
          40% {
            offset-distance: 100%;
            opacity: 0;
          }
          42% {
            offset-distance: 100%;
            opacity: 1;
          }
          55% {
            offset-distance: 0%;
            opacity: 1;
          }
          57%,
          100% {
            offset-distance: 0%;
            opacity: 0;
          }
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
                className={`relative isolate flex items-center gap-2 overflow-hidden rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-slate-700 shadow-sm backdrop-blur [clip-path:inset(0_round_9999px)]`}
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

            <ConnectionLayer />

            {apps.map((app, index) => (
              <AppNode
                key={app.name}
                app={app}
                index={index}
                total={apps.length}
                selected={selected}
                onSelect={handleSelect}
                onHover={setHovered}
              />
            ))}

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
              <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/15 p-1 backdrop-blur">
                <button
                  type="button"
                  onClick={prevApp}
                  aria-label="Previous app"
                  className="grid h-7 w-7 place-items-center rounded-full text-white transition hover:bg-white/25"
                >
                  <span aria-hidden>←</span>
                </button>
                <button
                  type="button"
                  onClick={nextApp}
                  aria-label="Next app"
                  className="grid h-7 w-7 place-items-center rounded-full text-white transition hover:bg-white/25"
                >
                  <span aria-hidden>→</span>
                </button>
                <span aria-hidden className="mx-0.5 h-4 w-px bg-white/30" />
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close"
                  className="grid h-7 w-7 place-items-center rounded-full text-white transition hover:bg-white/25"
                >
                  ✕
                </button>
              </div>
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
