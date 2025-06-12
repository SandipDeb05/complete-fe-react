import { Link, Outlet } from "react-router-dom";

export const ServicesRoutes = [
  {
    path: "/",
    element: (
      <div>
        <h1>Welcome, James</h1>
        <nav>
          <ul>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/list"}>list</Link>
            </li>
            <li>
              <Link to={"/setting"}>setting</Link>
            </li>
            <li>
              <Link to={"/profile"}>profile</Link>
            </li>
            <li>
              <Link to={"/dashboard/analytics"}>analytics</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "dashboard",
        element: (
          <div>
            <h1>Dashboard</h1>
            <Outlet />
          </div>
        ),
        children: [
          {
            path: "analytics",
            element: <h1>analytics</h1>,
          },
        ],
      },
      {
        path: "list",
        element: <h1>list</h1>,
      },
      {
        path: "setting",
        element: <h1>setting</h1>,
      },
      {
        path: "profile",
        element: <h1>profile</h1>,
      },
    ],
  },
];
