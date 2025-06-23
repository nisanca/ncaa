"use client";
import Navbar from "../components/Navbar"; // gunakan alias @ jika sudah set di jsconfig.json

export default function MahasiswaDashboard() {
  return (
    <div>
      <Navbar role="mahasiswa" />
      <main className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Dashboard Mahasiswa</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-700">📋 Daftar Anggota</h2>
            <p className="text-sm text-gray-500 mb-2">Lihat atau daftar sebagai anggota.</p>
            <a href="/dashboard/mahasiswa/register" className="text-blue-600 hover:underline text-sm">Akses Formulir</a>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-700">📚 Form Peminjaman</h2>
            <p className="text-sm text-gray-500 mb-2">Isi data untuk meminjam buku.</p>
            <a href="/dashboard/mahasiswa/loan" className="text-blue-600 hover:underline text-sm">Akses Formulir</a>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-700">📖 Katalog Buku</h2>
            <p className="text-sm text-gray-500 mb-2">Lihat koleksi buku yang tersedia.</p>
            <a href="/catalog" className="text-blue-600 hover:underline text-sm">Lihat Katalog</a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Sistem Informasi Peminjaman Buku
        </div>
      </main>
    </div>
  );
}
