import { sql } from "@vercel/postgres";
import { updateInvoice, deleteInvoice } from "@/app/lib/actions";

type EditInvoicePageProps = {
  params: { id: string };
};

export default async function EditInvoicePage({ params }: EditInvoicePageProps) {
  const { id } = params;

  // Fetch invoice using FULL UUID
  const { rows } = await sql`
    SELECT * FROM invoices WHERE id = ${id};
  `;
  const invoice = rows[0];

  // If invoice doesn't exist
  if (!invoice) {
    return (
      <main className="min-h-screen bg-gray-900 p-10 text-gray-200">
        <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-2xl border border-gray-700">
          <h1 className="text-2xl font-bold text-red-400">Invoice not found</h1>
          <a
            href="/dashboard/invoices/edit"
            className="mt-4 inline-block px-4 py-2 rounded-xl bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600 transition"
          >
            ← Back to Invoices
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 p-10 text-gray-200">
      <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-2xl border border-gray-700 space-y-8">

        {/* Header */}
        <div className="space-y-2">
          <a
            href="/dashboard/invoices/edit"
            className="inline-block px-4 py-2 rounded-xl bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600 transition"
          >
            ← Back to Invoices
          </a>

          <h1 className="text-3xl font-bold text-white">
            Editing Invoice #{invoice.id.slice(0, 8)}
          </h1>

          <p className="text-gray-400 text-sm">
            Created: {new Date(invoice.created_at).toLocaleString()}
          </p>
        </div>

        {/* Update Form */}
        <form action={updateInvoice} className="space-y-6">
          <input type="hidden" name="id" value={invoice.id} />

          <div className="space-y-2">
            <label className="text-sm text-gray-400">Amount (€)</label>
            <input
              name="amount"
              type="number"
              defaultValue={invoice.amount}
              className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 text-gray-200"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400">Status</label>
            <select
              name="status"
              defaultValue={invoice.status}
              className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 text-gray-200"
            >
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded-xl bg-blue-500/20 text-blue-200 border border-blue-500/20 hover:bg-blue-500/30 transition font-semibold"
          >
            Save Changes
          </button>
        </form>

        {/* Delete Form */}
        <form action={deleteInvoice}>
          <input type="hidden" name="id" value={invoice.id} />
          <button
            type="submit"
            className="w-full p-3 rounded-xl bg-red-500/20 text-red-300 border border-red-500/20 hover:bg-red-500/30 transition font-semibold"
          >
            Delete Invoice
          </button>
        </form>
      </div>
    </main>
  );
}
