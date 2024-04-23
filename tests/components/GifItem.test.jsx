import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("test on <GiftItem />", () => {
  const title = "test";
  const url = "https://cdn-icons-png.flaticon.com/512/4838/4838856.png";

  test("should match with the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });
});
