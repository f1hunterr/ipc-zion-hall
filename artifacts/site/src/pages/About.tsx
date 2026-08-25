import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <p className="uppercase tracking-widest text-blue-500 text-xs font-semibold mb-3">
        About Us
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-blue-900 mb-6">
        Who We Are
      </h1>
      <div className="prose prose-blue max-w-none text-blue-800 space-y-4">
        <p>
          IPC Zion Hall is a congregation of The Indian Pentecostal Church of
          God, located in Lingarajapuram, Bengaluru. We gather each week for
          worship, prayer, and fellowship — see our{" "}
          <Link to="/service-times" className="underline">
            Service Times
          </Link>{" "}
          and{" "}
          <Link to="/ministries" className="underline">
            Ministries
          </Link>{" "}
          pages for the full schedule.
        </p>
      </div>

      <Reveal className="mt-12">
        <h3 className="font-serif text-lg font-semibold text-blue-900 mb-2">
          Leadership
        </h3>
        <p className="text-blue-700">Pastor Jayaseelan AGJ leads the congregation.</p>
      </Reveal>
    </div>
  );
}
