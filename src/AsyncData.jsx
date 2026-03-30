import { useEffect, useState } from "react";

function AsyncData(){

const [data,setData] = useState([]);

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(sol=>setData(sol))
    .catch(err=>console.log(err));
},[])
return(
    <ul>
        {data.map((item)=>(
            <li key={item.id}>{item.name}</li>
        ))}
    </ul>
)

}
export default AsyncData;