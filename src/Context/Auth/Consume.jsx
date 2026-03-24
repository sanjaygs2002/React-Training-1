import { useContext } from "react";
import AuthContext from "./Authentication";
function Consume() {
  const { user, setUser } = useContext(AuthContext);
  return (
    <>
      <p>User: {user ? user : "No user found"}</p>
      <button onClick={() => setUser("Sanjay")}>Login as Sanjay</button>
    </>
  );
}
export default Consume;
