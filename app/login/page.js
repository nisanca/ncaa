"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("mahasiswa");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      alert("Nama pengguna dan password harus diisi.");
      return;
    }

    // Password verifikasi berdasarkan role
    if (role === "admin" && password !== "admin123") {
      alert("Password admin salah!");
      return;
    }

    if (role === "mahasiswa" && password !== "mahasiswa123") {
      alert("Password mahasiswa salah!");
      return;
    }

    // Simpan data ke localStorage
    localStorage.setItem("user", username);
    localStorage.setItem("role", role);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="text"
          placeholder="Nama pengguna"
          className="border w-full p-2 mb-4 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          className="border w-full p-2 mb-4 rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="mahasiswa">Mahasiswa</option>
          <option value="admin">Admin</option>
        </select>

        <input
          type="password"
          placeholder={`Password ${role}`}
          className="border w-full p-2 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700"
          onClick={handleLogin}
        >
          Masuk
        </button>
      </div>
    </div>
  );
}
