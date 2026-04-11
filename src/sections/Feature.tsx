import Link from "next/link";

export default function Feature() {
  return (
    <section className="py-16 md:py-24 border-b border-[#334155]">
      <div className="container">
        <div className="mb-12">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#94a3b8] mb-3">
            Typing Culture
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            We take typing seriously.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* TyprX */}
          <div className="p-6 bg-[#1e293b] border border-[#334155] rounded-sm">
            <h3 className="font-mono text-lg font-semibold text-white mb-2">
              TyprX
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
              How fast do you type? TyprX is an online typing race app. Type
              a random sentence as fast as you can and compete with others.
            </p>
            <Link
              href="https://typrx.com/"
              className="btn-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try a typing race
            </Link>
          </div>

          {/* UTC */}
          <div className="p-6 bg-[#1e293b] border border-[#334155] rounded-sm">
            <h3 className="font-mono text-lg font-semibold text-white mb-2">
              Ultimate Typing Championship
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
              A worldwide competition where the best compete for the title
              of Quickest Typist in the World. Online or offline, open to everyone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://ultimatetypingchampionship.com/"
                className="btn-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </Link>
              <Link
                href="https://www.youtube.com/watch?v=vPlb8IwJIzY"
                className="btn-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch 2020 finals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
