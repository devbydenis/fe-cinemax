import { useContext, useState } from "react";
import ThemeContext from "../../context/EditProfileContext";
import { useForm, type FieldErrors, type FieldValues, type UseFormRegister } from "react-hook-form";
import { schemaEditProfile } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { addInfoLoginAction } from "../../redux/reducers/userSlice";
import ModalProfile from "../../components/profile/ModalProfile";

function ProfileAccountPage() {
  const { showEditProfile, setShowEditProfile } = useContext(ThemeContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const user = useSelector((state: RootState) => state.user.user);
  // console.log("user di profile", user);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schemaEditProfile),
    mode: "onChange",
    defaultValues: {
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
      phoneNumber: user.phoneNumber || '',
    },
  });
  const handleShowPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowPassword(e.target.checked);
  }
  
  const onSubmit = (data: FieldValues) => {
    delete data.confirmPassword
    dispatch(addInfoLoginAction({...data, ...user}))

    reset({
      firstName: data.firstName,
      lastName: data.lastName,  
      email: data.email,        
      phoneNumber: data.phoneNumber,
      password: "",
      confirmPassword: ""
    })

    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 3000);
  }

  return (
    <>
      <div className={`${showAlert ? "flex" : "hidden"} justify-center`}>
        <ModalProfile />
      </div>
      <div
        className={`col-span-2 bg-white-primary/90 ${showEditProfile ? "absolute top-5 right-10 left-10 z-20" : "hidden"} shadow-orange rounded-2xl shadow-lg md:mr-10 md:block`}
      >
        <form className="relative rounded-2xl p-10" onSubmit={handleSubmit(onSubmit)}>
          {showEditProfile && (
            <button
              className="absolute top-5 right-5 font-bold text-black"
              type="button"
              onClick={() => setShowEditProfile(false)}
            >
              X
            </button>
          )}
          <h1 className="mb-9 text-2xl font-bold tracking-wider">
            Account Settings
          </h1>
          <p className="border-b-2 border-gray-300 pb-2 text-base font-normal tracking-wider">
            Detail Information
          </p>
          <section className="gap-5 md:grid md:grid-cols-2">
            <InputField
              register={register}
              nameInput={"firstName"}
              labelInput="First Name"
              typeInput="text"
              idInput="firstName"
              forInput="firstName"
              
              errors={errors}
            />
            <InputField 
              register={register}
              nameInput={"lastName"}
              labelInput="Last Name"
              typeInput="text"
              idInput="lastName"
              forInput="lastName"
              
              errors={errors}
            />
            <InputField 
              register={register}
              nameInput={"email"}
              labelInput="Email"
              typeInput="email" 
              idInput="email"
              forInput="email"
              
              errors={errors}
            />
            <InputField 
              register={register}
              nameInput={"phoneNumber"}
              labelInput="Phone Number"
              typeInput="text" 
              idInput="phone" 
              forInput="phone"
              
              errors={errors}
            />
            
          </section>
          <p className="mt-10 border-b-2 border-gray-300 pb-2 text-base font-normal tracking-wider">
            Change Password
          </p>
          <section className="grid grid-cols-2 gap-5">
            <InputField 
              register={register}
              nameInput={"password"}
              labelInput="Password"
              typeInput={showPassword ? "text" : "password"} 
              idInput="password" 
              forInput="password"
              
              errors={errors}
            />
            <InputField 
              register={register}
              nameInput={"confirmPassword"}
              labelInput="Confirm Password"
              typeInput={showPassword ? "text" : "password"} 
              idInput="confirmPassword" 
              forInput="confirmPassword"
              
              errors={errors}
            />
            <label htmlFor="showPassword" className="flex gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                name="showPassword" 
                id="showPassword"
                checked={showPassword}
                onChange={handleShowPassword}
              />
              Show Password
            </label>
          </section>
          <button
            className="bg-orange mt-10 w-full rounded-lg px-6 py-3 font-bold text-white active:scale-98 transition-all duration-300 active:bg-white active:text-orange active:border-2 active:border-orange"
            type="submit"
          >
            Update Change
          </button>
        </form>
      </div>
    </>
  );
}

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string | undefined;
}
type InputFieldProps<T extends FieldValues> = {
  labelInput: string;
  nameInput: string;
  typeInput: string;
  forInput: string;
  idInput: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}
function InputField({ labelInput, nameInput, typeInput, forInput, idInput, register, errors }: InputFieldProps<FormData>) {
  return (
    <>
      <div>
        <label
          className="text-title-info-first block pt-6 pb-3 text-base font-normal"
          htmlFor={forInput}
        >
          {labelInput}
        </label>
        <input
          className="border-gray w-full rounded border-1 px-6 py-3 focus:outline-none"
          type={typeInput}
          {...register(nameInput as keyof FormData)}
          id={idInput}
        />
        {errors[nameInput as keyof FormData] && <p className={`${errors[nameInput as keyof FormData] ? "visible" : "invisible"} text-red-500`}>{errors[nameInput as keyof FormData]?.message}</p>}
      </div>
    </>
  );
}

export default ProfileAccountPage;
