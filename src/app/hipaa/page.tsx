import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "HIPAA Compliance | Metadot",
  description:
    "How Metadot Corporation supports HIPAA compliance for customers handling protected health information.",
};

export default function Hipaa() {
  return (
    <LegalPage
      eyebrow="Compliance"
      title="HIPAA"
      lastUpdated="May 2026"
    >
      <p>
        The Health Insurance Portability and Accountability Act (HIPAA) sets
        the U.S. baseline for how protected health information (PHI) must be
        handled by healthcare organizations and the vendors that support them.
        Metadot Corporation operates products used by healthcare-adjacent
        teams, and we have built our security program so that customers who
        need to handle PHI can do so under a Business Associate Agreement.
      </p>

      <h2>Our HIPAA Posture</h2>
      <ul>
        <li>
          <strong>Safeguarding PHI.</strong> Customer data is encrypted in
          transit and at rest. Access to production systems is restricted,
          authenticated with multi-factor authentication, and logged.
        </li>
        <li>
          <strong>Access controls.</strong> Within our products, account owners
          control which agents can view which records. End users can only see
          their own activity.
        </li>
        <li>
          <strong>Administrative, physical, and technical safeguards.</strong>{" "}
          We align our controls with 45 CFR &sect;&sect;&nbsp;164.306, 164.308,
          164.310, 164.312, and 164.314.
        </li>
        <li>
          <strong>Subprocessors.</strong> Vendors that may handle PHI are
          required to commit, in writing, to equivalent safeguards.
        </li>
      </ul>

      <h2>Business Associate Agreement</h2>
      <p>
        Metadot has executed a Business Associate Agreement (BAA) with Amazon
        Web Services, our infrastructure provider. We will execute a BAA with
        eligible customers on the appropriate Metadot products. To request a
        BAA, contact{" "}
        <a href="mailto:compliance@metadot.com">compliance@metadot.com</a>.
      </p>

      <h2>What Customers Are Responsible For</h2>
      <p>
        HIPAA compliance is a shared responsibility. Metadot provides the
        controls listed above; customers are responsible for using the product
        in a HIPAA-compliant way, including:
      </p>
      <ul>
        <li>Limiting access to PHI to staff who need it for their role.</li>
        <li>Configuring strong authentication and account hygiene.</li>
        <li>Training their workforce on HIPAA requirements.</li>
        <li>Executing a BAA with Metadot before storing PHI in the product.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>What is HIPAA?</h3>
      <p>
        HIPAA is a U.S. federal law that establishes rules for protecting the
        privacy and security of individuals&apos; health information. It sets
        requirements for &ldquo;covered entities&rdquo; (such as healthcare
        providers and insurers) and for &ldquo;business associates&rdquo; (such
        as vendors that process PHI on their behalf).
      </p>

      <h3>What rights does HIPAA give patients?</h3>
      <p>
        Patients have the right to access their own health information,
        request corrections, learn how their data has been disclosed, and
        receive notifications in the event of a breach.
      </p>

      <h3>Who needs to be HIPAA compliant?</h3>
      <p>
        Covered entities and their business associates must comply with HIPAA.
        Organizations that are not in healthcare but that hold PHI on behalf
        of a covered entity also fall under the rules.
      </p>

      <h3>What counts as protected health information?</h3>
      <p>
        PHI is any individually identifiable health information held or
        transmitted by a covered entity or business associate &mdash; in any
        form, on paper, electronic, or spoken.
      </p>

      <h3>Is HIPAA &ldquo;certified&rdquo;?</h3>
      <p>
        There is no official government certification for HIPAA. Compliance is
        demonstrated through documented policies, technical controls, and the
        results of independent audits.
      </p>

      <h3>What safeguards does Metadot provide?</h3>
      <p>
        Encryption in transit and at rest, audited access controls,
        comprehensive logging, daily encrypted backups, 24/7 monitoring,
        background checks and confidentiality agreements for staff with
        access, and a signed BAA with our infrastructure provider.
      </p>

      <h3>How do I sign a BAA with Metadot?</h3>
      <p>
        Reach out to{" "}
        <a href="mailto:compliance@metadot.com">compliance@metadot.com</a> with
        your account details and the product you intend to use.
      </p>
    </LegalPage>
  );
}
