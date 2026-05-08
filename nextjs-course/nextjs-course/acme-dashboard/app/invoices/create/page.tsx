import { createInvoice } from "@/app/lib/actions";

export default function CreateInvoicePage() {
  return (
    <div>
      <h1>Create Invoice</h1>

      <form action={createInvoice}>
        <label>
          Customer ID:
          <input name="customerId" type="text" required />
        </label>

        <label>
          Amount:
          <input name="amount" type="number" required />
        </label>

        <label>
          Status:
          <select name="status">
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
          </select>
        </label>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
