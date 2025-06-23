"use client";
import { useState } from "react";

export default function LoanForm() {
  const [nama, setNama] = useState("");
  const [judul, setJudul] = useState("");
  const [tanggal, setTanggal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { nama, judul, tanggal };
    console.log("Peminjaman:", data);
    alert("Data peminjaman berhasil disimpan!");
    setNama("");
    setJudul("");
    setTanggal("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Form Peminjaman Buku</h2>
      <input
        type="text"
        placeholder="Nama Peminjam"
        className="w-full border p-2 mb-3"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Judul Buku"
        className="w-full border p-2 mb-3"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
        required
      />
      <input
        type="date"
        className="w-full border p-2 mb-3"
        value={tanggal}
        onChange={(e) => setTanggal(e.target.value)}
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
        Simpan
      </button>
    </form>
  );
}
