import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleSubmitOrder = () => {
    navigate("order-summary", { replace: true });
  };
  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleSubmitOrder}>Place Order</button>
    </div>
  );
};

export default Home;
