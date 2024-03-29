import React from "react";
import { AuthContext } from "./../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Feed = () => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return <div>Feed</div>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default Feed;
