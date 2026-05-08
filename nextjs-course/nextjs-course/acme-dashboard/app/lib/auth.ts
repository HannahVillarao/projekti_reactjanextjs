"use server";

import { cookies } from "next/headers";

export async function login(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Demo credentials (ACME course uses these)
  if (email === "user@nextmail.com" && password === "123456") {
    cookies().set("session", "valid", {
      httpOnly: true,
      path: "/",
    });

    return { success: true };
  }

  return { success: false, error: "Invalid credentials" };
}
