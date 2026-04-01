import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./ProductSlice";

function DataList(){
    const dispatch= useDispatch();
    const {products,loading, error}= useSelector(state=>state.product);
    useEffect(()=>{
        dispatch(fetchProducts());
    },[])
    return(
        <div>
            {error && <p>Error</p>}
            {loading && <p>Loading...</p>}
        {products.map((item)=>(
            <li key={item.id}>{item.name}</li>
        ))}
        </div>
    )
}
export default DataList;