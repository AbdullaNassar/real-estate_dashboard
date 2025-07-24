import React, { useState } from "react";
import logo from "/imgs/logo.svg";
import { useNavigate } from "react-router-dom";
import { CiDark, CiLight } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { SidebarModal } from "./Modal";
import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../features/auth/useLogout";
export default function Header() {
  const navigate = useNavigate();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const { logout } = useLogout();
  return (
    <>
      <header className="bg-blue-500 p-2 sm:px-8 text-white sm:py-4 col-span-full flex justify-between items-center sticky top-0 left-0 w-full  z-10">
        <button
          className="hidden sm:block hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="Maskn Logo" className="w-36" />
        </button>
        <button
          className="sm:hidden cursor-pointer text-3xl"
          onClick={() => setIsOpenSidebar(true)}
        >
          <IoMenu />
        </button>
        <div className="flex  items-center gap-4">
          <input
            type="search"
            className="bg-blue-400 rounded-md px-4 py-2 w-32 sm:w-auto outline-0 focus:ring focus:ring-blue-300 focus:ring-offset-1  "
            placeholder="Search..."
          />

          <div className="flex gap-4 items-center">
            <span
              className="md:text-3xl hover:cursor-pointer "
              onClick={logout}
            >
              <BiLogOut />
            </span>
            <span className="md:text-2xl hover:cursor-pointer ">
              <FaRegUser />
            </span>
          </div>
        </div>
      </header>
      <SidebarModal
        isOpen={isOpenSidebar}
        onCancel={() => setIsOpenSidebar(false)}
      />
    </>
  );
}
