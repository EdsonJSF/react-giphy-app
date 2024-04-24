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

  test("should call onValue if the input have any value", () => {
    const onValue = jest.fn();

    render(<AddCategory onValue={onValue} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onValue).toHaveBeenCalled();
    expect(onValue).toHaveBeenCalledTimes(1);
    expect(onValue).toHaveBeenCalledWith(value);
  });

  test("shouldnt call onValue if the input is empty", () => {
    const onValue = jest.fn();

    render(<AddCategory onValue={onValue} />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onValue).not.toHaveBeenCalled();
    expect(onValue).toHaveBeenCalledTimes(0);
  });
});
