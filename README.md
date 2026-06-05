# Tam Jian Xin Portfolio

Personal portfolio website for Tam Jian Xin, built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion. The site presents professional experience, education, technical skills, projects, activities, contact links, and a downloadable resume in a responsive single-page layout.

## Features

- Responsive portfolio landing page
- Sticky navigation with active section highlighting
- Animated section reveals using Framer Motion
- Professional profile, work experience, education, skills, languages, and project sections
- Downloadable resume from `client/public/resume/Resume_2026.pdf`
- Profile image served from `client/public/pic/profile_pic.jpeg`
- Netlify deployment configuration with SPA fallback routing

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Radix UI components
- Lucide React icons
- Express server bundle for production start support

## Project Structure

```text
portfolio-site/
  client/
    public/
      pic/
      resume/
    src/
      components/
      contexts/
      hooks/
      pages/
      main.tsx
  server/
    index.ts
  shared/
  netlify.toml
  package.json
  vite.config.ts
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm run dev
```

Check TypeScript:

```bash
pnpm run check
```

Build for production:

```bash
pnpm run build
```

Preview the production build:

```bash
pnpm run preview
```

## Deployment

This project is configured for Netlify through `netlify.toml`.

Netlify settings:

- Base directory: `.`
- Build command: `pnpm run build`
- Publish directory: `dist/public`
- Node version: `22`

The redirect rule in `netlify.toml` sends all routes to `index.html`, which supports single-page app refreshes and direct links.

## Notes

- The Vite app root is `client/`.
- The production frontend output is `dist/public`.
- The bundled server output is generated at `dist/index.js`.
- Build output and dependencies are ignored by Git.
