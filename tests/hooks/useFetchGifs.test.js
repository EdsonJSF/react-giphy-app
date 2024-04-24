import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Test on useFetchGifs Hook", () => {
  const category = "test";

  test("should return the initial state", () => {
    const { result } = renderHook(() => useFetchGifs(category));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBe(true);
  });

  test("should return a gifs array", async () => {
    const { result } = renderHook(() => useFetchGifs(category));

    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
  });
});
