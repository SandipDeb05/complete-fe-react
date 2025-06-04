import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./store";
import Home from "./pages/Home";
import UserDetails from "./components/UserDetails";
import { CounterContextProvider } from "./context/counterContext";
import About from "./pages/About";
import NavBar from "./pages/NavBar";
import OrderSummary from "./pages/OrderSummary";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
import FeaturedProducts from "./pages/FeaturedProducts";
import NewProducts from "./pages/NewProducts";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="user-details"
          element={
            <CounterContextProvider>
              <UserDetails />
            </CounterContextProvider>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;
