import { useState } from "react";
import React from "react";
function Counter(){
    const [count, setCount] = useState(0);

   

    return(
        <>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Inc</button>
        </>
    )

}
export default Counter;