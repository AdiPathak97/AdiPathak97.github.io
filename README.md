# Aditya Pathak — Portfolio

Personal portfolio site built with **Next.js 16** and deployed to **GitHub Pages** via static export.

## Stack

- **Framework**: Next.js 16.2 (App Router, static export)
- **Language**: TypeScript + React 19
- **Styling**: CSS Modules + CSS custom properties
- **Deployment**: GitHub Pages via GitHub Actions

## Getting Started

```bash
npm install
npm run dev      # → http://localhost:3000
npm run build    # → static output in /out
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Page composition
│   └── globals.css      # Design tokens, global styles
├── components/          # Nav, Hero, Skills, Experience, Projects, Contact, Footer
└── data/
    └── site.ts          # ← All content lives here. Edit this.

public/
└── .nojekyll            # Prevents GitHub Pages Jekyll from stripping _next/
```

## Deployment

Push to `main` → GitHub Actions builds → deploys to `https://adipathak97.github.io`

**First-time setup:** Settings → Pages → Source: **GitHub Actions**

## Key config notes

- Config file must be `next.config.js` (not `.ts`) — Next.js 16 does not support `.ts` config
- `public/.nojekyll` is required — without it GitHub Pages strips `_next/` and the site breaks
- No `basePath` needed — root user pages (`username.github.io`) serve from `/`
