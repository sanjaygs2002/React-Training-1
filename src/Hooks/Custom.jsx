import { useState } from "react";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function useCart() {
  const [cart, setCart] = useState(array);

  const addItem = (item) => {
    setCart((prev) => [...prev, item]);
  };
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item !== id));
  };

  const total = cart.reduce((acc, item) => {
    return acc + item;
  }, 0);

  return { cart, addItem, removeItem, total };
}
