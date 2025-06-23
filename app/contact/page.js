"use client";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center text-center">
          <img
            src="/foto.JPEG"
            alt="Foto Profil"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Nisa Nurul A'in</h1>
          <p className="text-blue-600 font-semibold mb-2">Developer & Mahasiswa</p>
          <p className="text-gray-600 mb-4 text-sm">
            Jika ada pertanyaan atau ingin berkolaborasi dalam pengembangan sistem perpustakaan,
            silakan hubungi saya melalui informasi berikut.
          </p>

          <div className="w-full text-left space-y-2 mb-6">
            <div>
              <p className="text-sm text-gray-500">📧 Email</p>
              <p className="text-gray-700 font-medium">nisana19@gmail.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">📍 Lokasi</p>
              <p className="text-gray-700 font-medium">Perpustakaan Bandung, Indonesia</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">📱 Telepon</p>
              <p className="text-gray-700 font-medium">+62 812 3456 7890</p>
            </div>
          </div>

          {/* Tombol kembali ke dashboard/home */}
          <Link
            href="/dashboard"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            ← Kembali ke Home
          </Link>
        </div>
      </div>
    </div>
  );
}
