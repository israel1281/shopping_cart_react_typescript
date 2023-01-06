import { KeyboardEvent, useState } from "react";

import formatPrice from "../../../utils/formatPrice";
import { IProduct } from "../../../models";

import { useCart } from "../../../contexts/cartContext";
import "./product.scss";

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { openCart, addProduct } = useCart();
  const {
    sku,
    title,
    price,
    installments,
    currencyId,
    currencyFormat,
    isFreeShipping,
  } = product;

  const [hover, setHover] = useState(false);

  const formattedPrice = formatPrice(price, currencyId);
  let productInstallment;

  if (installments) {
    const installmentPrice = price / installments;

    productInstallment = (
      <p className="installment">
        <span>or {installments} x</span>
        <b>
          {currencyFormat}
          {formatPrice(installmentPrice, currencyId)}
        </b>
      </p>
    );
  }

  const handleAddProduct = () => {
    addProduct({ ...product, quantity: 1 });
    openCart();
  };

  const handleAddProductWhenEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.code === "Space") {
      addProduct({ ...product, quantity: 1 });
      openCart();
    }
  };

  return (
    <div
      className="productContainer"
      onKeyUp={handleAddProductWhenEnter}
      key={sku}
      tabIndex={1}
    >
      {isFreeShipping && <div className="shopping">Free shipping</div>}
      <img
        className="productImg"
        src={
          hover
            ? require(`../../../assets/products/${sku}-2-product.webp`)
            : require(`../../../assets/products/${sku}-1-product.webp`)
        }
        alt={title}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      />
      <p className="productTitle">{title}</p>
      <div className="productPrice">
        <p className="productValue">
          <small>{currencyFormat}</small>
          <b>{formattedPrice.substring(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substring(formattedPrice.length - 3)}</span>
        </p>
        {productInstallment}
      </div>
      <button className="buyButton" onClick={handleAddProduct} tabIndex={-1}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
