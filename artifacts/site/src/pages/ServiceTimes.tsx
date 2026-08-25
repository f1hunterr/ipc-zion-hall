import MapEmbed from "../components/MapEmbed";
import Reveal from "../components/Reveal";
import usePageTitle from "../usePageTitle";
import { ANNUAL_EVENTS } from "../annualEvents";

const weeklySchedule = [
  { day: "Sunday", items: [{ name: "Sunday Service", time: "8:30 – 10:30 AM" }] },
  {
    day: "Monday",
    items: [{ name: "Online Sister Meeting / Bible Study", time: "7:30 – 8:30 PM" }],
  },
  { day: "Thursday", items: [{ name: "Fasting Prayer", time: "6:00 – 7:00 PM" }] },
  { day: "Saturday", items: [{ name: "Kids Club", time: "3:00 – 5:00 PM" }] },
];

const monthlySchedule = [
  { name: "Blessing Prayer", when: "First week of the month, 6:00 – 7:00 AM" },
  { name: "Lord's Table", when: "Second week" },
  { name: "Youth Sunday", when: "Fourth week" },
];

export default function ServiceTimes() {
  usePageTitle("Service Times");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <p className="uppercase tracking-widest text-blue-500 text-xs font-semibold mb-3">
        Join Us
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-blue-900 mb-3">
        Service Times
      </h1>
      <p className="text-blue-700 mb-10">
        Everyone is welcome to join us for any of the services below.
      </p>

      <h2 className="font-serif text-xl font-semibold text-blue-900 mb-4">
        Weekly
      </h2>
      <div className="space-y-4">
        {weeklySchedule.map((s, i) => (
          <Reveal key={s.day} delayMs={i * 60}>
            <div className="bg-white rounded-2xl border border-blue-100 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="font-serif text-lg font-semibold text-blue-900">
                {s.day}
              </div>
              <div className="space-y-1">
                {s.items.map((it) => (
                  <div
                    key={it.name}
                    className="flex flex-wrap items-center justify-between sm:justify-end gap-x-6 gap-y-1 text-sm"
                  >
                    <span className="text-blue-700">{it.name}</span>
                    <span className="font-medium text-blue-900">{it.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <h2 className="font-serif text-xl font-semibold text-blue-900 mt-12 mb-4">
        Monthly
      </h2>
      <div className="space-y-4">
        {monthlySchedule.map((m, i) => (
          <Reveal key={m.name} delayMs={i * 60}>
            <div className="bg-white rounded-2xl border border-blue-100 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <span className="font-serif text-lg font-semibold text-blue-900">
                {m.name}
              </span>
              <span className="text-sm font-medium text-blue-700">{m.when}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <h2 className="font-serif text-xl font-semibold text-blue-900 mt-12 mb-4">
        Annual
      </h2>
      <Reveal>
        <div className="bg-white rounded-2xl border border-blue-100 p-6">
          <ul className="grid gap-2 sm:grid-cols-3 text-sm text-blue-700">
            {ANNUAL_EVENTS.map((e) => (
              <li key={e} className="font-medium text-blue-900">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10 bg-blue-50 rounded-2xl border border-blue-100 p-6">
          <h3 className="font-serif text-lg font-semibold text-blue-900 mb-2">
            Location
          </h3>
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
          <MapEmbed className="h-64 mt-4" />
        </div>
      </Reveal>
    </div>
  );
}
