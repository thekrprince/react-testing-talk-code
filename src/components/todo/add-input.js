import React, { useState } from "react";

const AddInput = ({ todoItems, setTodoItems }) => {
  const [inputVal, setInputVal] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = [...todoItems];
    setTodoItems([...obj, inputVal]);
    setInputVal("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Enter value to add"
        className="input"
      />
      <button type="submit" className="submit-btn">
        Add
      </button>
    </form>
  );
};

export default AddInput;
