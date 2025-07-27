import React, { useEffect, useState } from "react";
import gpay from "../../assets/gpay.svg";
import visa from "../../assets/visa.svg";
import dana from "../../assets/dana.svg";
import bca from "../../assets/bca.svg";
import bri from "../../assets/bri.svg";
import ovo from "../../assets/ovo.svg";
import paypal from "../../assets/paypal.svg";
import gopay from "../../assets/gopay.svg";
import { Link, useParams } from "react-router-dom";
import TimelineProcess from "../../components/TimelineProcess";
import { useDispatch, useSelector } from "react-redux";
import { useForm, type FieldValues } from "react-hook-form";
import { addOrderAction } from "../../redux/reducers/orderSlice";
import { addHistoryUserAction } from "../../redux/reducers/userSlice";
import { BASE_URL } from "../../service";

function OrderPaymentPage() {
  const [isModalShow, setIsModalShow] = useState(false);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [isModalShow]);

  return (
    <>
      <section className="relative flex flex-col items-center bg-black-primary py-10">
        <div
          className={`${
            isModalShow ? "block" : "hidden"
          } absolute inset-0 bg-black opacity-50`}
        ></div>
        <TimelineProcess />
        <PaymentInfo />
        <PaymentMethod setIsModalShow={setIsModalShow} />
        <PaymentModal isModalShow={isModalShow} />
      </section>
    </>
  );
}

function PaymentInfo() {
  const order = useSelector((state: {order: OrderProps}) => state.order.order);
  return (
    <div className="payment-info my-7 w-6/7">
      <h1 className="mb-5 text-2xl font-bold text-white-primary">Payment Info</h1>
      <div className="flex flex-col gap-6">
        <div className="border-orange/70 border-b-2 tracking-[.75px]">
          <p className="text-secondary font-semibold uppercase text-white-primary">
            date &amp; time
          </p>
          <p className="my-2 text-gray-300">
            {order.date_booking} & {order.time_booking}
          </p>
        </div>
        <div className="border-orange/70 border-b-2 tracking-[.75px]">
          <p className="text-secondary font-semibold uppercase text-white-primary">movie title</p>
          <p className="my-2 text-gray-300">{order.title}</p>
        </div>
        <div className="border-orange/70 border-b-2 tracking-[.75px]">
          <p className="text-secondary font-semibold uppercase text-white-primary">cinema name</p>
          <p className="my-2 text-gray-300">{order.cinema}</p>
        </div>
        <div className="border-orange/70 border-b-2 tracking-[.75px]">
          <p className="text-secondary font-semibold uppercase text-white-primary">
            number of tickets
          </p>
          <p className="my-2 text-gray-300">
            {order.seats.length} pieces {`(${order.seats.join(", ")})`}
          </p>
        </div>
        <div className="border-orange/70 border-b-2 tracking-[.75px]">
          <p className="text-secondary font-semibold uppercase text-white-primary">
            total payment
          </p>
          <p className="my-2 text-gray-300">${order.seats.length * 10}</p>
        </div>
      </div>
    </div>
  );
}

type PaymentMethodProps = {
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
};

function PaymentMethod({ setIsModalShow }: PaymentMethodProps) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data: FieldValues) => {
    console.log(data);

    dispatch(addOrderAction(data));
    setIsModalShow(true);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-10 mt-10 w-6/7 rounded-lg"
    >
      <div className="payment-method">
        <h1 className="mb-5 text-2xl font-bold text-white-primary">Payment Method</h1>
        {/* <div className="grid grid-cols-2 justify-items-center gap-3 sm:grid-cols-3 lg:grid-cols-4"> */}
        <div className="flex flex-wrap justify-center gap-4">
          <label
            className="has-checked:outline-orange flex w-28 bg-white/80 cursor-pointer flex-col items-center justify-center rounded px-3 py-3 outline outline-gray-400 has-checked:outline-4"
            htmlFor="gpay"
          >
            <img className="mx-auto" src={gpay} alt="gpay" />
            <input
              className="hidden"
              type="radio"
              {...register("payment")}
              id="gpay"
              defaultValue="gpay"
            />
          </label>

          <label
            className="has-checked:outline-orange flex w-28 bg-white/80 cursor-pointer flex-col items-center justify-center rounded px-3 py-3 outline outline-gray-400 has-checked:outline-4"
            htmlFor="visa"
          >
            <img className="mx-auto" src={visa} alt="visa" />
            <input
              className="hidden"
              type="radio"
              {...register("payment")}
              id="visa"
              defaultValue="visa"
            />
          </label>

          <label
            className="has-checked:outline-orange flex w-28 bg-white/80 cursor-pointer flex-col items-center justify-center rounded px-3 py-3 outline outline-gray-400 has-checked:outline-4"
            htmlFor="gopay"
          >
            <img className="mx-auto" src={gopay} alt="gopay" />
            <input
              className="hidden"
              type="radio"
              {...register("payment")}
              id="gopay"
              defaultValue="gopay"
            />
          </label>

          <label
            className="has-checked:outline-orange flex w-28 bg-white/80 cursor-pointer flex-col items-center justify-center rounded px-3 py-3 outline outline-gray-400 has-checked:outline-4"
            htmlFor="paypal"
          >
            <img className="mx-auto" src={paypal} alt="paypal" />
            <input
              className="hidden"
              type="radio"
              {...register("payment")}
              id="paypal"
              defaultValue="paypal"
            />
          </label>

          <label
            className="has-checked:outline-orange flex w-28 bg-white/80 cursor-pointer flex-col items-center justify-center rounded px-3 py-3 outline outline-gray-400 has-checked:outline-4"
            htmlFor="dana"
          >
            <img className="mx-auto" src={dana} alt="dana" />
            <input
              className="hidden"
              type="radio"
              {...register("payment")}
              id="dana"
              defaultValue="dana"
            />
          </label>

          <label
            className="has-checked:outline-orange flex w-28 bg-white/80 cursor-pointer flex-col items-center justify-center rounded px-3 py-3 outline outline-gray-400 has-checked:outline-4"
            htmlFor="bca"
          >
            <img className="mx-auto" src={bca} alt="bca" />
            <input
              className="hidden"
              type="radio"
              {...register("payment")}
              id="bca"
              defaultValue="bca"
            />
          </label>

          <label
            className="has-checked:outline-orange flex w-28 bg-white/80 cursor-pointer flex-col items-center justify-center rounded px-3 py-3 outline outline-gray-400 has-checked:outline-4"
            htmlFor="bri"
          >
            <img className="mx-auto" src={bri} alt="bri" />
            <input
              className="hidden"
              type="radio"
              {...register("payment")}
              id="bri"
              defaultValue="bri"
            />
          </label>

          <label
            className="has-checked:outline-orange flex w-28 bg-white/80 cursor-pointer flex-col items-center justify-center rounded px-3 py-3 outline outline-gray-400 has-checked:outline-4"
            htmlFor="ovo"
          >
            <img className="mx-auto" src={ovo} alt="ovo" />
            <input
              className="hidden"
              type="radio"
              {...register("payment")}
              id="ovo"
              defaultValue="ovo"
            />
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="bg-orange active:border-orange active:text-orange mt-10 block w-full cursor-pointer rounded border-2 border-orange py-3 text-center font-bold text-white transition-all active:scale-99 active:bg-black-primary"
      >
        Pay Your Order
      </button>
    </form>
  );
}

type PaymentModalProps = {
  isModalShow: boolean;
};
const PaymentModal: React.FC<PaymentModalProps> = ({ isModalShow }) => {
  const { id } = useParams();
  const user = useSelector(
    (state: { user: { user: User } }) => state.user.user,
  );
  const order = useSelector(
    // (state: { order: { order: OrderProps } }) => state.order.order,
    (state: RootStateOrder) => state.order.order,
  );
  const dispatch = useDispatch();
  console.log("order after submit payment", order);
  console.log("user after submit payment", user);
  
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [dataTransaction, setDataTransaction] = useState({
    user_id: order.userId,
    cinema: order.cinema,
    movie_title: order.title,
    payment_method: order.payment,    
    date_booking: order.date_booking,
    time_booking: order.time_booking,
    total_price: order.totalPrice,
    status: "pending",
    location: order.location,
    seats: order.seat,
  });

  useEffect(() => {
    async function handleTransaction() {
      try {
        const response = await fetch(`${BASE_URL}/transactions/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          },
          body: JSON.stringify(dataTransaction),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    handleTransaction();
    console.log("handleTransaction executed")
  }, [isConfirmed]);

  return (
    <section
      className={`payment-modal ${
        isModalShow ? "block" : "hidden"
      } absolute top-[25%] right-0 left-0 m-6 rounded-lg bg-white-primary px-6 py-6 sm:mx-auto sm:w-4/5 md:w-2/3`}
    >
      <h2 className="mt-3 mb-8 text-center text-white-primary text-3xl font-bold">Payment Info</h2>
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-secondary text-sm font-normal">
            No. Rekening Virtual :
          </p>
          <span className="flex items-center justify-between">
            <p className="text-lg font-bold">12321328913829724</p>
            <button className="outline-primary rounded px-3 py-1 outline active:scale-95">
              Copy
            </button>
          </span>
        </div>
        <div>
          <p className="text-secondary text-sm font-normal">Total Payment</p>
          <p className="text-primary mt-2 font-bold">
            ${order.totalPrice}
          </p>
        </div>
        <p className="text-secondary text-sm leading-8 font-normal tracking-[.75px]">
          Pay this payment bill before it is due, on{" "}
          <span className="text-red-500">July 28, 2025</span>. If the bill has
          not been paid by the specified time, it will be forfeited
        </p>
        <div className="flex flex-col gap-3">
          <Link
            to={`/order/ticket/${id}`}
            className="bg-primary text-orange active:bg-orange rounded py-2 text-center font-bold outline-2 transition-all active:scale-99 active:text-white"
            onClick={() => {
              dispatch(addOrderAction({ ...order, statusPayment: true }));
              dispatch(addHistoryUserAction({ ...order, statusPayment: true }));
              setDataTransaction({ ...dataTransaction, status: "success" });
              setIsConfirmed(true);
            }}
          >
            Check Payment
          </Link>
          <Link
            to={`/profile/history`}
            className="outline-primary bg-orange outline-orange active:outline-orange active:text-orange rounded py-2 text-center font-bold text-white outline-2 transition-all active:scale-99 active:bg-white"
            onClick={() => {
              dispatch(addOrderAction({ ...order, statusPayment: false }));
              dispatch(addHistoryUserAction({ ...order, statusPayment: false }));
              setDataTransaction({ ...dataTransaction, status: "pending" });
              setIsConfirmed(true);
            }}
          >
            Pay Later
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderPaymentPage;
