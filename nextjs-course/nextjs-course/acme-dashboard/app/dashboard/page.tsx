export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-10 space-y-16 text-gray-200">

      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 text-lg">
          Welcome back, here’s your overview.
        </p>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-800/60 backdrop-blur rounded-2xl shadow-sm border border-gray-700">
          <h2 className="text-lg font-medium text-gray-300">Total Invoices</h2>
          <p className="text-4xl font-semibold mt-3 text-red-400">42</p>
        </div>

        <div className="p-6 bg-gray-800/60 backdrop-blur rounded-2xl shadow-sm border border-gray-700">
          <h2 className="text-lg font-medium text-gray-300">Pending</h2>
          <p className="text-4xl font-semibold mt-3 text-yellow-400">8</p>
        </div>

        <div className="p-6 bg-gray-800/60 backdrop-blur rounded-2xl shadow-sm border border-gray-700">
          <h2 className="text-lg font-medium text-gray-300">Paid</h2>
          <p className="text-4xl font-semibold mt-3 text-green-400">34</p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-200">Quick Actions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="/dashboard/invoices/[id]]/edit"
            className="p-6 rounded-2xl bg-blue-500/20 text-blue-200 font-medium text-xl text-center shadow-sm hover:bg-blue-500/30 transition border border-blue-500/20"
          >
            Edit Invoices
          </a>

          <a
            href="/dashboard/invoices/create"
            className="p-6 rounded-2xl bg-green-500/20 text-green-200 font-medium text-xl text-center shadow-sm hover:bg-green-500/30 transition border border-green-500/20"
          >
            Create New Invoice
          </a>
        </div>
      </section>

    </main>
  );
}
