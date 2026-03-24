import { useId } from "react";

function Sample() {
  const email = useId();
  const error = useId();

  return (
    <>
      <label htmlFor={email}>Email</label>
      <input type="text" id={email} aria-describedby={error} />
      {error && <p>Username is required</p>}
      {/* <p id={error}>Username is required</p> */}
    </>
  );
}
export default Sample;
