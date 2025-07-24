import React, { useState } from "react";
import { LuFilter } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSort } from "./BookingSLice";

import "react-datepicker/dist/react-datepicker.css";
import AddBooking from "./AddBooking";

export default function BookingsHeader() {
  const dispatch = useDispatch();

  return (
    <div className="flex-col sm:flex-row flex p-4 bg-gray-100 gap-2">
      <button
        className="btn bg-blue-500 text-white px-4 py-2 hover:cursor-pointer hover:bg-blue-600 transition-all rounded-sm w-fit outline-0 border-0"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        + Add Booking
      </button>

      {/* Add new boooking */}
      <AddBooking />

      {/* filter  */}
      <select
        name="filter"
        onChange={(e) => dispatch(setFilter(e.target.value))}
        className="select  w-32 bg-white text-black border border-gray-300 "
      >
        <option disabled selected>
          Filter
        </option>
        <option value="all">All</option>
        <option value={true}>Paid</option>
        <option value={false}>Not Paid</option>
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
        <option value="totalPrice">By Price</option>
        <option value="paymentStatus">By Paid Status</option>
      </select>
    </div>
  );
}
