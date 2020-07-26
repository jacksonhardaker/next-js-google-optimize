import { useState } from "react";

export const Counter = ({ parentCount, parentSetCount }) => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    parentSetCount ? parentSetCount(count => count + 1) : setCount(count => count + 1);
  };

  return (
    <>
      <h2>{parentCount || count}</h2>
      <button onClick={onClick}>Increase Count</button>
    </>
  )
};
