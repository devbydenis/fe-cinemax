import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../pages/auth/AuthContext";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedinRoute } = useContext(AuthContext);

  if (isLoggedinRoute) {
    // kalo udh login tampilin halaman yang diminta (children)
    return children;
  }

  return <Navigate to="/auth/login" replace />; // replace -> replace rute saat ini biar gabisa back
}

export default ProtectedRoute;
