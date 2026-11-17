# manubhargav.github.io (v2)

Personal portfolio for **Manu Bhargav Srirangarajan**, Senior Software Engineer.
Redesigned v2 on branch `portfolio/v2-redesign`. Deployed on Vercel.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens in `src/app/globals.css`)
- **Motion** (`motion/react`) for scroll reveals, parallax, and micro-interactions
- **lucide-react** for generic icons, inline SVGs for brand icons
- **Vercel** for hosting and preview deployments

## Sections

Hero (parallax portrait) - About - Work (stacked screenshot-first cards) -
Experience (timeline + education) - Socials (callout cards) -
Hall of Fame (metrics + highlights) - Contact (Web3Forms).

Global: left section nav rail with scroll-spy, reading-progress bar,
dark/light theme toggle, skeleton shimmer on lazy media.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Notes

- v1 static site is preserved under `v1/`.
- Project screenshots live in `public/projects/` (captured from the live sites).
- Content (projects, experience, metrics) is centralized in `src/lib/data.ts`.
- No em dashes in copy, per preference.
