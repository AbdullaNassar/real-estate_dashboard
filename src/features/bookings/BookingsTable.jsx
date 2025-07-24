import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/Error";
import { useDispatch, useSelector } from "react-redux";
import { setTotalPages } from "./BookingSLice";
import { useDeleteBooking } from "./useDeleteBooking";
import { ConfirmationModal } from "../../ui/Modal";

const PAGE_LIMIT = 10;
export default function BookingsTable() {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const { isPending: isDeleting, mutate: deletBooking } = useDeleteBooking();

  const { filter, sort, page } = useSelector((state) => state.bookings);
  const dispatch = useDispatch();

  const {
    data: result,
    isLoading,
    error,
  } = useBookings({ column: "paymentStatus", value: filter }, sort, {
    page,
    limit: PAGE_LIMIT,
  });

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;

  const bookings = result?.data ?? [];
  const total = result?.count ?? 0;
  const totalPages = Math.ceil(total / PAGE_LIMIT);
  dispatch(setTotalPages(totalPages));

  const handleDeleteBooking = (id) => {
    // console.log(id);
    deletBooking(id);
    setIsOpenDeleteModal(false);
  };
  return (
    <table className="table table-xs sm:table-sm md:table-md border border-gray-300 divide-y divide-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700"></th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            Guest
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            ListID
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            Check In
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            Check Out
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            Price
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            Is Paid
          </th>

          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 ">
        {bookings.map((item, idx) => {
          return (
            <tr key={item.id} className=" text-gray-800">
              <th>{(page - 1) * PAGE_LIMIT + idx + 1}</th>
              <td>{item.guest.name}</td>
              <td>{item.listing}</td>
              <td>
                <time>{item.checkIn}</time>
              </td>
              <td>
                <time>{item.checkOut}</time>
              </td>
              <td>{item.totalPrice}</td>
              <td>{item.paymentStatus ? "Yes" : "No"}</td>
              <td className="flex items-center">
                <button
                  onClick={() => setIsOpenDeleteModal(true)}
                  className="p-2 hover:transform hover:scale-110 hover:cursor-pointer transition-all text-red-500"
                >
                  <MdDeleteOutline className="sm:text-2xl" />
                </button>
                <ConfirmationModal
                  title="Are you sure to delete this Booking?"
                  isOpen={isOpenDeleteModal}
                  onCancel={() => setIsOpenDeleteModal(false)}
                  onConfirm={() => handleDeleteBooking(item.id)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
