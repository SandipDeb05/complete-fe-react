import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "",
    };
  };
  return (
    <nav className="d-flex gap-4 list-unstyled bg-light w-100">
      <NavLink to="/" className="text-decoration-none" style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink
        to="about"
        className="text-decoration-none"
        style={navLinkStyles}
      >
        About
      </NavLink>
      <NavLink
        to="products"
        className="text-decoration-none"
        style={navLinkStyles}
      >
        Products
      </NavLink>
      <NavLink
        to="user-details"
        className="text-decoration-none"
        style={navLinkStyles}
      >
        User Details
      </NavLink>
      <NavLink
        to="users"
        className="text-decoration-none"
        style={navLinkStyles}
      >
        Users
      </NavLink>
      <NavLink
        to="profile"
        className="text-decoration-none"
        style={navLinkStyles}
      >
        Profile
      </NavLink>
    </nav>
  );
};

export default NavBar;
