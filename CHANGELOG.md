# Changelog

All notable changes to www.metadot.com will be documented in this file.

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
