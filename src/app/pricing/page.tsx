import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

const SIGNUP_URL = "https://metadot.net/";
const BOOK_URL = "https://metadot.net/book/metadot/bkm/metadot-apps-onboarding";

const plans = [
  {
    name: "Free",
    price: "$0",
    cadence: "/ mo",
    description: "Start with the core Metadot Apps workspace.",
    cta: "Sign up free",
    href: SIGNUP_URL,
    highlighted: false,
    features: [
      "Up to 2 apps",
      "1 GB storage space",
      "Up to 5 users",
      "Upgrade when you need more",
    ],
  },
  {
    name: "Pro",
    price: "$15",
    cadence: "/ user / mo",
    description: "A great choice for freelancers, startups, and smaller teams.",
    cta: "Try Pro free for 30 days",
    href: SIGNUP_URL,
    highlighted: false,
    features: [
      "Unlimited users",
      "500 GB storage space",
      "Pay per user",
      "Self-guided onboarding",
      "Customer support",
      "Pay by credit card",
      "30-day free trial",
    ],
  },
  {
    name: "Pro Unlimited",
    price: "$200",
    cadence: "/ mo",
    description:
      "Top-of-the-line, all-inclusive pricing for your organization.",
    cta: "Try Pro Unlimited free for 60 days",
    href: SIGNUP_URL,
    highlighted: true,
    features: [
      "Unlimited users",
      "5 TB storage space",
      "Fixed price with no per-user charges",
      "Advanced Admin controls included",
      "Personal onboarding with our team",
      "Priority customer support",
      "White glove onboarding and training",
      "More payment options",
      "60-day free trial",
    ],
  },
];

export const metadata: Metadata = {
  title: { absolute: "Metadot Apps Pricing — Free, Pro, and Pro Unlimited" },
  description:
    "Simple Metadot Apps pricing: Free, Pro at $15 per user per month, and Pro Unlimited at a flat $200 per month.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Metadot Apps Pricing — Free, Pro, and Pro Unlimited",
    description:
      "Simple Metadot Apps pricing with Free, Pro, and Pro Unlimited packages.",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-[1040px] px-6 pt-16 pb-20">
      <section className="mb-10 text-center">
        <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#f0b93c]">
          Metadot Apps pricing
        </p>
        <h1 className="mb-4 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          Pick a plan.
          <br />
          Try it free.
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-[#94a3b8] md:text-xl">
          Start free, pay per user, or put your whole organization on one flat
          monthly price.
        </p>
      </section>

      <section
        aria-label="Pricing plans"
        className="grid grid-cols-1 gap-4 lg:grid-cols-3"
      >
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`flex min-h-[520px] flex-col border p-6 md:p-8 ${
              plan.highlighted
                ? "border-[#f0b93c] bg-[#1e293b]"
                : "border-[#334155] bg-[#13243a]"
            }`}
          >
            <div className="mb-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <h2 className="mb-0 text-2xl font-bold text-white">
                  {plan.name}
                </h2>
                {plan.highlighted && (
                  <span className="border border-[#f0b93c] px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#f0b93c]">
                    Best value
                  </span>
                )}
              </div>
              <p className="mb-6 text-base leading-relaxed text-[#94a3b8]">
                {plan.description}
              </p>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-bold leading-none tracking-tight text-white">
                  {plan.price}
                </span>
                <span className="pb-1 font-mono text-sm text-[#94a3b8]">
                  {plan.cadence}
                </span>
              </div>
            </div>

            <ul className="mb-8 flex flex-1 flex-col gap-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-[#cbd5e1]"
                >
                  <Check
                    aria-hidden="true"
                    size={18}
                    className="mt-1 flex-shrink-0 text-[#f0b93c]"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={plan.href}
              className={
                plan.highlighted ? "btn btn-primary w-full" : "btn w-full"
              }
            >
              {plan.cta}
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-6 border border-[#334155] bg-[#0b1623] px-6 py-6 text-center">
        <p className="mx-auto mb-4 max-w-[680px] text-[0.95rem] leading-relaxed text-[#94a3b8]">
          Pro trials run for 30 days. Pro Unlimited trials run for 60 days. Want
          help choosing the right setup for your team?
        </p>
        <Link href={BOOK_URL} className="btn">
          Book a demo
        </Link>
      </section>
    </div>
  );
}
