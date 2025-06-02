import { useContext } from "react";
import ModalContext from "../context/ModalContext";

const Modal = (props: { color: string; message: string }) => {
  const { setShowModal } = useContext(ModalContext);
  return (
    <div
      className={`w-72 rounded-b-lg border-t-8 bg-white border-${props.color} flex flex-col justify-around px-4 py-5 shadow-md`}
    >
      <p className="font-sans text-lg font-bold">INFO</p>
      <div className="py-3">
        <p className="text-lg text-gray-400">{props.message}</p>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-orange w-full rounded-xl px-3 py-1 font-semibold text-white transition-colors ease-in-out hover:bg-orange-400"
          onClick={() => setShowModal(false)}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
