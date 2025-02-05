import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext); 
};

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
