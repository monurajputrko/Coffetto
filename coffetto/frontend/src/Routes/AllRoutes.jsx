import { Route, Routes } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import Products from "../components/Products/ProductsPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default AllRoutes;
