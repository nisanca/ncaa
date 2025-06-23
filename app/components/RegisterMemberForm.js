"use client";
import { useState } from "react";

export default function RegisterMemberForm() {
  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    kelas: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Data disimpan:\n${JSON.stringify(formData, null, 2)}`);
    setFormData({ nama: "", nim: "", kelas: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="nama"
        value={formData.nama}
        onChange={handleChange}
        placeholder="Nama"
        className="w-full border px-4 py-2"
      />
      <input
        type="text"
        name="nim"
        value={formData.nim}
        onChange={handleChange}
        placeholder="NIM"
        className="w-full border px-4 py-2"
      />
      <input
        type="text"
        name="kelas"
        value={formData.kelas}
        onChange={handleChange}
        placeholder="Kelas"
        className="w-full border px-4 py-2"
      />
      <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded">
        Daftar
      </button>
    </form>
  );
}
