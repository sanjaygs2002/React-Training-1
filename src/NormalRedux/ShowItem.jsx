import { useSelector } from "react-redux";

function ShowItem() {
  const items = useSelector(state => state.cartItem);
  const state = useSelector(state => state);
console.log("FULL STATE:", state);
console.log("Cart Items:", items);
  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShowItem;
