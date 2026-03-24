import { useId } from "react";

function Id() {
  const emailId = useId();
  console.log(emailId);

  return (
    <>
      <label htmlFor={emailId}>Email:</label>
      <input type="text" id={emailId} />
    </>
  );
}
export default Id;
