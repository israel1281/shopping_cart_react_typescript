import { CartProvider } from "../../../contexts/cartContext";
import { mockCartProducts } from "../../../utils/mockData";

import Product from ".";

describe("Product Component", () => {
  const setup = (props = {}) => {
    return (
      <CartProvider>
        <Product product={mockCartProducts[0]} {...props} />
      </CartProvider>
    );
  };

  test("should render correctly", () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });
});
