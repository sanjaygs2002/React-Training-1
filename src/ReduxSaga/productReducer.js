export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

const initialState={
    products:[],
    loading:false
}
const productReducer= (state= initialState,action)=>{
    switch(action.type){
        case "FETCH_PRODUCTS":
            return{...state,loading:true}
        case "FETCH_SUCCESS":
            return{...state,loading:false,products:action.payload}
        case "FETCH_ERROR":
            return{...state,loading:false}
        default:
           return state;
    }
}
export default productReducer;