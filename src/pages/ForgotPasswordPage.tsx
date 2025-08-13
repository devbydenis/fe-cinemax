import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForgetPassword } from "../features/auth/types/schema";

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
      <div className="w-full max-w-md rounded-lg border-2 bg-white/10 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-gray-200">
          Enter Your Registered Email
        </h2>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email")}
            placeholder="example@gmail.com"
            className="text-white focus:border-orange w-full my-2 border-b-2 duration-300 focus:border-b-2 focus:transition-colors focus:duration-300 focus:outline-none"
            type="email"
            required
            autoComplete="off"
          />
          <small className="text-red-500 min-h-[20px]">{errors.email?.message}</small>
          <button
            className="mt-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-700 active:scale-99 px-4 py-2 font-bold text-white transition duration-150 ease-in-out "
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
