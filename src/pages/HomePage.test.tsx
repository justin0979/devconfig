import { screen, render } from "@testing-library/react";
import HomePage from "./HomePage";

test("One anchor exists", () => {
  render(<HomePage />);

  const anchor = screen.getAllByRole("link");
  expect(anchor).toHaveLength(1);
});
