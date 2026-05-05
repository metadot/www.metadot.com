# Changelog

All notable changes to www.metadot.com will be documented in this file.

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
