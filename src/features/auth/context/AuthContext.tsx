import { createContext } from "react";
import type { AuthContextProps } from "../types/auth.types";

const AuthContext = createContext({} as AuthContextProps);

export default AuthContext;