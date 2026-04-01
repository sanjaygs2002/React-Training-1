import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./Actions/actions";
import { useNavigate } from "react-router-dom";


function Product() {
    const navigate= useNavigate();
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name.trim()) {
      dispatch(addToCart({ name })); 
      setName("");
      navigate("/showitem")
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter product name"
      />
      <button onClick={handleAdd}>Add to cart</button>
    </div>
  );
}

export default Product;
