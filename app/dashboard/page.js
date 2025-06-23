"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardRedirect() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      router.push("/dashboard/admin");
    } else if (role === "mahasiswa") {
      router.push("/dashboard/mahasiswa");
    } else {
      router.push("/login"); // jika tidak ada role, redirect ke login
    }
  }, []);

  return <p className="text-center mt-10">Sedang mengalihkan ke dashboard...</p>;
}
