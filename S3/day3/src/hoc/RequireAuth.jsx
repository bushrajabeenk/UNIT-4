import React from "react";
import { AuthContext } from "./../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default RequireAuth;
