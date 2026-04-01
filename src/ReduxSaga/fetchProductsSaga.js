import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchProductsSaga(){
    try{
        const res = yield call(axios.get, "https://jsonplaceholder.typicode.com/users")

        yield put({
            type:"FETCH_SUCCESS",
            payload:res.data
        })
    }catch(err){
        yield put ({type:"FETCH_ERROR"});
    }
}
export default fetchProductsSaga