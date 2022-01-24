import { render, screen } from "@testing-library/react";
import Text from "./index";
const test = {
  variant: "h1",
  text: "My Library",
  height: "45px",
};
it("renders a Button", () => {
  render(<Text variant={test.variant} text={test.text} height={test.height} />);
  const ReactElement = screen.getByTestId("text");
  expect(ReactElement).toBeInTheDocument();
});
