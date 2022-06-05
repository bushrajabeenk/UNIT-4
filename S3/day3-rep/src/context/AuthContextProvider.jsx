import React, { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsAuth(true);
    navigate("/feed");
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
