import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useProperties } from "./UseProperties";
import Error from "../../ui/Error";
import Spinner from "../../ui/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { setTotalPages } from "./ProprtiesSlice";
import { useDeleteList } from "./useDeleteList";
import { ConfirmationModal } from "../../ui/Modal";
const PAGE_LIMIT = 2;
export default function ProprtiesTable() {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const { filter, sort, page } = useSelector((state) => state.properties);
  const { isPending: isDeleting, mutate: mutateDelete } = useDeleteList();
  const dispatch = useDispatch();
  const {
    data: result,
    isLoading,
    error,
  } = useProperties({ column: "type", value: filter }, sort, {
    page,
    limit: PAGE_LIMIT,
  });

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  const properties = result?.data ?? [];
  const total = result?.count ?? 0;
  const totalPages = Math.ceil(total / PAGE_LIMIT);
  dispatch(setTotalPages(totalPages));

  const handleDeleteList = (id) => {
    mutateDelete(id);
    setIsOpenDeleteModal(false);
  };
  return (
    <table className="table table-xs sm:table-sm md:table-md border border-gray-300 divide-y divide-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700"></th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            Owner
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            Address
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            Max Guests
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            Price/night
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            type
          </th>

          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 ">
        {properties.map((item, idx) => {
          return (
            <tr key={item.id} className=" text-gray-800">
              <th>{(page - 1) * PAGE_LIMIT + idx + 1}</th>
              <td>{item.host.name}</td>
              <td>{item.Address}</td>
              <td>
                <time>{item.maxGuests}</time>
              </td>
              <td>
                <time>{item.pricePerNight}</time>
              </td>
              <td>{item.type}</td>
              <td className="flex items-center">
                <button
                  onClick={() => setIsOpenDeleteModal(true)}
                  className="p-2 hover:transform hover:scale-110 hover:cursor-pointer transition-all text-red-500"
                >
                  <MdDeleteOutline className="sm:text-2xl" />
                </button>
                <ConfirmationModal
                  title="Are you sure to delete this List?"
                  isOpen={isOpenDeleteModal}
                  onCancel={() => setIsOpenDeleteModal(false)}
                  onConfirm={() => handleDeleteList(item.id)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
