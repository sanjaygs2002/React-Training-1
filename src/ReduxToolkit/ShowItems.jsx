import { useSelector } from "react-redux";

function ShowItems() {
  const items = useSelector((state) => state.cart.cartItem);

  return (
    <div>
      <h2>Cart Items</h2>

      {items.length === 0 ? (
        <p>No items added ❌</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShowItems;