import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("renders with a heading", () => {
  render(<App />);
  const div = screen.getByTestId("apptest");
  expect(div).not.toBeNull();
});
