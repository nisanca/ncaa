"use client";
import Link from "next/link";
import { useState } from "react";

const books = [
  { id: 1, title: "Algoritma Dasar", author: "Dedi Gunawan", image: "/algoritma dasar.jpeg" },
  { id: 2, title: "Pemrograman Web", author: "Nina Aulia", image: "/pemograman web.jpeg" },
  { id: 3, title: "React JS untuk Pemula", author: "Budi Setiawan", image: "/react js.jpeg" },
];

export default function Catalog() {
  const [added, setAdded] = useState(null);

  const addToCart = (book) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isExist = cart.find((item) => item.id === book.id);
    if (!isExist) {
      cart.push(book);
      localStorage.setItem("cart", JSON.stringify(cart));
      setAdded(book.id);
      setTimeout(() => setAdded(null), 1000);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-10 text-center drop-shadow-sm">
        📚 Katalog Buku Perpustakaan
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
              <p className="text-sm text-gray-600">👤 {book.author}</p>
              <button
                onClick={() => addToCart(book)}
                className="mt-4 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 text-sm"
              >
                {added === book.id ? "✔ Ditambahkan" : "Tambah ke Keranjang"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/dashboard"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
        >
          ← Kembali ke Home
        </Link>
      </div>
    </div>
  );
}
