import createSagaMiddleware from "redux-saga"
import { applyMiddleware,createStore } from "redux"
import rootSaga from "./rootSaga"
import productReducer from "./productReducer"


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  productReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
export default store;

