import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItem.push(action.payload);
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;