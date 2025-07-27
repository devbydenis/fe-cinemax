import { Link, useNavigate, useParams } from "react-router-dom";
import qrcode from "../../assets/qrcode.svg";
import tickitzLogo from "../../assets/cinemax-logo-transparent.png"
import { BiDownload } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetOrder } from "../../redux/reducers/orderSlice";
import { addHistoryAction } from "../../redux/reducers/history";
import { BASE_URL, BASE_URL_IMG } from "../../service";

function OrderTicketPage() {
  return (
    <section className="md:grid sm:grid-cols-2">
      <TicketBanner />
      <TicketResult />
      <TicketButton />
    </section>
  );
}

function TicketBanner() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState<MovieDetail>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const url = `${BASE_URL}/movies/${id}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmM3ZWNhZjdjYjAzMTk3MmM4ODFhYzA5Y2MzNGE2YSIsIm5iZiI6MTc0MTMxMzM1OS45NjcsInN1YiI6IjY3Y2E1NTRmNzQ3OWQ4Yzg0OTJiM2Q2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GrBEVi__prOYL5AB5KMgbg0dvTc3I6Ar6cEfl29M5yE",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovieDetail(json))
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <section
      className="relative row-span-2 h-[600px] bg-cover bg-center md:h-full"
      style={{ backgroundImage: `url(${BASE_URL_IMG}${movieDetail?.backdrop_path})` }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10 mx-6 flex h-full flex-col items-center justify-center gap-5 px-10">
        <img src={tickitzLogo} alt="logo" className="w-100"/>
        <h1 className="text-center text-4xl font-bold text-white">
          Thankyou For Purchasing
        </h1>
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
  const order = useSelector((state: {order: {order: Order}}) => state.order.order);
  const {title, seats, date_booking, time_booking } = order
  console.log("order", order);
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
            {title.length >= 22
              ? subStrTitle(title)
              : title}
          </p>
        </div>
        <div className="col-span-2 mb-5">
          <p className="text-xs text-[#AAAAAA]">Seats</p>
          <p className="mt-1 text-sm font-semibold text-[#14142B]">
            {seats.join(", ")}
          </p>
        </div>
        <div className="">
          <p className="text-xs text-[#AAAAAA]">Category</p>
          <p className="mt-1 text-sm font-semibold text-[#14142B]">PG-13</p>
        </div>
        <div className="">
          <p className="text-xs text-[#AAAAAA]">Date</p>
          <p className="mt-1 text-sm font-semibold text-[#14142B]">{date_booking}</p>
        </div>
        <div className="">
          <p className="text-xs text-[#AAAAAA]">Time</p>
          <p className="mt-1 text-sm font-semibold text-[#14142B]">{time_booking}</p>
        </div>
        <div className="">
          <p className="text-xs text-[#AAAAAA]">Count</p>
          <p className="mt-1 text-sm font-semibold text-[#14142B]">{seats.length} pcs</p>
        </div>
        <div className="col-span-2 mt-5 flex justify-center items-center border-t-4 border-orange py-5">
          <p className="text-xl font-bold text-black mr-20">Total Payment</p>
          <p className="mt-1 text-lg font-semibold text-[#14142B]">${seats.length * 10}</p>
        </div>
      </div>
    </section>
  );
}
function TicketButton() {
  const order = useSelector((state: {order: {order: Order}}) => state.order.order);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        onClick={() => {
          dispatch(resetOrder());
          dispatch(addHistoryAction(order));
          navigate("/profile/history");
        }}
      >
        Done
      </button>
    </section>
  );
}

export default OrderTicketPage;
