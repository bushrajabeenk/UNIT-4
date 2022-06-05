import React, { createContext } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  // const login = () => {
  //   setIsAuth(true);
  //   navigate("/feed");
  // };

  const login = () => {
    setIsAuth(true);
    if (state.from) {
      // if there is some history from where im coming from, then i should
      // navigate to the same history
      navigate(state.from, { replace: true });
    } else {
      navigate("/");
    }
  };

  const logout = () => {
    setIsAuth(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
