"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// CREATE
export async function createInvoice(formData: FormData) {
  const customerId = formData.get("customerId") as string;
  const amount = Number(formData.get("amount"));
  const status = formData.get("status") as string;

  await sql`
    INSERT INTO invoices (customer_id, amount, status)
    VALUES (${customerId}, ${amount}, ${status})
  `;

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

// UPDATE
export async function updateInvoice(formData: FormData) {
  const id = formData.get("id") as string;
  const amount = Number(formData.get("amount"));
  const status = formData.get("status") as string;

  await sql`
    UPDATE invoices
    SET amount = ${amount}, status = ${status}
    WHERE id = ${id}
  `;

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

// DELETE
export async function deleteInvoice(formData: FormData) {
  const id = formData.get("id") as string;

  await sql`
    DELETE FROM invoices
    WHERE id = ${id}
  `;

  revalidatePath("/dashboard/invoices");
}
