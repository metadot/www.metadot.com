# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at localhost:3000
npm run build      # Production build (runs next-sitemap as postbuild)
npm run start      # Serve production build
npm run lint       # ESLint (flat config, Next.js recommended rules)
```

No test framework is configured.

## Architecture

**Stack**: Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + TypeScript (strict mode)
**Deployment**: Vercel (auto-deploy on push to main; legacy Hugo redirects in `next.config.ts`)
**Font**: Roboto (400/500/700) via `next/font/google`

### Source Layout (`src/`)

- `app/` — App Router pages. Each route is a `page.tsx` in its folder.
- `app/blog-articles/{YYYY}/{MM}/` — MDX blog posts (filesystem-based, no CMS).
- `app/blog/utils.ts` — Blog data loading: uses `fast-glob` to discover MDX files, regex-extracts `export const blog = {...}` metadata, generates excerpts, sorts by date.
- `components/` — Shared components (BlogCard, Pagination, Timeline, `ui/accordion`).
- `sections/` — Home page sections (Hero, Products, Feature, LatestPosts).
- `layout/` — Header (client component with mobile nav state) and Footer (server component).
- `lib/` — Utilities (`cn()` class merger, smooth scroll).

### Blog System

Blog posts are `.mdx` files with an exported metadata object (not frontmatter):

```mdx
export const blog = {
  title: "Post Title",
  author: "Author Name",
  date: "YYYY-MM-DD",
  image: "/path/to/image.png",
  alt: "Image description",
  draft: true,
};
```

- File path determines URL: `blog-articles/2025/10/my-post.mdx` → `/blog/2025/10/my-post`
- Only `draft: false` posts are published
- Images go in `/public/`, referenced without the `/public` prefix
- Links in MDX must use `[text](url)` format, not `<url>`
- `getAllBlogs()` / `getLatestBlogs()` in `utils.ts` handle discovery and sorting
- `getBlogPost(slug)` loads a single post's metadata + MDX content for rendering via `next-mdx-remote`

### Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json).

### Styling

Tailwind CSS 4 with PostCSS plugin. Global styles in `app/globals.css` define custom classes for layout and component patterns. shadcn/ui is configured (components.json, New York style) but minimally used (only accordion so far).

### Sitemap/SEO

`next-sitemap` generates sitemap and robots.txt in postbuild. Config in `next-sitemap.config.js` adds blog post paths by scanning the MDX filesystem. Site URL: `https://www.metadot.com`.

## Deploy Configuration (configured by /setup-deploy)
- Platform: Vercel
- Production URL: https://www.metadot.com
- Deploy workflow: auto-deploy on push to main
- Deploy status command: HTTP health check
- Merge method: squash
- Project type: web app (Next.js)
- Post-deploy health check: https://www.metadot.com

### Custom deploy hooks
- Pre-merge: npm run build
- Deploy trigger: automatic on push to main
- Deploy status: poll production URL
- Health check: https://www.metadot.com

## Skill routing

When the user's request matches an available skill, ALWAYS invoke it using the Skill
tool as your FIRST action. Do NOT answer directly, do NOT use other tools first.
The skill has specialized workflows that produce better results than ad-hoc answers.

Key routing rules:
- Product ideas, "is this worth building", brainstorming → invoke office-hours
- Bugs, errors, "why is this broken", 500 errors → invoke investigate
- Ship, deploy, push, create PR → invoke ship
- QA, test the site, find bugs → invoke qa
- Code review, check my diff → invoke review
- Update docs after shipping → invoke document-release
- Weekly retro → invoke retro
- Design system, brand → invoke design-consultation
- Visual audit, design polish → invoke design-review
- Architecture review → invoke plan-eng-review
- Save progress, checkpoint, resume → invoke checkpoint
- Code quality, health check → invoke health
