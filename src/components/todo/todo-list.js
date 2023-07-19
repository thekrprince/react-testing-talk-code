const TodoList = ({ setTodoItems, todoItems }) => {
  const deleteHandler = (id) => {
    const obj = [...todoItems];
    obj.splice(id, 1);
    setTodoItems(obj);
  };
  return (
    <div>
      {todoItems.map((item, id) => (
        <div>
          <p key={id}>{item}</p>
          <button onClick={() => deleteHandler(id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
