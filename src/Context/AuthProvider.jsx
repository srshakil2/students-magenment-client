import { createContext } from "react";

export const Auth = createContext();

const AuthProvider = ({ children }) => {
  let name = "Robiul Hasan";

  const providerValue = {
    name,
    // add more values later if needed
  };

  return <Auth.Provider value={providerValue}>{children}</Auth.Provider>;
};

export default AuthProvider;
