import { useState } from "react";

const arr= ["Apples","Banana", "Mongo"];

function Task1(){
    const [item, setItem]=useState(arr);
    const [newItem, setNewItem]= useState("");

    const add= ()=>{
        if(newItem.trim()){
            setItem([...item,newItem]);
            setNewItem("");
        }
    }
    return (
        <>

        <h2>Fruit List</h2>

      {/* Add new item */}
      <input
        type="text"
        placeholder="Add new item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={add}>Add</button>
        {item.length>0 ? (item.map((item,index)=>(
            <li key={index}>{item}</li>
        ))):(
            <p>No list found</p>
        )}
        </>
    )
}
export default Task1;

