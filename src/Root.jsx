import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoute";
import { ServicesRoutes } from "./pages/services/routes/services";

const routes = createBrowserRouter([
  //   { path: "/", element: <h1>Hello</h1> },
  //   ...PrivateRoutes,
  ...ServicesRoutes,
]);

const Root = ({ children }) => {
  return <RouterProvider router={routes}>{children}</RouterProvider>;
};

export default Root;
