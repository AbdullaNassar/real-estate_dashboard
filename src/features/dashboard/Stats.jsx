import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { HiOutlineHomeModern, HiOutlineUsers } from "react-icons/hi2";
import { BsCart2 } from "react-icons/bs";
import Stat from "./Stat";
import { useBookings } from "../bookings/useBookings";
import { useProperties } from "../properties/UseProperties";
import { useUsers } from "../users/useUsers";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/Error";
export default function Stats() {
  const {
    data: bookings,
    isLoading: isLodingBookings,
    error: errorBookings,
  } = useBookings();
  const {
    data: properties,
    isLoading: isLodingProperties,
    error: errorProperties,
  } = useProperties();
  const {
    data: users,
    isLoading: isLodingUsers,
    error: errorUsers,
  } = useUsers();

  if (isLodingBookings || isLodingProperties || isLodingUsers)
    return <Spinner />;
  if (errorUsers || errorBookings || errorProperties)
    return <Error message={errorUsers?.message} />;

  console.log(bookings, users, properties);
  const totalEarnings = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const bookingNum = bookings.length;
  const PropertiesNum = properties.length;
  const usersNum = users.length;

  return (
    <div className=" bg-gray-100 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 sm:gap-4 ">
        <Stat
          title="All Earnings"
          value={`$${totalEarnings}`}
          description="10% changes on profit"
          icon={<FaMoneyBillTrendUp />}
          color="text-yellow-600"
          bg="bg-yellow-600"
        />
        <Stat
          title="Lists"
          value={PropertiesNum}
          description="15% lists increase"
          icon={<HiOutlineHomeModern />}
          color="text-red-600"
          bg="bg-red-500"
        />
        <Stat
          title="All Bookings"
          value={bookingNum}
          description="17% decrease on bookings"
          up={false}
          icon={<BsCart2 />}
          color="text-green-600"
          bg="bg-green-500"
        />
        <Stat
          title="Users"
          value={usersNum}
          description="13% users increase"
          icon={<HiOutlineUsers />}
          color="text-blue-600"
          bg="bg-blue-500"
        />
      </div>
    </div>
  );
}
