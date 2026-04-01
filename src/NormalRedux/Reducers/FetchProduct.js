import axios from "axios";

function FetchProduct(){
    return async (dispatch)=>{
        dispatch({type:"Fetch_Request"});
        try{
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            dispatch({type:"Fetch_Success", payload:res.data});
        }catch(err){
            dispatch({type:"Fetch_Error"});
        }
    }
}
export default FetchProduct;