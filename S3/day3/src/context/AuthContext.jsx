import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthorised, setisAuthorised] = useState(true);

  const login = (username, password) => {
    if (username && password) {
      setisAuthorised(true);
    }
  };

  const logout = () => {
    setisAuthorised(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthorised, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
