import React, { useState } from "react";
import { LuFilter } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSort } from "./BookingSLice";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function BookingsHeader() {
  const data = useSelector((state) => state.bookings);
  console.log(data);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  //   console.log(count);
  return (
    <div className="flex-col sm:flex-row flex p-4 bg-gray-100 gap-2">
      <button
        className="btn bg-blue-500 text-white px-4 py-2 hover:cursor-pointer hover:bg-blue-600 transition-all rounded-sm w-fit outline-0 border-0"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        + Add Booking
      </button>

      {/* Add new boooking */}
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3 className="font-semibold text-lg border-b-2 border-b-stone-300">
            Add New Bookings
          </h3>
          <form className="flex flex-col gap-4 mt-4">
            <select className="select bg-gray-200">
              <option disabled selected>
                Guest
              </option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
            <select className="select bg-gray-200">
              <option disabled selected>
                List ID
              </option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col">
                <label htmlFor="checkIn">Check In</label>
                <DatePicker
                  id="checkIn"
                  className="bg-gray-200 p-2 hover:cursor-pointer"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="checkOut">Check out</label>
                <DatePicker
                  id="checkOut"
                  className="bg-gray-200 p-2 hover:cursor-pointer max-w-xs w-full"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="checkIn">Price</label>
              <input
                disabled={true}
                value={200}
                type="text"
                className=" px-4 py-2  w-fit bg-gray-200"
              />
            </div>

            <button className="btn bg-blue-500 text-white px-4 py-2 hover:cursor-pointer hover:bg-blue-600 transition-all rounded-sm mt-20 outline-0 border-0">
              Add
            </button>
          </form>
        </div>
      </dialog>

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
