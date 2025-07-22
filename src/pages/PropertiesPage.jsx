import Spinner from "../ui/Spinner";
import Error from "../ui/Error";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useProperties } from "../features/properties/UseProperties";
import Pagination from "../ui/Pagination";

export default function PropertiesPage() {
  const { data: properties, isLoading, error } = useProperties();

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  console.log(properties);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="overflow-x-auto rounded-box border border-base-content/5 ">
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
                amenities
              </th>

              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                operations
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">
            {properties.map((item, idx) => {
              return (
                <tr key={item.id} className=" text-gray-800">
                  <th>{idx + 1}</th>
                  <td>{item.host.FullName}</td>
                  <td>{item.Address}</td>
                  <td>
                    <time>{item.maxGuests}</time>
                  </td>
                  <td>
                    <time>{item.pricePerNight}</time>
                  </td>
                  <td>{item.amenities}</td>
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
