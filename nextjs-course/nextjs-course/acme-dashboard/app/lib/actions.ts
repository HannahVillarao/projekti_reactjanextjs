"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createInvoice(formData: FormData) {
  const customer = formData.get("customer") as string;
  const amount = Number(formData.get("amount"));
  const status = formData.get("status") as string;

  await sql`
    INSERT INTO invoices (customer_id, amount, status)
    VALUES (${customer}, ${amount}, ${status})
  `;

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function updateInvoice(id: string, formData: FormData) {
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
