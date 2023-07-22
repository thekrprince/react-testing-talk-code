const TodoList = ({ setTodoItems, todoItems }) => {
  const deleteHandler = (id) => {
    const obj = [...todoItems];
    obj.splice(id, 1);
    setTodoItems(obj);
  };
  return (
    <div>
      {todoItems.map((item, id) => (
        <div className="item" data-testid={`item-${id}`} key={id}>
          <p>{item}</p>
          <button onClick={() => deleteHandler(id)}>Remove</button>
        </div>
      ))}
      <p>Total Items: {todoItems.length}</p>
    </div>
  );
};

export default TodoList;
