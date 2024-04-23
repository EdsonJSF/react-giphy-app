import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("test on <GiftItem />", () => {
  const title = "test";
  const url = "https://cdn-icons-png.flaticon.com/512/4838/4838856.png";

  test("should match with the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("should show the image with the title and url selected", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();

    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should show the title", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
