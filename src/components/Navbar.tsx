import {useState} from "react";
import logoTickitz from "../assets/tickitz-logo.svg";
import {Link, NavLink} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {CgClose} from "react-icons/cg";

function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  return (
    <nav className="shadow-lg">
      <ul className="flex justify-between items-center py-6 px-10 lg:px-20 ">
        <li>
          {/* logo */}
          <img src={logoTickitz} alt="logo-tickitz" />
        </li>
        <li className="hidden md:flex gap-14 px-12">
          {/* menu desktop */}
          <NavLink
            className={({isActive}) =>
              isActive
                ? "font-bold text-orange after:mt-0 after:block after:text-[#E95102] after:border-b-3 uppercase"
                : "text-gray-400 uppercase"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink 
            className={({isActive}) =>
              isActive
                ? "font-bold text-orange after:mt-0 after:block after:text-[#E95102] after:border-b-3 uppercase"
                : "text-gray-400 uppercase"
            } 
            to={"/movies"}>
            Movie
          </NavLink>
          <NavLink 
            className={({isActive}) =>
              isActive
                ? "font-bold text-orange after:mt-0 after:block after:text-[#E95102] after:border-b-3 uppercase"
                : "text-gray-400 uppercase"
            } 
            to={"/order"}>
            Buy Ticket
          </NavLink>
        </li>
        <li className="hidden md:flex gap-4">
          {/* Login Register */}
          <Link
            className="font-bold text-orange outline-2 outline-orange px-6 py-3 rounded-4xl hover:opacity-70"
            to={"/login"}
          >
            Login
          </Link>
          <Link
            className="font-bold text-white bg-orange px-6 py-3 rounded-4xl hover:opacity-70"
            to={"/register"}
          >
            Register
          </Link>
        </li>
        <li className="md:hidden">
          {isShowMenu ? (
            <CgClose
              className="md:hidden text-3xl cursor-pointer"
              onClick={() => setIsShowMenu(!isShowMenu)}
            />
          ) : (
            <GiHamburgerMenu
              className="md:hidden text-3xl cursor-pointer"
              onClick={() => setIsShowMenu(!isShowMenu)}
            />
          )}
          {isShowMenu && (
            <div className=" flex flex-col gap-8 py-5 items-center w-full h-56 absolute top-20 right-0 left-0 bg-white shadow-lg">
              <div className="flex flex-col items-center gap-4 px-12  w-1/2">
                {/* menu desktop */}
                <NavLink
                  className={({isActive}) =>
                    isActive
                      ? "font-bold text-orange after:mt-0 after:block after:text-[#E95102] after:border-b-3 uppercase"
                      : "text-gray-400 uppercase"
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
                <NavLink className="text-gray uppercase" to={"/movie"}>
                  Movie
                </NavLink>
                <NavLink className="text-gray uppercase" to={"/buyticket"}>
                  Buy Ticket
                </NavLink>
              </div>
              <div className="flex gap-4">
                {/* Login Register */}
                <Link
                  className="font-bold text-orange outline-2 outline-orange px-6 py-3 rounded-4xl hover:opacity-70"
                  to={"/login"}
                >
                  Login
                </Link>
                <Link
                  className="font-bold text-white bg-orange px-6 py-3 rounded-4xl hover:opacity-70"
                  to={"/register"}
                >
                  Register
                </Link>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
