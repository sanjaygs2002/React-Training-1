import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state);
  useEffect(() => {
    dispatch({ type: "FETCH_PRODUCTS" });
  }, [dispatch]);

  return (
    <div>
      <h2>Product List</h2>

      {loading && <p>Loading...</p>}

      {products.map((item) => (
        <div key={item.id}>
          <p><b>Name:</b> {item.name}</p>
          <p><b>Email:</b> {item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;