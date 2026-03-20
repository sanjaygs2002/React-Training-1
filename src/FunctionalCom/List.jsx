const users = [
  { name: "John", age: 20 },
  { name: "Jane", age: 21 },
  { name: "Jack", age: 20 },
  { name: "Jill", age: 22 },
];

function List() {
  return (
    <ul>
      {users.map((item) => (
        <li key={item.age}>{item.name}</li>
      ))}
    </ul>
  );
}
export default List;
