"use client";
import { useEffect, useState } from "react";

export default function RecentLoansTable() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("peminjaman")) || [];
    setLoans(saved);
  }, []);

  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">📘 Riwayat Peminjaman</h2>
      {loans.length === 0 ? (
        <p className="text-gray-500">Belum ada data peminjaman.</p>
      ) : (
        <table className="w-full text-sm text-left border">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2">Nama</th>
              <th className="p-2">NIM</th>
              <th className="p-2">Judul Buku</th>
              <th className="p-2">Tgl Pinjam</th>
              <th className="p-2">Tgl Kembali</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{loan.nama}</td>
                <td className="p-2">{loan.nim}</td>
                <td className="p-2">{loan.judulBuku}</td>
                <td className="p-2">{loan.tanggalPinjam}</td>
                <td className="p-2">{loan.tanggalKembali}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
