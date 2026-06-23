import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Metadot",
  description:
    "How Metadot Corporation collects, uses, secures, and shares information across our products and services.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Compliance"
      title="Privacy Policy & GDPR"
      lastUpdated="June 2026"
    >
      <p>
        Metadot Corporation (&ldquo;Metadot,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) builds hardware and
        software products including Das Keyboard, Mojo Helpdesk, Bamzooka,
        Montastic, and TyprX. This policy explains what information we collect,
        how we use it, and the safeguards we put in place to protect it.
      </p>

      <h2>SOC 2 Type II</h2>
      <p>
        Our SaaS products are operated under a SOC 2 Type II program. An
        independent auditor evaluates our security controls on an ongoing basis
        to confirm they are not only well designed but consistently operated.
      </p>

      <h2>AI Features and Customer Data</h2>
      <p>
        When our products use AI to assist users, customer data stays scoped to
        the account it originated in. We do not use customer content to train
        third-party foundation models, and we contractually require the model
        providers we work with to behave the same way.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We only collect information you knowingly provide &mdash; for example,
        when you create an account, contact support, subscribe to a newsletter,
        place an order, or upload content into one of our products. We use that
        information for the purpose it was provided, and we do not repurpose it
        without your consent.
      </p>
      <ul>
        <li>Account identifiers (name, email, organization)</li>
        <li>Billing information needed to process a purchase</li>
        <li>Content you create inside a product (tickets, lists, configurations)</li>
        <li>Operational logs needed to run and secure the service</li>
      </ul>

      <h2>How We Protect Your Data</h2>
      <p>
        Access to customer data is restricted to a small group of engineers and
        product staff who require it to operate the service. All staff sign
        confidentiality agreements and complete security training. Internal
        actions on production systems are logged and reviewed.
      </p>
      <ul>
        <li>Passwords are stored using one-way cryptographic hashing.</li>
        <li>Payment details are tokenized by our payment processor; full card numbers never reach our servers.</li>
        <li>Customer data is encrypted in transit (TLS) and at rest.</li>
        <li>Production data is backed up daily and the backups are encrypted.</li>
        <li>Infrastructure is monitored continuously; on-call engineers respond to alerts around the clock.</li>
      </ul>

      <h2>Hosting</h2>
      <p>
        Our SaaS products are hosted on Amazon Web Services in ISO&nbsp;27001
        certified facilities. We rely on AWS&apos;s physical security,
        environmental controls, and network defenses, on top of which we operate
        our own application-level controls.
      </p>

      <h2>HIPAA and Business Associate Agreements</h2>
      <p>
        Metadot has executed a Business Associate Agreement (BAA) with Amazon
        Web Services. For products designed to handle protected health
        information (PHI), we will execute a BAA with eligible customers on
        request. See our <a href="/hipaa">HIPAA page</a> for details.
      </p>

      <h2>Cookies and Tracking</h2>
      <p>
        We use session cookies to keep you signed in and to make the site work,
        and a small number of analytics cookies to understand how the site is
        used in aggregate. You can disable non-essential cookies in your
        browser; some features will not work without session cookies.
      </p>

      <h2>Analytics</h2>
      <p>
        We use Google Analytics with pseudonymous identifiers to understand
        traffic patterns and to improve the site. You can opt out using
        Google&apos;s browser add-on or by disabling cookies.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We integrate with a limited set of third-party services to operate the
        business &mdash; for example, an email delivery provider, a payments
        processor, and productivity tools used by our staff. We choose vendors
        that meet our security and privacy standards and that are willing to
        commit to a GDPR-compliant data processing arrangement.
      </p>

      <h2>Google User Data</h2>

      <h3>Data Accessed</h3>
      <p>
        When a user connects their Google account, Metadot products may access:
      </p>
      <ul>
        <li>Google account email address</li>
        <li>Google Calendar list</li>
        <li>Calendar free/busy availability</li>
        <li>Calendar events created by the application</li>
        <li>Google Meet conference information (when enabled)</li>
      </ul>

      <h3>Data Usage</h3>
      <p>
        This data is used solely to provide scheduling and calendar integration
        features, including:
      </p>
      <ul>
        <li>Identifying the connected Google account</li>
        <li>Allowing users to select a calendar for bookings</li>
        <li>Determining available meeting times through free/busy queries</li>
        <li>Creating, updating, and deleting booking events</li>
        <li>Inviting attendees to scheduled meetings</li>
        <li>Generating Google Meet links when requested</li>
      </ul>
      <p>
        Metadot does not use Google user data for advertising, profiling, or
        marketing purposes.
      </p>

      <h3>Limited Use Disclosure</h3>
      <p>
        Metadot&apos;s use and transfer of information received from Google APIs
        to any other app will adhere to the{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements. The use and transfer of raw or
        derived user data received from Google Workspace APIs will adhere to the
        Google API Services User Data Policy, including the Limited Use
        requirements.
      </p>

      <h3>Data Sharing</h3>
      <p>Metadot does not sell Google user data.</p>
      <p>Google user data is shared only:</p>
      <ul>
        <li>With Google services as required to perform requested calendar operations</li>
        <li>With meeting attendees through calendar invitations created by the user</li>
        <li>With subprocessors required to host and operate the service</li>
      </ul>

      <h3>Data Storage &amp; Protection</h3>
      <ul>
        <li>Data is transmitted using TLS encryption.</li>
        <li>OAuth tokens are encrypted at rest.</li>
        <li>Access is restricted to authorized systems and personnel.</li>
        <li>Security controls are used to protect against unauthorized access.</li>
      </ul>

      <h3>Data Retention &amp; Deletion</h3>
      <ul>
        <li>Google OAuth credentials are retained only while the integration remains connected.</li>
        <li>Users may disconnect their Google account at any time.</li>
        <li>Upon disconnection, stored OAuth credentials are deleted.</li>
        <li>
          Users may request deletion of related data by contacting{" "}
          <a href="mailto:support@metadot.com">support@metadot.com</a>.
        </li>
      </ul>

      <h2>Payment Processing</h2>
      <p>
        Payments are handled by a PCI-compliant payment processor. We receive a
        token and the last four digits of the card; we do not store the full
        card number, expiration, or CVV.
      </p>

      <h2>When We Share Information</h2>
      <p>
        We do not sell personal information. We share information only when:
      </p>
      <ul>
        <li>You direct us to (for example, by enabling an integration).</li>
        <li>A vendor needs it to provide a service on our behalf under a contract that restricts how they use it.</li>
        <li>We are legally required to, or to investigate fraud, abuse, or threats to the safety of our users.</li>
      </ul>

      <h2>Your Rights</h2>
      <p>
        Subject to applicable law (including the GDPR and CCPA), you may
        request access to, correction of, export of, or deletion of personal
        information we hold about you. Send requests to{" "}
        <a href="mailto:privacy@metadot.com">privacy@metadot.com</a>.
      </p>

      <h2>Data Processing Agreement</h2>
      <p>
        Customers subject to the GDPR can request a signed Data Processing
        Agreement at{" "}
        <a href="mailto:privacy@metadot.com">privacy@metadot.com</a>.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We will post material changes to this page and update the &ldquo;Last
        updated&rdquo; date above. For questions, contact{" "}
        <a href="mailto:privacy@metadot.com">privacy@metadot.com</a>.
      </p>
    </LegalPage>
  );
}
