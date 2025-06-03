import { useEffect, useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";
import logo from "../../assets/cineone21-logo.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addOrderAction, addSeatsAction } from "../../redux/reducers/orderSlice";

function OrderSeatPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <OrderInfo />
      <OrderSeatsSelector setShowModal={setShowModal}/>
      <OrderModal showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
}

function OrderInfo() {
  const [movieDetail, setMovieDetail] = useState<MovieDetail>();
  const order = useSelector((state: RootStateOrder) => state.order);
  const { id } = useParams();

  useEffect(() => {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
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
    <>
      <section className="m-4 gap-5 rounded-lg border border-gray-300 bg-white p-4 md:flex lg:justify-center">
        <div
          className="h-54 rounded-lg bg-cover md:h-56 md:flex-1/2 lg:h-72 lg:flex-5"
          style={{
            // backgroundImage: `url(https://image.tmdb.org/t/p/w500${image})`,
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetail?.backdrop_path})`,
          }}
        ></div>
        <div className="lg:flex-5">
          <h1 className="mt-4 text-4xl font-bold md:mt-1 md:text-2xl">
            {movieDetail?.title}
          </h1>
          <ul className="mt-4 flex flex-wrap gap-3">
            {
              movieDetail?.genres.map((genre) => (
                <li
                  key={`genre-id: ${genre.id}`}
                  className={`focus:border-orange min-w-fit rounded-3xl border-2 border-gray-400 px-3 py-1.5 font-medium text-gray-400 uppercase`}
                >
                  {genre.name}
                </li>
              ))
            }
            
          </ul>
          <div className="mt-4 flex flex-col items-start gap-5">
            <p className="text-lg font-medium text-gray-500 md:mt-1">
              Regular - {order.order.time}
            </p>
            <button
              type="button"
              className="bg-orange text-primary hover:outline-primary cursor-pointer rounded-2xl px-5 py-1.5 font-semibold text-white transition-all hover:opacity-90 hover:outline active:scale-95"
            >
              Change
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

type OrderSeatsSelectorType = {
  showModal?: boolean;
  setShowModal:  React.Dispatch<React.SetStateAction<boolean>>
}

function OrderSeatsSelector({setShowModal}: OrderSeatsSelectorType) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  // const order = useSelector((state: {order: RootStateOrder}) => state.order.order);
  const [selectedSeats, setSelectedSeats] = useState<SeatId[]>([]);
  // console.log("order in seat", order);
  // console.log("selectedSeats", selectedSeats);
  
  const rows: number = 10;
  const cols: number = 10;
  const colLabels: number[] = Array.from({ length: cols }, (_, i) => i + 1);
  const rowLabels: string[] = Array.from({ length: rows }, (_, i) =>
    String.fromCharCode(65 + i),
  );

  const handleSeatClick = (seatId: SeatId): void => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter((id) => id !== seatId);
      } else {
        return [...prevSelectedSeats, seatId];
      }
    });
  };
  
  const isSeatSelected = (seatId: SeatId): boolean => {
    return selectedSeats.includes(seatId);
  };

  const handleSeatsChoosed = (data: FieldValues) => {
    Object.values(data).forEach((value) => {
      if (value) {
        setSelectedSeats(value);
      }
    })        

    dispatch(addSeatsAction(selectedSeats));
    setShowModal(true);
    
  };


  return (
    <form
      onSubmit={handleSubmit((data) =>  handleSeatsChoosed(data))}
      className="flex flex-col items-center rounded-lg m-6 ">

      {/* nomor kolom */}
      <div className="mb-8 overflow-hidden">
        <div className="mb-8 h-20 flex justify-center items-center rounded-b-4xl rounded-t-2xl bg-black p-2 font-semibold tracking-wider text-white shadow-2xl shadow-black text-3xl">
          SCREEN
        </div>
        <div className="mb-2 flex gap-2 lg:gap-4">
          <div className="w-9"></div>
          {colLabels.map((col) => {
            if (col !== 6) {
              return (
                <div key={`col-${col}`} className="w-8 lg:h-12 lg:w-12  text-center font-medium">
                  {col}
                </div>
              );
            } else {
              return (
                <div key={`col-${col}`} className="flex gap-2 ml-3 lg:ml-10 lg:gap-4">
                  <div className="w-5 lg:w-6 "></div>
                  <div
                    // key={`col-${col}`}
                    className="w-8 text-center font-medium lg:h-12 lg:w-12 "
                  >
                    {col}
                  </div>
                  {/* <div className="w-5 lg:w-6 "></div> */}
                </div>
              );
            }
          })}
        </div>

        {/* huruf baris / satu baris  */}
        {rowLabels.map((row) => (
          <div key={`row-${row}`} className="mb-2 lg lg:gap-2 flex items-center">
            <div className="mr-2 w-8 text-center font-medium">{row}</div>
              {/*maing-masing kursi penonton */}
              {colLabels.map((col) => {
                const seatId: SeatId = `${row}${col}`;

                if (col !== 6) {
                  return (
                    <label
                      key={seatId}
                      className={`mx-1 text-xs font-medium lg:h-12 lg:w-12 flex h-8 w-8 cursor-pointer items-center justify-center rounded transition-colors duration-200 ${
                        isSeatSelected(seatId)
                          ? "bg-orange-500 text-white"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    >
                      {seatId}
                      <input 
                        onClick={() => handleSeatClick(seatId)} 
                        type="checkbox" 
                        className="hidden"
                        {...register(`${seatId}`)}
                        value={seatId} 
                      />
                    </label>
                  );
                } else {
                  return (
                    <div className="ml-10 lg:ml-20" key={seatId}>
                      <div className="w-8"></div>
                      <label
                        className={`mx-1 text-xs font-medium lg:h-12 lg:w-12 flex h-8 w-8 cursor-pointer items-center justify-center rounded transition-colors duration-200 ${
                          isSeatSelected(seatId)
                            ? "bg-orange-500 text-white"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      >
                        {seatId}
                        <input 
                          onClick={() => handleSeatClick(seatId)} 
                          type="checkbox" 
                          {...register(`${seatId}`)}
                          className="hidden" 
                          value={seatId} 
                        />
                      </label>
                      {/* <div className="w-8"></div> */}
                    </div>
                  );
                }
              })}
          </div>
        ))}
      <button type="submit" className="bg-orange w-full mt-5 cursor-pointer px-3 py-5 rounded-full font-semibold uppercase text-white">Submit ({selectedSeats.length} Seats)</button>
      </div>
    </form>
  );
}

function OrderModal({showModal, setShowModal}: ShowModal) {
  const {id} = useParams();
  const navigate = useNavigate();
  const order = useSelector((state: RootStateOrder) => state.order.order)
  const dispatch = useDispatch();
  // console.log("order modal", order.seat);

  const handleConfirmButton = () => {
    dispatch(addOrderAction({ totalPrice: order.seat.length * 10}));
    setShowModal(false)
    navigate(`/order/payment/${id}`)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showModal])

  return (
    <>
    <div className={`${
        showModal ? "block" : "hidden"
      } absolute inset-0 bg-black h-screen opacity-50 w-full 100vh`}></div>
    <section
      className={`${
        showModal ? "block" : "hidden"
      } absolute top-20 right-0 left-0 mx-6 my-10 flex flex-col items-center rounded-xl outline-4 -outline-offset-8 outline-orange bg-white px-5 py-10 shadow-2xl md:mx-20 lg:mx-50 lg:px-20`}
    >
      <div className="mb-8 flex w-80 h-30 flex-col items-center bg-orange outline-8 outline-orange outline-offset-8 rounded-full">
        <img
          className="w-full h-full px-10 py-5"
          src={logo}
          alt="cinema"
          width={114}
          height={24}
        />
      </div>
        <h1 className="my-10 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wider">Confirmation Order</h1>
      <div className="mb-10 flex w-full flex-col gap-4">
        <span className="flex justify-between">
          <p className="text-title-info-first tracking-wider">Movie selected</p>
          <p>{order.title}</p>
        </span>
        <span className="flex justify-between">
          <p className="text-title-info-first tracking-wider">
            {order.date}
          </p>
          <p>{order.time}</p>
        </span>
        <span className="flex justify-between">
          <p className="text-title-info-first tracking-wider">
            One ticket price
          </p>
          <p>$10</p>
        </span>
        <span className="flex justify-between">
          <p className="text-title-info-first tracking-wider">Seat Choosed</p>
          <p>{order.seat.join(", ")}</p>
        </span>
        <span className="flex justify-between">
          <p className="text-title-info-first tracking-wider font-bold text-xl">Total Payment</p>
          <p className="font-bold text-xl">{`$${order.seat.length * 10}`}</p>
        </span>
      </div>
      <button
        className="bg-primary w-full rounded border py-3 font-bold text-white bg-orange cursor-pointer transition-all hover:transform active:scale-99 active:bg-transparent active:text-orange"
        type="button"
        onClick={() => handleConfirmButton()}
      >
        Confirm Button
      </button>
    </section>
    </>
  );
}

export default OrderSeatPage;
