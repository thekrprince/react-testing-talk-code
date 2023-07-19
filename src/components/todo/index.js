import React, { useState } from "react";
import TodoList from "./todo-list";
import AddInput from "./add-input";
import "./todo.css";

const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);

  return (
    <div className="todo">
      Todo List
      <AddInput todoItems={todoItems} setTodoItems={setTodoItems} />
      <TodoList todoItems={todoItems} setTodoItems={setTodoItems} />
    </div>
  );
};

export default Todo;
