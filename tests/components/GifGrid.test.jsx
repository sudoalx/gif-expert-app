import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe("Tests for GifGrid", () => {
  const category = "Iron Man";
  test("should show loading at start", () => {
    render(<GifGrid category={category} />);
    screen.debug();
  });
  test("should show Items when images are loaded", () => {});
});
