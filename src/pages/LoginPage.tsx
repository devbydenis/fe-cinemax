import { Link, useNavigate } from "react-router-dom";
import tickitzLogo from "../assets/cinemax-logo-transparent.png";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { useForm, type FieldValues } from "react-hook-form";
import { schemaLogin } from "../features/auth/types/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addInfoLoginAction } from "../store/reducers/userSlice";
import { requestLogin } from "../features/auth/services/authService";
import Loader from "../components/Loader";
import ModalAuth from "../features/auth/components/ModalAuth";
import AuthContext from "../features/auth/context/AuthContext";
import InputField from "../features/auth/components/InputField";
import Button from "../features/auth/components/Button";
import { BASE_URL } from "../services/service";
import { MESSAGES } from "../features/auth/constants/messages";

function LoginPage() {
  const [loaderAuth, setLoaderAuth] = useState(false);
  const [showModalAuth, setShowModalAuth] = useState(false);
  const { setIsLoggedinRoute } = useContext(AuthContext);
  const controllerRef = useRef<AbortController | null>(null); // // Menyimpan AbortController agar bisa membatalkan request jika user pindah halaman sebelum selesai
  const loaderTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // Menyimpan ID timeout loader agar bisa di-clear ketika unmount. biar loader nggak nyangkut kalau halaman di-close sebelum timeout selesai.
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Cleanup: membatalkan request API & menghapus timeout loader saat halaman di-unmount
  useEffect(() => {
    return () => {
      controllerRef.current?.abort();
      if (loaderTimeoutRef.current) {
        clearTimeout(loaderTimeoutRef.current);
      }
    };
  }, []);

  const onSubmit = async (data: FieldValues) => {
    const { email, password } = data;
    const userData: UserLoginRequest = {
      email: email,
      password: password,
    };
    controllerRef.current = new AbortController();

    const startTime = Date.now();
    setLoaderAuth(true);

    try {
      const responseLogin = await requestLogin(
        `${BASE_URL}/auth/login`,
        userData,
        controllerRef.current.signal,
      );
      const data = {
        id: responseLogin.result.id,
        token: responseLogin.result.token,
        email: userData.email,
        // password: userData.password, // di redux sebaiknya tidak mennyimpan password
        createdAt: new Date().toISOString(),
        history: [],
      };
      dispatch(addInfoLoginAction({ ...data, isLogin: true }));
      setIsLoggedinRoute(true);
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        setShowModalAuth(true);
      }
    } finally {
      const elapsed = Date.now() - startTime;
        const minDuration = 2000; // Pastikan loader tampil minimal 2 detik untuk UX, tapi tanpa menambah delay ekstra kalau API lambat
        if (elapsed < minDuration) { // dengan ini loader tampil min 2 detik kalo request APInya lama ga double delay
          loaderTimeoutRef.current = setTimeout(() => {
            setLoaderAuth(false);
            navigate("/", { replace: true }); // setelah loader selesai baru pindah ke halaman tujuan. supaya transisi ux lebih smooth dan loader ga kedip
          }, minDuration - elapsed);
        } else {
          setLoaderAuth(false);
        }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 flex flex-col gap-7 rounded-xl bg-white/10 px-16 py-5 text-white md:mx-auto md:w-xl"
      >
        <img
          className="tickitz relative z-10 mx-auto w-32 md:w-60"
          src={tickitzLogo}
          alt="tickitz-logo"
        />
        <h1 className="text-2xl font-bold md:text-4xl">Welcome Back 👋</h1>
        <p className="text-sm font-normal text-gray-300">
          {MESSAGES.LOGIN_INFO}
        </p>

        <InputField
          type="email"
          htmlFor="email"
          name="email"
          placeholder="example@gmail.com"
          register={register("email")}
          errors={errors}
        />

        <InputField
          type="password"
          htmlFor="password"
          name="password"
          placeholder="Enter Your Password"
          register={register("password")}
          errors={errors}
        />

        <Button type="submit">Login</Button>

        <section className="or">
          <div className="flex justify-center">
            <p className="text-title-info-first">
              Do not have an account?{" "}
              <Link className="text-primary font-bold" to="/auth/register">
                Register
              </Link>
            </p>
          </div>

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
          message={MESSAGES.LOGIN_FAILED}
        />
      )}
      {loaderAuth && <Loader overlay={true} />}
    </>
  );
}

export default LoginPage;
