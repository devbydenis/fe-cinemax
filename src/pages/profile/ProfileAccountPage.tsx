import { useState } from "react";
import avatar from "../../assets/avatar_default.png";
import star from "../../assets/star.svg";
import NavProfile from "../../components/profile/NavProfile";

function ProfileAccountPage() {
  // const [showEditProfile, setShowEditProfile] = useState(false);
  return (
    <>
      <div className="block md:hidden">
        <NavProfile />
      </div>
      <AccountInfo />
      <div className="col-span-2 hidden md:block">
        <NavProfile />
      </div>
      <AccountSettingsMobile />
      <AccountSettingsDesktop />
    </>
  );
}

// function AccountInfo({showEditProfile, setShowEditProfile}) {
function AccountInfo() {
  const [showEditProfile, setShowEditProfile] = useState(false);

  return (
    <>
      <section className="border-orange/70 row-span-2 m-10 flex h-fit flex-col rounded-3xl border-3 bg-white">
        <div className="info p-10">
          <h1 className="text-start text-2xl font-bold">INFO</h1>
          <img
            className="mx-auto my-8"
            src={avatar}
            alt="profile avatar"
            width={132}
            height={132}
          />
          <p className="mb-3 text-center text-xl font-semibold tracking-wider">
            user name
          </p>
          <p className="text-center text-gray-600">Moviegoers</p>
        </div>
        <div className="border-b-2 border-orange-300"></div>
        <div className="loyalty relative p-10">
          <h1 className="text-title-info-first mb-5 text-start font-semibold">
            Loyalty Poin
          </h1>
          <div className="bg-orange w-full rounded-xl p-4 text-white">
            <p className="mb-5 text-lg font-bold">Moviegoers</p>
            <p className="text-2xl">
              320 <small className="text-[10px]">points</small>
            </p>
            <div className="absolute top-12 right-5 h-20 w-20 rounded-full bg-white opacity-30"></div>
            <div className="absolute top-18 right-3 h-20 w-20 rounded-full bg-white opacity-30"></div>
            <img
              className="absolute top-20 right-10 h-12 w-12"
              src={star}
              alt=""
            />
          </div>
          <div>
            <p className="text-title-info-second mt-5 mb-1.5 text-center">
              180 points become a master
            </p>
            <div className="mb-6 h-4 w-full rounded-2xl bg-neutral-200">
              <div className="bg-orange h-4 w-1/4 rounded-2xl"></div>
            </div>
          </div>
        </div>
        <button
          className="border-orange mx-10 text-orange mb-6 rounded-lg border-1 py-3 font-bold active:scale-99 active:opacity-50 sm:hidden"
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
            setShowEditProfile(!showEditProfile);
          }}
        >
          Edit Profile
        </button>
      </section>
    </>
  );
}

// function AccountSettingsMobile({showEditProfile, setShowEditProfile}) {
function AccountSettingsMobile() {
  const [showEditProfile, setShowEditProfile] = useState(false);

  return (
    <div className={`${showEditProfile ? "block" : "hidden"} block`}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <form className="absolute top-20 right-0 left-0 mx-10 rounded-2xl bg-white p-10">
        <button
          className="absolute top-5 right-5 font-bold text-black"
          type="button"
          onClick={() => setShowEditProfile(false)}
        >
          X
        </button>
        <h1 className="mb-9 text-2xl font-bold tracking-wider">
          Account Settings
        </h1>
        <p className="border-b-2 border-gray-300 pb-2 text-base font-normal tracking-wider">
          Detail Information
        </p>
        <div>
          <label
            className="text-title-info-first block pt-6 pb-3 text-base font-normal"
            htmlFor="fullname"
          >
            Full Name
          </label>
          <input
            className="border-secondary w-full rounded border-1 px-6 py-3 focus:outline-none"
            type="text"
            name="fullname"
            id="fullname"
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
            className="border-secondary w-full rounded border-1 px-6 py-3 focus:outline-none"
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
          <span className="border-secondary flex w-full rounded border-1 px-6 py-3">
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
        <p className="mt-10 border-b-2 border-gray-300 pb-2 text-base font-normal tracking-wider">
          Account and Privacy
        </p>
        <div>
          <label
            className="text-title-info-first block pt-6 pb-3 text-base font-normal"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border-secondary w-full rounded border-1 px-6 py-3 focus:outline-none"
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
            className="border-secondary w-full rounded border-1 px-6 py-3 focus:outline-none"
            type="password"
            name="confirm-password"
            id="confirm-password"
          />
        </div>
        <button
          className="bg-orange mt-10 w-full rounded-lg px-6 py-3 font-bold text-white"
          type="button"
        >
          Update Change
        </button>
      </form>
    </div>
  );
}
function AccountSettingsDesktop() {
  return (
    <div className="col-span-2 hidden md:block">
      <form className="mr-10 rounded-2xl bg-white p-10">
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
              className="border-secondary w-full rounded border-1 px-6 py-3 focus:outline-none"
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
              className="border-secondary w-full rounded border-1 px-6 py-3 focus:outline-none"
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
              className="border-secondary w-full rounded border-1 px-6 py-3 focus:outline-none"
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
            <span className="border-secondary flex w-full rounded border-1 px-6 py-3">
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
              className="border-secondary w-full rounded border-1 px-6 py-3 focus:outline-none"
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
              className="border-secondary w-full rounded border-1 px-6 py-3 focus:outline-none"
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
  );
}

export default ProfileAccountPage;
