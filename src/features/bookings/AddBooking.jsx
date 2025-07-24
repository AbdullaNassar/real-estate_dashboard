import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/Error";
import { useProperties } from "../properties/UseProperties";
import { useUsers } from "../users/useUsers";
import { useCreateBooking } from "./useCreateBooking";

export default function AddBooking() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { isPending: isCreating, mutate: mutateBooking } = useCreateBooking();
  const { data: result, isLoading, error } = useBookings();

  const {
    data: ListsResults,
    isLoading: isLoadingLists,
    error: errorLists,
  } = useProperties();

  const {
    data: UsersResults,
    isLoading: isLoadingUsers,
    error: errorUsers,
  } = useUsers();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  if (isLoading || isLoadingLists || isLoadingUsers) return <Spinner />;
  if (error || errorLists || errorUsers)
    return <Error message={error.message} />;

  const lists = ListsResults.data;
  let users = UsersResults.data;
  users = users.filter((user) => user.role == "guest");

  const handleAddBooking = (newBooking) => {
    newBooking.checkIn = startDate;
    newBooking.checkOut = endDate;
    mutateBooking(newBooking, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
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
        <form
          onSubmit={handleSubmit(handleAddBooking)}
          className="flex flex-col gap-4 mt-4"
        >
          <div className="flex flex-col">
            <label htmlFor="checkIn">Guest</label>

            <select
              {...register("guest", { required: true })}
              className="select bg-gray-200"
            >
              {users.map((user) => {
                return <option value={user.id}>{user.name}</option>;
              })}
            </select>
            {errors?.guest && <h1 className="text-red-500">Select guest</h1>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="checkIn">ListID</label>
            <select
              {...register("listing", { required: true })}
              className="select bg-gray-200"
            >
              {lists.map((list) => {
                return <option value={list.id}>{list.id}</option>;
              })}
            </select>
            {errors?.listing && <h1 className="text-red-500">Select ListID</h1>}
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col">
              <label htmlFor="checkIn">Check In</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                id="checkIn"
                className="bg-gray-200 p-2 hover:cursor-pointer"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="checkOut">Check out</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                id="checkOut"
                className="bg-gray-200 p-2 hover:cursor-pointer max-w-xs w-full"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="checkIn">Price</label>
            <input
              {...register("totalPrice", { required: true })}
              type="number"
              className=" px-4 py-2  w-fit bg-gray-200"
            />
            {errors?.price && <h1 className="text-red-500">Add Price</h1>}
          </div>

          <button
            disabled={isCreating}
            className="btn bg-blue-500 text-white px-4 py-2 hover:cursor-pointer hover:bg-blue-600 transition-all rounded-sm mt-20 outline-0 border-0"
          >
            Add
          </button>
        </form>
      </div>
    </dialog>
  );
}
