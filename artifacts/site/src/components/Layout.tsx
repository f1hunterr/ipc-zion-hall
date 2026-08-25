import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import WhatsAppButton from "./WhatsAppButton";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
    isActive
      ? "bg-blue-600 text-white"
      : "text-blue-900 hover:bg-blue-100"
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
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <header className="sticky top-0 z-20 backdrop-blur bg-ivory/90 border-b border-blue-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="IPC Zion Hall logo" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-contain shrink-0" />
            <div className="leading-tight">
              <div className="font-serif text-lg font-semibold text-blue-900">
                IPC Zion Hall
              </div>
              <div className="text-xs text-blue-600">Lingarajapuram, Bengaluru</div>
            </div>
          </Link>
          <nav className="hidden sm:flex items-center gap-1">
            <NavItems />
          </nav>
        </div>
        <nav className="flex sm:hidden items-center gap-1 px-4 pb-3 overflow-x-auto">
          <NavItems />
        </nav>
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
            <p className="text-blue-700">contact@ipczionhall.example</p>
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
