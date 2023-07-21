import { render, screen } from "@testing-library/react";
import TodoList from "../todo-list";

const emptyTodoData = [];
const todoData = ["Build the feature", "Update the doc"];

describe("Todo list test", () => {
  it("renders empty todo list", async () => {
    render(<TodoList todoItems={emptyTodoData} />);
    const count = screen.getByText("Total Items: 0");
    expect(count).toBeInTheDocument();
  });

  it("renders todo list", () => {
    render(<TodoList todoItems={todoData} />);
    const count = screen.getByText("Total Items: 2");
    expect(count).toBeInTheDocument();
    const item1 = screen.getByText(/Build the feature/i);
    expect(item1).toBeInTheDocument();
  });
});
