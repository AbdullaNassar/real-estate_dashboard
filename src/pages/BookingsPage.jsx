import Pagination from "../ui/Pagination";
import BookingsHeader from "../features/bookings/BookingsHeader";
import BookingsTable from "../features/bookings/BookingsTable";
import { useDispatch, useSelector } from "react-redux";
import { decPage, incPage } from "../features/bookings/BookingSLice";
import { useEffect } from "react";

export default function BookingsPage() {
  const dispatch = useDispatch();
  const { page, totalPages } = useSelector((state) => state.bookings);

  useEffect(() => {
    document.title = "Maskn | Bookings";
  }, []);

  return (
    <div className="h-full flex flex-col justify-between ">
      <div className="overflow-x-auto rounded-box border border-base-content/5 ">
        <BookingsHeader />
        <BookingsTable />
      </div>
      <Pagination
        onClickNext={() => dispatch(incPage())}
        onCLickPrev={() => dispatch(decPage())}
        disabledNext={page >= totalPages}
        disabledPrev={page == 1}
      />
    </div>
  );
}
