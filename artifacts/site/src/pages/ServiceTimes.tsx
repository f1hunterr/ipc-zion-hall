const schedule = [
  { day: "Sunday", items: [{ name: "Sunday Worship Service", time: "9:30 AM" }] },
  { day: "Wednesday", items: [{ name: "Prayer Meeting", time: "6:30 PM" }] },
  { day: "Friday", items: [{ name: "Bible Study / Fellowship", time: "6:30 PM" }] },
];

export default function ServiceTimes() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <p className="uppercase tracking-widest text-blue-500 text-xs font-semibold mb-3">
        Join Us
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-blue-900 mb-3">
        Service Times
      </h1>
      <p className="text-blue-700 mb-10">
        [Placeholder — confirm exact days/times.] Everyone is welcome to join
        us for any of the services below.
      </p>

      <div className="space-y-4">
        {schedule.map((s) => (
          <div
            key={s.day}
            className="bg-white rounded-2xl border border-blue-100 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          >
            <div className="font-serif text-lg font-semibold text-blue-900">
              {s.day}
            </div>
            <div className="space-y-1">
              {s.items.map((it) => (
                <div
                  key={it.name}
                  className="flex items-center justify-between sm:justify-end gap-6 text-sm"
                >
                  <span className="text-blue-700">{it.name}</span>
                  <span className="font-medium text-blue-900">{it.time}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-blue-50 rounded-2xl border border-blue-100 p-6">
        <h3 className="font-serif text-lg font-semibold text-blue-900 mb-2">
          Location
        </h3>
        <p className="text-blue-700 text-sm">
          [Placeholder address] Lingarajapuram, Bengaluru, Karnataka
        </p>
      </div>
    </div>
  );
}
