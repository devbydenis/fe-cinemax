import { createContext } from "react";
type ModalContextProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const ModalContext = createContext({} as ModalContextProps);

export default ModalContext;
