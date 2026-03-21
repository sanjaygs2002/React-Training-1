import { useState } from "react";

const arr = ["Banana", "Apples", "Mongo"];

function Task1() {
  const [item, setItem] = useState(arr);
  const [newItem, setNewItem] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const add = () => {
    if (newItem.trim()) {
      setItem([...item, newItem]);
      setNewItem("");
    }
  };

  const removeItem = (itemToRemove) => {
    setItem(item.filter((item) => item !== itemToRemove));
  };

  //   const displayItem = item
  //     .filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
  //     .sort((a, b) => (sortAsc ? a.localeCompare(b) : b.localeCompare(a)));
  const displayItem = item
    .filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      console.log(a, b);
      return sortAsc ? a.localeCompare(b) : b.localeCompare(a);
    });
  return (
    <>
      <h2>Fruit List</h2>
      <input
        type="text"
        placeholder="Add new item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={add}>Add</button>
      <br />
      <input
        type="text"
        placeholder="Search box"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={() => setSortAsc(!sortAsc)}>
        {sortAsc ? "Sort dec" : "sort Asc"}
      </button>
      <ul>
        {displayItem.map((item) => (
          <li key={item}>
            {item} <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Task1;
