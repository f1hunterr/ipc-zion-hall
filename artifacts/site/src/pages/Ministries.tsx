import Reveal from "../components/Reveal";

const MINISTRIES = [
  {
    name: "Sunday Service",
    when: "Sunday, 8:30 – 10:30 AM",
    desc: "Our main gathering for worship, the Word, and fellowship as one congregation.",
  },
  {
    name: "Online Sister Meeting & Bible Study",
    when: "Monday, 7:30 – 8:30 PM",
    desc: "A weekly online gathering for the women of the church to study God's Word together and encourage one another.",
  },
  {
    name: "Fasting Prayer",
    when: "Thursday, 6:00 – 7:00 PM",
    desc: "A time set apart each week to seek God together in prayer and fasting.",
  },
  {
    name: "Kids Club",
    when: "Saturday, 3:00 – 5:00 PM",
    desc: "A weekly gathering for children with Bible stories, songs, and activities.",
  },
  {
    name: "Youth Sunday",
    when: "Fourth week of the month",
    desc: "A monthly service led by and focused on the youth of the church.",
  },
];

export default function Ministries() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <p className="uppercase tracking-widest text-blue-500 text-xs font-semibold mb-3">
        Get Involved
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-blue-900 mb-3">
        Ministries
      </h1>
      <p className="text-blue-700 mb-10">
        Every gathering below is open to anyone who'd like to join — come as
        you are.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {MINISTRIES.map((m, i) => (
          <Reveal key={m.name} delayMs={i * 60}>
            <div className="bg-white rounded-2xl border border-blue-100 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-serif text-lg font-semibold text-blue-900 mb-1">
                {m.name}
              </h3>
              <p className="text-sm font-medium text-blue-700 mb-2">{m.when}</p>
              <p className="text-blue-700 text-sm">{m.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
