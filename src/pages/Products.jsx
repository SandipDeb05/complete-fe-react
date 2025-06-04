import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <input type="search" placeholder="Search Products" />
      <nav className="d-flex gap-4 ">
        <Link to="featured" className="text-decoration-none text-secondary">
          Featured
        </Link>
        <Link to="new" className="text-decoration-none text-success">
          New
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;
