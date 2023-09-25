import { screen, render } from "@testing-library/react";
import HomePage from "./HomePage";

test("One anchor exists", () => {
  render(<HomePage />);

  const anchors = screen.getAllByRole("link");
  expect(anchors).toHaveLength(1);
  expect(anchors[0]).toHaveAttribute(
    "href",
    "https://medium.com/@dahvinchee/how-to-set-up-a-react-typescript-project-from-scratch-with-babel-and-webpack-6b069881229d",
  );
  expect(anchors[0]).toHaveTextContent(
    "There are lots of articles with explanations (like this one) for setup, like the tsconfig.json",
  );
});
