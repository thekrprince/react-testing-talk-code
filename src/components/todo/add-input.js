import React, { useState } from "react";

const AddInput = ({ todoItems, setTodoItems }) => {
  const [inputVal, setInputVal] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = [...todoItems];
    setTodoItems([...obj, inputVal]);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddInput;
