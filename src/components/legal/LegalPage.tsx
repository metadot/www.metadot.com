import { ReactNode } from "react";

type LegalPageProps = {
  eyebrow: string;
  title: ReactNode;
  lastUpdated?: string;
  children: ReactNode;
};

export default function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  children,
}: LegalPageProps) {
  return (
    <>
      <section className="py-16 md:py-24 text-center border-b border-[#334155]">
        <div className="container">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#94a3b8] mb-4">
            {eyebrow}
          </p>
          <h1 className="text-3xl md:text-5xl">{title}</h1>
          {lastUpdated && (
            <p className="font-mono text-xs text-[#64748b] mt-6">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto legal-content text-[#94a3b8] leading-relaxed">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
