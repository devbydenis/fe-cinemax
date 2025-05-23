import { useForm, type FieldValues } from "react-hook-form";
import tickitzLogo from "../../assets/tickitz-logo.svg";
import { schemaRegister } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

// type Storage = {
//   (key: string): string | null
// }

type RegisteredUser = {
  id: number;
  email: string;
  password: string;
};

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [modalAuth, setModalAuth] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
    mode: "onChange",
  });

  const onSubmit = (data: FieldValues) => {
    console.log("data:", data);
    console.log(localStorage.getItem("users"));
    const storedUsers = localStorage.getItem("users");
    const getData = storedUsers ? JSON.parse(storedUsers) : [];
    const filteredDuplicateData = getData.filter((user: RegisteredUser) => {  // kalo data di local storage sudah ada
      return user.email === data.email;
    });

    delete data.confirmPassword;

    // cek apakah data di local storage masih kosong
    if (getData.length === 0) {
      console.log("kalo data ga ada")
      localStorage.setItem("users", JSON.stringify([{ id: new Date().getTime(),...data }]));
      return navigate("/auth/login");
    } 

    // kalo datanya duplikat
    if (filteredDuplicateData.length > 0) {
      // munculin modal
      setModalAuth(true);
    } else {
      // simpen data ke local storage
      console.log("data ada, dan data ga duplikat")
      localStorage.setItem("users", JSON.stringify([...getData, { id: new Date().getTime(),...data }]));
      return navigate("/auth/login");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 flex flex-col gap-7 rounded-xl bg-white/10 px-16 text-white md:mx-auto md:w-xl"
      >
        <img
          className="tickitz relative z-10 mx-auto w-32 md:w-60"
          src={tickitzLogo}
          alt="tickitz-logo"
        />

        <h1 className="text-4xl font-bold">Welcome 👋</h1>
        <p className="font-normal text-gray-300">
          Entered your valid data. make sure your data is correct
        </p>
        <section className="mt-6">
          <label className="text-2xl font-semibold text-white" htmlFor="email">
            Email
          </label>
          <div className="mt-4">
            <input
              className="focus:border-orange w-full border-b-2 duration-300 focus:border-b-2 focus:transition-colors focus:duration-300 focus:outline-none"
              type="email"
              {...register("email")}
              id="email"
              placeholder="example@gmail.com"
            />
            {errors.email && (
              <small className="font-semibold text-red-600 transition-all duration-300">
                {errors.email.message}
              </small>
            )}
          </div>
        </section>
        <section className="relative mt-6">
          <label className="text-2xl font-semibold text-white" htmlFor="email">
            Password
          </label>
          <div className="mt-4">
            <input
              className="focus:border-orange w-full border-b-2 duration-300 focus:border-b-2 focus:transition-colors focus:duration-300 focus:outline-none"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              id="password"
              placeholder="Enter Your Password"
            />
            {showPassword ? (
              <button
                type="button"
                className="absolute right-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <IoMdEye />
              </button>
            ) : (
              <button
                type="button"
                className="absolute right-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <IoMdEye />
              </button>
            )}
          </div>
          {errors.password && (
            <small className="font-semibold text-red-600 transition duration-300">
              {errors.password.message}
            </small>
          )}
        </section>
        <section className="mt-6">
          <label className="text-2xl font-semibold text-white" htmlFor="email">
            Confirm Password
          </label>
          <div className="relative mt-4">
            <input
              className="focus:border-orange w-full border-b-2 duration-300 focus:border-b-2 focus:transition-colors focus:duration-300 focus:outline-none"
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              id="confirm-password"
              placeholder="Enter Your Confirm Password"
            />
            {showConfirmPassword ? (
              <button
                type="button"
                className="absolute right-2 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <IoMdEye />
              </button>
            ) : (
              <button
                type="button"
                className="absolute right-2 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <IoMdEye />
              </button>
            )}
          </div>
          {errors.confirmPassword && (
            <small className="font-semibold text-red-600 transition duration-300">
              {errors.confirmPassword.message}
            </small>
          )}
        </section>
        <section className="flex justify-center">
          <p className="text-title-info-first">
            Already have an account?{" "}
            <Link className="text-primary font-bold" to="/auth/login">
              Login
            </Link>
          </p>
        </section>
        <button
          className="bg-primary text-background bg-orange active:text-orange active:border-orange mb-10 h-12 cursor-pointer rounded-full font-bold hover:opacity-90 active:scale-99 active:border-2 active:bg-transparent active:duration-100"
          type="submit"
        >
          Register
        </button>
      </form>
      {modalAuth && <ModalAuth message={"Email is already exist"} />}
    </>
  );

  type ModalAuthProps = {
    message: string;
  };
  function ModalAuth(props: ModalAuthProps) {
    return (
      <>
        <div className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-black/50"></div>
        <div className=" w-1/4 outline-orange absolute top-50 z-20 mx-6 my-10 flex flex-col gap-3 items-center rounded-xl bg-white px-5 py-10 shadow-2xl outline-4 -outline-offset-8 md:mx-20 lg:mx-50 lg:px-20">
          <h1 className="bg-yellow-400 px-5 rounded uppercase text-3xl font-semibold">info</h1>
          <p>{props.message}</p>
          <button
            type="button"
            onClick={() => setModalAuth(false)}
            className="bg-orange text-white font-medium cursor-pointer rounded-xl px-6 py-1 uppercase active:scale-99"
          >
            ok
          </button>
        </div>
      </>
    );
  }
}

export default RegisterPage;
