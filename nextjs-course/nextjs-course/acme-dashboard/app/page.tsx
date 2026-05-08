export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center text-gray-200 p-10">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-white">Welcome to Invoice Manager!</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Log in to hopefully lessen your stress (we sure hope so.)
        </p>

        <a
          href="/login"
          className="mt-6 inline-block px-8 py-4 rounded-2xl bg-blue-500/20 text-blue-200 font-semibold text-xl shadow-sm hover:bg-blue-500/30 transition-all border border-blue-500/20"
        >
          Log In
        </a>
      </div>
    </main>
  );
}
