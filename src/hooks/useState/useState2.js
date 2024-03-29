import { useState } from "react";

const useState2 = () => {
  const [inputValue, setInputValue] = useState("Harshana");

  let onChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input type="text" placeholder="Enter Something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};
export default useState2;
