import { useContext } from "react";
import { Auth } from "../../../Context/AuthProvider";
import Loding from "../../../Pages/Loding/Loding";
import { Navigate } from "react-router-dom";

const StudentPrivet = ({ children }) => {
  const { user, loding } = useContext(Auth);

  if (loding) <Loding></Loding>;
  if (user) children;
  return <Navigate to={"/login"}></Navigate>;
};

export default StudentPrivet;
