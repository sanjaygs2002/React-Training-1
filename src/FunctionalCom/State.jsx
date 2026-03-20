// useState hooks

import { useState } from "react";

function State() {
  const [count, setCount] = useState(0);

  function handleChange() {
    setCount(count + 1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={handleChange}>Increment</button>
    </>
  );
}
export default State;
