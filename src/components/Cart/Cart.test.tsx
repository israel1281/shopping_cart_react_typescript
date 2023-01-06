import { CartProvider } from "../../contexts/cartContext";

import Cart from ".";

describe("[CartProduct Component", () => {
  const setup = () => {
    return (
      <CartProvider>
        <Cart />
      </CartProvider>
    );
  };

  test("should render correctly", () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });
});
