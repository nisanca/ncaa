"use client";

export default function BookCard({ book }) {
  const handleAddToCart = () => {
    alert(`📖 ${book.title} ditambahkan ke keranjang!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4 flex flex-col justify-between">
      <img
        src={book.image || "/default-book.jpg"}
        alt={book.title}
        className="w-full h-40 object-cover rounded"
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-blue-700">{book.title}</h3>
        <p className="text-sm text-gray-600">Penulis: {book.author}</p>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded"
      >
        Tambah ke Keranjang
      </button>
    </div>
  );
}
