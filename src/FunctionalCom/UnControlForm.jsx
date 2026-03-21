import { useRef } from "react";

function UnControlForm() {
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form data is ", inputRef.current.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default UnControlForm;
