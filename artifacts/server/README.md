# IPC Zion Hall — server

API backend for the IPC Zion Hall website. Express + `better-sqlite3`
(single-file SQLite database, no external DB required).

## Endpoints
| Method | Path                | Auth              | Notes |
|--------|---------------------|-------------------|-------|
| GET    | `/api/health`       | none              | `{ ok: true }` |
| POST   | `/api/contact`      | none (rate-limited) | `{ name, email, phone?, message }` |
| GET    | `/api/contact`      | `x-admin-key`     | Lists all contact messages, newest first |
| POST   | `/api/prayer-request` | none (rate-limited) | `{ name?, contact?, request }` |
| GET    | `/api/prayer-request` | `x-admin-key`   | Lists all prayer requests, newest first |

Both POST routes are rate-limited to 5 requests per 15 minutes per client
(`express-rate-limit`). `app.set("trust proxy", 1)` is required for that
limit to key on the real visitor IP rather than nginx's IP — this matters
in the Docker Compose deployment where nginx sits in front of the API.

Both GET routes require an `x-admin-key` header matching `ADMIN_KEY`,
checked with `crypto.timingSafeEqual` (not a plain `===`) to avoid a
timing side-channel.

## Data
SQLite file at `DB_PATH`, created on startup if missing, with two tables:
`contact_messages` and `prayer_requests` (see `src/index.js` for the
schema). No migration framework — schema changes go through
`CREATE TABLE IF NOT EXISTS`.

## Environment variables
- `PORT` — default `4100`
- `DB_PATH` — default `./data/messages.db`
- `ADMIN_KEY` — **required** to use either admin GET endpoint; requests
  without a matching key get `401`
- `ALLOWED_ORIGINS` — comma-separated CORS allowlist, default
  `http://localhost:5173`

## Local dev
```
npm run dev     # node --watch src/index.js
npm start       # node src/index.js
```
`better-sqlite3` needs native build tools (Python, make/g++, or Visual
Studio Build Tools on Windows) to install/rebuild locally. If those
aren't available, build inside the Linux Docker image instead — see
`../../Dockerfile.api`, which installs the required toolchain — and
verify with `docker compose build`.
