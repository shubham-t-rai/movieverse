import { X } from "lucide-react";
import NavLinks from "./NavLinks";
import { useAuth0 } from "@auth0/auth0-react";

const MobileMenu = ({ active, setActive }) => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          active ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setActive(false)}
      />
      <div
        className={`bg-zinc-900 h-full w-64 flex flex-col gap-1 fixed top-0 right-0 px-2 py-2 z-50 transform transition-transform duration-300 ${active ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => {
            setActive(false);
          }}
          className="absolute top-2 right-4"
          aria-label="Close menu"
        >
          <X />
        </button>
        {isAuthenticated ? (
          <div className="flex flex-col gap-2 px-2">
            <img
              className="max-w-10 max-h-10 rounded-full"
              src={user?.picture}
              alt=""
              srcset=""
            />
            <NavLinks onClick={() => setActive(false)} />
            <button
              onClick={() => {
                logout({ logoutParams: { returnTo: window.location.origin } });
              }}
              className="w-fit bg-linear-to-r from-(--secondary-accent-color) to-(--primary-accent-color) px-2 py-1 rounded active:scale-95"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-2 px-2">
            <NavLinks onClick={() => setActive(false)} />
            <button
              onClick={() => {
                loginWithRedirect();
              }}
              className="w-fit bg-linear-to-r from-(--secondary-accent-color) to-(--primary-accent-color) px-2 py-1 rounded active:scale-95"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileMenu;
