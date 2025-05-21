import { useState } from "react";
import testImage from "../../assets/test-image-card.png";
import { useForm, type FieldValues } from "react-hook-form";


type SeatId = string;

function OrderSeatPage() {

  return (
    <div className="">
      <OrderInfo />
      <OrderSeatsSelector />
      <OrderModal />
    </div>
  );
}

function OrderInfo() {
  return (
    <>
      <section className="m-4 gap-5 rounded-lg border border-gray-300 bg-white p-4 md:flex lg:justify-center">
        <div
          className="h-54 rounded-lg bg-cover md:h-56 md:flex-1/2 lg:h-72 lg:flex-5"
          style={{
            // backgroundImage: `url(https://image.tmdb.org/t/p/w500${image})`,
            backgroundImage: `url(${testImage})`,
          }}
        ></div>
        <div className="lg:flex-5">
          <h1 className="mt-4 text-4xl font-bold md:mt-1 md:text-2xl">
            Movie Title
          </h1>
          <ul className="mt-4 flex flex-wrap gap-3">
            <li
              className={`focus:border-orange min-w-fit rounded-3xl border-2 border-gray-400 px-3 py-1.5 font-medium text-gray-400 uppercase`}
            >
              Action
            </li>
            <li
              className={`focus:border-orange min-w-fit rounded-3xl border-2 border-gray-400 px-3 py-1.5 font-medium text-gray-400 uppercase`}
            >
              Comedy
            </li>
            <li
              className={`focus:border-orange min-w-fit rounded-3xl border-2 border-gray-400 px-3 py-1.5 font-medium text-gray-400 uppercase`}
            >
              Drama
            </li>
          </ul>
          <div className="mt-4 flex flex-col items-start gap-5">
            <p className="text-lg font-medium text-gray-500 md:mt-1">
              Regular - 10.00-12.00
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

function OrderSeatsSelector() {
  const { register, handleSubmit } = useForm();
  const [selectedSeats, setSelectedSeats] = useState<SeatId[]>([]);
  const rows: number = 10;
  const cols: number = 10;

  const rowLabels: string[] = Array.from({ length: rows }, (_, i) =>
    String.fromCharCode(65 + i),
  );
  const colLabels: number[] = Array.from({ length: cols }, (_, i) => i + 1);

  const handleSeatClick = (seatId: SeatId): void => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter((id) => id !== seatId);
      } else {
        return [...prevSelectedSeats, seatId];
      }
    });
  };

  const handleSeatsChoosed = (data: FieldValues) => {
    console.log(data);
    // Object.values(data).forEach((value) => {
      
    // })        
  };

  const isSeatSelected = (seatId: SeatId): boolean => {
    return selectedSeats.includes(seatId);
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
      <button onClick={() => console.log("test")} type="button" className="bg-orange w-full mt-5 cursor-pointer px-3 py-5 rounded-full font-semibold uppercase text-white">Submit ({selectedSeats.length} Seats)</button>
      </div>
    </form>
  );
}

function OrderModal() {
  const [isModal,] = useState(false)

  return (
    <section
      className={`${
        isModal ? "block" : "hidden"
      } absolute top-0 right-0 left-0 mx-6 my-10 flex flex-col items-center rounded-xl bg-white px-5 py-10 shadow-2xl`}
    >
      <div className="mb-8 flex w-full flex-col items-center">
        <img
          src="src/assets/cineone.svg"
          alt="cinema"
          width={114}
          height={24}
        />
        <p className="mt-3 text-2xl">CineOne21 Cinema</p>
      </div>
      <div className="mb-10 flex w-full flex-col gap-8">
        <span className="flex justify-between">
          <p className="text-title-info-first tracking-wider">Movie selected</p>
          <p>Spider-Man: Homecoming</p>
        </span>
        <span className="flex justify-between">
          <p className="text-title-info-first tracking-wider">
            Tuesday, 07 July 2020
          </p>
          <p>13.00 PM</p>
        </span>
        <span className="flex justify-between">
          <p className="text-title-info-first tracking-wider">
            One ticket price
          </p>
          <p>$10</p>
        </span>
        <span className="flex justify-between">
          <p className="text-title-info-first tracking-wider">Seat Choosed</p>
          <p>C4</p>
        </span>
        <span className="flex justify-between">
          <p className="text-title-info-first tracking-wider">Total Payment</p>
          <p>$30</p>
        </span>
      </div>
      <button
        className="bg-primary w-full rounded border py-3 font-bold text-white transition-all hover:transform active:scale-95"
        type="button"
      >
        Confirm Button
      </button>
    </section>
  );
}

export default OrderSeatPage;
