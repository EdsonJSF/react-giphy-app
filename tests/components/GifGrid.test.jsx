import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe("Test on <GifGrid />", () => {
  const category = "test";

  test("should to show the loading", () => {
    render(<GifGrid category={category} />);

    screen.debug();

    // expect(screen.getByText("Cargando")).toBeTruthy();
    expect(screen.getByText("Cargando ...")).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });
});
