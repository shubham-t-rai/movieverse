import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="bg-(--background-color) h-screen w-full text-(--primary-text-color)">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default App;
