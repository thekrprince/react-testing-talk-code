import { render, screen } from "@testing-library/react";
import Todo from "..";
import userEvent from "@testing-library/user-event";

describe("Todo test", () => {
  it("renders todo component", () => {
    render(<Todo />);
    const heading = screen.getByText("Todo List");
    expect(heading).toBeInTheDocument();
    const count = screen.getByText("Total Items: 0");
    expect(count).toBeInTheDocument();
  });

  it("add items in todo list component", () => {
    render(<Todo />);
    expect(screen.getByText("Total Items: 0")).toBeInTheDocument();

    const inputPlaceholder = screen.getByPlaceholderText("Enter value to add");
    expect(inputPlaceholder).toBeInTheDocument();
    const addBtn = screen.getByRole("button", { name: "Add" });

    // Adding 1st item
    userEvent.type(inputPlaceholder, "Write the tests");
    userEvent.click(addBtn);
    expect(screen.getByText("Total Items: 1")).toBeInTheDocument();
    expect(screen.getByText("Write the tests")).toBeInTheDocument();

    // Adding 2nd item
    userEvent.type(inputPlaceholder, "Complete the feature");
    userEvent.click(addBtn);
    expect(screen.getByText("Total Items: 2")).toBeInTheDocument();
    expect(screen.getByText("Complete the feature")).toBeInTheDocument();

    // Deleting the 1st item and checking that 1st item should not be present
    const deleteItemBtns = screen.getAllByRole("button", { name: "Remove" });
    userEvent.click(deleteItemBtns[0]);
    expect(screen.queryByText("Write the tests")).not.toBeInTheDocument();

    expect(screen.getByText("Total Items: 1")).toBeInTheDocument();
  });
});
