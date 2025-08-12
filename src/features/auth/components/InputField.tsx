import { useState } from "react";
import {
  type FieldErrors,
  type UseFormRegisterReturn,
} from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface InputFieldsProps {
  htmlFor: string;
  type: string;
  name: "email" | "password";
  placeholder: string;
  // register: UseFormRegister<{ email: string; password: string }>;
  register: UseFormRegisterReturn<"email" | "password">;
  errors: FieldErrors<{ email: string; password: string }>;
}

const InputField = ({
  htmlFor,
  type,
  // name,
  placeholder,
  register,
  errors,
}: InputFieldsProps) => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <>
      <section className="mt-6">
        <label className="text-2xl font-semibold text-white" htmlFor={htmlFor}>
          {type === "email" ? "Email" : "Password"}
        </label>
        <div className="relative mt-4">
          <input
            className="focus:border-orange w-full px-3 py-1 border-b-2 duration-300 focus:border-b-2 focus:transition-colors focus:duration-300 focus:outline-none"
            type={type === "password" ? (showPassword ? "text" : "password") : type}
            {...register}
            id={htmlFor}
            placeholder={placeholder}
            autoComplete="off"
          />
          {type === "password" && (
            showPassword ? (
            <button
              type="button"
              className="absolute right-2 cursor-pointer text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              <IoMdEyeOff />
            </button>
          ) : (
            <button
              type="button"
              className="absolute right-2 cursor-pointer text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              <IoMdEye />
            </button>
          
          ))}
          { type === "email" && (
            errors.email && (
            <small className="font-semibold text-red-600 transition-all duration-300">
              {errors.email.message}
            </small>
          ))}
          { type === "password" && (
            errors.password && (
            <small className="font-semibold text-red-600 transition-all duration-300">
              {errors.password.message}
            </small>
          ))}
        </div>
      </section>
    </>
  );
};

export default InputField;