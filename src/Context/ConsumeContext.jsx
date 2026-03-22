import { useContext } from "react";
import { Context } from "./Context";

function ConsumeContext(){
    const user = useContext(Context);
    return(
        <>
        <p>Value:{user}</p>
        </>
    )
}
export default ConsumeContext;
