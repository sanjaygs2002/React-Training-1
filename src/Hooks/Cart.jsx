import useCart from "./Custom";

function Cart() {
  // const { cart, addItem, removeItem, total } = useCart();
  const { cart } = useCart();

  return (
    <div>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}-{item.username}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cart;
