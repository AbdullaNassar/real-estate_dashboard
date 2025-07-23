import Pagination from "../ui/Pagination";
import UsersHeader from "../features/users/UsersHeader";
import UsersTable from "../features/users/UsersTable";
import { useDispatch, useSelector } from "react-redux";
import { decPage, incPage } from "../features/users/usersSlice";
import { useEffect } from "react";

export default function UsersPage() {
  const { page, totalPages } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Maskn | Users";
  }, []);
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="overflow-x-auto rounded-box border border-base-content/5 ">
        <UsersHeader />
        <UsersTable />
      </div>
      <Pagination
        onClickNext={() => dispatch(incPage())}
        onCLickPrev={() => dispatch(decPage())}
        disabledPrev={page == 1}
        disabledNext={page >= totalPages}
      />
    </div>
  );
}
