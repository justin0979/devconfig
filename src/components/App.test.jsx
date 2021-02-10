import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders strings", () => {
  act(() => {
    render(<App />, container);
  });
  const button = container.querySelector("button");
  expect(button.textContent).toBe("lazy load");
});
