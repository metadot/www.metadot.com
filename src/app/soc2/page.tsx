import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "SOC 2 Compliance | Metadot",
  description:
    "Metadot Corporation operates its SaaS products under a SOC 2 Type II program.",
};

const pillars = [
  {
    title: "Access Controls",
    desc: "Multi-factor authentication, role-based access, and the principle of least privilege across production systems.",
  },
  {
    title: "Continuous Monitoring",
    desc: "Around-the-clock alerting and a documented incident response runbook.",
  },
  {
    title: "Independent Audits",
    desc: "Regular third-party audits verify that controls are designed correctly and consistently operated.",
  },
  {
    title: "Encryption",
    desc: "Customer data is encrypted in transit with TLS and at rest in the database and backups.",
  },
  {
    title: "Threat Detection",
    desc: "Anomaly detection on infrastructure and application logs, paired with vulnerability scanning.",
  },
  {
    title: "Ongoing Compliance",
    desc: "Policies are reviewed at least annually; staff complete security training each year.",
  },
];

export default function Soc2() {
  return (
    <LegalPage
      eyebrow="Compliance"
      title="SOC 2 Type II"
      lastUpdated="May 2026"
    >
      <p>
        Metadot Corporation operates its SaaS products under a SOC 2 Type II
        program. An independent auditor evaluates our security controls over a
        period of time &mdash; not just at a single point &mdash; to confirm
        that they are properly designed and consistently operated.
      </p>

      <h2>What SOC 2 Type II Means</h2>
      <p>
        SOC 2 is a reporting framework developed by the AICPA that evaluates a
        service organization&apos;s controls against five Trust Services
        Criteria: security, availability, processing integrity, confidentiality,
        and privacy. A Type II report covers a multi-month observation window,
        which is why customers and procurement teams treat it as the stronger
        of the two SOC 2 reports.
      </p>

      <h2>Our Security Program</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="p-5 bg-[#1e293b] border border-[#334155] rounded-sm"
          >
            <h3 className="text-base font-semibold text-white mb-2">
              {p.title}
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed m-0">
              {p.desc}
            </p>
          </div>
        ))}
      </div>

      <h2>Requesting Our SOC 2 Report</h2>
      <p>
        We share our SOC 2 Type II report with current and prospective
        customers under a mutual NDA. To request a copy, contact{" "}
        <a href="mailto:support@metadot.com">support@metadot.com</a> with
        the name of your organization and the product you are evaluating.
      </p>

      <h2>Related Programs</h2>
      <p>
        See our <a href="/privacy-policy">Privacy Policy</a> for how we handle
        personal data, <a href="/hipaa">HIPAA</a> for protected health
        information, and <a href="/accessibility">Accessibility</a> for our
        commitment to WCAG conformance.
      </p>
    </LegalPage>
  );
}
