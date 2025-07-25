import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "../features/auth/useLogin";

export default function Login() {
  const { login } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // default values for testing website prurposes
    defaultValues: {
      email: "abdo@gmail.com",
      password: "abdo@abdo1234",
    },
  });
  function submitForm(data) {
    const { email, password } = data;
    login({ email, password });
  }

  useEffect(() => {
    document.title = "Maskn | Login";
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen text-stone-900 flex justify-center items-center flex-col gap-8">
      <div className="w-[90%] sm:w-1/2 bg-white shadow-2xl px-8 py-4  flex flex-col justify-center items-center space-y-4">
        <img src="/imgs/logoBlack.svg" alt="Maskn Logo" className="w-32" />
        <h2 className="font-semibold text-2xl text-blue-500">Login Account</h2>
        <form onSubmit={handleSubmit(submitForm)} className="mt-6 space-y-4 ">
          <div className=" flex flex-col space-y-2">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: true,
              })}
              id="email"
              type="email"
              placeholder="Enter your email... "
              className=" px-3 py-1.5 rounded-md border-l-4 border-l-blue-600 outline-0 bg-gray-100 text-stone-500"
            />
            {errors.email && (
              <h2 className="text-red-500">Please enter your email</h2>
            )}
          </div>
          <div className=" flex flex-col space-y-2">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", {
                required: true,
              })}
              id="password"
              type="password"
              placeholder="Enter your email... "
              className=" px-3 py-1.5 rounded-md border-l-4 border-l-blue-600 outline-0 bg-gray-100 text-stone-500"
            />
            {errors?.password && (
              <h2 className="text-red-500">Please enter your password</h2>
            )}
          </div>

          <button className="bg-blue-500 text-white font-semibold rounded-full w-full py-2 px-4 mt-2 hover:cursor-pointer hover:bg-blue-700 transition-all ">
            Sign in
          </button>
        </form>
      </div>
      <div className="space-y-2 text-stone-500">
        <h2>Use These credential to test the website </h2>
        <h3>Email: abdo@gmail.com</h3>
        <h3>Password: abdo@abdo1234</h3>
      </div>
    </div>
  );
}
