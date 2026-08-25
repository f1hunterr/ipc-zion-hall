import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";
import crypto from "node:crypto";

const PORT = process.env.PORT || 4100;
const DB_PATH = process.env.DB_PATH || "./data/messages.db";
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "http://localhost:5173").split(",");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTHS = { name: 200, email: 200, phone: 40, message: 5000, contact: 200, request: 5000 };

function timingSafeEqual(a, b) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

function requireAdmin(req, res, next) {
  const key = req.header("x-admin-key");
  if (!key || !process.env.ADMIN_KEY || !timingSafeEqual(key, process.env.ADMIN_KEY)) {
    return res.status(401).json({ error: "unauthorized" });
  }
  next();
}

fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
const db = new Database(DB_PATH);
db.exec(`
  CREATE TABLE IF NOT EXISTS contact_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS prayer_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    contact TEXT,
    request TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );
`);

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ALLOWED_ORIGINS,
  })
);

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
});

const prayerLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", contactLimiter, (req, res) => {
  const { name, email, phone, message } = req.body || {};
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string" || !name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ error: "name, email and message are required" });
  }
  if (!EMAIL_RE.test(email.trim())) {
    return res.status(400).json({ error: "invalid email" });
  }
  if (
    name.length > MAX_LENGTHS.name ||
    email.length > MAX_LENGTHS.email ||
    message.length > MAX_LENGTHS.message ||
    (typeof phone === "string" && phone.length > MAX_LENGTHS.phone)
  ) {
    return res.status(400).json({ error: "field too long" });
  }
  const stmt = db.prepare(
    "INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)"
  );
  const info = stmt.run(name.trim(), email.trim(), typeof phone === "string" && phone.trim() || null, message.trim());
  res.status(201).json({ id: info.lastInsertRowid });
});

app.get("/api/contact", requireAdmin, (_req, res) => {
  const rows = db.prepare("SELECT * FROM contact_messages ORDER BY id DESC").all();
  res.json(rows);
});

app.post("/api/prayer-request", prayerLimiter, (req, res) => {
  const { name, contact, request } = req.body || {};
  if (typeof request !== "string" || !request.trim()) {
    return res.status(400).json({ error: "request is required" });
  }
  if (
    request.length > MAX_LENGTHS.request ||
    (typeof name === "string" && name.length > MAX_LENGTHS.name) ||
    (typeof contact === "string" && contact.length > MAX_LENGTHS.contact)
  ) {
    return res.status(400).json({ error: "field too long" });
  }
  const stmt = db.prepare(
    "INSERT INTO prayer_requests (name, contact, request) VALUES (?, ?, ?)"
  );
  const info = stmt.run(
    (typeof name === "string" && name.trim()) || null,
    (typeof contact === "string" && contact.trim()) || null,
    request.trim()
  );
  res.status(201).json({ id: info.lastInsertRowid });
});

app.get("/api/prayer-request", requireAdmin, (_req, res) => {
  const rows = db.prepare("SELECT * FROM prayer_requests ORDER BY id DESC").all();
  res.json(rows);
});

app.listen(PORT, () => {
  console.log(`IPC Zion Hall API listening on :${PORT}`);
});
