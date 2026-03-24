import { useReducer } from "react";

const initialState = { count: 0 };
function reducerFun(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Reducer() {
  const [state, dispatch] = useReducer(reducerFun, initialState);
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
    </>
  );
}
export default Reducer;
