import { useAuth0 } from "@auth0/auth0-react";

const Protected = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <h1 className="text-white text-6xl">Loading....</h1>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl mb-4">🔒 Login Required</h1>
        <p className="mb-6">Please login to access your Watchlist</p>

        <button
          onClick={() => loginWithRedirect()}
          className="bg-(--primary-accent-color) px-6 py-2 rounded"
        >
          Login
        </button>
      </div>
    );
  }

  return children;
};

export default Protected;
