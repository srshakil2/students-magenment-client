import { useContext } from "react";
import { Auth } from "../../Context/AuthProvider";
import chackOutUser from "../../Shared/LocalStorag/chackOutUser";

const LogOut = () => {
  const { user, setUser, setLoding } = useContext(Auth);
  const handelLogOut = () => {
    chackOutUser(user, setUser, setLoding);
  };
  return (
    <div className="dropdown dropdown-end md:mr-3 mr-1">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://i.ibb.co/chVvN8vP/TS-4.jpg"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <button onClick={handelLogOut}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default LogOut;
