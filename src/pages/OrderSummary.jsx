import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h4>Order Confirmed ✔️</h4>
      <button onClick={handleGoBack}>Go Back 🔙</button>
    </div>
  );
};

export default OrderSummary;
