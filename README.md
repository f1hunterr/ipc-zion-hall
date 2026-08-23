# IPC Zion Hall — Lingarajapuram

Website for IPC Zion Hall (Lingarajapuram, Bengaluru). Homelab project — not
affiliated with HOBB.

Pattern follows [larsha-tech](https://github.com/f1hunterr/larsha-tech):
pnpm workspace, Vite+React frontend, Express+SQLite backend, Docker Compose,
served behind an existing nginx-proxy-manager instance instead of Vercel/Coolify.

## Structure
- `artifacts/site` — Vite + React 19 + TypeScript + Tailwind v4 (soft blue /
  ivory / white theme). Pages: Home, About, Service Times, Contact.
- `artifacts/server` — Express + better-sqlite3. `/api/contact` (public POST,
  admin-key GET), `/api/health`.
- `Dockerfile` — builds the frontend, serves via nginx (`nginx.conf` proxies
  `/api` + `/health` to the `api` service).
- `Dockerfile.api` — builds/runs the backend (needs python3/make/g++ for the
  native better-sqlite3 addon — already handled in the image).
- `docker-compose.yml` — two services (`web` on host port 8081, `api` internal
  4100), named volume for the SQLite DB.

## Local dev
```
pnpm install
pnpm run build          # builds both frontend + server (server build is a no-op)
cd artifacts/site && npm run dev     # frontend dev server, proxies /api -> :4100
cd artifacts/server && npm run dev   # backend dev server (needs native build tools locally)
```
Note: `better-sqlite3` needs native build tools (Visual Studio Build Tools on
Windows) to install/run locally — not present on this dev machine. It builds
fine inside the Linux Docker image (see `Dockerfile.api`), same as larsha-tech
in production. Verify locally via `docker compose build` instead.

## Deploy (homelab plan)
- New LXC on personal Proxmox (`pve`, 10.10.1.150), Docker-enabled.
- `docker compose up -d --build` with `.env` (`ADMIN_KEY`, `ALLOWED_ORIGINS`).
- Exposed via existing NPM (CT 103 nginxproxymanager) + DuckDNS wildcard
  (`*.home9908.duckdns.org`) — e.g. `zionhall.home9908.duckdns.org` — no new
  cert needed, reuses the existing DNS-01 wildcard.
- Swap to a real domain later once purchased.

## Content status
No real content yet (logo, photos, service times, about text, contact
details) — every page currently has clearly-marked `[Placeholder]` copy.
Swap in real content once provided.

## TODO
- [ ] Real content (logo, photos, about, service times, contact info)
- [ ] Provision homelab LXC + docker-compose deploy
- [ ] Wire up NPM proxy host + DuckDNS subdomain
- [ ] Decide on final domain (DuckDNS for now, real domain later)
