import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSort } from "../users/usersSlice";

import "react-datepicker/dist/react-datepicker.css";
import AddNewUser from "./AddNewUser";

export default function UsersHeader() {
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();

  //   console.log(count);
  return (
    <div className="flex-col sm:flex-row flex p-4 bg-gray-100 gap-2">
      <button
        className="btn bg-blue-500 text-white px-4 py-2 hover:cursor-pointer hover:bg-blue-600 transition-all rounded-sm w-fit outline-0 border-0"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        + Add User
      </button>

      {/* add new user */}
      <AddNewUser />
      {/* filter users */}
      <select
        name="filter"
        onChange={(e) => dispatch(setFilter(e.target.value))}
        className="select  w-32 bg-white text-black border border-gray-300 "
      >
        <option disabled selected>
          Filter
        </option>
        <option value="all">All</option>
        <option value="guest">Guest</option>
        <option value="owner">Owner</option>
        <option value="admin">Admin</option>
      </select>

      {/* sort */}
      <select
        name="sort"
        onChange={(e) => dispatch(setSort(e.target.value))}
        className="select w-32  bg-white text-black border border-gray-300 "
      >
        <option disabled selected>
          Sort
        </option>
        <option value="name">By Name</option>
        <option value="gender">By Gender</option>
        <option value="role">By Role</option>
      </select>
    </div>
  );
}
