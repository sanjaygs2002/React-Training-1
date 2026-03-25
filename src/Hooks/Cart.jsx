import useCart from "./Custom";

function Cart() {
  const { cart, addItem, removeItem, total } = useCart();

  return (
    <div>
      <p>cart:{cart}</p>
      <input type="number" onChange={(e) => addItem(Number(e.target.value))} /><br>
      </br>
 
    <ul>
        {cart.map((item)=>(
            <li>{item}{" "}
            <button onClick={()=>removeItem(item)}>Remove</button>
            </li>
            
        ))}
        
      
    </ul>

      <p>Total Sum:{total}</p>
    </div>
  );
}
export default Cart;
