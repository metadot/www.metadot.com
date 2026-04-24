export default function MetadotAppsLandingPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(255,245,250,0.92)_25%,_rgba(238,248,255,0.96)_55%,_#ffffff_100%)] text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-3xl" />
          <div className="absolute top-24 right-0 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10 lg:px-10">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 shadow-lg shadow-fuchsia-200/50 ring-1 ring-white">
                <span className="text-xl font-black tracking-tight text-fuchsia-600">M</span>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-fuchsia-600">Metadot Apps</p>
                <p className="text-xs text-slate-500">Connected Workspace</p>
              </div>
            </div>

            <a
              href="#cta"
              className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </header>

          <div className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-10">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-white/80 px-4 py-2 text-sm font-medium text-fuchsia-700 shadow-sm backdrop-blur">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Bright tools. Smarter workflows. One connected suite.
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-none tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                The Search Is Over.
              </h1>

              <p className="mt-5 text-2xl font-semibold tracking-tight text-slate-700 sm:text-3xl">
                Metadot Apps Connected Workspace
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Everything you need to run your business without breaking the bank.
                Powerful apps for projects, scheduling, CRM, tickets, and automation — all designed to work together from day one.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#cta"
                  className="rounded-2xl bg-fuchsia-600 px-7 py-4 text-center text-base font-semibold text-white shadow-xl shadow-fuchsia-300/50 transition hover:-translate-y-0.5 hover:bg-fuchsia-500"
                >
                  Start Exploring
                </a>
                <a
                  href="#features"
                  className="rounded-2xl border border-slate-200 bg-white/80 px-7 py-4 text-center text-base font-semibold text-slate-700 shadow-lg shadow-slate-100 transition hover:-translate-y-0.5"
                >
                  See What&rsquo;s Included
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  ["One workspace", "No more juggling disconnected apps"],
                  ["Built for teams", "Run everyday work in one bright, simple system"],
                  ["Budget-friendly", "Get more done without paying for a dozen tools"],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-3xl border border-white/70 bg-white/70 p-5 shadow-lg shadow-slate-100 backdrop-blur">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-600">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-fuchsia-200/40 via-cyan-200/30 to-amber-100/40 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["Projects", "Keep work visible and moving"],
                    ["Scheduling", "Book meetings without the back-and-forth"],
                    ["CRM", "Track opportunities and customer relationships"],
                    ["Automation", "Connect every step behind the scenes"],
                    ["Tickets", "Support your customers from one place"],
                    ["AI", "Surface answers and take action across apps"],
                  ].map(([title, desc]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm"
                    >
                      <div className="mb-3 h-11 w-11 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-pink-500 to-cyan-500" />
                      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-3xl bg-slate-900 p-6 text-white shadow-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-300">Why teams switch</p>
                  <p className="mt-3 text-2xl font-bold leading-tight">
                    More connection. Less complexity. Lower cost.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Replace scattered tools and disconnected data with one connected workspace that feels easy, modern, and ready to grow with your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 pb-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-100 bg-white/85 p-8 shadow-xl shadow-slate-100">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.26em] text-cyan-600">Everything working together</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              A connected workspace built to keep your business moving.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              From the first customer interaction to the final task, Metadot Apps helps your team stay aligned, automate handoffs, and keep work flowing.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Run projects clearly",
                body: "Track what’s done, what’s in progress, and what needs attention without digging through scattered tools.",
              },
              {
                title: "Book faster",
                body: "Let customers and teammates choose a time instantly, without endless email back-and-forth.",
              },
              {
                title: "Keep customer work connected",
                body: "Manage customer relationships, follow-ups, and next steps alongside the rest of your business.",
              },
              {
                title: "Automate the busywork",
                body: "Create seamless handoffs between apps so your team spends less time updating systems and more time getting results.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Simple to adopt", "A clean, inviting experience your team can actually enjoy using every day."],
            ["Powerful by design", "Apps for the work you do most, connected in one flexible ecosystem."],
            ["Priced to make sense", "Give your team the tools they need without piling on expensive subscriptions."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[2rem] bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg shadow-slate-100 ring-1 ring-slate-100">
              <h3 className="text-2xl font-black tracking-tight text-slate-900">{title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:pb-16">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-fuchsia-600 via-pink-500 to-cyan-500 p-[1px] shadow-2xl shadow-fuchsia-200/60">
          <div className="rounded-[2.45rem] bg-white px-8 py-12 text-center sm:px-12">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-fuchsia-600">Metadot Apps</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              The connected workspace your business has been looking for.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Stop searching. Start running your business with one bright, connected system built to do more for less.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="rounded-2xl bg-slate-900 px-7 py-4 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Request a Demo
              </a>
              <a
                href="#features"
                className="rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5"
              >
                Explore the Workspace
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
