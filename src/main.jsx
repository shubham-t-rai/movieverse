import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import WatchList from "./pages/WatchList.jsx";
import { MovieProvider } from "./context/movie.context.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import Protected from "./pages/Protected.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/watchlist",
        element: (
          <Protected>
            <WatchList />
          </Protected>
        ),
      },
      { path: "/moviedetails/:id", element: <MovieDetails /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
    ,
  </Auth0Provider>,
);
