const initialState = {
  cartItem: []
};

function CartReducer(state = initialState, action) {
  if (action.type === "ADD_TO_CART") {
    console.log("Reducer Updating:", action.payload);

    return {
      ...state,
      cartItem: [...state.cartItem, action.payload]
    };
  }

  return state;
}

export default CartReducer;