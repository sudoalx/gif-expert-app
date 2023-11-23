const { render, screen, getByRole } = require("@testing-library/react");
const { default: GifExpertApp } = require("../src/GifExpertApp");

describe("Tests for <GifExpertApp/>", () => {
  test("should render an h1 with the title", () => {
    render(<GifExpertApp />);
    const title = "GIF Expert App";
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(title);
  });

  test("should have a button with the text Search category", () => {
    render(<GifExpertApp />);
    const btnText = "Search Category";
    const button = screen.getByRole("button").innerHTML;
    expect(button).toBe(btnText);
  });
});
