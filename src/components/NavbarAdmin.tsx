import { Link, NavLink } from "react-router-dom";
import logo from '../assets/cinemax-logo-transparent.png';

function NavbarAdmin() {
  return (
    <nav className="bg-white text-white p-4 px-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-black text-xl font-bold">
            <img src={logo} alt="Logo" className="" />
          </Link>
          <div className="flex gap-8">
            <NavLink 
              className={({ isActive }) => (isActive ? 'text-orange underline underline-offset-8 ' : 'text-black')}
              to={'admin/dashboard'}>Dashboard</NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-orange underline underline-offset-8 ' : 'text-black')}
              to={'admin/list-movie'}>List Movie</NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-orange underline underline-offset-8 ' : 'text-black')}
              to={'admin/add-movie'}>Add Movie</NavLink>
          </div>
          <div>
            <button className="border-2 border-red-500 text-red-500 hover:bg-red-600 px-4 py-2 rounded-xl">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarAdmin;