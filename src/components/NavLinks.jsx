import { NavLink } from "react-router-dom";

const NavLinks = ({ onClick }) => {
  return (
    <>
      <NavLink
        onClick={onClick}
        to={"/"}
        className={({ isActive }) =>
          isActive ? "text-(--primary-accent-color)" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        onClick={onClick}
        to={"/watchlist"}
        className={({ isActive }) =>
          isActive ? "text-(--primary-accent-color)" : ""
        }
      >
        Watchlist
      </NavLink>
    </>
  );
};

export default NavLinks;
