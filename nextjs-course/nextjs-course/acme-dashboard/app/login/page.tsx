"use client";

import { useState } from "react";
import { login } from "@/app/lib/auth";

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
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-10 text-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800/60 backdrop-blur p-8 rounded-2xl shadow-md w-80 border border-gray-700 space-y-6"
      >
        <h1 className="text-3xl font-bold text-white text-center">Account Log In</h1>

        <input
          name="email"
          type="email"
          placeholder="Email (user@example.com)"
          className="w-full p-3 rounded-xl bg-gray-900/40 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password (123456)"
          className="w-full p-3 rounded-xl bg-gray-900/40 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        {error && (
          <p className="text-red-400 text-center text-sm">{error}</p>
        )}

        <button
          type="submit"
          className="w-full p-3 rounded-xl bg-blue-500/20 text-blue-200 font-semibold hover:bg-blue-500/30 transition-all border border-blue-500/20"
        >
          Log In
        </button>
      </form>
    </main>
  );
}
