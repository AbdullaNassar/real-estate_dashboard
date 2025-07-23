import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { useCreateUser } from "./useCreateUser";

export default function AddNewUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      gender: true,
      role: "guest",
    },
  });

  const { isPending, mutate } = useCreateUser();

  const handleAddUser = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: () => reset(),
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
          Add New User
        </h3>
        <form
          onSubmit={handleSubmit(handleAddUser)}
          className="flex flex-col gap-4 mt-4"
        >
          <div className="flex flex-col w-3/4 ">
            <label htmlFor="name">Name</label>
            <input
              {...register("name", {
                required: true,
                minLength: 3,
              })}
              id="name"
              className="bg-gray-200 p-2 "
            />
            {errors?.name && <h2 className="text-red-500">Name is required</h2>}
          </div>
          <div className="flex flex-col w-3/4 ">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: true,
              })}
              type="email"
              id="email"
              className="bg-gray-200 p-2 "
            />
            {errors?.email && (
              <h2 className="text-red-500">Email is required</h2>
            )}
          </div>

          <div>
            Gender:
            <div className="flex gap-6">
              <div className="flex items-center gap-2 ">
                <input
                  value={true}
                  {...register("gender")}
                  id="male"
                  type="radio"
                  name="gender"
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex items-center gap-2 ">
                <input
                  value={false}
                  {...register("gender")}
                  id="female"
                  type="radio"
                  name="gender"
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <div>
            Role:
            <div className="flex gap-6">
              <div className="flex items-center gap-2 ">
                <input
                  value="guest"
                  {...register("role")}
                  id="guest"
                  type="radio"
                  name="role"
                />
                <label htmlFor="guest">Guest</label>
              </div>
              <div className="flex items-center gap-2 ">
                <input
                  value="owner"
                  {...register("role")}
                  id="owner"
                  type="radio"
                  name="role"
                />
                <label htmlFor="owner">Owner</label>
              </div>
            </div>
          </div>

          <button
            disabled={isPending}
            className="btn bg-blue-500 text-white px-4 py-2 hover:cursor-pointer hover:bg-blue-600 transition-all rounded-sm mt-20 outline-0 border-0"
          >
            Add
          </button>
        </form>
      </div>
    </dialog>
  );
}
