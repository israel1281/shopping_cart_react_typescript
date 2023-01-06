import formatPrice from "../../utils/formatPrice";
import CartProducts from "./CartProducts";

import { useCart } from "../../contexts/cartContext";

import "./cart.scss";

const Cart = () => {
  const { products, total, isOpen, openCart, closeCart } = useCart();

  const handleCheckout = () => {
    if (total.productQuantity) {
      alert(
        `Checkout - Subtotal: ${total.currencyFormat} ${formatPrice(
          total.totalPrice,
          total.currencyId
        )}`
      );
    } else {
      alert("Add some product in the cart!");
    }
  };

  const handleToggleCart = (isOpen: boolean) => () =>
    isOpen ? closeCart() : openCart();

  return (
    <div className="cartContainer" style={{ right: isOpen ? "0 " : "-550px" }}>
      <button
        className="cartButton"
        onClick={handleToggleCart(isOpen)}
        style={{
          left: isOpen ? "0 " : "-50px",
          backgroundColor: isOpen ? "#f2ab06ef" : "#002c41",
          transition: "all 0.3s",
        }}
      >
        {isOpen ? (
          <span>X</span>
        ) : (
          <div className="cartIcon">
            <div className="cartQuantity">{total.productQuantity}</div>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="cartContent">
          <div className="cartContentHeader">
            <div className="cartIcon">
              <div className="cartQuantity">{total.productQuantity} </div>
            </div>
            <span className="headerTitle">in Cart</span>
          </div>

          <CartProducts products={products} />

          <div className="cartFooter">
            <p className="sub">SUBTOTAL</p>
            <div className="subPrice">
              <p className="subPriceValue">{`${
                total.currencyFormat
              } ${formatPrice(total.totalPrice, total.currencyId)}`}</p>
              <p className="subPriceInstallment">
                {total.installments ? (
                  <span>
                    {`OR UP TO ${total.installments} x ${
                      total.currencyFormat
                    } ${formatPrice(
                      total.totalPrice / total.installments,
                      total.currencyId
                    )}`}
                  </span>
                ) : null}
              </p>
            </div>
            <button
              className="checkoutButton"
              onClick={handleCheckout}
              autoFocus
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
