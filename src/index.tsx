import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";

import { CartProvider } from "./contexts/cartContext";
import { ProductsProvider } from "./contexts/productContext";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
