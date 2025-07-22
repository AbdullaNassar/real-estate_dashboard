import Spinner from "../ui/Spinner";
import Error from "../ui/Error";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useBookings } from "../features/bookings/useBookings";
import Pagination from "../ui/Pagination";

export default function BookingsPage() {
  const { data: bookings, isLoading, error } = useBookings();

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  console.log(bookings);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="overflow-x-auto rounded-box border border-base-content/5 ">
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

              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                operations
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">
            {bookings.map((item, idx) => {
              return (
                <tr key={item.id} className=" text-gray-800">
                  <th>{idx + 1}</th>
                  <td>{item.guest.FullName}</td>
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
