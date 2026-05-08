"use client";

import { useState } from "react";
import { login } from "../lib/auth";

export default function LoginPage() {
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const result = await login(formData);

    if (!result.success) {
      setError(result.error || "Login failed");
      return;
    }

    window.location.href = "/dashboard";
  }

  return (
    <main className="flex flex-col items-center justify-center py-20">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
        />

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
    </main>
  );
}
