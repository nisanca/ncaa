"use client";
import { Users, BookOpen, Library } from "lucide-react";

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Card title="Total Anggota" value="120" icon={<Users className="w-6 h-6 text-white" />} color="from-indigo-500 to-purple-600" />
      <Card title="Buku Dipinjam" value="45" icon={<BookOpen className="w-6 h-6 text-white" />} color="from-rose-500 to-pink-600" />
      <Card title="Buku Tersedia" value="300+" icon={<Library className="w-6 h-6 text-white" />} color="from-emerald-500 to-green-600" />
    </div>
  );
}

function Card({ title, value, icon, color }) {
  return (
    <div className={`bg-gradient-to-br ${color} p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all text-white`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="bg-white bg-opacity-20 p-2 rounded-full">
          {icon}
        </div>
      </div>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}
