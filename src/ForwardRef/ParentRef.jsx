import { useRef } from "react";
import ChildRef from "./ChildRef";

function ParentRef() {
  const inputRef = useRef();

  const handleChange = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <ChildRef ref={inputRef} />
      <button onClick={handleChange}>Submit</button>
    </div>
  );
}
export default ParentRef;
