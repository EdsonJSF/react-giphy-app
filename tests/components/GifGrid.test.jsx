import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Test on <GifGrid />", () => {
  const category = "test";

  test("should to show the loading", () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);

    expect(screen.getByText("Cargando ...")).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test("should show the gifs items", () => {
    const gifs = [
      { id: "1", title: "title 1", url: "url 1" },
      { id: "2", title: "title 2", url: "url 2" },
    ];

    useFetchGifs.mockReturnValue({
      gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(gifs.length);
  });
});
