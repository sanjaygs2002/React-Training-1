import { takeLatest } from "redux-saga/effects";
import fetchProductsSaga from "./fetchProductsSaga";

function* watchFetchProducts(){
    yield takeLatest("FETCH_PRODUCTS",fetchProductsSaga);
}
export default watchFetchProducts;

