// import { useContext } from "react";
// import AuthContext from "../pages/auth/AuthContext";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  // const { isLoggedinRoute } = useContext(AuthContext);
  const user = useSelector((state: { user: UserState }) => state.user.user);
  const { isLogin } = user
  console.log("ProtectedRoute", isLogin)

  if (isLogin) {
    // kalo udh login tampilin halaman yang diminta (children)
    return children;
  }

  return <Navigate to="/auth/login" replace />; // replace -> replace rute saat ini biar gabisa back
}

export default ProtectedRoute;
