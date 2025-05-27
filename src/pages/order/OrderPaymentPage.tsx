import React, { useState } from "react";
import gpay from "../../assets/gpay.svg";
import visa from "../../assets/visa.svg";
import dana from "../../assets/dana.svg";
import bca from "../../assets/bca.svg";
import bri from "../../assets/bri.svg";
import ovo from "../../assets/ovo.svg";
import paypal from "../../assets/paypal.svg";
import gopay from "../../assets/gopay.svg";
import { Link } from "react-router-dom";
import TimelineProcess from "../../components/TimelineProcess";

function OrderPaymentPage() {
  const [isModalShow] = useState(false);

  return (
    <>
      <section className="relative flex flex-col items-center bg-white py-10">
        <div
          className={`${
            isModalShow ? "block" : "hidden"
          } absolute inset-0 bg-black opacity-50`}
        ></div>
        <TimelineProcess />
        <form className="mt-10 rounded-lg w-6/7 mx-10">
          <PaymentInfo />
          <PaymentMethod />
          <PaymentBtn />
        </form>
        <PaymentModal isModalShow={isModalShow} />
      </section>
    </>
  );
}

function PaymentInfo() {
  return (
    <div className="payment-info mb-7">
      <h1 className="mb-5 text-2xl font-bold">Payment Info</h1>
      <div className="flex flex-col gap-6">
        <div className="border-b-2 border-orange/70 tracking-[.75px]">
          <p className="text-secondary font-semibold uppercase">
            date &amp; time
          </p>
          <p className="my-2 text-gray-700">Tuesday, 07 July 2020 at 02:00pm</p>
        </div>
        <div className="border-b-2 border-orange/70 tracking-[.75px]">
          <p className="text-secondary font-semibold uppercase">movie title</p>
          <p className="my-2 text-gray-700">Spider-Man: Homecoming</p>
        </div>
        <div className="border-b-2 border-orange/70 tracking-[.75px]">
          <p className="text-secondary font-semibold uppercase">cinema name</p>
          <p className="my-2 text-gray-700">Cineone21 Cinema</p>
        </div>
        <div className="border-b-2 border-orange/70 tracking-[.75px]">
          <p className="text-secondary font-semibold uppercase">
            number of tickets
          </p>
          <p className="my-2 text-gray-700">3 pieces</p>
        </div>
        <div className="border-b-2 border-orange/70 tracking-[.75px]">
          <p className="text-secondary font-semibold uppercase">
            total payment
          </p>
          <p className="my-2 text-gray-700">$30.00</p>
        </div>
      </div>
    </div>
  );
}

function PaymentMethod() {
  return (
    <div className="payment-method">
      <h1 className="mb-5 text-2xl font-bold">Payment Method</h1>
      {/* <div className="grid grid-cols-2 justify-items-center gap-3 sm:grid-cols-3 lg:grid-cols-4"> */}
      <div className="flex flex-wrap gap-4 justify-center">
        <label
          className="has-checked:outline-orange flex w-28 cursor-pointer flex-col items-center justify-center rounded px-3 py-3 outline outline-gray-400 has-checked:outline-4"
          htmlFor="gpay"
        >
          <img className="mx-auto" src={gpay} alt="gpay" />
          <input
            className="hidden"
            type="radio"
            name="payment-method"
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
            name="payment-method"
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
            name="payment-method"
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
            name="payment-method"
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
            name="payment-method"
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
            name="payment-method"
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
            name="payment-method"
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
            name="payment-method"
            id="ovo"
            defaultValue="ovo"
          />
        </label>
      </div>
    </div>
  );
}

function PaymentBtn() {
  return (
    <Link
      to={'#'}
      className="bg-orange block text-center mt-10 w-full rounded py-3 font-bold text-white cursor-pointer active:scale-99 border-2 active:border-orange transition-all active:bg-white active:text-orange"
    >
      Pay Your Order
    </Link>
  );
}

type PaymentModalProps = {
  isModalShow: boolean;
};
const PaymentModal: React.FC<PaymentModalProps> = ({ isModalShow }) => {
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
          <p className="text-primary mt-2 font-bold">$30</p>
        </div>
        <p className="text-secondary text-sm leading-8 font-normal tracking-[.75px]">
          Pay this payment bill before it is due, on{" "}
          <span className="text-red-500">June 23, 2023</span>. If the bill has
          not been paid by the specified time, it will be forfeited
        </p>
        <div className="flex flex-col gap-3">
          <Link
            to={'#'}
            className="text-center bg-primary py-2 rounded font-bold text-orange outline-2 active:scale-99 transition-all active:bg-orange active:text-white"
          >
            Check Payment
          </Link>
          <Link
            to={'#'}
            className="text-center outline-primary rounded bg-orange text-white outline-2 outline-orange py-2 font-bold active:bg-white active:outline-orange active:text-orange active:scale-99 transition-all"
          >
            Pay Later
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderPaymentPage;
