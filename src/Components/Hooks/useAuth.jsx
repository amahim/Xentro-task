
import React, { useContext } from "react";

const useAuth = () => {
  const AuthContext = React.createContext();
  return useContext(AuthContext);
};

export default useAuth;
