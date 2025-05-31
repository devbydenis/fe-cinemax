import { useContext } from "react";
import avatar from "../../assets/avatar_default.png";
import star from "../../assets/star.svg";
import ThemeContext from "../../context/EditProfileContext";
import { useSelector } from "react-redux";


function InfoAccountProfile() {
  const {showEditProfile, setShowEditProfile, display} = useContext(ThemeContext)
  const user = useSelector((state) => state.user.user);
  console.log("user name di profile", user);

  return (
    <>
      <section className={` shadow-lg shadow-orange row-span-2 m-10 h-fit flex-col rounded-3xl bg-white`}>
      <div className={`${showEditProfile ? 'block' : 'hidden'} absolute top-0 right-0 bottom-0  h-screen left-0 z-20 bg-black/50`}></div>
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
            {
              user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user
            }
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
              alt="star"
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
          className="flex justify-center border-orange w-3/4 mx-auto cursor-pointer text-orange mb-6 rounded-lg border-1 py-3 font-bold active:scale-99 active:opacity-50 md:hidden"
          type="button"
          onClick={() => {
            setShowEditProfile(true)
          }}
        >
          Edit Profile
        </button>
      </section>
    </>
  );
}

export default InfoAccountProfile