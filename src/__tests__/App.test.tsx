import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders component", () => {
  render(<App />);
  const div = screen.getByTestId("apptest");
  expect(div).toBeInTheDocument();
});
