"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-10 text-center drop-shadow">
          🛍️ Keranjang Buku
        </h1>

        {cart.length === 0 ? (
          <div className="text-center text-gray-500">
            <p className="text-lg">Keranjang Anda masih kosong 😢</p>
            <Link
              href="/catalog"
              className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Lihat Katalog
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cart.map((book) => (
              <div
                key={book.id}
                className="relative backdrop-blur-md bg-white/70 border border-blue-100 rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 p-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-20 h-28 object-cover rounded-lg shadow-md"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-blue-900">{book.title}</h3>
                    <p className="text-sm text-gray-600">👤 {book.author}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(book.id)}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-sm bg-white rounded-full p-1 shadow"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/dashboard"
            className="inline-block mt-6 bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition"
          >
            ⬅ Kembali ke Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
