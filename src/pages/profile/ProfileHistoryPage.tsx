import cineone from "../../assets/cineone21-logo.svg";
import qrcode from "../../assets/qrcode.svg";
import { useState } from "react";
import avatar from "../../assets/avatar_default.png";
import star from "../../assets/star.svg";
import NavProfile from "../../components/profile/NavProfile";
function ProfileHistoryPage() {
  return (
    <>
      <AccountInfo />
      <NavProfile />
      <section className="col-span-2">
        <CardHistory
          cinema={cineone}
          date="Tuesday, 07 July 2020 - 04:30pm"
          title="Spider-Man: Homecoming"
          isTicketPaid={false}
        />
        <CardHistory
          cinema={cineone}
          date="Tuesday, 07 July 2020 - 04:30pm"
          title="Spider-Man: Homecoming"
          isTicketPaid={true}
        />
      </section>
    </>
  );
}

function AccountInfo() {
  const [showEditProfile, setShowEditProfile] = useState(false)
  
  return (
    <>
      <section className="hidden bg-white rounded-3xl m-10 md:flex flex-col row-span-2 h-fit">
        <div className="info p-10">
          <h1 className="text-start text-title-info-first">INFO</h1>
          <img
            className="mx-auto my-8"
            src={avatar}
            alt="profile avatar"
            width={132}
            height={132}
          />
          <p className="text-center mb-3 text-xl font-bold tracking-wider">
            Jonas Rodriguez
          </p>
          <p className="text-center text-title-info-second">Moviegoers</p>
        </div>
        <div className="border-b-2 border-gray-300"></div>
        <div className="loyalty p-10 relative">
          <h1 className="text-start text-title-info-first font-semibold mb-5">
            Loyalty Poin
          </h1>
          <div className="w-full bg-primary rounded-xl p-4 text-white">
            <p className="mb-5 text-lg font-bold">Moviegoers</p>
            <p className="text-2xl">
              320 <small className="text-[10px]">points</small>
            </p>
            <div className="w-20 h-20 absolute rounded-full top-12 right-5 bg-white opacity-30"></div>
            <div className="w-20 h-20 absolute rounded-full top-18 right-3 bg-white opacity-30"></div>
            <img
              className="absolute top-20 right-10 w-12 h-12"
              src={star}
              alt=""
            />
          </div>
          <div>
            <p className="text-center text-title-info-second mt-5 mb-1.5">
              180 points become a master
            </p>
            <div className="mb-6 h-4 w-full bg-neutral-200 rounded-2xl">
              <div className="h-4 bg-primary w-1/4  rounded-2xl"></div>
            </div>
          </div>
        </div>
        <button
          className="border-1 font-bold py-3 mx-4 mb-6 active:scale-95 active:opacity-50 rounded-lg border-primary sm:hidden"
          type="button"
          onClick={() => setShowEditProfile(!showEditProfile)}
        >
          Edit Profile
        </button>
      </section>
    </>
  );
}

interface CardHistoryProps {
  cinema: string;
  date: string;
  title: string;
  isTicketPaid: boolean;
}
function CardHistory(props: CardHistoryProps) {
  const {cinema, date, title, isTicketPaid} = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="my-8 md:my-6 mx-6 md:ml-0 bg-white rounded-lg">
        <div className=" p-6 md:flex md:justify-between md:flex-row-reverse">
          <img className="mb-5" src={cinema} alt="cineone-logo" />
          <div>
            <p className="text-[13px] text-secondary tracking-widest">{date}</p>
            <p className="text-lg font-semibold tracking-wider mt-2">{title}</p>
          </div>
        </div>
        <div className="border-b-2 border-gray-300"></div>
        <div className="status p-6 flex flex-col md:flex-row gap-4 ">
          <div className="flex flex-col md:flex-row gap-5 md:grow">
            <span
              className={`${
                isTicketPaid
                  ? "bg-[#6E719133] text-title-info-first"
                  : "bg-[#00BA8833] text-[#00BA88]"
              } w-full py-3 text-center font-bold tracking-wider rounded-lg`}
            >
              {isTicketPaid ? "Ticket used" : "Ticket in active"}
            </span>
            <span
              className={`${
                isTicketPaid
                  ? "bg-[#6E719133] text-title-info-first"
                  : "bg-[#E82C2C33] text-[#E82C2C]"
              } w-full py-3 text-center font-bold tracking-wider rounded-lg`}
            >
              {isTicketPaid ? "Paid" : "Not Paid"}
            </span>
          </div>
          <span
            className="text-center flex justify-center gap-3 md:w-40 mt-6 text-lg text-secondary font-normal cursor-pointer"
            onClick={() => setShowModal(!showModal)}
          >
            <p>Show Detail</p>
            <img
              className={`${showModal ? "rotate-180" : ""} transition-all`}
              src={""}
              alt="dropdown arrow"
            />
          </span>
        </div>
        <div
          className={`detail-card p-6 transition-all ${
            showModal ? "block" : "hidden"
          }`}
        >
          <h2 className="font-semibold text-2xl mb-8 mt-3">
            Ticket Information
          </h2>
          {isTicketPaid ? <TicketPaid /> : <TicketNotPaid />}
        </div>
      </section>
    </>
  );
}

function TicketPaid() {
  const subStrTitle = (str:string) => {
    return str.substring(0, 12) + "...";
  };

  return (
    <>
      <section className="bg-white">
        <img src={qrcode} alt="qrcode" />
        <div className="grid grid-cols-3 gap-y-3 w-full mt-5">
          <div>
            <p className="text-xs text-[#AAAAAA]">Category</p>
            <p className="tracking-wider text-sm font-semibold text-[#14142B] mt-1">
              PG-13
            </p>
          </div>
          <div>
            <p className="text-xs text-[#AAAAAA]">Time</p>
            <p className="tracking-wider text-sm font-semibold text-[#14142B] mt-1">
              2.00pm
            </p>
          </div>
          <div>
            <p className="text-xs text-[#AAAAAA]">Seats</p>
            <p className="tracking-wider text-sm font-semibold text-[#14142B] mt-1">
              C4, C5, C6
            </p>
          </div>
          <div>
            <p className="text-xs text-[#AAAAAA]">Movie</p>
            <p className="tracking-wider text-sm font-semibold text-[#14142B]">
              {"spiderman: home coming".length >= 12
                ? subStrTitle("spiderman: home coming")
                : "spiderman: home coming"}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#AAAAAA]">Date</p>
            <p className="tracking-wider text-sm font-semibold text-[#14142B] mt-1">
              07 Jul
            </p>
          </div>
          <div>
            <p className="text-xs text-[#AAAAAA]">Count</p>
            <p className="tracking-wider text-sm font-semibold text-[#14142B] mt-1">
              3 pcs
            </p>
          </div>
          <div className="mt-5 flex flex-col justify-between rounded-lg">
            <p className="text-title-info-first font-semibold text-lg">Total</p>
            <p className="text-2xl tracking-widest text-[#14142B] mt-3 font-bold">
              $30
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
function TicketNotPaid() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="font-normal text-sm text-secondary">
          No. Rekening Virtual :
        </p>
        <span className="flex justify-between items-center">
          <p className="font-bold text-lg">12321328913829724</p>
          <button className="outline outline-primary rounded px-4 py-2 active:scale-95">
            Copy
          </button>
        </span>
      </div>
      <div>
        <p className="font-normal text-sm text-secondary">Total Payment</p>
        <p className="mt-2 font-bold text-primary">$30</p>
      </div>
      <p className="font-normal text-sm text-secondary leading-8 tracking-[.75px]">
        Pay this payment bill before it is due, on{" "}
        <span className="text-red-500">June 23, 2023</span>. If the bill has not
        been paid by the specified time, it will be forfeited
      </p>
      <div className="flex flex-col gap-3">
        <button
          type="button"
          className="bg-primary py-4 text-white font-bold rounded"
        >
          Check Payment
        </button>
      </div>
    </div>
  );
}

export default ProfileHistoryPage;
