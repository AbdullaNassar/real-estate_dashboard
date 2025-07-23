import React from "react";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineHomeModern, HiOutlineUsers } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useLogout } from "../features/auth/useLogout";
export default function SidebarLinks({ onClick }) {
  const { logout } = useLogout();
  return (
    <>
      <ul className="space-y-2 border-b pb-16 text-sm md:text-lg border-b-gray-300 text-stone-600">
        <li>
          <NavLink
            onClick={onClick}
            to="/home"
            className={({ isActive }) =>
              `linkSide ${isActive ? "linkSide-active" : ""}
              }`
            }
          >
            <span>
              <MdOutlineDashboardCustomize />
            </span>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={onClick}
            to="/properties"
            className={({ isActive }) =>
              `linkSide ${isActive ? "linkSide-active" : ""}
              }`
            }
          >
            <span>
              <HiOutlineHomeModern />
            </span>
            <span> Properties</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={onClick}
            to="/bookings"
            className={({ isActive }) =>
              `linkSide ${isActive ? "linkSide-active" : ""}
              }`
            }
          >
            <span>
              <RiMoneyDollarCircleLine />
            </span>
            <span> Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={onClick}
            to="/users"
            className={({ isActive }) =>
              `linkSide ${isActive ? "linkSide-active" : ""}
              }`
            }
          >
            <span>
              <HiOutlineUsers />
            </span>
            <span> Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={onClick}
            to="/settings"
            className={({ isActive }) =>
              `linkSide ${isActive ? "linkSide-active" : ""}
              }`
            }
          >
            <span>
              <IoSettingsOutline />
            </span>
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
      <button onClick={logout} className="linkSide mt-8 text-stone-600">
        <span>
          <BiLogOut />
        </span>
        <span>Logout</span>
      </button>
    </>
  );
}
