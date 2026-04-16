import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActive(false);
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <nav className="flex justify-between items-center px-4 py-2 gap-2">
      <h1 className="text-2xl md:text-4xl font-bold shrink-0">
        <span className="text-(--primary-accent-color)">Movie</span>verse
      </h1>

      <div className="flex-1 flex justify-center min-w-0">
        <div className="hidden md:flex items-center justify-center gap-4">
          <NavLinks />
          <div className="flex items-center gap-2 bg-(--secondary-text-color) rounded-xl py-1 px-2 w-full max-w-md">
            <SearchBar />
          </div>
        </div>

        <div className="flex items-center gap-2 bg-(--secondary-text-color) rounded-xl py-1 px-2 md:hidden  w-full max-w-[260px]">
          <SearchBar />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <div className="hidden md:flex gap-1 items-center justify-center">
            <img
              className="w-8 h-8 md:w-10 md:h-10 rounded-full"
              src={user?.picture}
              alt="user"
            />

            <button
              onClick={() => {
                logout({ logoutParams: { returnTo: window.location.origin } });
              }}
              className=" bg-linear-to-r from-(--secondary-accent-color) to-(--primary-accent-color) px-2 py-1 rounded active:scale-95"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              loginWithRedirect();
            }}
            className="hidden md:block bg-linear-to-r from-(--secondary-accent-color) to-(--primary-accent-color) px-2 py-1 rounded active:scale-95"
          >
            Login
          </button>
        )}
        <button
          onClick={() => {
            setActive((prev) => !prev);
          }}
          className="md:hidden border-none outline-none"
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </div>

      <div className="md:hidden">
        {active && <MobileMenu active={active} setActive={setActive} />}
      </div>
    </nav>
  );
};

export default Navbar;
