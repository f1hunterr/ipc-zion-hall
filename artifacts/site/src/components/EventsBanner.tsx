import { ANNUAL_EVENTS } from "../annualEvents";

export default function EventsBanner() {
  return (
    <div className="bg-blue-50 border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-blue-900">
        <span className="font-semibold uppercase tracking-wide text-blue-600 text-xs">
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
