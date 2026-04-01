import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import { useNavigate } from "react-router-dom";

function Products() {
    const navigate= useNavigate();
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name.trim() !== "") {
      dispatch(addToCart({ name }));
      setName("");
      navigate("/showItems")
    }
  };

  return (
    <div>
      <h2>Add Product</h2>

      <input
        type="text"
        value={name}
        placeholder="Enter product name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Products;