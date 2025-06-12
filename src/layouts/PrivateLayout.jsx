import React from "react";
import { Outlet } from "react-router-dom";

const PrivateLayout = ({ children }) => {
  return (
    <div>
      <h1>Hello Sandip</h1>
      <Outlet />
      <footer>
        <p>This is a private layout</p>
      </footer>
    </div>
  );
};

export default PrivateLayout;
