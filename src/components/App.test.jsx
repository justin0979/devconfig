import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("button renders strings", () => {
  render(<App />);
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Lazy load");
});
