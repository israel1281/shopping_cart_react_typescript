import { CartProvider } from "../../../contexts/cartContext";
import { mockCartProducts } from "../../../utils/mockData";

import CartProducts from ".";

describe("[CartProducts Component", () => {
  const setup = (props = {}) => {
    return (
      <CartProvider>
        <CartProducts products={mockCartProducts} {...props} />
      </CartProvider>
    );
  };

  test("should render correctly", () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });
});
