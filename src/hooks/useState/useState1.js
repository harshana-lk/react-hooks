import { useState } from "react";

const useState1 = () => {
  let [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};
export default useState1;
