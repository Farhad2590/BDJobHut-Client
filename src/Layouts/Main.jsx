import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <div className="h-16 mb-4  z-10">
        <Navbar></Navbar>
      </div>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
