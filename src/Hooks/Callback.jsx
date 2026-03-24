import { useCallback, useState } from "react";

function Callback() {
  const [count, setCount] = useState(0);

  const countFunc = useCallback(() => {
    setCount((e) => e + 1);
  }, []);
  return (
    <>
      <p>{count}</p>
      <button onClick={countFunc}>Increment</button>
    </>
  );
}
export default Callback;
