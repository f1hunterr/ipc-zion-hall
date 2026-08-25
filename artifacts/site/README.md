# IPC Zion Hall — site

Frontend for the IPC Zion Hall website. Vite + React 19 + TypeScript +
Tailwind v4, using `react-router-dom` for routing.

## Structure
- `src/pages/` — `Home`, `About`, `Ministries`, `ServiceTimes`, `Media`,
  `Contact`. Routed in `src/main.tsx`.
- `src/components/`
  - `Layout` — sticky header (logo, desktop nav, hamburger menu on mobile),
    footer, and the floating `WhatsAppButton`.
  - `MapEmbed` — keyless Google Maps iframe, reused on Contact and
    Service Times.
  - `EventsBanner` — annual-events strip shown on Home.
  - `Reveal` — IntersectionObserver-based fade/slide-in wrapper used to
    animate sections into view on scroll (accepts an optional `delayMs`
    for staggering).
- `src/index.css` — Tailwind v4 `@theme` tokens (colors, fonts) plus the
  `fade-up` / `kenburns` keyframes and a `prefers-reduced-motion` override.

## Local dev
```
pnpm install                          # from repo root
npm run dev                           # from this directory, or:
pnpm --filter site run dev
```
Dev server proxies `/api` to `http://localhost:4100` by default (see
`vite.config.ts`) — override with `VITE_API_PROXY_TARGET`.

## Environment variables
- `VITE_API_URL` — API base URL for `fetch()` calls in Contact.tsx. Leave
  unset for relative `/api/...` requests (works when nginx proxies `/api`
  to the backend, i.e. the Docker Compose deployment).
- `VITE_GITHUB_PAGES` — set to `"true"` at build time to switch the
  Contact page's forms to a static fallback (phone/WhatsApp only) instead
  of calling a backend that doesn't exist on GitHub Pages.
- `VITE_API_PROXY_TARGET` — dev-only, overrides the Vite dev-server proxy
  target for `/api`.

Note: `GITHUB_PAGES` (no `VITE_` prefix) is also read directly in
`vite.config.ts` to switch the build's `base` path to `/ipc-zion-hall/`
for the GitHub Pages deploy — set alongside `VITE_GITHUB_PAGES` in
`.github/workflows/deploy-pages.yml`.

## Build
```
npm run build     # tsc -b && vite build
npm run preview   # serve the production build locally
```
`better-sqlite3` (used by the sibling `server` package) needs native build
tools, but that doesn't affect this package — the frontend has no native
dependencies.
