import { Link } from "react-router-dom";
import usePageTitle from "../usePageTitle";

export default function NotFound() {
  usePageTitle("Page Not Found");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 text-center">
      <p className="uppercase tracking-widest text-blue-500 text-xs font-semibold mb-3">
        404
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-blue-900 mb-4">
        Page Not Found
      </h1>
      <p className="text-blue-700 mb-8">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-medium transition-all duration-200 hover:bg-blue-700 hover:scale-[1.03] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
      >
        Back to Home
      </Link>
    </div>
  );
}
