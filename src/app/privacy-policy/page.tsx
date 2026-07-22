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
      title="Privacy Policy"
      lastUpdated="July 2026"
    >
      <p>
        Metadot Corporation develops and operates hardware and software
        products, including Das Keyboard, Mojo Helpdesk, Metadot Apps Workspace,
        Bamzooka, Montastic, and TyprX. This Privacy Policy describes how Metadot
        collects, uses, discloses, and protects Personal Data when you use our
        websites, products, and services.
      </p>
      <p>
        This Privacy Policy explains what information we collect, how we use it,
        how we share it, and the safeguards we put in place to protect it.
      </p>

      <h2>SOC 2 Type II</h2>
      <p>
        Our SaaS products operate under a SOC 2 Type II program. An independent
        third-party audit verifies that our security controls are appropriately
        designed and consistently operating to help protect customer data.
      </p>
      <p>
        A current SOC 2 Type II attestation letter is available upon reasonable
        request, subject to appropriate confidentiality obligations.
      </p>

      <h2>AI Features and Customer Data</h2>
      <p>
        When our products use AI to assist users, customer data remains within
        the account from which it originated. We do not use customer content to
        train third-party foundation models, and we contractually require the
        model providers we work with to do the same.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We collect Personal Data that you choose to provide when using our
        websites, products, and services, including account and contact
        information, billing information needed to process a purchase, support
        requests, ticket content, attachments, and other information you submit.
        We use this information only as necessary to provide, support, secure,
        and improve our products and services, or as otherwise described in this
        Privacy Policy. Additional information about our data processing
        practices is available upon request.
      </p>

      <h2>How We Protect Your Data</h2>
      <p>
        We implement administrative, technical, and organizational safeguards
        designed to protect Personal Data from unauthorized access, disclosure,
        alteration, and destruction. Access to Personal Data is limited to
        authorized personnel with a legitimate business need, and those
        individuals are subject to confidentiality obligations and appropriate
        security training.
      </p>
      <ul>
        <li>Passwords are stored using one-way cryptographic hashing.</li>
        <li>Payment information is tokenized by our payment processor; full payment card numbers are never stored on our servers.</li>
        <li>Personal Data is encrypted in transit and, where appropriate, at rest.</li>
        <li>Customer data is backed up regularly using encrypted backups.</li>
        <li>Our systems are continuously monitored, and we regularly evaluate the effectiveness of our security controls.</li>
      </ul>

      <h2>Hosting</h2>
      <p>
        Our SaaS products are hosted on Amazon Web Services (AWS) in
        ISO&nbsp;27001-certified data centers. We implement administrative,
        technical, and organizational safeguards designed to protect the
        security, availability, and integrity of our services.
      </p>

      <h2>HIPAA and Business Associate Agreements</h2>
      <p>
        For customers who require a Business Associate Agreement (BAA), Metadot
        will provide one upon request for eligible products and services. See our{" "}
        <a href="/hipaa">HIPAA page</a> for additional information.
      </p>

      <h2>Cookies and Tracking</h2>
      <p>
        We use cookies and similar technologies to operate our websites and
        services, maintain user sessions, enhance security, remember your
        preferences, and understand how our websites and products are used. You
        can manage or disable cookies through your browser settings; however,
        some features may not function properly without essential cookies.
      </p>

      <h2>Analytics</h2>
      <p>
        We use analytics tools, including Google Analytics, to better understand
        how visitors use our websites and to improve their performance and user
        experience. Analytics information is collected in aggregate or using
        pseudonymous identifiers and is not used to identify individual users.
        You can manage your analytics preferences by adjusting your browser
        settings or by using Google&apos;s available opt-out tools.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We engage a limited number of trusted third-party service providers to
        support the delivery, operation, maintenance, and security of our
        websites, products, and services, such as payment processing, email
        delivery, hosting, and business operations. We require these providers
        to implement appropriate safeguards to protect Personal Data and to
        process it only in accordance with our instructions and applicable
        contractual and legal obligations.
      </p>

      <h2>Google User Data</h2>

      <h3>Data Accessed</h3>
      <p>
        When you connect your Google account, our products may access your
        Google account email address, calendars, calendar availability, events
        created by our application, and Google Meet conference information (when
        enabled).
      </p>

      <h3>Data Usage</h3>
      <p>
        This information is used solely to provide calendar and scheduling
        features, including connecting your account, displaying calendar
        availability, creating and managing booking events, inviting attendees,
        and generating Google Meet links when requested.
      </p>
      <p>
        Metadot does not use Google user data for advertising, marketing,
        profiling, or training AI models.
      </p>

      <h3>Limited Use Disclosure</h3>
      <p>
        Metadot&apos;s use and transfer of information received from Google APIs
        complies with the{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google API Services User Data Policy
        </a>
        , including its Limited Use requirements.
      </p>

      <h3>Data Sharing</h3>
      <p>
        Metadot does not sell Google user data. Google user data is shared only
        as necessary to provide the requested functionality, including with
        Google services to perform calendar operations, meeting attendees
        through calendar invitations initiated by the user, and trusted service
        providers that support the operation of our products and services.
      </p>

      <h3>Data Storage &amp; Protection</h3>
      <p>
        Google user data is protected using administrative, technical, and
        organizational safeguards. Data is encrypted in transit and, where
        appropriate, at rest, and access is limited to authorized personnel and
        systems.
      </p>

      <h3>Data Retention &amp; Deletion</h3>
      <p>
        Google account credentials are retained only while the integration
        remains active. You may disconnect your Google account at any time,
        after which the associated credentials will be securely deleted. You may
        also request deletion of related data by contacting{" "}
        <a href="mailto:support@metadot.com">support@metadot.com</a>.
      </p>

      <h2>Payment Processing</h2>
      <p>
        Payments are securely processed by Stripe, a PCI DSS-compliant payment
        processor. Payment information is handled by Stripe in accordance with
        its security and privacy standards.
      </p>

      <h2>When We Share Information</h2>
      <p>
        We do not sell or share your information for advertising or marketing
        purposes. We share information only to:
      </p>
      <ul>
        <li>provide the services you request</li>
        <li>support the operation of our products and services</li>
        <li>comply with legal obligations or protect the security of our products, services, customers, or others</li>
      </ul>

      <h2>Your Privacy Rights</h2>
      <p>
        Depending on your location and Applicable Data Protection Laws, you may
        have rights regarding the information we process about you, including the
        right to access, correct, delete, restrict, or receive a copy of your
        information.
      </p>
      <p>
        If you use our products through an organization, such as your employer or
        school, you may need to submit your request through that organization. We
        will respond to requests in accordance with Applicable Data Protection
        Laws. Please contact us with any questions at{" "}
        <a href="mailto:support@metadot.com">support@metadot.com</a>.
      </p>

      <h2>Data Processing Agreement</h2>
      <p>
        Our Data Processing Agreement (DPA) is available on request. To obtain a
        signed copy, please contact{" "}
        <a href="mailto:support@metadot.com">support@metadot.com</a>.
      </p>
    </LegalPage>
  );
}
