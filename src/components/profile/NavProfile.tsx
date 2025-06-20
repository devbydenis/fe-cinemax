import { NavLink } from 'react-router-dom';

type NavProfileProps = {
  display?: string
}

function NavProfile(props: NavProfileProps) {

  return (
    <nav className={`${props.display} bg-black-primary md:mt-10 rounded-2xl p-5 flex justify-center md:justify-start px-5 md:mr-8 gap-5 h-20 col-span-2 shadow-lg shadow-orange/50 mb-5 md:order-1`}>
      <NavLink
        to="/profile/account"
        className={({isActive}) =>
          isActive
            ? "border-b-3 font-bold text-orange border-orange"
            : ""
        + "text-orange pb-3 font-medium tracking-wider"}
      >
        Detail Account
      </NavLink>
      <NavLink
        to="/profile/history"
        className={({isActive}) =>
          isActive
            ? "border-b-3 font-bold text-orange border-orange"
            : ""
        + "text-orange pb-3 font-medium tracking-wider"}
      >
        Order History
      </NavLink>
    </nav>
  );
}

export default NavProfile