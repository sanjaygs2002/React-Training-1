const initialState ={
    products:[],
    loading:false
}

function ProductReducer(state=initialState,action){
    switch(action.type){
        case "Fetch_Request":
            return {...state,loading:true};
        case "Fetch_Success":
            return {...state, loading:false, products:action.payload};
        case "Fetch_Error":
            return {...state,loading:false};
        default:
            return state;
        }
}

export default ProductReducer;