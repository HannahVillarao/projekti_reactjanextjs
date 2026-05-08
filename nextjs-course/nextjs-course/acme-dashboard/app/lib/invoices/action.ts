"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createInvoice(formData: FormData) {
  const customer = formData.get("customer") as string;
  const amount = Number(formData.get("amount"));
  const status = formData.get("status") as string;

  if (!customer || !amount || !status) {
    throw new Error("Missing required fields");
  }

  await sql`
    INSERT INTO invoices (customer_id, amount, status)
    VALUES (${customer}, ${amount}, ${status})
  `;

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}
