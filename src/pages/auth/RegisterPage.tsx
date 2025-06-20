import { useForm, type FieldValues } from "react-hook-form";
import tickitzLogo from "../../assets/cinemax-logo-transparent.png";
import { schemaRegister } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import ModalAuth from "../../components/ModalAuth";
import { useDispatch, useSelector } from "react-redux";
import { addRegisteredUsersAction } from "../../redux/reducers/usersSlice";
import { nanoid } from "@reduxjs/toolkit";
import Loader from "../../components/Loader";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showModalAuth, setShowModalAuth] = useState(false);
  const [loaderAuth, setLoaderAuth] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const date = new Date();
  const users = useSelector((state: { users: { users: User[] } }) => state.users.users);
  console.log("selector", users);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
    mode: "onChange",
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);

    if (users.length === 0) {
      dispatch(
        addRegisteredUsersAction({
          id: nanoid(),
          email: data.email,
          password: data.password,
          createdAt: date.toLocaleString(),
        }),
      );
      console.log("register berhasil");
      setLoaderAuth(true);
      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);
      return;
    }

    const isEmailExists = users.filter(
      (user: User) => user.email === data.email,
    );
    console.log("ISEMAIL", isEmailExists);

    if (isEmailExists.length > 0) {
      setShowModalAuth(true);
      return;
    }

    dispatch(
      addRegisteredUsersAction({
        id: nanoid(),
        email: data.email,
        password: data.password,
        createdAt: date.toLocaleString(),
      }),
    );
    setLoaderAuth(true);
    setTimeout(() => {
      navigate("/auth/login");
    }, 2000);
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
            {!errors.email && (
              <small className="invisible">this is just invisible text</small>
            )}
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
                className="absolute right-2 cursor-pointer text-xl"
                onClick={() => setShowPassword(!showPassword)}
              >
                <IoMdEye />
              </button>
            ) : (
              <button
                type="button"
                className="absolute right-2 cursor-pointer text-xl"
                onClick={() => setShowPassword(!showPassword)}
              >
                <IoMdEyeOff />
              </button>
            )}
          </div>
          {!errors.password && (
            <small className="invisible">this is just invisible text</small>
          )}
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
                className="absolute right-2 cursor-pointer text-xl"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <IoMdEye />
              </button>
            ) : (
              <button
                type="button"
                className="absolute right-2 cursor-pointer text-xl"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <IoMdEyeOff />
              </button>
            )}
          </div>
          {!errors.confirmPassword && (
            <small className="invisible">this is just invisible text</small>
          )}
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
      {loaderAuth && <Loader overlay={true} />}
      {showModalAuth && (
        <ModalAuth
          setShowModalAuth={() => setShowModalAuth(false)}
          message={"Email is already exist"}
        />
      )}
    </>
  );
}

export default RegisterPage;
