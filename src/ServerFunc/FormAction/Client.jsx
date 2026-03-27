import Server from "./Server";
function Client() {
  return (
    <>
      <form action={Server}>
        <input type="text" placeholder="Enter the name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default Client;
