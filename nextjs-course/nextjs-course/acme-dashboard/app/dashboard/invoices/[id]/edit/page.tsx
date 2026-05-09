import { updateInvoice } from "@/app/lib/actions";

export default async function EditInvoicePage({ params }) {
  const { id } = params;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-10 text-gray-200">
      <div className="max-w-lg mx-auto bg-gray-800/60 backdrop-blur p-8 rounded-2xl shadow-md border border-gray-700 space-y-6">
        <h1 className="text-3xl font-bold text-white">Edit Invoice</h1>

        <form action={updateInvoice} className="space-y-6">
          <input type="hidden" name="id" value={id} />

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
            className="w-full p-3 rounded-xl bg-blue-500/20 text-blue-200 font-semibold hover:bg-blue-500/30 transition border border-blue-500/20"
          >
            Save Changes
          </button>
        </form>
      </div>
    </main>
  );
}
