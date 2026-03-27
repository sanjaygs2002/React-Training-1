"use client";
import { useState, useEffect } from "react";

function Client() {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const api = await fetch("https://jsonplaceholder.typicode.com/photos");
      const res = await api.json();
      setState(res); // limit for demo
    }
    fetchData();
  }, []);
  return (
    <>
      {state.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </>
  );
}
export default Client;
