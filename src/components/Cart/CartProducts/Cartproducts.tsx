import { ICartProduct } from "../../../models";
import CartProduct from "./CartProduct";
import "./cardProducts.scss";

interface IProps {
  products: ICartProduct[];
}

const CartProducts = ({ products }: IProps) => {
  return (
    <div className="cartProductsContainer">
      {products?.length ? (
        products.map((p) => <CartProduct product={p} key={p.sku} />)
      ) : (
        <p className="cartProductsEmpty">
          Add some products in the cart <br />
          🙂
        </p>
      )}
    </div>
  );
};

export default CartProducts;
