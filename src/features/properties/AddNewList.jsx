import { useForm } from "react-hook-form";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/Error";
import { useUsers } from "../users/useUsers";
import { useCreateList } from "./useNewProperties";

export default function AddNewLisst() {
  const { isPending: isCreating, mutate: mutateList } = useCreateList();

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

  if (isLoadingUsers) return <Spinner />;
  if (errorUsers) return <Error message={errorUsers.message} />;

  let users = UsersResults.data;
  users = users.filter((user) => user.role == "owner");

  const handleAddList = (newList) => {
    console.log(newList);
    mutateList(newList, {
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
          Add New List
        </h3>
        <form
          onSubmit={handleSubmit(handleAddList)}
          className="flex flex-col gap-4 mt-4"
        >
          <div className="flex flex-col">
            <label htmlFor="">Owner</label>

            <select
              {...register("host", { required: true })}
              className="select bg-gray-200"
            >
              {users.map((user) => {
                return <option value={user.id}>{user.name}</option>;
              })}
            </select>
            {errors?.host && <h1 className="text-red-500">Select Owner</h1>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="checkIn">Type</label>
            <select
              {...register("type", { required: true })}
              className="select bg-gray-200"
            >
              <option value="villa">Villa</option>
              <option value="studio">Studio</option>
              <option value="house">House</option>
            </select>
            {errors?.type && <h1 className="text-red-500">Select type</h1>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Address</label>
            <input
              {...register("Address", { required: true })}
              type="text"
              className=" px-4 py-2  w-fit bg-gray-200"
            />
            {errors?.Address && <h1 className="text-red-500">Add Address</h1>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Max Guests</label>
            <input
              {...register("maxGuests", { required: true })}
              type="number"
              className=" px-4 py-2  w-fit bg-gray-200"
            />
            {errors?.maxGuests && (
              <h1 className="text-red-500">Add maxGuests</h1>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Price</label>
            <input
              {...register("pricePerNight", { required: true })}
              type="number"
              className=" px-4 py-2  w-fit bg-gray-200"
            />
            {errors?.pricePerNight && (
              <h1 className="text-red-500">Add Price</h1>
            )}
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
