import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../todo-list";

const emptyTodoData = [];
const todoData = ["Build the feature", "Update the doc"];
const deleteMockFn = jest.fn();

describe("Todo list test", () => {
  it("renders empty todo list", async () => {
    render(<TodoList todoItems={emptyTodoData} />);
    const count = screen.getByText("Total Items: 0");
    expect(count).toBeInTheDocument();
  });

  it("renders todo list with the provided props", () => {
    render(<TodoList todoItems={todoData} />);
    expect(screen.getByText("Total Items: 2")).toBeInTheDocument();
    const item1 = screen.getByText(/Build the feature/i);
    expect(item1).toBeInTheDocument();
  });

  it("delete a todo list from provided props", () => {
    render(<TodoList todoItems={todoData} setTodoItems={deleteMockFn} />);
    expect(screen.getByText("Total Items: 2")).toBeInTheDocument();
    const removeBtn = screen.getAllByRole("button", { name: /remove/i });
    userEvent.click(removeBtn[0]);
    expect(deleteMockFn).toBeCalled();
  });
});
