import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForgetPassword } from "./schema";

const ForgetPasswordPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaForgetPassword),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-screen dark w-3/4">
      <div className="w-full max-w-md bg-black border-2 border-orange/50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Enter Your Registered Email</h2>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} placeholder="example@gmail.com" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-orange transition ease-in-out duration-150" type="email" />
          <small className="text-red-500">{errors.email?.message}</small>
          <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-orange-600 transition ease-in-out duration-150" type="submit">Send</button>
        </form>
        <div className="flex justify-center mt-4">
          <p className="text-sm text-gray-400">We will send you a link to reset your password. If you don't receive it, check your spam folder.</p>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordPage;
