import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Tests for GifGrid", () => {
  const category = "Iron Man";
  test("should show loading at start", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });

  test("should show Items when images are loaded", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Iron Man",
        url: "https://localhost/iron-man.gif",
      },
      {
        id: "DEF",
        title: "Captain America",
        url: "https://localhost/captain-america.gif",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
