import { createContext } from "react";

type AuthContextProps = {
  isLoggedinRoute: boolean;
  setIsLoggedinRoute: React.Dispatch<React.SetStateAction<boolean>>;
}
const AuthContext = createContext({} as AuthContextProps);

export default AuthContext;