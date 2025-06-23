"use client";
import { useState } from "react";

const dummyBooks = [
  {
    id: 1,
    title: "Algoritma Dasar",
    author: "Dedi Gunawan",
    image: "algoritma web.jpeg", // nama file sudah tanpa spasi
    available: true,
  },
  {
    id: 2,
    title: "Pemrograman Web",
    author: "Nina Aulia",
    image: "pemograman web.jpeg",
    available: true,
  },
  {
    id: 3,
    title: "React JS untuk Pemula",
    author: "Budi Setiawan",
    image: "react js.jpeg",
    available: false,
  },
];

export default function CatalogBooks() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    if (!cart.find((item) => item.id === book.id)) {
      setCart([...cart, book]);
      alert(`${book.title} ditambahkan ke keranjang`);
    }
  };

  return (
    <div className="p-6 bg-blue-50 rounded shadow mt-6">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">📚 Katalog Buku Perpustakaan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={`/${book.image}`}
              alt={book.title}
              className="h-40 w-full object-cover"
              onError={(e) => {
                console.error(`Gagal memuat gambar: ${book.image}`);
                e.target.src = "/fallback.jpg"; // opsional gambar default
              }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-700">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                <span>👤</span> {book.author}
              </p>
              <p className={`text-sm ${book.available ? "text-green-600" : "text-red-500"}`}>
                {book.available ? "Tersedia" : "Tidak Tersedia"}
              </p>
              <button
                onClick={() => addToCart(book)}
                disabled={!book.available}
                className={`mt-3 w-full px-3 py-2 text-sm rounded ${
                  book.available
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
