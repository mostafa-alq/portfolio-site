# Mostafa Alqadi — Portfolio

My personal site: a short introduction, a selection of projects, and a small blog.
Design is an Art Nouveau–inspired take on an editorial layout — sage and parchment
tones, honey-gold rules, and a lily-wallpaper backdrop.

## Stack

- **Next.js 15** (App Router) and **React 19**
- **CSS Modules** with a small set of design tokens in `src/app/globals.css`
- **Markdown blog** — posts in `content/posts/`, parsed with `gray-matter` and rendered with `remark`
- Fonts via `next/font` (Playfair Display, Lora, Work Sans, Space Mono, Inter, Noto Sans Arabic)

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Project layout

```
src/app/
  page.js               Home — About + Projects + latest blog post
  layout.js             Root layout, fonts, metadata
  globals.css           Design tokens and shared helpers (.ornRule divider)
  components/            AboutSection, ProjectsSection, LatestPost, Footer, TypeWriter
  blog/                  Blog index and individual post pages
  projects/             Standalone projects route
src/lib/posts.js         Reads and renders the markdown posts
content/posts/           The blog posts (one markdown file each)
public/                  Images, including bg1.png (the background texture)
```

## Adding a blog post

Drop a markdown file into `content/posts/` with front matter:

```markdown
---
title: "Post title"
date: "2026-01-01"
description: "One-line summary."
---

Body text…
```

It is picked up automatically and sorted by date.

## Deployment

Deployed on [Vercel](https://vercel.com) — pushes to `main` ship to production.
