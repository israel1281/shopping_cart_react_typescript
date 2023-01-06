import { mockProducts } from "../../utils/mockData";

import { CartProvider } from "../../contexts/cartContext";
import Products from ".";

describe("Products Component", () => {
  const setup = (props = {}) => {
    return (
      <CartProvider>
        <Products products={mockProducts} {...props} />
      </CartProvider>
    );
  };

  test("should render correctly", () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });
});
