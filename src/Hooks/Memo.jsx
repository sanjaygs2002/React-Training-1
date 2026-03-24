import { useMemo, useState } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const sorting = useMemo(() => {
    const data = [4, 3, 5, 1, 3, 5, 7];
    return data.sort((a, b) => b - a);
  }, []);

  const calculateValue = useMemo(() => {
    console.log("calculating");
    return count * 2;
  }, [count]);
  return (
    <>
      <p>{calculateValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <input onChange={(e) => setName(e.target.value)} />
      <h1>{name}</h1>
      <p>Sorting Values:{sorting}</p>
    </>
  );
}
export default Memo;
