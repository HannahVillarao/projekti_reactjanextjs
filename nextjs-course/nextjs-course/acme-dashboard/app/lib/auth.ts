"use server";

import { sql } from "@vercel/postgres";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Fetch user from database
  const { rows } = await sql`
    SELECT * FROM users WHERE email = ${email}
  `;

  const user = rows[0];

  if (!user) {
    return { success: false, error: "User not found" };
  }

  if (user.password !== password) {
    return { success: false, error: "Wrong password" };
  }

  return { success: true };
}
