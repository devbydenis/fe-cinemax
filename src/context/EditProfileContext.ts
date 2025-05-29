import { createContext } from "react";

type EditProfileContextProps = {
  showEditProfile: boolean;
  setShowEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  display?: string
}

const EditProfileContext = createContext({} as EditProfileContextProps);

export default EditProfileContext