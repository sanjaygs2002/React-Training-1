import { useState } from "react";
import DisplayName from "./DisplayName";
import UpdateName from "./UpdateName";
function Parent() {
  const [name, setName] = useState("Sanjay");

  return (
    <>
      <DisplayName name={name} />
      <UpdateName name={name} setName={setName} />
    </>
  );
}

export default Parent;
