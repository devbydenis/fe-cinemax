import { Link } from "react-router-dom";
import qrcode from "../../assets/qrcode.svg";
import background from "../../assets/background_auth.png"
import tickitzLogo from "../../assets/tickitz-revert-logo.svg"
import { BiDownload } from "react-icons/bi";

function OrderTicketPage() {
  return (
    <section className="bg-orange/20 md:grid sm:grid-cols-2">
      <TicketBanner />
      <TicketResult />
      <TicketButton />
    </section>
  );
}

function TicketBanner() {
  return (
    <section
      className="relative row-span-2 h-[600px] bg-cover bg-center md:h-full"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10 mx-6 flex h-full flex-col items-center justify-center gap-5 px-10">
        <img src={tickitzLogo} alt="logo" className="w-100"/>
        <h1 className="text-center text-4xl font-bold text-white">
          Thankyou For Purchasing
        </h1>
        {/* <p className="text-secondary text-center text-white">
          Lorem ipsum dolor sit amet consectetur. Quam pretium pretium tempor
          integer sed magna et.
        </p> */}
        <p className="text-lg font-bold text-white capitalize">
          download your ticket here
        </p>
        <Link className="active:scale-105" to={"#"}>
          <BiDownload className="text-4xl hover:text-orange text-white" />
        </Link>
      </div>
    </section>
  );
}
function TicketResult() {
  const subStrTitle = (str: string) => {
    return str.substring(0, 12) + "...";
  };
  return (
    <section className="mx-auto my-14 flex flex-col items-center rounded-lg shadow-2xl shadow-orange border-1 border-orange/20 bg-white py-8 max-w-[22rem] md:px-8 md:mx-auto">
      <img src={qrcode} alt="qrcode" />
      {/* <div className="border-secondary my-5 w-full border-b-2 border-dashed pt-5">
        <div className="absolute left-3 -mt-5 h-10 w-10 rounded-full bg-[#f5f6f8]"></div>
        <div className="absolute right-3 -mt-5 h-10 w-10 rounded-full bg-[#f5f6f8]"></div>
      </div> */}
      <div className="mt-10 grid grid-cols-2">
        <div className="col-span-2">
          <p className="text-xs text-[#AAAAAA]">Movie</p>
          <p className="text-sm font-semibold text-[#14142B]">
            {"spiderman: home coming".length >= 12
              ? subStrTitle("spiderman: home coming")
              : "spiderman: home coming"}
          </p>
        </div>
        <div className="col-span-2 mb-5">
          <p className="text-xs text-[#AAAAAA]">Seats</p>
          <p className="mt-1 text-sm font-semibold text-[#14142B]">
            C4, C5, C6
          </p>
        </div>
        <div className="">
          <p className="text-xs text-[#AAAAAA]">Category</p>
          <p className="mt-1 text-sm font-semibold text-[#14142B]">PG-13</p>
        </div>
        <div className="">
          <p className="text-xs text-[#AAAAAA]">Date</p>
          <p className="mt-1 text-sm font-semibold text-[#14142B]">07 Jul</p>
        </div>
        <div className="">
          <p className="text-xs text-[#AAAAAA]">Time</p>
          <p className="mt-1 text-sm font-semibold text-[#14142B]">2.00pm</p>
        </div>
        <div className="">
          <p className="text-xs text-[#AAAAAA]">Count</p>
          <p className="mt-1 text-sm font-semibold text-[#14142B]">3pcs</p>
        </div>
        <div className="col-span-2 mt-5 flex justify-center items-center border-t-4 border-orange py-5">
          <p className="text-xl font-bold text-black mr-20">Total Payment</p>
          <p className="mt-1 text-lg font-semibold text-[#14142B]">$30.00</p>
        </div>
      </div>
    </section>
  );
}
function TicketButton() {
  return (
    <section className="mx-6 flex flex-col gap-3 pb-5 md:mx-16">
      <button
        className="bg-primary rounded py-3 font-bold text-white bg-orange transition-all active:scale-99"
        type="button"
      >
        Download
      </button>
      <button
        className="outline-orange text-orange rounded py-3 font-bold outline-2 transition-all active:scale-99"
        type="button"
      >
        Done
      </button>
    </section>
  );
}

export default OrderTicketPage;
