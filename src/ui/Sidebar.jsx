import React from "react";
import SidebarLinks from "./SidebarLinks";

export default function Sidebar() {
  return (
    <aside className="bg-white row-span-2 py-8 px-4 shadow-2xl hidden sm:block">
      <SidebarLinks />
    </aside>
  );
}
