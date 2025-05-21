import { Outlet } from "react-router-dom";
import backgroundAuth from "../assets/image.png";
function AuthLayout() {
  return (
    <main
      className={`relative h-screen bg-cover bg-center flex justify-center items-center py-10`}
      style={{ backgroundImage: "url(" + backgroundAuth + ")" }}
    >
      <div className="absolute inset-0 bg-black/80 "></div>
      <Outlet />
    </main>
  );
}

export default AuthLayout;
