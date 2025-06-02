import { AiOutlineRest } from "react-icons/ai";

const DeleteUser = ({ deleteHandler = () => {} }) => {
  return (
    <button onClick={deleteHandler}>
      <AiOutlineRest />
    </button>
  );
};

export default DeleteUser;
