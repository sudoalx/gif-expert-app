import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe("Test GifItem component", () => {
  test("should return a card with the Gif and title", () => {
    const title = "Marvel";
    const url = "https://github.com/iron-man.gif";
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should return image with url and alt specified", () => {
    const title = "Marvel";
    const url = "https://github.com/iron-man.gif";
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test("should display the title in the component", () => {
    const title = "Marvel";
    const url = "https://github.com/iron-man.gif";
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
