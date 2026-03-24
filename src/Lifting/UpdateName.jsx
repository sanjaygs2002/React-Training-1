function UpdateName({ name, setName }) {
  return (
    <>
      <p>Name:{name}</p>
      <button onClick={() => setName("Updated")}>CHange name</button>
    </>
  );
}
export default UpdateName;
