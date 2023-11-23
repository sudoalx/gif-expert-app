import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Testing <AddCategory/>", () => {
  test("should change the value of the input box", () => {
    render(<AddCategory onNewVal={() => {}} />);
    const inputBox = screen.getByRole("textbox");
    fireEvent.input(inputBox, { target: { value: "Hello" } });
    expect(inputBox.value).toBe("Hello");
    screen.debug();
  });
});
