import DeleteUser from "./DeleteUser";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser, removeAllUser } from "../store/slices/UserSlice";
import { useEffect } from "react";
import { fetchUser } from "../api/utils";
import { loggedIn } from "../store/auth/actions";
import { useCounterContext } from "../context/counterContext";

const UserDetails = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const { counter, dispatch: counterDispatch } = useCounterContext();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(loggedIn());
  }, []);

  const addNewUserHandler = () => {
    dispatch(
      addUser({
        id: Date.now(),
        name: `John Doe ${Date.now()}`,
      })
    );
  };

  const deleteUserHandler = (id) => {
    dispatch(removeUser({ id: id }));
  };

  const deleteAllUserHandler = () => {
    dispatch(removeAllUser());
  };

  return (
    <div>
      <h2>List of User Details</h2>
      <div>
        <p>Count :{counter}</p>
        <button onClick={() => counterDispatch({ type: "INCREMENT" })}>
          +
        </button>
        <button onClick={() => counterDispatch({ type: "DECREMENT" })}>
          -
        </button>
      </div>
      <button onClick={addNewUserHandler}>Add New User</button>
      <button onClick={deleteAllUserHandler}>Delete All Users</button>
      <ul>
        {users?.map((user) => {
          return (
            <li key={user.id}>
              <span>{user.name}</span>
              <DeleteUser deleteHandler={(e) => deleteUserHandler(user.id)} />
            </li>
          );
        })}
      </ul>
      <hr />
    </div>
  );
};

export default UserDetails;
