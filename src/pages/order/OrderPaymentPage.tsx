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

function OrderPaymentPage() {
  const [isModalShow, setIsModalShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isModalShow]);

  return (
    <>
      <section className="relative flex flex-col items-center bg-white py-10">
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
  const order = useSelector((state) => state.order.order);
  return (
    <div className="payment-info my-7 w-6/7">
      <h1 className="mb-5 text-2xl font-bold">Payment Info</h1>
      <div className="flex flex-col gap-6">
        <div className="border-orange/70 border-b-2 tracking-[.75px]">
          <p className="text-secondary font-semibold uppercase">
            date &amp; time
          </p>
          <p className="my-2 text-gray-700">
            {order.date} & {order.time}
          </p>
        </div>
        <div className="border-orange/70 border-b-2 tracking-[.75px]">
          <p className="text-secondary font-semibold uppercase">movie title</p>
          <p className="my-2 text-gray-700">{order.title}</p>
        </div>
        <div className="border-orange/70 border-b-2 tracking-[.75px]">
          <p className="text-secondary font-semibold uppercase">cinema name</p>
          <p className="my-2 text-gray-700">{order.cinema}</p>
        </div>
        <div className="border-orange/70 border-b-2 tracking-[.75px]">
          <p className="text-secondary font-semibold uppercase">
            number of tickets
          </p>
          <p className="my-2 text-gray-700">
            {order.seat.length} pieces {`(${order.seat.join(", ")})`}
          </p>
        </div>
        <div className="border-orange/70 border-b-2 tracking-[.75px]">
          <p className="text-secondary font-semibold uppercase">
            total payment
          </p>
          <p className="my-2 text-gray-700">${order.seat.length * 10}</p>
        </div>
      </div>
    </div>
  );
}

function PaymentMethod({setIsModalShow}) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    dispatch(addOrderAction(data));
    setIsModalShow(() => setIsModalShow(true));
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-10 mt-10 w-6/7 rounded-lg"
    >
      <div className="payment-method">
        <h1 className="mb-5 text-2xl font-bold">Payment Method</h1>
        {/* <div className="grid grid-cols-2 justify-items-center gap-3 sm:grid-cols-3 lg:grid-cols-4"> */}
        <div className="flex flex-wrap justify-center gap-4">
          <label
            className="has-checked:outline-orange flex w-28 cursor-pointer flex-col items-center justify-center rounded px-3 py-3 outline outline-gray-400 has-checked:outline-4"
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
            className="has-checked:outline-orange flex w-28 cursor-pointer flex-col items-center justify-center rounded px-3 py-3 outline outline-gray-400 has-checked:outline-4"
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
            className="has-checked:outline-orange flex w-28 cursor-pointer flex-col items-center justify-center rounded px-3 py-3 outline outline-gray-400 has-checked:outline-4"
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
            className="has-checked:outline-orange flex w-28 cursor-pointer flex-col items-center justify-center rounded px-3 py-3 outline outline-gray-400 has-checked:outline-4"
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
            className="has-checked:outline-orange flex w-28 cursor-pointer flex-col items-center justify-center rounded px-3 py-3 outline outline-gray-400 has-checked:outline-4"
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
            className="has-checked:outline-orange flex w-28 cursor-pointer flex-col items-center justify-center rounded px-3 py-3 outline outline-gray-400 has-checked:outline-4"
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
            className="has-checked:outline-orange flex w-28 cursor-pointer flex-col items-center justify-center rounded px-3 py-3 outline outline-gray-400 has-checked:outline-4"
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
            className="has-checked:outline-orange flex w-28 cursor-pointer flex-col items-center justify-center rounded px-3 py-3 outline outline-gray-400 has-checked:outline-4"
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
        className="bg-orange active:border-orange active:text-orange mt-10 block w-full cursor-pointer rounded border-2 py-3 text-center font-bold text-white transition-all active:scale-99 active:bg-white"
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
  const { id } = useParams()
  const order = useSelector((state) => state.order.order);

  console.log("order di payment modal", order);
  return (
    <section
      className={`payment-modal ${
        isModalShow ? "block" : "hidden"
      } absolute top-[25%] right-0 left-0 m-6 rounded-lg bg-white px-6 py-6 sm:mx-auto sm:w-4/5 md:w-2/3`}
    >
      <h2 className="mt-3 mb-8 text-center text-3xl font-bold">Payment Info</h2>
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
          <p className="text-primary mt-2 font-bold">${order.seat.length * 10}</p>
        </div>
        <p className="text-secondary text-sm leading-8 font-normal tracking-[.75px]">
          Pay this payment bill before it is due, on{" "}
          <span className="text-red-500">June 23, 2025</span>. If the bill has
          not been paid by the specified time, it will be forfeited
        </p>
        <div className="flex flex-col gap-3">
          <Link
            to={`/order/ticket/${id}`}
            className="bg-primary text-orange active:bg-orange rounded py-2 text-center font-bold outline-2 transition-all active:scale-99 active:text-white"
          >
            Check Payment
          </Link>
          <Link
            to={"#"}
            className="outline-primary bg-orange outline-orange active:outline-orange active:text-orange rounded py-2 text-center font-bold text-white outline-2 transition-all active:scale-99 active:bg-white"
          >
            Pay Later
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderPaymentPage;
