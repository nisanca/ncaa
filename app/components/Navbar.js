"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar({ role }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white px-6 py-3 shadow-md">
      <div className="flex justify-between items-center">
        <div className="font-bold text-lg">📚 Perpustakaan</div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          ☰
        </button>
        <div className="hidden md:flex space-x-4">
          {role === "admin" && (
            <>
              <Link href="/dashboard/admin" className="hover:underline">Dashboard</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </>
          )}
          {role === "mahasiswa" && (
            <>
              <Link href="/dashboard/mahasiswa" className="hover:underline">Dashboard</Link>
              <Link href="/catalog" className="hover:underline">Catalog</Link>
              <Link href="/cart" className="hover:underline">Cart</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </>
          )}
          <Link href="/login" onClick={() => localStorage.clear()} className="hover:underline">Logout</Link>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-2 space-y-2">
          {role === "admin" && (
            <>
              <Link href="/dashboard/admin" className="block">Dashboard</Link>
              <Link href="/contact" className="block">Contact</Link>
            </>
          )}
          {role === "mahasiswa" && (
            <>
              <Link href="/dashboard/mahasiswa" className="block">Dashboard</Link>
              <Link href="/catalog" className="block">Catalog</Link>
              <Link href="/cart" className="block">Cart</Link>
              <Link href="/contact" className="block">Contact</Link>
            </>
          )}
          <Link href="/login" onClick={() => localStorage.clear()} className="block">Logout</Link>
        </div>
      )}
    </nav>
  );
}
