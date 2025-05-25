import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Auth } from "../../Context/AuthProvider";
import LogOut from "../LogOut/LogOut";

const Navber = () => {
  const { user } = useContext(Auth);
  const navigationLink = (
    <>
      <li className="text-xl font-medium">
        <NavLink to={"/"}>Home</NavLink>
      </li>
    </>
  );
  return (
    <div className="mx-auto max-w-[1600px] navbar bg-base-100 shadow-sm sticky top-0 z-10 opacity-95">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navigationLink}
          </ul>
        </div>

        {/* nav Logo */}
        <div className="max-w-14 max-h-14 my-auto ml-5">
          <NavLink to={"/"}>
            <img
              className="w-full h-full"
              src="https://img.icons8.com/?size=96&id=vo1XcGH8QAag&format=png"
              alt=""
            />
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navigationLink}</ul>
      </div>
      {/* Todu Log In btn */}
      <div className="navbar-end">
        {user ? (
          <LogOut></LogOut>
        ) : (
          <NavLink to={"/login"}>
            <button className="btn">LogIn</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navber;
