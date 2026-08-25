import { Link } from "react-router-dom";
import churchFront from "../assets/church-front.jpg";
import EventsBanner from "../components/EventsBanner";
import Reveal from "../components/Reveal";

const CARD_HOVER =
  "transition-all duration-200 hover:-translate-y-1 hover:shadow-md";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-kenburns"
          style={{ backgroundImage: `url(${churchFront})` }}
        />
        <div className="absolute inset-0 bg-blue-950/45" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          <p className="uppercase tracking-widest text-blue-200 text-xs sm:text-sm font-semibold mb-4 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)] animate-fade-up">
            Welcome to
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-white mb-6 [text-shadow:0_2px_10px_rgba(0,0,0,0.6)] animate-fade-up [animation-delay:100ms]">
            IPC Zion Hall
          </h1>
          <p className="text-blue-100 max-w-xl mx-auto mb-10 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)] animate-fade-up [animation-delay:200ms]">
            A warm, welcoming congregation in Lingarajapuram, Bengaluru. Join us
            for worship, fellowship, and growing in faith together.
          </p>
          <div className="flex flex-wrap justify-center gap-3 animate-fade-up [animation-delay:300ms]">
            <Link
              to="/service-times"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium transition-all duration-200 hover:bg-blue-700 hover:scale-[1.03] active:scale-95"
            >
              Service Times
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-white border border-blue-200 text-blue-900 font-medium transition-all duration-200 hover:bg-blue-50 hover:scale-[1.03] active:scale-95"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <EventsBanner />

      <Reveal>
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
              className={`bg-white rounded-2xl border border-blue-100 p-6 shadow-sm ${CARD_HOVER}`}
            >
              <h3 className="font-serif text-lg font-semibold text-blue-900 mb-2">
                {c.title}
              </h3>
              <p className="text-blue-700 text-sm">{c.desc}</p>
            </div>
          ))}
        </section>
      </Reveal>
    </div>
  );
}
