import { CartProvider } from "../../../../contexts/cartContext";
import { mockCartProducts } from "../../../../utils/mockData";

import CartProduct from ".";

describe("[CartProduct Component", () => {
  const setup = (props = {}) => {
    return (
      <CartProvider>
        <CartProduct product={mockCartProducts[0]} {...props} />
      </CartProvider>
    );
  };

  test("should render correctly", () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });
});
