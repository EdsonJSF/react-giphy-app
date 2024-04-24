import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Test on <AppCategory />", () => {
  const value = "test";

  test("should change input (textbox) value", () => {
    render(<AddCategory onValue={() => {}} />);

    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value } });

    expect(input.value).toBe(value);
  });
});
