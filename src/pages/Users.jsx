import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <div>
      <div>
        <button
          onClick={() => setSearchParams({ filter: "active", isSorted: true })}
        >
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset</button>
      </div>
      <ul>
        <li>
          <Link to="1">User 1</Link>
        </li>
        <li>
          <Link to="2">User 2</Link>
        </li>
        <li>
          <Link to="3">User 3</Link>
        </li>
      </ul>
      {showActiveUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
      <Outlet />
    </div>
  );
};

export default Users;
