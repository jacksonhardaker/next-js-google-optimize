import { useState } from "react";
import { useGoogleOptimize } from "../context/WithGoogleOptimize";

export const Counter = ({ parentCount, parentSetCount }) => {
  const [count, setCount] = useState(0);
  const { activate } = useGoogleOptimize();

  const onClick = () => {
    parentSetCount ? parentSetCount(count => count + 1) : setCount(count => count + 1)
    activate();
  };
  return (
    <>
      <h2>{parentCount || count}</h2>
      <button onClick={onClick}>Increase Count</button>
    </>
  )
};
