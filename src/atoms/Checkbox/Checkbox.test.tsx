import { render, fireEvent, screen } from "@testing-library/react";
import Checkbox from ".";

const mockLabel = "L";
const mockHandleOnChange = jest.fn();

describe("[atoms] - Checkbox", () => {
  const setup = () => {
    return render(
      <Checkbox label={mockLabel} handleOnChange={mockHandleOnChange} />
    );
  };

  test("should render correctly with label and a checkmark", () => {
    setup();
    expect(screen.getByText(mockLabel)).toBeInTheDocument();
    expect(screen.getByTestId("check_label")).toBeTruthy();
  });

  test("should toggle checked when clicked", () => {
    setup();
    const checkbox = screen.getByTestId("check_box");

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();

    expect(mockHandleOnChange).toBeCalledTimes(2);
  });
});
