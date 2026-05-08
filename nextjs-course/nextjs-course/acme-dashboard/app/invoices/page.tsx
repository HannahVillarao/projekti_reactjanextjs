export default function DashboardPage() {
  return (
    <main className="p-10 space-y-10">
      {/* Header */}
      <header>
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here’s an overview of your activity.
        </p>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold">Total Invoices</h2>
          <p className="text-3xl font-bold mt-2">42</p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold">Pending Payments</h2>
          <p className="text-3xl font-bold mt-2 text-yellow-600">8</p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold">Paid Invoices</h2>
          <p className="text-3xl font-bold mt-2 text-green-600">34</p>
        </div>
      </section>

      {/* Navigation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Manage</h2>

        <div className="flex flex-col gap-4">
          <a
            href="/dashboard/invoices"
            className="p-4 border rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-center"
          >
            View All Invoices
          </a>

          <a
            href="/dashboard/invoices/create"
            className="p-4 border rounded-lg bg-green-600 text-white hover:bg-green-700 text-center"
          >
            Create New Invoice
          </a>
        </div>
      </section>
    </main>
  );
}
