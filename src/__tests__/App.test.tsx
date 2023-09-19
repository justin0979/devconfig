import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders component", () => {
  render(<App />);
  screen.debug();
  const div = screen.getByTestId("apptest");
  expect(div).toBeInTheDocument();
});

test("links shows up", () => {
  render(<App />);

  const links = screen.getAllByRole("link");
  expect(links).toHaveLength(3);

  for (let link of links) {
    console.log(link.children);
  }
});
