"use client";
import Navbar from "../../../components/Navbar";
import RegisterMemberForm from "../../../components/RegisterMemberForm";

export default function RegisterPage() {
  return (
    <div>
      <Navbar role="mahasiswa" />
      <main className="p-6 max-w-xl mx-auto">
        <h1 className="text-xl font-bold mb-4">📝 Form Pendaftaran Anggota</h1>
        <RegisterMemberForm />
      </main>
    </div>
  );
}
