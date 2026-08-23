import { NavLink, Outlet } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
    isActive
      ? "bg-blue-600 text-white"
      : "text-blue-900 hover:bg-blue-100"
  }`;

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <header className="sticky top-0 z-20 backdrop-blur bg-ivory/90 border-b border-blue-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-serif text-lg">
              Z
            </div>
            <div className="leading-tight">
              <div className="font-serif text-lg font-semibold text-blue-900">
                IPC Zion Hall
              </div>
              <div className="text-xs text-blue-600">Lingarajapuram, Bengaluru</div>
            </div>
          </a>
          <nav className="hidden sm:flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/service-times" className={navLinkClass}>
              Service Times
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>
        </div>
        <nav className="flex sm:hidden items-center gap-1 px-4 pb-3 overflow-x-auto">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/service-times" className={navLinkClass}>
            Service Times
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
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
            <p className="text-blue-700">Address line placeholder, Lingarajapuram, Bengaluru</p>
            <p className="text-blue-700">+91 00000 00000</p>
            <p className="text-blue-700">contact@ipczionhall.example</p>
          </div>
          <div>
            <div className="font-semibold mb-1">Service Times</div>
            <p className="text-blue-700">Sunday Worship — 9:30 AM</p>
            <p className="text-blue-700">Wednesday Prayer — 6:30 PM</p>
          </div>
        </div>
        <div className="text-center text-xs text-blue-400 pb-4">
          © {new Date().getFullYear()} IPC Zion Hall. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
