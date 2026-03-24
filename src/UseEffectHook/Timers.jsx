import { useEffect, useState } from "react";

function Timer() {
  const [state, setState] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => res.json())
        .then((data) => setState(data))
        .catch((err) => console.log(err));
    }, 2000);
    return () => clearInterval(timer);
  }, [state]);

  return (
    <>
      {state.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </>
  );
}
export default Timer;
