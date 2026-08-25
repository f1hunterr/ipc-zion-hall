import Reveal from "../components/Reveal";
import usePageTitle from "../usePageTitle";

export default function Media() {
  usePageTitle("Media");

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <p className="uppercase tracking-widest text-blue-500 text-xs font-semibold mb-3">
        Watch & See
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-blue-900 mb-10">
        Media
      </h1>

      <Reveal>
        <section className="mb-16">
          <h2 className="font-serif text-xl font-semibold text-blue-900 mb-4">
            Sermons
          </h2>
          <div className="bg-blue-50 rounded-2xl border border-blue-100 p-10 text-center">
            <p className="text-blue-700 text-sm">
              No videos yet — check back soon, or reach out on{" "}
              <a
                href="https://wa.me/919986914560"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                WhatsApp
              </a>{" "}
              for the latest.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={100}>
        <section>
          <h2 className="font-serif text-xl font-semibold text-blue-900 mb-4">
            Photo Gallery
          </h2>
          <p className="text-blue-600 text-sm mb-6">
            Church photos will go here once provided.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-300 text-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-blue-200"
              >
                Photo {i}
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
