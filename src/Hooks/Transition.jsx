import { useState, useTransition } from "react";

function Transition() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const value = e.target.value;
    setName(value);

    startTransition(() => {
      const items = [];
      for (let i = 0; i < 10000; i++) {
        items.push(value);
      }
      setList(items);
    });
  }
  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      {isPending && <p>Loading</p>}

      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </>
  );
}
export default Transition;
