"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Nieprawidłowe hasło");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-light px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white rounded-xl shadow-md p-8 flex flex-col gap-4"
      >
        <h1 className="text-2xl! font-semibold text-center mb-2">
          Panel administratora
        </h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Hasło"
          autoFocus
          className="border border-gray-light rounded-lg px-4 py-2 text-dark focus:outline-none focus:ring-2 focus:ring-blue-light"
        />
        {error && <p className="text-red-600 text-sm! text-center">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue text-light rounded-lg py-2 font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? "Logowanie..." : "Zaloguj się"}
        </button>
      </form>
    </div>
  );
}
