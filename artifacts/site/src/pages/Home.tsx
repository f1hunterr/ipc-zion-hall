import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-skyblue to-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          <p className="uppercase tracking-widest text-blue-500 text-xs sm:text-sm font-semibold mb-4">
            Welcome to
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-blue-900 mb-6">
            IPC Zion Hall
          </h1>
          <p className="text-blue-700 max-w-xl mx-auto mb-10">
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

      <section className="bg-white border-t border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-blue-900 mb-4">
            Placeholder photo gallery
          </h2>
          <p className="text-blue-600 text-sm mb-8">
            Church photos will go here once provided.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-300 text-sm"
              >
                Photo {i}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
