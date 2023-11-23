import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Testing <AddCategory/>", () => {
  test("should change the value of the input box", () => {
    const inputValue = "Hello";
    render(<AddCategory onNewVal={() => {}} />);
    const searchBox = screen.getByRole("textbox");

    fireEvent.input(searchBox, { target: { value: inputValue } });
    expect(searchBox.value).toBe("Hello");
  });

  test("should call onNewVal if the input box has a value", () => {
    const inputValue = "Iron man";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewVal={onNewCategory} />);
    const searchBox = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(searchBox, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(searchBox.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("should not call onNewCategory if the input is empty", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewVal={onNewCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
