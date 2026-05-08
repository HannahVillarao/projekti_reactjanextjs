import { createInvoice } from "@/app/lib/actions";

export default function CreateInvoicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-10 text-gray-200">
      <div className="max-w-lg mx-auto bg-gray-800/60 backdrop-blur p-8 rounded-2xl shadow-md border border-gray-700 space-y-6">
        <h1 className="text-3xl font-bold text-white">Create Invoice</h1>

        <form action={createInvoice} className="space-y-6">
          <input
            name="customerId"
            type="text"
            placeholder="Customer ID"
            className="w-full p-3 rounded-xl bg-gray-900/40 border border-gray-700 text-gray-200"
            required
          />

          <input
            name="amount"
            type="number"
            placeholder="Amount"
            className="w-full p-3 rounded-xl bg-gray-900/40 border border-gray-700 text-gray-200"
            required
          />

          <select
            name="status"
            className="w-full p-3 rounded-xl bg-gray-900/40 border border-gray-700 text-gray-200"
          >
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
          </select>

          <button
            type="submit"
            className="w-full p-3 rounded-xl bg-green-500/20 text-green-200 font-semibold hover:bg-green-500/30 transition border border-green-500/20"
          >
            Create Invoice
          </button>
        </form>
      </div>
    </main>
  );
}
