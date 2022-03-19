import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import react from "react";
import Welcome from "./Component/Welcome";
import Product from "./Component/product";
import MainHeader from "./Component/MainHeader";
import ProductDetails from "./Component/ProductDetails";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome></Welcome>} />
          <Route path="/product" element={<Product></Product>} exact />
          <Route
            path="/product/:productId"
            element={<ProductDetails></ProductDetails>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
