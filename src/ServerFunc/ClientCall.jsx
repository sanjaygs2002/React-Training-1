"use client";

import { useState } from "react";
import { sayHello } from "./getUsers";

export default function Page() {
  const [message, setMessage] = useState("");

  async function handleClick() {
    const result = await sayHello("Sanjay");
    setMessage(result);
  }

  return (
    <div>
      

      <button onClick={handleClick}>
        Call Server Function
      </button>

      <p>{message}</p>
    </div>
  );
}