import { useForm, type SubmitHandler } from "react-hook-form";
import tickitzLogo from "../assets/cinemax-logo-transparent.png";
import { schemaRegister } from "../features/auth/types/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
// import { MESSAGES } from "../features/auth/constants/messages";
// import ModalAuth from "../features/auth/components/ModalAuth";
import InputField from "../features/auth/components/InputField";
import Button from "../features/auth/components/Button";
import type { RegisterFormValues } from "../features/auth/types/auth.types";

function RegisterPage() {
  const navigate = useNavigate();
  const [loaderAuth, setLoaderAuth] = useState(false); // state buat kontrol loader
  const loaderTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // simpan id timeout biar bisa di clear
  const controllerRef = useRef<AbortController | null>(null); // simpan AbortController buat simpen request
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(schemaRegister), // validasi form pake yup schema
    mode: "onChange",
  });
  
  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    // Implementasi integrasi register dengan backend (LOCAL)
    setLoaderAuth(true); // aktifkan loader
    const startTime = Date.now(); // simpan waktu mulai untuk hitung minimal loader request
    controllerRef.current = new AbortController(); // bikin abort controller baru untuk request ini
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      signal: controllerRef.current.signal, // hubungkan fetch dengan AbortController
    };

    try {
      const response = await fetch(
        "http://localhost:8989/auth/register",
        options,
      );

      // hitung sisa waktu supaya loader tampil minimal 2 detik
      const elapsedTime = Date.now() - startTime;
      const minDuration = 2000;
      const remainingTime = elapsedTime < minDuration ? minDuration - elapsedTime : 0;

      // Set timeout buat matiin loadernya + navigate setelah durasi terpenuhi
      loaderTimeoutRef.current = setTimeout(() => {
        setLoaderAuth(false); // matiin loadernya
        if (response.ok) {
        // if (true) { // for testing ux
          navigate("/auth/login", { replace: true }); // kalau sukses, pindah ke login
        } else {
          console.error("Register Failed"); // kalo gagal, log error atau ga modal
        }
      }, remainingTime);
    } catch (err) {
      // cek kalo error bukan karna request di cancel
      if ((err as Error).name !== "AbortError") {
        console.error(err);
      }
    }
  }
  
  useEffect(() => {
    return () => {
      controllerRef.current?.abort(); // cancel request yang masih jalan
      if (loaderTimeoutRef.current) {
        clearTimeout(loaderTimeoutRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 flex flex-col gap-7 rounded-xl bg-white/10 p-16 text-white md:mx-auto md:w-xl"
      >
        <div className="flex flex-col items-start justify-center">
          <img
            className="tickitz relative z-10 mx-auto w-32 md:w-80"
            src={tickitzLogo}
            alt="tickitz-logo"
          />
          <h1 className="mt-10 text-3xl font-bold">Welcome 👋</h1>
          <p className="font-normal text-gray-300">
            Entered your valid data. make sure your data is correct
          </p>
        </div>

        <InputField
          type="email"
          htmlFor="email"
          name="email"
          placeholder="example@gmail.com"
          register={register("email")} // konek ke react hook form
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

        <InputField
          type="password"
          htmlFor="confirm-password"
          name="confirmPassword"
          placeholder="Confirm Your Password"
          register={register("confirmPassword")}
          errors={errors}
        />

        <Button 
          type="submit" 
          disabled={loaderAuth}>
            {loaderAuth ? 'Loading...' : 'Register'}
          </Button>

        <section className="flex justify-center">
          <p className="text-title-info-first">
            Already have an account?{" "}
            <Link className="text-primary font-bold" to="/auth/login">
              Login
            </Link>
          </p>
        </section>
      </form>
      {loaderAuth && <Loader overlay={true} />}
      {/*{showModalAuth && (
        <ModalAuth
          setShowModalAuth={() => setShowModalAuth(false)}
          message={MESSAGES.EMAIL_ALREADY_EXISTS}
        />
      )}*/}
    </>
  );
}
  
export default RegisterPage;
