const ANNUAL_EVENTS = ["Summer Camp", "Kids Club Anniversary", "Revival Meeting"];

export default function EventsBanner() {
  return (
    <div className="bg-gold-50 border-b border-gold-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-blue-900">
        <span className="font-semibold uppercase tracking-wide text-gold-700 text-xs">
          Upcoming
        </span>
        {ANNUAL_EVENTS.map((event) => (
          <span key={event}>
            {event} <span className="text-blue-500">— details coming soon</span>
          </span>
        ))}
      </div>
    </div>
  );
}
