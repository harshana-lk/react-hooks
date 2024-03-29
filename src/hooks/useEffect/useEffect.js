import axios from "axios";
import { useEffect, useState } from "react";

const useEffect = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[count].email);
        console.log("API WAS CALLED");
      });
  }, [count]);
  return (
    <div>
      <h3>{data}</h3>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};
export default useEffect;
