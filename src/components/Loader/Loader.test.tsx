import { render } from "@testing-library/react";

import Loader from ".";

describe("Loader Component", () => {
  const setup = () => {
    return render(<Loader />);
  };

  test("should render correctly", () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });
});
