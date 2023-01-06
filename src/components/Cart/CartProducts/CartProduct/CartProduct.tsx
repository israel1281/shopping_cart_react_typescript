import formatPrice from "../../../../utils/formatPrice";
import { ICartProduct } from "../../../../models";

import { useCart } from "../../../../contexts/cartContext";
import { MdCancel } from "react-icons/md";
import "./cartProduct.scss";

interface IProps {
  product: ICartProduct;
}
const CartProduct = ({ product }: IProps) => {
  const { removeProduct, increaseProductQuantity, decreaseProductQuantity } =
    useCart();
  const {
    sku,
    title,
    price,
    style,
    currencyId,
    currencyFormat,
    availableSizes,
    quantity,
  } = product;

  const handleRemoveProduct = () => removeProduct(product);
  const handleIncreaseProductQuantity = () => increaseProductQuantity(product);
  const handleDecreaseProductQuantity = () => decreaseProductQuantity(product);

  return (
    <div className="cartProductContainer">
      <button onClick={handleRemoveProduct} className="cartDeleteButton">
        <MdCancel />
      </button>

      <img
        src={require(`../../../../assets/products/${sku}-1-cart.webp`)}
        alt={title}
        className="cartImage"
      />
      <div className="cartDetail">
        <p className="cartDetailTitle">{title}</p>
        <p className="cartDetailDesc">
          {`Size: ${availableSizes[0]} | Color: ${style}`} <br />
          Quantity: {quantity}
        </p>
      </div>
      <div className="cartPrice">
        <p>{`${currencyFormat}  ${formatPrice(price, currencyId)}`}</p>
        <div>
          <button
            onClick={handleDecreaseProductQuantity}
            disabled={quantity === 1 ? true : false}
            className="changeQuantity"
          >
            -
          </button>
          <button
            onClick={handleIncreaseProductQuantity}
            className="changeQuantity"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
