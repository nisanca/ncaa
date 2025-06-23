// app/components/DashboardCards.js
"use client";
import { useRouter } from "next/navigation";

export default function DashboardCards() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 shadow rounded hover:bg-blue-100 transition cursor-pointer">
        <p className="text-lg font-semibold">📚 Total Buku</p>
        <p className="text-2xl font-bold text-blue-800">120</p>
      </div>

      <div
        onClick={() => router.push("/members")}
        className="bg-white p-4 shadow rounded hover:bg-blue-100 transition cursor-pointer"
      >
        <p className="text-lg font-semibold">👤 Total Anggota</p>
        <p className="text-2xl font-bold text-blue-800">45</p>
        <p className="text-sm text-gray-500 mt-1">Klik untuk melihat daftar anggota</p>
      </div>

      <div className="bg-white p-4 shadow rounded hover:bg-blue-100 transition cursor-pointer">
        <p className="text-lg font-semibold">📝 Peminjaman Aktif</p>
        <p className="text-2xl font-bold text-blue-800">20</p>
      </div>
    </div>
  );
}
