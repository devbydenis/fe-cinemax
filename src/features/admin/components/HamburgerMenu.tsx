import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) { // contain akan true kalo yg diklik masih didalam wrapper   
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside); // cleanup di return effect akan selalu mencopot listener waktu komponen unmount → nggak ada event listener “nyangkut”.
  }, []);

  
  return (
    <div className="relative text-black md:hidden" ref={menuRef}>  {/* ref sebagai penanda "area didalam menu" */}  
      {/* Button toggle */}
      <button
        onClick={toggleMenu}
        className="rounded-md p-2 text-black hover:bg-gray-100"
      >
        {open ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Menu dropdown */}
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg"> {/* buat make sure dropwdown tampil diatas konten lain */}
          {/* Grup 1 */}
          <nav className="flex flex-col py-2">
            <NavLink
              to="admin/dashboard"
              className="px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="admin/list-movie"
              className="px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              List Movie
            </NavLink>
            <NavLink
              to="admin/add-movie"
              className="px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Add Movie
            </NavLink>
          </nav>

          <div className="border border-gray-200 "></div>

          {/* Grup 2 */}
          <div className="flex flex-col py-2">
            <button
              onClick={() => {
                // TODO: handle logout logic
                console.log("Logout clicked");
                setOpen(false);
              }}
              className="px-4 py-2 text-left text-red-600 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;