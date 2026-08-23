import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <p className="uppercase tracking-widest text-blue-500 text-xs font-semibold mb-3">
        Get in Touch
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-blue-900 mb-3">
        Contact Us
      </h1>
      <p className="text-blue-700 mb-10">
        Have a question or want to visit? Send us a message and we'll get back
        to you.
      </p>

      <div className="grid gap-10 sm:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Name
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-blue-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Email
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-blue-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Phone (optional)
            </label>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded-lg border border-blue-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Message
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-blue-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "sent" && (
            <p className="text-sm text-blue-600">Thanks — we'll be in touch.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

        <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6 space-y-4 h-fit">
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">Address</h3>
            <p className="text-blue-700 text-sm">
              [Placeholder address], Lingarajapuram, Bengaluru
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">Phone</h3>
            <p className="text-blue-700 text-sm">+91 00000 00000</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">Email</h3>
            <p className="text-blue-700 text-sm">contact@ipczionhall.example</p>
          </div>
        </div>
      </div>
    </div>
  );
}
