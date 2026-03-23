import { useState } from "react";
import AuthContext from "./Authentication";


function Provider({children}){
    const [user,setUser] = useState(null);

    return(
        <>
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}
export default Provider;