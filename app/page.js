"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      router.push("/dashboard/admin");
    } else if (role === "mahasiswa") {
      router.push("/dashboard/mahasiswa");
    } else {
      router.push("/login");
    }
  }, []);

  return <p>Redirecting...</p>;
}
