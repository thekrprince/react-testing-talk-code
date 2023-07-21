import { render, screen } from "@testing-library/react";
import AddInput from "../add-input";

it("renders add input component", () => {
  render(<AddInput />);

  const inputPlaceholder = screen.getByPlaceholderText("Enter value to add");
  expect(inputPlaceholder).toBeInTheDocument();

  const addBtn = screen.getByRole("button", { name: "Add" });
  expect(addBtn).toBeInTheDocument();
});
