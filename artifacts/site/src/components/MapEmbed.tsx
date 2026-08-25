const MAP_EMBED_SRC = "https://www.google.com/maps?q=13.0094207,77.622712&z=17&output=embed";

export default function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <iframe
      title="IPC Zion Hall location"
      src={MAP_EMBED_SRC}
      className={`w-full rounded-2xl border border-blue-100 ${className}`}
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
