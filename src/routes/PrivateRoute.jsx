import PrivateLayout from "../layouts/PrivateLayout";
import Dashboard from "../pages/private/Dashboard";
import Profile from "../pages/protected/profile";

const PrivateRoutes = [
  {
    path: "admin",
    element: <PrivateLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
];

export default PrivateRoutes;
