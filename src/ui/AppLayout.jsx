import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="min-h-screen grid grid-cols-[max-content_1fr] grid-rows-[auto_1fr] bg-gray-100 text-stone-900">
      <Header />
      <Sidebar />
      <main className="bg-white m-8 col-span-full sm:col-span-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
