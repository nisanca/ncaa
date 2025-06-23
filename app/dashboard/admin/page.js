"use client";
import Navbar from "../../components/Navbar";
import DashboardCards from "../../components/DashboardCards";
import MemberList from "../../components/MemberList";

export default function AdminDashboard() {
  return (
    <>
      <Navbar role="admin" />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard Admin</h1>
        <DashboardCards />
        <MemberList />
      </main>
    </>
  );
}
