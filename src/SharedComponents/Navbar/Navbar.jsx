import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/Jobhurt-logo.png";

const Navbar = () => {
  const providerLink = [
    { name: "Home", route: "/" },
    { name: "Post a Job", route: "/post-job" },
    { name: "Manage Jobs", route: "/manage-jobs" },
    { name: "Company Profile", route: "/company-profile" },
    { name: "Application List", route: "/application-list" },
  ];

  // const seekersLink = [
  //   { name: "Home", route: "/" },
  //   { name: "All Jobs", route: "/all-jobs" },
  //   { name: "Applied Jobs", route: "/applied-jobs" },
  //   { name: "Contact Us", route: "/contact-us" },
  // ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed z-50">
      <div className="md:flex items-center justify-between bg-white py-3 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Link to="/">
            <img className="h-12 w-24" src={logo} alt="" />{" "}
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {providerLink.map((link, index) => (
            <li
              key={index}
              className="md:ml-8 md:my-0 my-7 font-semibold hover:text-blue-200"
            >
              <NavLink
                to={link.route}
                key={index}
                className={({ isActive, isPending }) => (
                  isPending ? "" : "", isActive ? "text-blue-200" : ""
                )}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <Link
            className=" bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static hover:bg-blue-400"
            to="/login"
          >
            Login
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
