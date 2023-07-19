import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h4>Counter</h4>
      <div>
        <p className="count-val">{counter}</p>
        <button onClick={() => setCounter((prevState) => prevState - 1)}>
          -
        </button>
        <button onClick={() => setCounter((prevState) => prevState + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
