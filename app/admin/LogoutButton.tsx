"use client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-dark text-light rounded-lg px-4 py-2 text-sm! hover:opacity-90 transition-opacity"
    >
      Wyloguj się
    </button>
  );
}
