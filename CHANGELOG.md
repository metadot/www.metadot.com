# Changelog

All notable changes to www.metadot.com will be documented in this file.

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
