import { Link, useNavigate } from "react-router-dom";
import tickitzLogo from "../../assets/tickitz-revert-logo.svg";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { useForm, type FieldValues } from "react-hook-form";
import { schemaLogin } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Loader from "../../components/Loader";
import ModalAuth from "../../components/ModalAuth";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addInfoLoginAction } from "../../redux/reducers/userSlice";
import AuthContext from "./AuthContext";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loaderAuth, setLoaderAuth] = useState(false);
  const [showModalAuth, setShowModalAuth] = useState(false);
  const {setIsLoggedinRoute} = useContext(AuthContext); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registeredUsers = useSelector((state: Users) => state.users.users);
  const user = useSelector((state: { user: { user: User } }) => state.user.user);

  console.log("registered users", registeredUsers);
  console.log("user di login", user);

  const isDataMatched = (email: string, password: string): boolean => {
    const result = registeredUsers.filter((user: User) => {
      return user.email === email && user.password === password;
    });
    return result.length > 0;
  };

  const onSubmit = (data: FieldValues) => {
    const { email, password } = data;

    const userData = {
      id: nanoid(),
      email: email,
      password: password,
    };

    if (isDataMatched(email, password)) {
      dispatch(addInfoLoginAction({ ...userData, history: [] }));
      setIsLoggedinRoute(true);
      setLoaderAuth(true);
      setTimeout(() => {
        return navigate("/");
      }, 2000);
      return;
    } else {
      setShowModalAuth(true);
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
        <h1 className="text-4xl font-bold">Welcome Back 👋</h1>
        <p className="text-secondary font-normal">
          Sign in with your data that you entered during your registration
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
                Email ga valid
              </small>
            )}
          </div>
        </section>
        <section className="mt-6">
          <label className="text-2xl font-semibold text-white" htmlFor="email">
            Password
          </label>
          <div className="relative mt-4">
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
            )}
            {!errors.password && (
              <small className="invisible">this is just invisible text</small>
            )}
            {errors.password && (
              <small className="font-semibold text-red-600 transition duration-300">
                {errors.password?.message}
              </small>
            )}
          </div>
          <Link className="flex justify-end font-semibold hover:text-blue-500" to={"/auth/forget-password"}>Forget Password</Link>
        </section>
        <button
          className="bg-primary text-background bg-orange active:text-orange active:border-orange h-12 cursor-pointer rounded-full font-bold active:scale-99 active:border-2 active:bg-transparent active:duration-100"
          type="submit"
        >
          Login
        </button>
        {/* <!-- Change to submit type later! --> */}
        <section className="or">
          <section className="flex justify-center">
            <p className="text-title-info-first">
              Do not have an account?{" "}
              <Link className="text-primary font-bold" to="/auth/register">
                Register
              </Link>
            </p>
          </section>
          <section className="flex w-full items-center justify-center">
            <div className="w-full border border-gray-200"></div>
            <p className="text-secondary mx-3 my-5">Or</p>
            <div className="w-full border border-gray-200"></div>
          </section>
          <section className="flex justify-around">
            <Link
              to="#"
              className="flex items-center gap-3 rounded-xl p-5 shadow-md hover:bg-white/10"
            >
              <FaGoogle />
              <p className="text-title-info-second hidden md:block">Google</p>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-xl p-5 shadow-md hover:bg-white/10"
            >
              <FaFacebook />
              <p className="text-title-info-second hidden md:block">Facebook</p>
            </Link>
          </section>
        </section>
      </form>
      {showModalAuth && (
        <ModalAuth
          setShowModalAuth={() => setShowModalAuth(false)}
          message={
            "Login Failed. Please recheck your email or password. make sure it's correct"
          }
        />
      )}
      {loaderAuth && <Loader overlay={true} />}
    </>
  );
}

export default LoginPage;
