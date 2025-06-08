import React, { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { Navigate, useLocation } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const { logIn } = useAuthContext();

  const handleLogin = () => {
    logIn(user);
  };
  console.log(location);

  return (
    <div>
      <Navigate to="/users" path={{ state: location.pathname }} />
      <label htmlFor="username">
        Username:{" "}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
