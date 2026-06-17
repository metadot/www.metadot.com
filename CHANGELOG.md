# Changelog

All notable changes to www.metadot.com will be documented in this file.

## [2.1.3.11] - 2026-06-17

### Changed
- `/apps-overview` — "Start using these 3 apps today" subhead reworded from "Now included with your Mojo Helpdesk subscription at no extra cost" to "Integrated with Mojo Helpdesk, ready to use at no extra cost", and its bottom margin increased (`mb-8` → `mb-12`) for more space above the app cards.

## [2.1.3.10] - 2026-06-16

### Added
- `/beta` now permanently redirects (308) to `/apps-overview` via `next.config.ts`. The standalone `/beta` page was removed; its internal links (Footer "Beta Program", Hero "Join the Beta") now point straight at `/apps-overview`.

### Changed
- `/apps-overview` is now indexable. Removed its `robots: { index: false, follow: false }` metadata and dropped it from the `next-sitemap` `exclude` / `robots.txt` disallow lists, so it appears in the sitemap and is crawlable. It had been noindexed during testing.
- `/apps-overview` — onboarding CTA subhead reworded from "Integrated with Mojo Helpdesk. Zero extra cost." to "Now included with your Mojo Helpdesk subscription at no extra cost", and both the "Start using these 3 apps today" heading and that subhead are now center-aligned.

### Removed
- Deleted the testing-only mockup pages `/apps-mockup` and `/preview-mockup` (and their `next-sitemap` exclude / `robots.txt` disallow entries). Deleted the `/beta` page in favor of the redirect above.

## [2.1.3.9] - 2026-06-16

### Changed
- Apex (`metadot.com`) now serves `/.well-known/microsoft-identity-association.json` directly with a `200` instead of redirecting to www. Microsoft's publisher-domain verification fetches the apex literally and rejects redirects. Added a host-scoped `next.config.ts` redirect that canonicalizes every other apex path to www (308) while passing the verification file through. Paired with removing the platform-level apex→www redirect in the Vercel project domain config.

## [2.1.3.8] - 2026-06-16

### Added
- `/.well-known/microsoft-identity-association.json` — static file for Microsoft identity / Azure AD app domain verification, served at the site root. Returns the `associatedApplications` payload for application ID `53ce0dc5-a652-4a02-9e4f-a4d1c9c9bc94`.

## [2.1.3.7] - 2026-06-15

### Changed
- `/apps-overview` — trimmed the onboarding CTA copy: the lead line is now "Now included with your Mojo subscription." (dropped "3 new apps your team can start using today").

## [2.1.3.6] - 2026-06-15

### Added
- `/apps-overview` — new "Start using these 3 apps today." section under the tour video. Three cards (Stackr / BookMe / Changelog) on a `sm:grid-cols-3` grid, each with a colored Lucide icon (`Kanban` / `CalendarClock` / `Megaphone`), app name, tagline, and three feature bullets. Subhead reads "Integrated with Mojo Helpdesk. Zero extra cost." Card name/tagline use an inline `marginBottom: 0` to override the unlayered global `p { margin-bottom: 1rem }` rule.

## [2.1.3.5] - 2026-06-13

### Changed
- `/apps-overview` — refreshed the meta `description` to "See how Metadot Apps brings project management, CRM, appointment scheduling, tickets, and AI into one connected workspace." ("scheduling" → "appointment scheduling", dropped the trailing "Watch the overview.").

## [2.1.3.4] - 2026-06-12

### Changed
- `/apps-overview` — reworked the hero copy: headline is now two lines ("Metadot Apps" / "The All-in-One Workspace"); the tagline became "Onboarding Mojo customers now", a smooth-scroll link (`ScrollLink`, 600ms eased) down to the onboarding CTA box; supporting copy reads "appointment scheduling", drops "Take a quick look", and is bumped to `text-lg md:text-xl` on a wider `max-w-[720px]` container.
- `/apps-overview` — removed the "Like what you saw?" eyebrow from the CTA box and gave the section an `id="onboarding"` (with `scroll-mt-20`) as the scroll target.
- `.onboarding-link` (globals.css) — dedicated unlayered link style so white-default → orange (`#f0b93c`) + underline-on-hover wins the Tailwind v4 cascade over the global `a` reset (layered utilities were being overridden).
- `smoothScroll()` — added an optional `durationInMs` argument (defaults to 200ms, so the homepage Hero is unchanged).

### Added
- `/apps-overview#book` — URL-hash trigger that auto-opens the BookMe booking popup on load and on `hashchange`, giving the Wistia end-of-video CTA a linkable URL. Closing (✕/backdrop/Escape) clears the `#book` hash so the popup can be reopened.

## [2.1.3.3] - 2026-06-12

### Changed
- `/apps-overview` — swapped the tour video to the new "Metadot Apps Overview" cut (Wistia `dlc5eorlvu`, replacing the old `qk060qfgke`).
- `/apps-overview` — capitalized the "The Search Is Over" tagline and bumped it to `text-xl md:text-2xl` so it stands out above the supporting copy.

## [2.1.3.2] - 2026-06-12

### Added
- Google Analytics 4 (`G-KPMNGE3HVZ`) site-wide via the official `@next/third-parties` `<GoogleAnalytics>` component in `src/app/layout.tsx`. Loads gtag with Next.js-optimized strategy and fires `page_view` on App Router navigations. The privacy policy already disclosed Google Analytics usage, so this brings the implementation in line with the stated policy.

## [2.1.3.1] - 2026-06-12

### Changed
- `/apps-overview` — tightened the CTA-box copy: dropped "current" and "Helpdesk" so it reads "your Mojo subscription", and split "Book a quick session..." onto its own line.

## [2.1.3.0] - 2026-06-12

### Added
- `/apps-overview` — Metadot Apps overview landing page for the apps win-back email campaign. Frames the Wistia tour video (`qk060qfgke`) in a rounded, dark-themed player and drives a single CTA that opens an embedded onboarding-booking calendar in a modal (Escape/backdrop-dismiss, scroll-lock, `role="dialog"`).
- `src/app/apps-overview/BookingCta.tsx` — client component for the CTA button + booking modal.

### Changed
- `next-sitemap.config.js` — exclude `/apps-overview` from the sitemap and add a `robots.txt` disallow. The page also carries a `noindex, nofollow` robots meta tag, so it is reachable by emailed recipients but kept out of search results.

## [2.1.2.1] - 2026-06-05

### Added
- `/privacy-policy` — "Google User Data" section covering Google API Services data: scopes accessed (account email, calendar list, free/busy, app-created events, Meet info), usage limited to scheduling/calendar features, no-sale/sharing terms, TLS + encrypted-token storage, and retention/deletion on disconnect or `support@metadot.com` request. Satisfies Google OAuth verification disclosure requirements.

## [2.1.2.0] - 2026-05-28

### Added
- `/privacy-policy` — Metadot Corporation privacy policy and GDPR statement
- `/terms-of-service` — Terms governing use of Metadot products
- `/hipaa` — HIPAA posture, BAA availability, and FAQ
- `/soc2` — SOC 2 Type II program overview with six-pillar security grid
- `/accessibility` — WCAG 2.1 Level AA conformance statement, VPAT request path
- Footer "Compliance" column linking the five new pages
- `src/components/legal/LegalPage.tsx` — shared layout for compliance pages
- `.legal-content` typography rules in `globals.css`

### Changed
- Footer grid widened to 5 columns at `lg`, 2 at `md`, 1 at mobile
- `conductor.json` run script now passes `--port $CONDUCTOR_PORT` so multiple workspaces can run dev servers in parallel; added `runScriptMode: "concurrent"`
- `pnpm-workspace.yaml` approves build scripts for `sharp` and `unrs-resolver` (resolves pnpm 11 `ERR_PNPM_IGNORED_BUILDS` that blocked the Conductor Run button)

## [2.1.1.11] - 2026-05-07

### Fixed
- `/apps-mockup` stray `/* Constellation network… */` comment no longer leaks as visible text above the orbit (was unwrapped JSX-adjacent text instead of a `{/* */}` block)
- `/apps-mockup` Safari: hero benefit pills no longer leak the colored bubble outside the rounded edge — added `clip-path: inset(0 round 9999px)` to force clipping that Safari skips for `overflow:hidden` + `rounded-full` + `backdrop-blur`

### Changed
- `/apps-mockup` Stackr project icon swapped from `LayoutList` to `Kanban` (lucide-react)

## [2.1.1.10] - 2026-05-06

### Changed
- `/apps-mockup` connection animation rebuilt as a constellation network: every app sits statically on the ellipse and is permanently wired to the central workspace via slate L- or Z-shaped paths (every line has at least one 90° turn — no straight spokes); 2–3 colored dots per wire travel through with linear easing, mixed inbound/outbound, glowing drop-shadow
- `/apps-mockup` connection animation no longer pauses on hover or modal — the network keeps animating regardless of interaction state

### Removed
- `/apps-mockup` orbiting `orbitLoop` rotation and the previous comet-tail trail rendering

## [2.1.1.9] - 2026-05-06

### Fixed
- `/apps-mockup` Safari: app icons no longer shift to the start on hover — scale transform applied directly to the SVG instead of an `inline-flex` wrapper that Safari mis-centered inside the grid cell

### Changed
- `/apps-mockup` app modal: replaced the bottom prev/next/"x of x apps" footer and standalone close button with a single top-right button group (← / → / ✕)
- `/apps-mockup` "Stackr" renamed to "Stackr project"

## [2.1.1.8] - 2026-05-05

### Changed
- `/apps-mockup` app set: orbit now shows the production app lineup — Assets, BookMe, Changelogs, CRM, Inventory, Knowledge base, Polls, Stackr, Suppliers, Tickets, Workflows (11 apps, was 10)
- `/apps-mockup` icons: every app tile now uses a `lucide-react` icon (Monitor, CalendarCheck, FileText, Handshake, Package, BookOpen, BarChart3, LayoutList, Truck, Ticket, Zap) instead of an emoji; same icon also renders inside the modal header so the orbit and detail view stay visually consistent
- `/apps-mockup` color palette refreshed to match the new icon set (rose CRM, emerald BookMe/Suppliers, amber Tickets, etc.)

### Added
- `lucide-react` dependency for icon components

## [2.1.1.7] - 2026-05-05

### Changed
- `/apps-mockup` orbit (mobile): tight 120px circle replaces the wide 656×406 ellipse so all 10 apps now fit on a phone instead of being clipped by `overflow-hidden`; center logo becomes a clean circle on mobile and stays an oval on desktop
- `/apps-mockup` orbit: removed the three concentric dashed rings on every breakpoint for a cleaner stage
- `/apps-mockup` orbit (mobile): added a "now showing" pill at the bottom that cycles through apps every 5s and opens that app's modal when tapped
- `/apps-mockup` rotation slowed from 60s to 90s per revolution

### Added
- `/apps-mockup` connection streaks: small color-coded line segments flow between each app and the central workspace, communicating that the apps "talk to" the workspace; each app's streak does both directions per cycle (out then in, with idle gaps), randomized per app for an organic feel; about two streaks visible at any moment
- `/apps-mockup` workspace pulse: two staggered radial-gradient rings breathe outward from the center "m" logo, anchoring it as the active hub

## [2.1.1.6] - 2026-05-05

### Added
- `/apps-mockup` orbit: new "Projects" app tile (violet, 🗂️) with planning, kanban, timeline, and reporting bullets — brings the orbit to 10 apps

### Changed
- `/apps-mockup` hero: removed the "Connected Workspace." subline so the headline ends on "Metadot Apps"; the "Everything you need to run your business…" tagline now stays on a single line on `sm:` and up
- `/apps-mockup` benefit pills: each badge now has a soft colored bubble glow plus a colored dot (blue / pink / amber) for visual rhythm
- `/apps-mockup` orbit hover: app tiles now show a pointer cursor, get a soft white halo, brighten 10%, and the emoji scales up 25% for clearer affordance
- `/apps-mockup` modal: CTA changed from "Join private beta →" to "Discover it in private beta" (no arrow); fixed the "X of Y apps" counter so it vertically centers with the prev/next arrow buttons
- `/apps-mockup` CTA copy: header and bottom buttons now read "Join the private beta"; all `/beta` link buttons force white text to override the inherited link color

## [2.1.1.5] - 2026-05-05

### Changed
- `/apps-mockup` orbit: hovering an app tile now reveals its name and pauses the animation automatically; the manual pause button has been removed
- `/apps-mockup` modal: cleaned up copy ("Selected app" label removed, "Learn More" → "Join private beta" linked to `/beta`) and replaced the "Next App" button with compact previous/next arrows around the page indicator
- `/apps-mockup` CTA banner: header and bottom CTA now read "Join private beta"; removed the secondary "See How It Works" button

## [2.1.1.4] - 2026-05-04

### Added
- New noindex mockup route at `/apps-mockup` for the Metadot Apps Connected Workspace concept (link-only, kept under the regular site header/footer)
- Orbiting app tiles around the central "m" logo: 9 apps trace an animated elliptical path drawn with `@property` + CSS `cos()`/`sin()`, with pause/resume control that freezes both the apps and the dashed ring
- Click any app tile to open a modal with its description, feature bullets, and "Learn More" / "Next App" actions; closes via ✕, backdrop click, or Escape
- Floating CTA header that emerges as you scroll, with a "Join the Private Beta" button on the right
- Sitemap and robots.txt now exclude `/apps-mockup` and `/preview-mockup` so neither route gets indexed

## [2.1.1.3] - 2026-04-20

### Added
- Beta page: "How many tools is your team running?" cost-band section with tool chips (Project mgmt, Scheduling, CRM, Automation, Change tracking)
- Beta page: "Put your work on autopilot." workflows section with 3 automation cards (CRM→Stackr, BookMe→CRM, Stackr→Changelog)
- Beta page: "AI that does the work, not just answers questions." section with 4 examples

### Changed
- Beta page hero: simplified subcopy to "Project management, CRM, scheduling, tickets, and more." with new "Connected apps. Powered by AI." tagline

### Removed
- Beta page: "Built by the team behind Mojo Helpdesk" line and the "Why it exists" pain-points section

## [2.1.1.2] - 2026-04-16

### Changed
- Beta page hero: updated heading to "Productivity apps for teams." with new tagline and description
- Beta page "Why it exists" section: updated heading to "Built for teams that want to move faster."
- Stackr Projects and Changelog app descriptions refreshed with clearer product positioning
- Beta page metadata (description, OpenGraph) updated to match new copy
- Removed "Beta" link from header navigation (desktop and mobile)

## [2.1.1.1] - 2026-04-11

### Fixed
- Text contrast sitewide: replaced `#475569` (slate-600, ~3.3:1 ratio) with `#94a3b8` (slate-400, ~6.7:1) on all section labels, footer copyright, blog page labels, beta page labels, BlogCard quote text, and product tag badge text and border
- Blog post reading well: replaced white background (`#fff`) with dark card (`#1e293b`) — consistent with the site's existing card pattern, eliminates jarring light-on-dark contrast transition
- Product tag badge border updated for visibility (1.93:1 → 5.71:1 contrast)
- `tsconfig.json` jsx mode set to `preserve` (required by Next.js 16 SWC transform)

## [2.1.1.0] - 2026-04-09

### Changed
- Redesigned `/beta` page to match updated mockup: SVG icons with pastel backgrounds, color-matched badges per app, increased border radius on cards, consistent section label styling, and "Metadot Apps" eyebrow above hero

## [2.1.0] - 2026-04-09

### Added
- `/beta` landing page for Metadot Apps private beta (#26)
- Deploy configuration for Vercel in CLAUDE.md
- Skill routing rules in CLAUDE.md

### Changed
- Migrated deploy platform from Netlify to Vercel
- Moved 12 legacy Hugo blog redirects from `netlify.toml` to `next.config.ts`

### Removed
- `netlify.toml` (replaced by Next.js redirects + Vercel)

## [2.0.1] - 2026-03-20

### Fixed
- Upgraded MDX package to version 6
- Ensured app can be built after dependency updates
- Regenerated sitemap, updated `.gitignore` for `.gstack`

### Changed
- Removed legacy Hugo HTML files from `public/blog/`

## [2.0.0] - 2025-11-03

### Added
- Complete rewrite from Hugo to Next.js 16 (App Router) + React 19 + Tailwind CSS 4
- MDX-based blog system with filesystem routing
- Sitemap generation via `next-sitemap`
- Legacy blog URL redirects (301s)
- SVG favicon replacing legacy PNGs

### Changed
- Hero CTA from "USE IT WITH CAUTION" to "EXPLORE OUR PRODUCTS"
- Product names use `h3` for proper heading hierarchy
- Added focus-visible styles and 44px minimum touch targets

### Fixed
- Typo "louging" → "lounging" in blog alt text
- Mojo HelpDesk typo

## [1.0.0] - 2020-12-10

### Added
- Initial Hugo-based website
- Blog posts covering remote work, team culture, and productivity
- Metadot capabilities statement
- 404 page
