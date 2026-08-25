# ── Build stage ──────────────────────────────────────────────────────────────
FROM node:24-slim AS builder

RUN corepack enable && corepack prepare pnpm@10 --activate

WORKDIR /app
COPY . .

RUN pnpm install --no-frozen-lockfile --filter site...

ENV NODE_ENV=production

RUN pnpm --filter site run build

# ── Serve stage ───────────────────────────────────────────────────────────────
FROM nginx:alpine

COPY --from=builder /app/artifacts/site/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
