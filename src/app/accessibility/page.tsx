import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility | Metadot",
  description:
    "Metadot Corporation's commitment to digital accessibility and WCAG 2.1 Level AA conformance.",
};

export default function Accessibility() {
  return (
    <LegalPage
      eyebrow="Compliance"
      title="Accessibility Statement"
      lastUpdated="May 2026"
    >
      <p>
        Metadot Corporation is committed to making our products usable by
        everyone, including people with disabilities. We design, build, and
        test our software with accessibility in mind, and we continue to
        improve as standards and assistive technologies evolve.
      </p>

      <h2>Conformance</h2>
      <p>
        Our SaaS products aim to conform to{" "}
        <a
          href="https://www.w3.org/TR/WCAG21/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Content Accessibility Guidelines (WCAG) 2.1
        </a>{" "}
        Level AA. Across our agent and end-user interfaces we have reached
        substantial conformance: the majority of success criteria are fully
        supported, and we are actively working to close the remaining gaps.
      </p>

      <h2>What That Looks Like in Practice</h2>
      <ul>
        <li>Keyboard navigation across all major flows, with visible focus indicators.</li>
        <li>Color contrast that meets or exceeds WCAG AA thresholds in the default theme.</li>
        <li>Form fields with clear labels, error messages, and helper text.</li>
        <li>Compatibility with current versions of major screen readers (VoiceOver, NVDA, JAWS).</li>
        <li>Semantic HTML and ARIA roles where they add meaning beyond what HTML alone conveys.</li>
        <li>Captions and transcripts on tutorial video content.</li>
      </ul>

      <h2>Ongoing Work</h2>
      <p>
        Accessibility is not a one-time project. We test new features with
        keyboard and screen reader workflows during development, we audit our
        products on a recurring basis, and we track accessibility issues with
        the same priority as other defects.
      </p>

      <h2>Need Help or Found an Issue?</h2>
      <p>
        If you run into an accessibility barrier in one of our products, or you
        would like to request the Voluntary Product Accessibility Template
        (VPAT) for a specific product, please reach out to{" "}
        <a href="mailto:support@metadot.com">support@metadot.com</a>.
        Include the product, the page or feature involved, the assistive
        technology you are using, and a description of what happened. We will
        respond promptly and work with you to find a solution.
      </p>

      <h2>Alternative Access</h2>
      <p>
        If a particular workflow is not accessible to you today, contact
        support and we will help you complete the task by another route while
        we work on a fix.
      </p>
    </LegalPage>
  );
}
