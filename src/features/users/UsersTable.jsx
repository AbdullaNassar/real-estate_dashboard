import { useUsers } from "./useUsers";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/Error";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setTotalPages } from "./usersSlice";
import { useDeleteUser } from "./useDeleteUser";
import { useState } from "react";
import { ConfirmationModal } from "../../ui/Modal";

const PAGE_LIMIT = 2;
export default function UsersTable() {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const { isPending: isDeleting, mutate: deletUser } = useDeleteUser();
  const { filter, sort, page } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const {
    data: result,
    isLoading,
    error,
  } = useUsers({ column: "role", value: filter }, sort, {
    page,
    limit: PAGE_LIMIT,
  });

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;

  const users = result?.data ?? [];
  const total = result?.count ?? 0;
  const totalPages = Math.ceil(total / PAGE_LIMIT);
  dispatch(setTotalPages(totalPages));

  const handleDeleteUser = (id) => {
    // console.log(id);
    deletUser(id);
    setIsOpenDeleteModal(false);
  };
  return (
    <>
      <table className="table table-xs sm:table-sm md:table-md  border border-gray-300 divide-y divide-gray-300">
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
              {/* operations */}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 ">
          {users.map((user, idx) => {
            return (
              <tr key={user.id} className=" text-gray-800">
                <th>{(page - 1) * PAGE_LIMIT + idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender ? "Male" : "Female"}</td>
                <td>{user.role}</td>
                <td className="flex items-center">
                  {/* <span className="p-2 hover:transform hover:scale-110 hover:cursor-pointer transition-all ">
                  <FaRegEdit className="sm:text-2xl" />
                </span> */}
                  <button
                    onClick={() => setIsOpenDeleteModal(true)}
                    className="p-2 hover:transform hover:scale-110 hover:cursor-pointer transition-all text-red-500"
                  >
                    <MdDeleteOutline className="sm:text-2xl" />
                  </button>
                  <ConfirmationModal
                    title="Are you sure to delete this user?"
                    isOpen={isOpenDeleteModal}
                    onCancel={() => setIsOpenDeleteModal(false)}
                    onConfirm={() => handleDeleteUser(user.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
