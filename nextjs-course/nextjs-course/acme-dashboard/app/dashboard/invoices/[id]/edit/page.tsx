import { sql } from "@vercel/postgres";
import { updateInvoice } from "@/app/lib/actions";

export default async function EditInvoicePage({ params }) {
  const { id } = params;

  const { rows } = await sql`SELECT * FROM invoices WHERE id = ${id}`;
  const invoice = rows[0];

  return (
    <div>
      <h1>Edit Invoice</h1>

      <form action={updateInvoice}>
        <input type="hidden" name="id" value={invoice.id} />

        <label>
          Amount:
          <input
            name="amount"
            type="number"
            defaultValue={invoice.amount}
            required
          />
        </label>

        <label>
          Status:
          <select name="status" defaultValue={invoice.status}>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
          </select>
        </label>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
