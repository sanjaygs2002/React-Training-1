

import React from "react";
function ListElement({users}){
    return(
        <ul>
            {users.map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}
export default ListElement;