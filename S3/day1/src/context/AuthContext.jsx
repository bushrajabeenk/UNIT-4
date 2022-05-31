import React, { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthorised, setIsAuthorised] = useState(true);

  const login = (username, password) => {
    console.log(username,password);
    if (username && password) {
      setIsAuthorised(true);
    }
  };

  const logout = () => {
    setIsAuthorised(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthorised, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
