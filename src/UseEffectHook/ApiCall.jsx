import { useEffect, useState } from "react";

function ApiCall() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setState(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {state.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
}
export default ApiCall;
