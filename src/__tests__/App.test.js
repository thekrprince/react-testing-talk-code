import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders App", () => {
  render(<App />);
  const heading = screen.getByText(/react testing demo/i);
  expect(heading).toBeInTheDocument();
});
