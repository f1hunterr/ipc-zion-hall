import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import WhatsAppButton from "./WhatsAppButton";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
    isActive
      ? "bg-blue-600 text-white"
      : "text-blue-900 hover:bg-blue-100"
  }`;

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
    isActive
      ? "bg-blue-600 text-white"
      : "text-blue-900 hover:bg-blue-50"
  }`;

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/ministries", label: "Ministries" },
  { to: "/service-times", label: "Service Times" },
  { to: "/media", label: "Media" },
  { to: "/contact", label: "Contact" },
];

function NavItems() {
  return (
    <>
      {NAV_ITEMS.map(({ to, label, end }) => (
        <NavLink key={to} to={to} end={end} className={navLinkClass}>
          {label}
        </NavLink>
      ))}
    </>
  );
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <header
        className={`sticky top-0 z-20 backdrop-blur bg-ivory/90 border-b border-blue-100 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <Link
            to="/"
            className="flex items-center gap-3 min-w-0"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={logo}
              alt="IPC Zion Hall logo"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-contain shrink-0"
            />
            <div className="leading-tight min-w-0">
              <div className="font-serif text-lg font-semibold text-blue-900 truncate">
                IPC Zion Hall
              </div>
              <div className="text-xs text-blue-600 truncate">Lingarajapuram, Bengaluru</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1 shrink-0">
            <NavItems />
          </nav>

          <button
            type="button"
            className="md:hidden shrink-0 p-2 -mr-2 rounded-lg text-blue-900 hover:bg-blue-100"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-nav"
            className="md:hidden border-t border-blue-100 px-4 py-3 space-y-1"
          >
            {NAV_ITEMS.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={mobileNavLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-blue-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid gap-6 sm:grid-cols-3 text-sm text-blue-900">
          <div>
            <div className="font-serif text-base font-semibold mb-1">IPC Zion Hall</div>
            <p className="text-blue-700">
              A place to worship, grow, and belong — Lingarajapuram, Bengaluru.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-1">Contact</div>
            <p className="text-blue-700">
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
            <p className="text-blue-700">Pastor Jayaseelan AGJ — +91 99869 14560</p>
          </div>
          <div>
            <div className="font-semibold mb-1">Service Times</div>
            <p className="text-blue-700">Sunday Service — 8:30–10:30 AM</p>
            <p className="text-blue-700">Thursday Fasting Prayer — 6–7 PM</p>
          </div>
        </div>
        <div className="text-center text-xs text-blue-400 pb-4">
          © {new Date().getFullYear()} IPC Zion Hall. All rights reserved.
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
