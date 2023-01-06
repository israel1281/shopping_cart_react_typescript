import { render } from "@testing-library/react";
import { CartProvider } from "../../contexts/cartContext";
import { ProductsProvider } from "../../contexts/productContext";
import App from "./App";

describe("App component", () => {
  const setup = () => {
    return render(
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    );
  };

  test("should render correctly", () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });
});
