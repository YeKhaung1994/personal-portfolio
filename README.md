# Vue Portfolio

A personal portfolio website for **Ye Khaung**, Software Developer — built with **Vue 3** and **Vue CLI 5**.

It is a single-page site with smooth-scroll navigation between four sections:

| Section | What it shows |
|---|---|
| **Home** | Hero with availability badge, name, tagline, CTAs (View projects / Contact me), and GitHub + email links |
| **Projects** | A responsive card grid with tech tags and source links |
| **About** | Background plus skills grouped by category (Frontend / Backend / Data & DevOps) |
| **Contact** | Mailto CTA and direct email |

UX details: sticky translucent header with a scroll-progress bar (CSS `animation-timeline: scroll()`), scroll-spy nav highlighting and fade-up section reveals via IntersectionObserver, a mobile menu that closes on navigation, visible focus states, and `prefers-reduced-motion` support.

## Design System

A dark analogous-blue palette following the 60-30-10 rule, Inter + JetBrains Mono typography, an 8px spacing system, and WCAG AA contrast rules. All colors are CSS custom properties on `:root` in `src/components/css/style.css`.

## Tech Stack

- [Vue 3](https://vuejs.org/) (Options API, single root component)
- [Vue CLI 5](https://cli.vuejs.org/) with Babel + ESLint
- [Boxicons](https://boxicons.com/) for icons
- Plain CSS (no framework) — design tokens + styles in `src/components/css/style.css`
- [Inter](https://fonts.google.com/specimen/Inter) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts

## Project Structure

```
public/
└── index.html               # HTML shell — fonts, meta, favicon
src/
├── main.js                  # App entry — mounts App.vue
├── App.vue                  # Root component, renders the portfolio page
├── assets/                  # Images
└── components/
    ├── views/index.vue      # The portfolio page (all four sections)
    ├── css/style.css        # Design tokens + global styles
    └── js/script.js         # Scroll-spy nav + mobile menu toggle
```

## Getting Started

Requires [Node.js](https://nodejs.org/) (v16+ recommended).

```bash
# install dependencies
npm install

# start the dev server (http://localhost:8080, hot-reload enabled)
npm run serve

# build for production (outputs to dist/)
npm run build

# lint and fix files
npm run lint
```

## Customization

- **Projects** — add `project-card` blocks in `src/components/views/index.vue`: title, 1–2 sentence description, tech tags, and a link.
- **Colors / spacing / type** — change the CSS custom properties at the top of `src/components/css/style.css`; components never hard-code values.
