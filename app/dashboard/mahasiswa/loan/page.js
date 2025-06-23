"use client";
import Navbar from "../../../components/Navbar";
import LoanForm from "../../../components/LoanForm";

export default function LoanPage() {
  return (
    <div>
      <Navbar role="mahasiswa" />
      <main className="p-6 max-w-xl mx-auto">
        <h1 className="text-xl font-bold mb-4">📚 Form Peminjaman Buku</h1>
        <LoanForm />
      </main>
    </div>
  );
}
