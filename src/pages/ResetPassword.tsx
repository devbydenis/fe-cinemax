import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaResetPassword } from "../features/auth/types/schema";
import InputField from "../features/auth/components/InputField";
import type { ResetPasswordFormValues } from "../features/auth/types/auth.types";
import { useState } from "react";
import Button from "../features/auth/components/Button";

const ResetPasswordPage = () => {
  const [loaderAuth, setLoaderAuth] = useState(false); // state buat kontrol loader
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaResetPassword),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ResetPasswordFormValues> = (data) => {
    console.log(data)
    setLoaderAuth(true)
  };
  return (
    <div className="dark relative z-10 flex h-screen w-3/4 flex-col items-center justify-center">
      <div className="w-full max-w-md rounded-lg border-2 bg-white/10 p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-200">
          Enter Your New Password
        </h2>
        <form className="flex flex-col text-white" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            type="password"
            htmlFor="password"
            name="newPassword"
            placeholder="Enter Your New Password"
            register={register("newPassword")}
            errors={errors}
          />
  
          <InputField
            type="password"
            htmlFor="confirm-password"
            name="newConfirmPassword"
            placeholder="Confirm Your New Password"
            register={register("newConfirmPassword")}
            errors={errors}
          />
          <Button type="submit" disabled={loaderAuth}>
            {loaderAuth ? "Loading ..." : "Change Password"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
