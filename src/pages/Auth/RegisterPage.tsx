import { Link } from "react-router-dom";
import tickitzLogo from "../../assets/tickitz-logo.svg";
import { FaFacebook, FaGoogle } from "react-icons/fa6";

function RegisterPage() {
  return (
    <>
      <form className="relative z-10 flex flex-col gap-7 rounded-xl bg-white/10 px-16 text-white md:mx-auto md:w-xl">
        <img
          className="tickitz relative z-10 mx-auto w-32 md:w-60"
          src={tickitzLogo}
          alt="tickitz-logo"
        />

        <h1 className="text-4xl font-bold">Welcome 👋</h1>
        <p className="text-gray-300 font-normal">
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
              name="email"
              id="email"
              placeholder="example@gmail.com"
            />
            <small className="font-semibold text-red-600 transition-all duration-300">
              Email ga valid
            </small>
          </div>
        </section>
        <section className="mt-6">
          <label className="text-2xl font-semibold text-white" htmlFor="email">
            Password
          </label>
          <div className="mt-4">
            <input
              className="focus:border-orange w-full border-b-2 duration-300 focus:border-b-2 focus:transition-colors focus:duration-300 focus:outline-none"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
            />
            <small className="font-semibold text-red-600 transition duration-300">
              password ga valid
            </small>
          </div>
        </section>
        <button
          className="bg-primary text-background bg-orange h-12 rounded-full font-bold active:scale-99 active:duration-100 cursor-pointer active:bg-transparent active:text-orange active:border-2 active:border-orange"
          type="submit"
        >
          Register
        </button>
        {/* <!-- Change to submit type later! --> */}
        <section className="or">
          <section className="flex justify-center">
            <p className="text-title-info-first">
              Already have an account?{" "}
              <Link className="text-primary font-bold" to="/auth/login">
                Login
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
              className="flex items-center gap-3 rounded-xl p-5 shadow-md"
            >
              <FaGoogle />
              <p className="text-title-info-second hidden md:block">Google</p>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-xl p-5 shadow-md"
            >
              <FaFacebook />
              <p className="text-title-info-second hidden md:block">Facebook</p>
            </Link>
          </section>
        </section>
      </form>
    </>
  );
}

export default RegisterPage;
