import { useOptimistic, useState } from "react";


function Optimistic(){
    const [state,setstate] = useState(0);
    const [optimisticLikes, addOptimisticLikes] = useOptimistic(state,(currentState,value)=>currentState+value);
    async function handleLike(){
        addOptimisticLikes(1);
        try{
            await new Promise(resolve=>setTimeout(resolve,1000));
            setstate(prev=>prev+1);
        }catch{
            console.log("error update in rendering");
            
        }
    }   

return(
    <>
    <h2>Likes:{optimisticLikes}</h2>
    <button onClick={handleLike}>👍 Like</button>
    </>
)

}
export default Optimistic;