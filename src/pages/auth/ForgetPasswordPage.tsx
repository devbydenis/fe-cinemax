import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForgetPassword } from "./schema";

const ForgetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaForgetPassword),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: { email: string }) => {
    console.log(data)
  };
  return (
    <div className="dark relative z-10 flex h-screen w-3/4 flex-col items-center justify-center">
      <div className="border-orange/50 w-full max-w-md rounded-lg border-2 bg-black p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-gray-200">
          Enter Your Registered Email
        </h2>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email")}
            placeholder="example@gmail.com"
            className="focus:ring-orange mb-4 rounded-md border-0 bg-gray-700 p-2 text-gray-200 transition duration-150 ease-in-out focus:bg-gray-600 focus:ring-1 focus:outline-none"
            type="email"
          />
          <small className="text-red-500">{errors.email?.message}</small>
          <button
            className="mt-4 rounded-md bg-gradient-to-r from-orange-400 to-orange-600 px-4 py-2 font-bold text-white transition duration-150 ease-in-out hover:bg-green-600 hover:to-orange-600"
            type="submit"
          >
            Send
          </button>
        </form>
        <div className="mt-4 flex justify-center">
          <p className="text-sm text-gray-400">
            We will send you a link to reset your password. If you don't receive
            it, check your spam folder.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
