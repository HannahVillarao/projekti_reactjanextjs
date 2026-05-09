import { sql } from "@vercel/postgres";
import { deleteInvoice } from "@/app/lib/actions";

export default async function EditInvoicesListPage() {
  const { rows } = await sql`
  SELECT * FROM invoices;
`;
const invoices = rows;
const hasInvoices = invoices.length > 0;


  return (
    <main className="min-h-screen bg-gray-900 p-10 text-gray-200 space-y-10">
      {/* Back Button */}
      <a
        href="/dashboard"
        className="inline-block px-4 py-2 rounded-xl bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600 transition"
      >
        ← Back to Dashboard
      </a>

      <h1 className="text-3xl font-bold text-white">Edit Invoices</h1>

      {/* No invoices fallback */}
      {!hasInvoices && (
        <p className="text-gray-400 text-lg bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
          No invoices found.
        </p>
      )}

      {/* Invoice list */}
      {hasInvoices && (
        <div className="space-y-4">
          {invoices.map((inv) => (
            <div
              key={inv.id}
              className="p-5 bg-gray-800 rounded-xl border border-gray-700 flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-semibold text-white">
                  Invoice #{inv.id.slice(0, 8)}
                </p>
                <p className="text-gray-400">
                  Amount: €{inv.amount} — Status: {inv.status}
                </p>
              </div>

              <div className="flex gap-3">
                {/* Edit button */}
                <a
                  href={`/dashboard/invoices/${inv.id}/edit`}
                  className="px-4 py-2 rounded-xl bg-blue-500/20 text-blue-200 border border-blue-500/20 hover:bg-blue-500/30 transition"
                >
                  Edit
                </a>

                {/* Delete button */}
                <form action={deleteInvoice}>
                  <input type="hidden" name="id" value={inv.id} />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-red-500/20 text-red-300 border border-red-500/20 hover:bg-red-500/30 transition"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
