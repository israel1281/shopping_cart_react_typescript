import { useEffect } from "react";

import { useProducts } from "../../contexts/productContext";
import "./app.scss";
import { useCart } from "../../contexts/cartContext";
import Loader from "../Loader";
import Filter from "../Filters/Filter";
import Products from "../Products";
import Cart from "../Cart";

function App() {
  const { isFetching, products, fetchProducts } = useProducts();
  const { closeCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="appContainer">
      {isFetching && <Loader />}
      <div className="twoColumnGrid" onClick={closeCart}>
        <div className="side">
          <Filter />
        </div>
        <div className="main">
          <main className="mainHeader">
            <p>{products?.length} Product(s) found</p>
          </main>
          <Products products={products} />
        </div>
      </div>
      <Cart />
    </div>
  );
}

export default App;
