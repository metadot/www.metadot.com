import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Metadot",
  description:
    "The terms that govern your use of Metadot Corporation products and services.",
};

export default function TermsOfService() {
  return (
    <LegalPage
      eyebrow="Compliance"
      title="Terms of Service"
      lastUpdated="May 2026"
    >
      <p>
        These Terms of Service govern your use of the websites, software, and
        SaaS products operated by Metadot Corporation (&ldquo;Metadot,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us&rdquo;). By creating an account or using a
        Metadot service, you agree to these terms. If you are accepting on
        behalf of an organization, you confirm you have the authority to bind
        that organization.
      </p>

      <h2>Account</h2>
      <ul>
        <li>You must provide your legal name and a valid email address when signing up.</li>
        <li>You are responsible for keeping your credentials confidential and for everything that happens under your account.</li>
        <li>Accounts are intended for individuals or organizations &mdash; not for sharing across unrelated parties.</li>
        <li>You must be at least the age of majority in your jurisdiction to create a paid account.</li>
      </ul>

      <h2>Acceptable Use</h2>
      <p>You agree not to use any Metadot service to:</p>
      <ul>
        <li>Violate any law or third-party right.</li>
        <li>Send spam, malware, or otherwise harmful content.</li>
        <li>Probe, scan, or test the vulnerability of our systems without prior written permission.</li>
        <li>Interfere with or disrupt the service or the servers that run it.</li>
        <li>Reverse engineer, decompile, or attempt to extract source code from our software, except to the extent that law expressly permits it.</li>
      </ul>

      <h2>Payment and Plans</h2>
      <ul>
        <li>Some plans are free; paid plans are billed in advance on a monthly or annual cycle.</li>
        <li>Fees are non-refundable, except where required by law. If you downgrade a paid plan mid-cycle, we will apply unused value as credit toward the next invoice.</li>
        <li>You authorize us to charge the payment method on file for recurring fees until you cancel.</li>
        <li>Past-due accounts may be suspended after notice.</li>
      </ul>

      <h2>Changes to the Service and Fees</h2>
      <p>
        We may add, remove, or change features of a service over time. We may
        also change the fees for a plan. If we change the price of a plan you
        are on, we will give at least 30 days&apos; notice before the new price
        takes effect on your account.
      </p>

      <h2>Cancellation and Termination</h2>
      <ul>
        <li>You can cancel a paid plan at any time from your account settings. Cancellation takes effect at the end of the current billing cycle.</li>
        <li>You are responsible for charges accrued before the cancellation takes effect.</li>
        <li>We may suspend or terminate an account that violates these terms, that creates risk for us or other users, or that is inactive for an extended period. We will use commercially reasonable efforts to notify you first.</li>
        <li>After termination we may delete account content. Export any content you want to keep before cancelling.</li>
      </ul>

      <h2>Content You Provide</h2>
      <p>
        You retain ownership of the content you upload or create inside our
        services (&ldquo;Your Content&rdquo;). You grant Metadot a limited
        license to host, copy, transmit, and display Your Content as needed to
        operate the service for you, and to back it up, secure it, and respond
        to support requests.
      </p>

      <h2>Our Intellectual Property</h2>
      <p>
        The Metadot services, including their interfaces, software,
        documentation, and trademarks, are owned by Metadot or its licensors
        and are protected by intellectual property laws. These terms do not
        grant you any rights to our trademarks or branding.
      </p>

      <h2>Privacy and Security</h2>
      <p>
        Our handling of personal information is described in our{" "}
        <a href="/privacy-policy">Privacy Policy</a>. Customers handling
        protected health information should review our{" "}
        <a href="/hipaa">HIPAA</a> page and request a Business Associate
        Agreement before using a service for that purpose.
      </p>

      <h2>Warranties and Disclaimers</h2>
      <p>
        The services are provided &ldquo;as is&rdquo; and &ldquo;as
        available.&rdquo; To the maximum extent permitted by law, Metadot
        disclaims all warranties, whether express or implied, including
        merchantability, fitness for a particular purpose, and
        non-infringement. We do not warrant that the service will be
        uninterrupted, error free, or that any defect will be corrected.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Metadot will not be liable for
        any indirect, incidental, special, consequential, or punitive damages,
        or for lost profits, revenues, data, or goodwill, arising out of or
        relating to the service. Our aggregate liability for any claim arising
        out of or relating to the service is limited to the fees you paid us
        for the service in the 12 months preceding the claim.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold Metadot harmless from claims brought by
        third parties arising out of your content, your use of the service in
        violation of these terms, or your violation of applicable law.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms are governed by the laws of the State of Texas, United
        States, without regard to its conflict of laws rules. Any dispute will
        be resolved in the state or federal courts located in Travis County,
        Texas.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these terms from time to time. Material changes will be
        announced in-product or by email at least 30 days before they take
        effect. Continued use of the service after a change takes effect
        constitutes acceptance.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <a href="mailto:support@metadot.com">support@metadot.com</a>.
      </p>
    </LegalPage>
  );
}
