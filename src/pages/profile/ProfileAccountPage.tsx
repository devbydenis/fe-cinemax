import { useContext } from "react";
import ThemeContext from "../../context/EditProfileContext";
import { useParams } from "react-router-dom";


function ProfileAccountPage() { 
const {showEditProfile, setShowEditProfile} = useContext(ThemeContext)
const {id} = useParams()
console.log(id);
  return (
    <>
    
    <div
      className={`col-span-2 bg-white ${showEditProfile ? "absolute top-5 right-10 left-10 z-20" : "hidden"} shadow-orange rounded-2xl shadow-lg md:block md:mr-10 `}
    >
      <form className="relative rounded-2xl p-10">
    {
      showEditProfile && (
            <button
          className="absolute top-5 right-5 font-bold text-black"
          type="button"
          onClick={() => setShowEditProfile(false)}
        >
          X
        </button>
      )
    }
        <h1 className="mb-9 text-2xl font-bold tracking-wider">
          Account Settings
        </h1>
        <p className="border-b-2 border-gray-300 pb-2 text-base font-normal tracking-wider">
          Detail Information
        </p>
        <section className="gap-5 md:grid md:grid-cols-2">
          <div>
            <label
              className="text-title-info-first block pt-6 pb-3 text-base font-normal"
              htmlFor="fullname"
            >
              First Name
            </label>
            <input
              className="border-gray w-full rounded border-1 px-6 py-3 focus:outline-none"
              type="text"
              name="firstName"
              id="firstName"
            />
          </div>
          <div>
            <label
              className="text-title-info-first block pt-6 pb-3 text-base font-normal"
              htmlFor="fullname"
            >
              Last Name
            </label>
            <input
              className="border-gray w-full rounded border-1 px-6 py-3 focus:outline-none"
              type="text"
              name="lastName"
              id="lastName"
            />
          </div>
          <div>
            <label
              className="text-title-info-first block pt-6 pb-3 text-base font-normal"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border-gray w-full rounded border-1 px-6 py-3 focus:outline-none"
              type="text"
              name="email"
              id="email"
              autoComplete="off"
            />
          </div>
          <div>
            <label
              className="text-title-info-first block pt-6 pb-3 text-base font-normal"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <span className="border-gray flex w-full rounded border-1 px-6 py-3">
              <p className="text-secondary border-r-2 border-gray-300 pr-3">
                +62
              </p>
              <input
                className="w-full pl-3 focus:outline-none"
                type="text"
                name="phone"
                id="phone"
              />
            </span>
          </div>
        </section>
        <p className="mt-10 border-b-2 border-gray-300 pb-2 text-base font-normal tracking-wider">
          Account and Privacy
        </p>
        <section className="grid grid-cols-2 gap-5">
          <div>
            <label
              className="text-title-info-first block pt-6 pb-3 text-base font-normal"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border-gray w-full rounded border-1 px-6 py-3 focus:outline-none"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div>
            <label
              className="text-title-info-first block pt-6 pb-3 text-base font-normal"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="border-gray w-full rounded border-1 px-6 py-3 focus:outline-none"
              type="password"
              name="confirm-password"
              id="confirm-password"
            />
          </div>
        </section>
        <button
          className="bg-orange mt-10 w-full rounded-lg px-6 py-3 font-bold text-white"
          type="button"
        >
          Update Change
        </button>
      </form>
    </div>
    </>
  );
}

export default ProfileAccountPage;
