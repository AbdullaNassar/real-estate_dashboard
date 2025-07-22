import React from "react";
import { useUsers } from "../features/users/useUsers";
import Spinner from "../ui/Spinner";
import Error from "../ui/Error";
import { LuCircleUserRound } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Pagination from "../ui/Pagination";

export default function UsersPage() {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  console.log(users);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="overflow-x-auto rounded-box border border-base-content/5 ">
        <table className="table table-xs sm:table-sm md:table-md lg:table-lg  border border-gray-300 divide-y divide-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700"></th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Gender
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                role
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                operations
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">
            {users.map((user, idx) => {
              return (
                <tr key={user.id} className=" text-gray-800">
                  <th>{idx + 1}</th>
                  <td>{user.FullName}</td>
                  <td>{user.email}</td>
                  <td>{user.gender ? "Male" : "Female"}</td>
                  <td>{user.role}</td>
                  <td className="flex items-center">
                    <span className="p-2 hover:transform hover:scale-110 hover:cursor-pointer transition-all ">
                      <FaRegEdit className="sm:text-2xl" />
                    </span>
                    <span className="p-2 hover:transform hover:scale-110 hover:cursor-pointer transition-all ">
                      <MdDeleteOutline className="sm:text-2xl" />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
}
