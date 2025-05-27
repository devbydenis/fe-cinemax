import { useEffect, useState } from "react";
import logoTickitz from "../assets/tickitz-logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import avatarDefault from "../assets/avatar_default.png";
import { useSelector } from "react-redux";

function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [profileName, SetProfileName] = useState<string>("");
  const navigate = useNavigate();

  const {isLogin, email} = useSelector((state: User) => state.user.user)

  useEffect(() => {
    
    if (!isLogin) {
      navigate("/");
      return
    }
    if (isLogin) {
      SetProfileName(email.split("@")[0]);
    } 

  }, [isLogin, email]);
  return (
    <nav className="shadow-lg relative z-50">
      <ul className="flex items-center justify-between px-10 py-6 lg:px-20">
        <li>
          {/* logo */}
          <Link to={'/'}>
            <img src={logoTickitz} alt="logo-tickitz" />
          </Link>
        </li>
        <li className="hidden gap-14 px-12 md:flex">
          {/* menu desktop */}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange font-bold uppercase after:mt-0 after:block after:border-b-3 after:text-[#E95102]"
                : "text-gray-400 uppercase"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange font-bold uppercase after:mt-0 after:block after:border-b-3 after:text-[#E95102]"
                : "text-gray-400 uppercase"
            }
            to={"/movies"}
          >
            Movie
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange font-bold uppercase after:mt-0 after:block after:border-b-3 after:text-[#E95102]"
                : "text-gray-400 uppercase"
            }
            to={"/buy-ticket"}
          >
            Buy Ticket
          </NavLink>
        </li>
        <li className="hidden gap-4 md:flex">
          {isLogin ? (
            <div className="flex items-center gap-4">
              <Link
                className={`h-10 w-10 cursor-pointer rounded-full bg-cover bg-center`}
                style={{ backgroundImage: `url(${avatarDefault})` }}
                to={"/profile/account"}
              ></Link>
              <Link
                className="cursor-pointer text-gray-800 uppercase"
                to={"/profile/account"}
              >
                {"Hi, " + profileName.split("@")[0]}
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              {/* Login Register */}
              <Link
                className="text-orange outline-orange rounded-4xl px-6 py-3 font-bold outline-2 hover:opacity-70"
                to={"/auth/login"}
              >
                Login
              </Link>
              <Link
                className="bg-orange rounded-4xl px-6 py-3 font-bold text-white hover:opacity-70"
                to={"/auth/register"}
              >
                Register
              </Link>
            </div>
          )}
        </li>
        <li className="md:hidden">
          {isShowMenu ? (
            <CgClose
              className="cursor-pointer text-3xl md:hidden"
              onClick={() => setIsShowMenu(!isShowMenu)}
            />
          ) : (
            <GiHamburgerMenu
              className="cursor-pointer text-3xl md:hidden"
              onClick={() => setIsShowMenu(!isShowMenu)}
            />
          )}
          {isShowMenu && (
            <div className="absolute top-20 right-0 left-0 flex w-full flex-col items-center gap-8 bg-white py-5 shadow-lg">
              <div className="flex w-1/2 flex-col items-center gap-4 px-12">
                {/* menu desktop */}
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange font-bold uppercase after:mt-0 after:block after:border-b-3 after:text-[#E95102]"
                      : "text-gray-400 uppercase"
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
                <NavLink className="text-gray uppercase" to={"/movie"}>
                  Movie
                </NavLink>
                <NavLink className="text-gray uppercase" to={"/movie"}>
                  Buy Ticket
                </NavLink>
              </div>
              {isLogin ? (
                <div className="flex items-center gap-4">
                  <Link
                    className={`h-10 w-10 cursor-pointer rounded-full bg-cover bg-center`}
                    style={{ backgroundImage: `url(${avatarDefault})` }}
                    to={"/profile"}
                  ></Link>
                  <Link
                    className="cursor-pointer text-gray-800 uppercase"
                    to={"/profile"}
                  >
                    {profileName.split("@")[0]}
                  </Link>
                </div>
              ) : (
                <div className="flex gap-4">
                  {/* BeforeLogin Register */}
                  <Link
                    className="text-orange outline-orange rounded-4xl px-6 py-3 font-bold outline-2 hover:opacity-70"
                    to={"/auth/login"}
                  >
                    Login
                  </Link>
                  <Link
                    className="bg-orange rounded-4xl px-6 py-3 font-bold text-white hover:opacity-70"
                    to={"/auth/register"}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
