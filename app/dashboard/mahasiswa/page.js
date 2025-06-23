"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import { BookOpen, Star, Library } from "lucide-react";

export default function MahasiswaDashboard() {
  const [showPopuler, setShowPopuler] = useState(false);
  const [showLemari, setShowLemari] = useState(false);

  const bukuPopuler = [
    { id: 1, judul: "Atomic Habits", penulis: "James Clear" },
    { id: 2, judul: "Rich Dad Poor Dad", penulis: "Robert Kiyosaki" },
    { id: 3, judul: "Deep Work", penulis: "Cal Newport" },
  ];

  const lemariBuku = [
    { id: 1, judul: "Pengantar TI" },
    { id: 2, judul: "Basis Data Lanjut" },
    { id: 3, judul: "Struktur Data" },
    { id: 4, judul: "Pemrograman Web" },
    { id: 5, judul: "Kecerdasan Buatan" },
    { id: 6, judul: "Etika Profesi TI" },
  ];

  return (
    <>
      <Navbar role="mahasiswa" />
      <main className="p-6 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-2">Selamat Datang Mahasiswa</h1>
          <p className="text-gray-600 text-lg">
            Jelajahi koleksi buku unggulan dan simpanan bacaanmu di lemari digital.
          </p>
        </div>

        {/* Tombol */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={() => setShowPopuler(!showPopuler)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl shadow-lg"
          >
            <Star className="w-5 h-5" />
            {showPopuler ? "Sembunyikan Buku Populer" : "Tampilkan Buku Populer"}
          </button>

          <button
            onClick={() => setShowLemari(!showLemari)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-xl shadow-lg"
          >
            <Library className="w-5 h-5" />
            {showLemari ? "Sembunyikan Lemari Buku" : "Tampilkan Lemari Buku"}
          </button>
        </div>

        {/* Buku Populer */}
        {showPopuler && (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mb-10 animate-fade-in">
            {bukuPopuler.map((buku) => (
              <div
                key={buku.id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border-t-4 border-blue-600"
              >
                <BookOpen className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-800">{buku.judul}</h3>
                <p className="text-sm text-gray-500">oleh {buku.penulis}</p>
              </div>
            ))}
          </div>
        )}

        {/* Lemari Buku */}
        {showLemari && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Library className="text-green-600 w-6 h-6" /> Lemari Buku
            </h2>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mb-10 animate-fade-in">
              {lemariBuku.map((buku) => (
                <div
                  key={buku.id}
                  className="bg-gradient-to-br from-gray-100 to-white p-5 rounded-xl text-center shadow hover:shadow-lg transition-all"
                >
                  <p className="text-lg font-medium text-gray-700">{buku.judul}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* 🪄 HIASAN DI BAWAH */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl text-center shadow-inner">
          <div className="text-4xl mb-4">📚✨</div>
          <blockquote className="text-xl italic text-gray-700 max-w-2xl mx-auto">
            "Ilmu adalah harta yang tak akan habis, dan membaca adalah kuncinya."
          </blockquote>
          <p className="mt-2 text-sm text-gray-500">– Anonim</p>
        </div>
      </main>
    </>
  );
}
