import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FetchProduct from "./Reducers/FetchProduct";

const HandleProducts = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(FetchProduct());
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {loading && <p>Loading...</p>}

      {products.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default HandleProducts;