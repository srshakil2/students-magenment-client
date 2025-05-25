import { createContext, useEffect, useState } from "react";
import chackUser from "./chackUser";

export const Auth = createContext();

const AuthProvider = ({ children }) => {
  const [loding, setLoding] = useState(true);
  const [user, setUser] = useState(null);
  let name = "Chack chack Robiul Hasan";

  const data = {
    name,
    user,
    setUser,
    loding,
    setLoding,
    // add more values later if needed
  };

  // console.log("Auth user---", user);
  useEffect(() => {
    chackUser(user, setUser);
  }, [user, setUser]);
  return <Auth.Provider value={data}>{children}</Auth.Provider>;
};

export default AuthProvider;
