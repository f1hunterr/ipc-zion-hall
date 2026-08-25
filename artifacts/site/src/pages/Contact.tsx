import { useState } from "react";
import MapEmbed from "../components/MapEmbed";

const API_BASE = import.meta.env.VITE_API_URL || "";
const IS_STATIC_BUILD = import.meta.env.VITE_GITHUB_PAGES === "true";
const WHATSAPP_URL =
  "https://wa.me/919986914560?text=" + encodeURIComponent("Hi, I'd like to know more about IPC Zion Hall.");

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const [prayerForm, setPrayerForm] = useState({ name: "", contact: "", request: "" });
  const [prayerStatus, setPrayerStatus] = useState<FormStatus>("idle");

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

  async function handlePrayerSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPrayerStatus("sending");
    try {
      const res = await fetch(`${API_BASE}/api/prayer-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prayerForm),
      });
      if (!res.ok) throw new Error("request failed");
      setPrayerStatus("sent");
      setPrayerForm({ name: "", contact: "", request: "" });
    } catch {
      setPrayerStatus("error");
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
        {IS_STATIC_BUILD ? (
          <div className="space-y-4">
            <p className="text-blue-700">
              This form isn't available on this version of the site. Please
              reach out by email, phone, or WhatsApp instead — details to the
              right.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:contact@ipczionhall.example"
                className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Email Us
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-6 py-3 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        ) : (
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
        )}

        <div className="space-y-6">
          <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Address</h3>
              <p className="text-blue-700 text-sm">
                <a
                  href="https://maps.app.goo.gl/CcXvfP4r7YXHCjJYA"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Fouzil Manzil, 3rd Cross Rd, Kariyannapalya, Kadugondanahalli,
                  Bengaluru, Karnataka 560084
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Phone</h3>
              <p className="text-blue-700 text-sm">Pastor Jayaseelan AGJ — +91 99869 14560</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Email</h3>
              <p className="text-blue-700 text-sm">contact@ipczionhall.example</p>
            </div>
          </div>
          <MapEmbed className="h-64" />
        </div>
      </div>

      <div className="mt-16 border-t border-blue-100 pt-10">
        <p className="uppercase tracking-widest text-blue-500 text-xs font-semibold mb-3">
          Need Prayer?
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-blue-900 mb-3">
          Prayer Request
        </h2>
        <p className="text-blue-700 mb-8 max-w-2xl">
          Share what's on your heart and our prayer team will pray for you.
          This is kept separate and private from general inquiries.
        </p>

        {IS_STATIC_BUILD ? (
          <p className="text-blue-700">
            Prayer requests aren't available on this version of the site.
            Please reach out via{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="underline">
              WhatsApp
            </a>{" "}
            or{" "}
            <a href="mailto:contact@ipczionhall.example" className="underline">
              email
            </a>{" "}
            instead.
          </p>
        ) : (
          <form onSubmit={handlePrayerSubmit} className="space-y-4 max-w-xl">
            <div>
              <label className="block text-sm font-medium text-blue-900 mb-1">
                Name (optional)
              </label>
              <input
                value={prayerForm.name}
                onChange={(e) => setPrayerForm({ ...prayerForm, name: e.target.value })}
                className="w-full rounded-lg border border-blue-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-900 mb-1">
                Phone or Email (optional)
              </label>
              <input
                value={prayerForm.contact}
                onChange={(e) => setPrayerForm({ ...prayerForm, contact: e.target.value })}
                className="w-full rounded-lg border border-blue-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-900 mb-1">
                Your Prayer Request
              </label>
              <textarea
                required
                rows={4}
                value={prayerForm.request}
                onChange={(e) => setPrayerForm({ ...prayerForm, request: e.target.value })}
                className="w-full rounded-lg border border-blue-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              disabled={prayerStatus === "sending"}
              className="px-6 py-3 rounded-full bg-blue-900 text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-60"
            >
              {prayerStatus === "sending" ? "Sending..." : "Submit Prayer Request"}
            </button>
            {prayerStatus === "sent" && (
              <p className="text-sm text-blue-600">
                Thank you — we're praying with you.
              </p>
            )}
            {prayerStatus === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
