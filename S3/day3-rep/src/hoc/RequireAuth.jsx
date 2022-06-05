import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./../context/AuthContextProvider";

const RequireAuth = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default RequireAuth;
