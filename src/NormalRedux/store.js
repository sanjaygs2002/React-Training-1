import { applyMiddleware, createStore, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import CartReducer from "./Reducers/CartReducer";
import ProductReducer from "./Reducers/ProductReducer";

const rootReducer = combineReducers({
  cart: CartReducer,
  product: ProductReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;