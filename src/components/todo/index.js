import React, { useState } from "react";
import TodoList from "./todo-list";
import AddInput from "./add-input";
import "./todo.css";

const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);

  return (
    <section className="todo">
      <h4>Todo List</h4>
      <div className="todo-box">
        <AddInput todoItems={todoItems} setTodoItems={setTodoItems} />
        <TodoList todoItems={todoItems} setTodoItems={setTodoItems} />
      </div>
    </section>
  );
};

export default Todo;
