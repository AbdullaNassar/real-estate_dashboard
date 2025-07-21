import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="min-h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] ">
      <Header />
      <Sidebar />
      <main className="bg-blue-500 m-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
