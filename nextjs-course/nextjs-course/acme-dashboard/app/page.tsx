export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to home Dashboard</h1>
      <p className="text-lg text-gray-600 mb-8">
        Manage your invoices, track your finances, and stay organized.
      </p>
      <a
        href="/login"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Get Started
      </a>
    </main>
  );
}
