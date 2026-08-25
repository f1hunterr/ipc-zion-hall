import { Link } from "react-router-dom";
import churchFront from "../assets/church-front.jpg";

export default function Home() {
  return (
    <div>
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${churchFront})` }}
      >
        <div className="absolute inset-0 bg-blue-950/70" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          <p className="uppercase tracking-widest text-blue-200 text-xs sm:text-sm font-semibold mb-4">
            Welcome to
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-white mb-6">
            IPC Zion Hall
          </h1>
          <p className="text-blue-100 max-w-xl mx-auto mb-10">
            A warm, welcoming congregation in Lingarajapuram, Bengaluru. Join us
            for worship, fellowship, and growing in faith together.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/service-times"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Service Times
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-white border border-blue-200 text-blue-900 font-medium hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-8 sm:grid-cols-3">
        {[
          {
            title: "Sunday Worship",
            desc: "Join us every Sunday for a service of worship, prayer, and the Word.",
          },
          {
            title: "Community",
            desc: "A family of believers supporting one another in faith and life.",
          },
          {
            title: "New Here?",
            desc: "Everyone is welcome — come as you are, we'd love to meet you.",
          },
        ].map((c) => (
          <div
            key={c.title}
            className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm"
          >
            <h3 className="font-serif text-lg font-semibold text-blue-900 mb-2">
              {c.title}
            </h3>
            <p className="text-blue-700 text-sm">{c.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
