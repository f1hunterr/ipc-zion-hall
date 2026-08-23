import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";

const PORT = process.env.PORT || 4100;
const DB_PATH = process.env.DB_PATH || "./data/messages.db";
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "http://localhost:5173").split(",");

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
`);

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ALLOWED_ORIGINS,
  })
);

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email and message are required" });
  }
  const stmt = db.prepare(
    "INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)"
  );
  const info = stmt.run(name, email, phone || null, message);
  res.status(201).json({ id: info.lastInsertRowid });
});

app.get("/api/contact", (req, res) => {
  const key = req.header("x-admin-key");
  if (!key || key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: "unauthorized" });
  }
  const rows = db.prepare("SELECT * FROM contact_messages ORDER BY id DESC").all();
  res.json(rows);
});

app.listen(PORT, () => {
  console.log(`IPC Zion Hall API listening on :${PORT}`);
});
