const TodoList = ({ todoItems }) => {
  return (
    <div>
      {todoItems.map((item, id) => (
        <p key={id}>{item}</p>
      ))}
    </div>
  );
};

export default TodoList;
