import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";

const PrivateRoute = ({ children }) => {
  const { loggedIn } = useAuth(); 

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children; 
};

export default PrivateRoute;
