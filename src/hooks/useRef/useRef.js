import { useRef } from "react";

const useRef = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    // inputRef.current.value = "";
    // inputRef.current.focus();
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <input type="text" placeholder="Enter Something..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
      {/* {inputRef && <h2>{inputRef.current.value}</h2>} */}
    </div>
  );
};
export default useRef;
