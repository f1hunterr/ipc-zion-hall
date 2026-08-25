export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <p className="uppercase tracking-widest text-gold-600 text-xs font-semibold mb-3">
        About Us
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-blue-900 mb-6">
        Who We Are
      </h1>
      <div className="prose prose-blue max-w-none text-blue-800 space-y-4">
        <p>
          [Placeholder] IPC Zion Hall is a congregation located in
          Lingarajapuram, Bengaluru, dedicated to worship, discipleship, and
          serving the local community. This section will be replaced with the
          church's actual history, mission, and vision once content is
          provided.
        </p>
        <p>
          [Placeholder] Add details about the church's founding, leadership,
          denominational affiliation, and core beliefs here.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="font-serif text-lg font-semibold text-blue-900 mb-2">
            Our Mission
          </h3>
          <p className="text-blue-700 text-sm">
            [Placeholder mission statement.]
          </p>
        </div>
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="font-serif text-lg font-semibold text-blue-900 mb-2">
            Our Vision
          </h3>
          <p className="text-blue-700 text-sm">
            [Placeholder vision statement.]
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="font-serif text-lg font-semibold text-blue-900 mb-4">
          Leadership
        </h3>
        <div className="grid gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-blue-100 p-5 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-3" />
              <div className="font-medium text-blue-900">Name Placeholder</div>
              <div className="text-xs text-blue-500">Role Placeholder</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
