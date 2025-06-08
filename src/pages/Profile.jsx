import { useAuthContext } from "../context/authContext";
import Login from "./Login";

const Profile = () => {
  const { user, logout } = useAuthContext();

  return (
    <div>
      <h4>Profile page</h4>
      {!!user && <h5>Username: {user}</h5>}
      {!user ? <Login /> : <button onClick={logout}>Log out</button>}
    </div>
  );
};

export default Profile;
