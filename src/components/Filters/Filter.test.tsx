import { screen } from "@testing-library/react";

import Filter, { availableSizes } from "./Filter";

describe("Filter component", () => {
  const setup = () => {
    return <Filter />;
  };

  test("should render corectly", () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });

  test("should render every filter size avaliable", () => {
    expect(availableSizes.every((size) => screen.findByText(size))).toBe(true);
  });
});
