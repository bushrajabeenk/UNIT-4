import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./../context/AuthContextProvider";

const RequireAuth = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const { pathname } = useLocation();

  // if (isAuth) {
  //   return children;
  // } else {
  //   return <Navigate to="/login" />;
  // }

  //
  if (isAuth) {
    return children;
  } else {
    return (
      // redirecting to login page
      // instead of the below component. navigate()
      // could also be used, but a function needs to
      // return a componentalways,
      // so another component was introduced
      <Navigate
        to="/login"
        state={{ from: pathname }}
        replace
        // spacer
      />
    );
  }
};

export default RequireAuth;
