import { useParams } from "react-router-dom";

const NewUserDetails = () => {
  const { userId } = useParams();
  return <div>Details About Users {userId}</div>;
};

export default NewUserDetails;
