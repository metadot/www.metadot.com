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
**Deployment**: Netlify (with legacy Hugo URL redirects in `netlify.toml`)
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
