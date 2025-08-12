import { useSelector } from "react-redux";
import cineone from "../../assets/cineone21-logo.svg";
import hiflix from "../../assets/hiflix-logo.svg";
import ebvid from "../../assets/ebvid-logo.svg";
import qrcode from "../../assets/qrcode.svg";
import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { BASE_URL } from "../../service";

// Redux State Types
interface User {
  history: History[];
  // tambahin properti user laen kalo ada
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  token?: string;
}

interface UserState {
  user: User;
}

interface RootState {
  user: UserState;
  // tambahin state laen kalo ada
}

// History Types
interface History {
  cinema?: CinemaType;
  cinema_name: CinemaType;
  date?: string;
  date_booking: string;
  time?: string;
  time_booking: string;
  seat?: string[];
  seats: string[];
  totalPrice?: number;
  total_price: number;
  title?: string;
  movie_name: string;
  statusPayment?: boolean;
  status: string;
}

type CinemaType = "cineone" | "hiflix" | "ebvid";

// Component Props Types
interface CardHistoryProps {
  cinema: CinemaType;
  date: string;
  title: string;
  isTicketPaid: string;
  time: string;
  seat: string[];
  totalPrice: number;
}

interface TicketPaidProps {
  date: string;
  time: string;
  title: string;
  seat: string[];
  totalPrice: number;
}

function ProfileHistoryPage() {
  // const userHistories = useSelector((state: RootState) => state.user.user.history);
  const [userHistories, setUserHistories] = useState<History[] | null>(null)
  const user = useSelector(
      (state: { user: { user: User } }) => state.user.user,
    );

  useEffect(() => {
    // FETCH FROM DATABASE
    async function fetchHistory() {
      try {
        const response = await fetch(`${BASE_URL}/profile/history`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        })
        const data = await response.json()
        const histories = data.result
        setUserHistories(histories)

      } catch (error) {
        console.log(error)
      }
    }

    fetchHistory()
  }, []);
  
  return (
    <>
      <section className="col-span-2 md:block">
        {userHistories &&
          userHistories.map((history: History, index: number) => {
            return (
              <CardHistory
                key={index}
                cinema={history.cinema_name}
                date={history.date_booking}
                time={history.time_booking}
                seat={history.seats}
                totalPrice={history.total_price}
                title={history.movie_name}
                isTicketPaid={history.status}
              />
            );
          })}
      </section>
    </>
  );
}

function CardHistory(props: CardHistoryProps) {
  const { cinema, date, title, isTicketPaid, time, seat, totalPrice } = props;
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <section className="mx-6 my-8 rounded-lg bg-black-primary shadow-sm shadow-orange-800 md:my-6 md:ml-0">
        <div className="p-6 md:flex md:flex-row-reverse md:justify-between">
          <img
            className="bg-orange mb-5 rounded px-2 py-2"
            src={
              cinema === "cineone"
                ? cineone
                : cinema === "hiflix"
                  ? hiflix
                  : ebvid
            }
            alt={`${cinema}-logo`}
          />
          <div>
            <p className="text-white-primary text-[13px] tracking-widest">{date}</p>
            <p className="text-white-primary mt-2 text-lg font-semibold tracking-wider">{title}</p>
          </div>
        </div>
        <div className="border-b-2 border-gray-300"></div>
        <div className="status flex flex-col gap-4 p-6 md:flex-row">
          <div className="flex flex-col gap-5 md:grow md:flex-row">
            <span
              className={`${
                isTicketPaid === "success"
                  ? "bg-[#00BA8833] text-[#00BA88]"
                  : "bg-gray/30 text-gray/50"
              } w-full rounded-lg py-3 text-center font-bold tracking-wider`}
            >
              {isTicketPaid ? "Ticket active" : "Ticket inactive"}
            </span>
            <span
              className={`${
                isTicketPaid === "failed"
                  ? "bg-gray/30 text-gray/50"
                  : "bg-[#E82C2C33] text-[#E82C2C]"
              } w-full rounded-lg py-3 text-center font-bold tracking-wider`}
            >
              {isTicketPaid ? "Paid" : "Not Paid"}
            </span>
          </div>
          <span
            className="text-white-primary mt-6 flex cursor-pointer justify-center gap-3 text-center text-lg font-normal md:w-40"
            onClick={() => setShowModal(!showModal)}
          >
            <p>Show Detail</p>
            <MdArrowDropDown />
          </span>
        </div>
        <div
          className={`detail-card p-6 transition-all ${
            showModal ? "block" : "hidden"
          }`}
        >
          <h2 className="mt-3 mb-8 text-2xl font-semibold text-white">
            Ticket Information
          </h2>
          {isTicketPaid ? (
            <TicketPaid
              date={date}
              time={time}
              title={title}
              seat={seat}
              totalPrice={totalPrice}
            />
          ) : (
            <TicketNotPaid />
          )}
        </div>
      </section>
    </>
  );
}

function TicketPaid({ date, time, title, seat, totalPrice }: TicketPaidProps) {
  const subStrTitle = (str: string): string => {
    return str.substring(0, 12) + "...";
  };

  return (
    <>
      <section className="bg-white p-2">
        <img src={qrcode} alt="qrcode" />
        <div className="mt-5 grid w-full grid-cols-3 gap-y-3">
          <div>
            <p className="text-xs text-[#AAAAAA]">Category</p>
            <p className="mt-1 text-sm font-semibold tracking-wider text-[#14142B]">
              PG-13
            </p>
          </div>
          <div>
            <p className="text-xs text-[#AAAAAA]">Time</p>
            <p className="mt-1 text-sm font-semibold tracking-wider text-[#14142B]">
              {time}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#AAAAAA]">Seats</p>
            <p className="mt-1 text-sm font-semibold tracking-wider text-[#14142B]">
              {seat && seat.join(", ")}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#AAAAAA]">Movie</p>
            <p className="text-sm font-semibold tracking-wider text-[#14142B]">
              {title.length >= 12 ? subStrTitle(title) : title}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#AAAAAA]">Date</p>
            <p className="mt-1 text-sm font-semibold tracking-wider text-[#14142B]">
              {date}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#AAAAAA]">Count</p>
            <p className="mt-1 text-sm font-semibold tracking-wider text-[#14142B]">
              {seat && seat.length + "pcs"}
            </p>
          </div>
          <div className="mt-5 flex flex-col justify-between rounded-lg">
            <p className="text-title-info-first text-lg font-semibold">Total</p>
            <p className="mt-3 text-2xl font-bold tracking-widest text-[#14142B]">
              {"$" + totalPrice}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function TicketNotPaid() {
  const userHistories = useSelector((state: RootState) => state.user.user.history);
  
  // Lebih aman dengan optional chaining dan nullish coalescing
  const unpaidHistory = userHistories?.find((item: History) => !item.statusPayment);
  const totalPrice = unpaidHistory?.totalPrice ?? 0;

  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-secondary text-sm font-normal">
          No. Rekening Virtual :
        </p>
        <span className="flex items-center justify-between">
          <p className="text-lg font-bold">12321328913829724</p>
          <button className="outline-primary rounded px-4 py-2 outline active:scale-95">
            Copy
          </button>
        </span>
      </div>
      <div>
        <p className="text-secondary text-sm font-normal">Total Payment</p>
        <p className="text-primary mt-2 font-bold">{"$" + totalPrice}</p>
      </div>
      <p className="text-secondary text-sm leading-8 font-normal tracking-[.75px]">
        Pay this payment bill before it is due, on{" "}
        <span className="text-red-500">June 23, 2023</span>. If the bill has not
        been paid by the specified time, it will be forfeited
      </p>
      <div className="flex flex-col gap-3">
        <button
          type="button"
          className="bg-primary rounded py-4 font-bold text-white"
        >
          Check Payment
        </button>
      </div>
    </div>
  );
}

export default ProfileHistoryPage;