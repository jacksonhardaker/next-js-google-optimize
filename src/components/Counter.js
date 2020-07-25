import { useState } from "react";

export const Counter = ({ parentCount, parentSetCount }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>{parentCount || count}</h2>
      <button onClick={() => parentSetCount ? parentSetCount(count => count + 1) : setCount(count => count + 1)}>Increase Count</button>
    </>
  )
};
