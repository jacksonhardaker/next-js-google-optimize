import { useState } from "react";

// Causes an error on initial render in next.js
// const mediaQuery = window.matchMedia?.("only screen and (max-width: 600px)");
// Doesn't cause an error on initial render
const mediaQuery = globalThis.matchMedia?.("only screen and (max-width: 600px)");

export const Counter = ({ parentCount, parentSetCount }) => {
  const [count, setCount] = useState(0);
  const [mediaQueryResult] = useState(mediaQuery?.matches);

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
