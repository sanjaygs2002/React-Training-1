import { all } from "redux-saga/effects";
import watchFetchProducts from "./watchFetchProducts";
 function* rootSaga() {
  yield all([
    watchFetchProducts(),
  ]);
}

export default rootSaga;