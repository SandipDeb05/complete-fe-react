import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./store";
import Home from "./pages/Home";
import UserDetails from "./components/UserDetails";
import { CounterContextProvider } from "./context/counterContext";
import NavBar from "./pages/NavBar";
import OrderSummary from "./pages/OrderSummary";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
import FeaturedProducts from "./pages/FeaturedProducts";
import NewProducts from "./pages/NewProducts";
import Users from "./pages/Users";
import NewUserDetails from "./pages/NewUserDetails";

const LazyAbout = React.lazy(() => import("./pages/About"));

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
        <Route
          path="about"
          element={
            <Suspense fallback="...loading..">
              <LazyAbout />
            </Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<NewUserDetails />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;
