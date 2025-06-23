"use client";
import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const handleRemove = (id) => {
    const newCart = cart.filter((book) => book.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className="bg-white shadow p-6 rounded-lg mt-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">📦 Keranjang Buku</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Keranjang masih kosong.</p>
      ) : (
        <ul className="divide-y">
          {cart.map((book) => (
            <li key={book.id} className="py-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">{book.title}</h3>
                <p className="text-gray-500 text-sm">{book.author}</p>
              </div>
              <button
                className="text-red-500 hover:underline text-sm"
                onClick={() => handleRemove(book.id)}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
