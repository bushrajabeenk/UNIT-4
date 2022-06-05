import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/AuthContextProvider";

const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate("/feed");
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <br />
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
