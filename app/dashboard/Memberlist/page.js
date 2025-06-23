// Katalog atau tampilan default
"use client";
import Navbar from "../../components/Navbar";

export default function MahasiswaDashboard() {
  return (
    <div>
      <Navbar role="mahasiswa" />
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">📚 Selamat Datang di Dashboard Mahasiswa</h1>
        <p className="text-center text-gray-600">Silakan pilih menu di atas untuk mulai menggunakan layanan.</p>
      </main>
    </div>
  );
}
